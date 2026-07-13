import { normalizeId } from "../utils/normalize.mjs";

/**
 * Calculates explorer search durations from explorer data, skill data,
 * and base search-time data.
 *
 * Skill selections use normalized skill IDs:
 * {
 *   mountain_boots: 3,
 *   pilgrimage: 2,
 *   pathfinder: 3
 * }
 */
export class ExplorerSearchCalculator {
  #explorers;
  #skills;
  #skillById;
  #searchTimes;

  constructor(skillData, explorerData, searchTimeData) {
    this.#skills = skillData.talents ?? skillData;
    this.#skillById = new Map(this.#skills.map((skill) => [skill.id, skill]));
    this.#explorers = explorerData;
    this.#searchTimes = searchTimeData;

    this.#validateData();
  }

  /**
   * @param {string} explorerType Normalized explorer ID, e.g. "nora_the_explorer".
   * @param {Record<string, number>} selectedSkills Skill ID to selected level.
   * @param {string} expectedSearchType Format: "treasure-short" or "adventure-long".
   * @returns {{
   *   explorerId: string,
   *   explorerName: string,
   *   searchType: string,
   *   searchLength: string,
   *   baseDurationSeconds: number,
   *   explorerSpeed: number,
   *   talentTimeModifierPercent: number,
   *   durationSeconds: number,
   *   durationMilliseconds: number,
   *   formattedDuration: string,
   *   appliedSkills: Array<{id: string, name: string, level: number, modifierPercent: number}>
   * }}
   */
  calculate(explorerType, selectedSkills = {}, expectedSearchType, options = {}) {
    const explorer = this.#findExplorer(explorerType);
    const { category, length } = this.#parseSearchType(expectedSearchType);
    const baseSearch = this.#findBaseSearch(category, length);
    const explorerSpeed = this.#getExplorerSpeed(explorer, category);
    const searchSpeedMultiplier = this.#getSearchSpeedMultiplier(options);
    const appliedSkills = this.#getApplicableTimeSkills(selectedSkills, category, length);

    const talentTimeModifierPercent = appliedSkills.reduce(
      (total, skill) => total + skill.modifierPercent,
      0
    );

    // Explorer speed is a decimal multiplier: 2 means twice as fast.
    const effectiveSearchSpeed = explorerSpeed;
    const durationAfterExplorerSpeed =
      baseSearch.durationSeconds  * searchSpeedMultiplier / explorerSpeed;

    // Search-time talents store reductions as negative percentages.
    // Example: -15 means the remaining duration is 85%.
    const talentDurationMultiplier = Math.max(
      0,
      (100 + talentTimeModifierPercent) / 100
    );

    const durationSeconds =
      durationAfterExplorerSpeed * talentDurationMultiplier;

    return {
      explorerId: explorer.id,
      explorerName: explorer.name,
      searchType: category,
      searchLength: length,
      baseDurationSeconds: baseSearch.durationSeconds,
      explorerSpeed,
      searchSpeedMultiplier,
      effectiveSearchSpeed,
      talentTimeModifierPercent,
      durationSeconds,
      durationMilliseconds: durationSeconds * 1000,
      formattedDuration: ExplorerSearchCalculator.formatDuration(durationSeconds),
      appliedSkills
    };
  }

  static formatDuration(totalSeconds) {
    const roundedSeconds = Math.round(totalSeconds);
    const days = Math.floor(roundedSeconds / 86400);
    const hours = Math.floor((roundedSeconds % 86400) / 3600);
    const minutes = Math.floor((roundedSeconds % 3600) / 60);
    const seconds = roundedSeconds % 60;

    return [
      days ? `${days}d` : "",
      hours ? `${hours}h` : "",
      minutes ? `${minutes}m` : "",
      seconds || (!days && !hours && !minutes) ? `${seconds}s` : ""
    ].filter(Boolean).join(" ");
  }

  #findExplorer(explorerType) {
    const normalizedId = normalizeId(explorerType);
    const explorer = this.#explorers.find(({ id }) => id === normalizedId);

    if (!explorer) {
      throw new RangeError(`Unknown explorer type: "${explorerType}".`);
    }

    return explorer;
  }

  #parseSearchType(expectedSearchType) {
    if (typeof expectedSearchType !== "string") {
      throw new TypeError("expectedSearchType must be a string.");
    }

    const separatorIndex = expectedSearchType.indexOf("-");
    if (separatorIndex < 1) {
      throw new RangeError(
        'Search type must use the format "treasure-short" or "adventure-long".'
      );
    }

    const category = normalizeId(
      expectedSearchType.slice(0, separatorIndex)
    );
    const length = this.#normalizeSearchLength(
      expectedSearchType.slice(separatorIndex + 1)
    );

    if (!["treasure", "adventure"].includes(category)) {
      throw new RangeError(`Unsupported search category: "${category}".`);
    }

    return { category, length };
  }

  #findBaseSearch(category, length) {
    const collectionName =
      category === "treasure" ? "treasureSearches" : "adventureSearches";

    const search = this.#searchTimes[collectionName].find(
      ({ name }) => this.#normalizeSearchLength(name) === length
    );

    if (!search) {
      throw new RangeError(
        `No base time found for "${category}-${length}".`
      );
    }

    return search;
  }

  #getExplorerSpeed(explorer, category) {
    const property =
      category === "treasure"
        ? "treasureSearchSpeed"
        : "adventureSearchSpeed";

    const speed = explorer[property];

    if (!Number.isFinite(speed) || speed <= 0) {
      throw new RangeError(
        `Explorer "${explorer.id}" has an invalid ${property}.`
      );
    }

    return speed;
  }

  #getSearchSpeedMultiplier(options) {
    if (options === null || Array.isArray(options) || typeof options !== "object") {
      throw new TypeError("options must be an object.");
    }

    const multiplier = options.searchSpeedMultiplier ?? 1;

    if (!Number.isFinite(multiplier) || multiplier <= 0) {
      throw new RangeError("searchSpeedMultiplier must be greater than 0.");
    }

    return multiplier;
  }

  #getApplicableTimeSkills(selectedSkills, category, length) {
    if (
      selectedSkills === null ||
      Array.isArray(selectedSkills) ||
      typeof selectedSkills !== "object"
    ) {
      throw new TypeError("selectedSkills must be an object.");
    }

    return Object.entries(selectedSkills).flatMap(([rawSkillId, rawLevel]) => {
      const skillId = normalizeId(rawSkillId);
      const skill = this.#skillById.get(skillId);

      if (!skill) {
        throw new RangeError(`Unknown explorer skill: "${rawSkillId}".`);
      }

      const level = Number(rawLevel);
      const maxLevel = skill.ranks.maxLevel;

      if (!Number.isInteger(level) || level < 0 || level > maxLevel) {
        throw new RangeError(
          `Skill "${skillId}" level must be between 0 and ${maxLevel}.`
        );
      }

      if (
        level === 0 ||
        skill.category !== "search_time" ||
        !this.#skillMatchesSearch(skill, category, length)
      ) {
        return [];
      }

      return [{
        id: skill.id,
        name: skill.name,
        level,
        modifierPercent: level * skill.ranks.perLevel
      }];
    });
  }

  #skillMatchesSearch(skill, category, length) {
    const targetType = skill.appliesTo.searchType;
    const targetLength = this.#normalizeSearchLength(
      skill.appliesTo.searchLength
    );

    const typeMatches = targetType === "all" || targetType === category;
    const lengthMatches = targetLength === "all" || targetLength === length;

    return typeMatches && lengthMatches;
  }

  #normalizeSearchLength(value) {
    const normalized = normalizeId(value);

    const aliases = {
      extra_long: "very_long",
      very_long: "very_long"
    };

    return aliases[normalized] ?? normalized;
  }

  #validateData() {
    if (!Array.isArray(this.#explorers)) {
      throw new TypeError("explorerData must be an array.");
    }

    if (!Array.isArray(this.#skills)) {
      throw new TypeError("skillData.talents must be an array.");
    }

    if (
      !Array.isArray(this.#searchTimes.treasureSearches) ||
      !Array.isArray(this.#searchTimes.adventureSearches)
    ) {
      throw new TypeError("searchTimeData has an invalid structure.");
    }
  }
}

export default ExplorerSearchCalculator;
