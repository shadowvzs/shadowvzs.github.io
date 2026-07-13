import { normalizeId } from "../../utils/normalize.mjs";

export class SkillTreeEngine {
  constructor(skillData) {
    this.skills = skillData.talents ?? skillData;
    this.maxPoints = skillData.treeRules?.maxTotalPoints ?? 21;
    this.skillById = new Map(this.skills.map((skill) => [skill.id, skill]));
  }

  parse(selection) {
    if (selection === null || Array.isArray(selection) || typeof selection !== "object") {
      throw new TypeError("skills must be an object mapping skill IDs to levels.");
    }

    const parsed = new Map();

    for (const [rawSkillId, rawLevel] of Object.entries(selection)) {
      const skillId = normalizeId(rawSkillId);
      const skill = this.getSkill(skillId);
      const level = Number(rawLevel);

      if (!Number.isInteger(level) || level < 0 || level > skill.ranks.maxLevel) {
        throw new RangeError(
          `Skill "${skillId}" level must be between 0 and ${skill.ranks.maxLevel}.`
        );
      }

      if (level > 0) {
        parsed.set(skillId, level);
      }
    }

    this.assertValid(parsed);
    return parsed;
  }

  assertValid(selection) {
    if (this.getTotalPoints(selection) > this.maxPoints) {
      throw new RangeError(`Skill selection exceeds the ${this.maxPoints}-point maximum.`);
    }

    if (!this.isValid(selection)) {
      throw new RangeError(
        "Skill selection does not satisfy the explorer skill-tree prerequisites."
      );
    }
  }

  isValid(selection) {
    for (const [skillId, level] of selection) {
      if (level <= 0) continue;

      const skill = this.getSkill(skillId);
      if (this.getPointsBelowTier(skill.tier, selection) < skill.requiredPointsInLowerTiers) {
        return false;
      }
    }

    return true;
  }

  isUnlocked(skill, selection) {
    return this.getPointsBelowTier(skill.tier, selection) >= skill.requiredPointsInLowerTiers;
  }

  getPointsBelowTier(tier, selection) {
    let total = 0;

    for (const [skillId, level] of selection) {
      if (this.getSkill(skillId).tier < tier) {
        total += level;
      }
    }

    return total;
  }

  getTotalPoints(selection) {
    return [...selection.values()].reduce((total, level) => total + level, 0);
  }

  getSkill(skillId) {
    const skill = this.skillById.get(skillId);
    if (!skill) throw new RangeError(`Unknown explorer skill: "${skillId}".`);
    return skill;
  }
}

export default SkillTreeEngine;
