import PanelComponent from "../shared/PanelComponent.mjs";
import explorerSkillPanelTemplate from './template.mjs';
import { EVENTS, STORAGE_KEY, FRIEND_BUFF_MULTIPLIER } from "../../constants/index.mjs";

import ExplorerSearchCalculator from "../../engine/ExplorerSearchCalculator.mjs";
import SkillTreeEngine from "./SkillTreeEngine.mjs";

import explorerSkills from "../../data/explorer-skills.mjs";
import searchTimes from "../../data/explorer-search-info.mjs";
import explorerTypes from "../../data/explorer-types.mjs";

import { queryElement, queryElements } from "../../utils/dom.mjs";
import JsonStorage from "../../utils/storage.mjs";
import { escapeAttribute } from "../../utils/html.mjs";
import { normalizeId } from "../../utils/normalize.mjs";

export class ExplorerSkillPanelComponent extends PanelComponent {
  constructor(messagingService, root) {
    super(messagingService, root);
    this.selection = new Map();
    this.buffEnabled = false;
    this.searchTimes = searchTimes;
    this.explorers = explorerTypes;
    this.explorerSkills = explorerSkills;
    this.skillTree = new SkillTreeEngine(this.explorerSkills);
    this.calculator = new ExplorerSearchCalculator(this.explorerSkills, this.explorers, searchTimes);
    this.storage = new JsonStorage(localStorage, STORAGE_KEY);
  }

  mount() {
    this.messagingService.subscribe(EVENTS.EXPLORER_SKILL_PANEL_OPEN, () => {
      this.show();
    });
    super.mount();
    this.mountSkills();
    this.mountCalculator();

    return this;
  }

  mountSkills() {
    // skills part
    for (const button of this.skills.querySelectorAll(".skill-button")) {
      this.listen(button, "click", () => this.changeLevel(button, 1));
      this.listen(button, "contextmenu", (event) => {
        event.preventDefault();
        this.changeLevel(button, -1);
      });
    }

    this.listen(this.resetButton, "click", () => {
      this.selection.clear();
      this.render();
      this.handleChange(this.getSelection());
    });

    this.render();
  }

  mountCalculator() {
    this.restore();
    this.updateExplorerIcon();

    this.listen(this.explorerSelect, "change", () => {
      this.updateExplorerIcon();
      this.handleChange();
    });
    this.listen(this.searchSelect, "change", () => this.handleChange());
    this.listen(this.buffButton, "click", () => {
      this.buffEnabled = !this.buffEnabled;
      this.renderBuff();
      this.handleChange();
    });

    this.renderBuff();
    this.update();
    return this;
  }

  unmount() {
    this.messagingService.unsubscribe(EVENTS.EXPLORER_SKILL_PANEL_OPEN, this.show);
    super.unmount();
    return this;
  }

  create() {
    super.create({ innerHTML: explorerSkillPanelTemplate });
    this.skills = queryElement(this.element, "#skills");
    this.totalOutput = queryElement(this.element, "#skill-total");
    this.maxOutput = queryElement(this.element, "#skill-max");
    this.resetButton = queryElement(this.element, "#reset-skills");
    this.explorerSelect = queryElement(this.element, "#explorer");
    this.searchSelect = queryElement(this.element, "#search-type");
    this.buffButton = queryElement(this.element, "#prestigious-friend-buff");
    this.result = queryElement(this.element, "#result");
    this.currentExplorerIcon = queryElement(this.element, "#current-explorer-icon");
    this.createSkills();
    this.createCalculator();
    return this;
  }

  createSkills() {
    if (this.maxOutput) {
      this.maxOutput.textContent = this.skillTree.maxPoints;
    }
    
    this.skills.innerHTML = this.skillTree.skills.map((skill) => `
      <button
        class="skill-button"
        type="button"
        data-skill-id="${skill.id}"
        data-max-level="${skill.ranks.maxLevel}"
        data-tier="${skill.tier}"
        data-tooltip="${escapeAttribute(this.buildTitle(skill))}"
        aria-label="${escapeAttribute(this.buildTitle(skill))}"
      >
        <img
          src="${skill.iconUrl}"
          alt="${escapeAttribute(skill.name)}"
          width="34"
          height="34"
          loading="lazy"
        >
        <strong><output data-level-output>0</output>/${skill.ranks.maxLevel}</strong>
      </button>
    `).join("");
  }

  createCalculator() {
    this.explorerSelect.innerHTML = this.explorers
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join("");

    const groups = [
      ["Treasure searches", "treasure", this.searchTimes.treasureSearches],
      ["Adventure searches", "adventure", this.searchTimes.adventureSearches]
    ];

    this.searchSelect.innerHTML = groups.map(([label, category, searches]) => `
      <optgroup label="${label}">
        ${searches.map(({ name }) => `
          <option value="${category}-${normalizeId(name)}">
            ${label.replace(" searches", "")}: ${name}
          </option>
        `).join("")}
      </optgroup>
    `).join("");

    return this;
  }

 setSelection(selection, { emit = false } = {}) {
    this.skillTree.assertValid(selection);
    this.selection = new Map(selection);
    this.render();
    
    if (emit) this.handleChange(this.getSelection());
  }

  getSelection() {
    return new Map(this.selection);
  }

  changeLevel(button, direction) {
    const skill = this.skillTree.getSkill(button.dataset.skillId);
    const currentLevel = this.selection.get(skill.id) ?? 0;

    if (direction > 0 && !this.skillTree.isUnlocked(skill, this.selection)) return;

    let nextLevel = currentLevel + direction;
    if (direction > 0 && (currentLevel >= skill.ranks.maxLevel || this.skillTree.getTotalPoints(this.selection) >= this.skillTree.maxPoints)) {
      nextLevel = 0;
    } else if (direction < 0 && nextLevel < 0) {
      nextLevel = skill.ranks.maxLevel;
    }

    const proposed = new Map(this.selection);
    if (nextLevel === 0) proposed.delete(skill.id);
    else proposed.set(skill.id, nextLevel);

    if (!this.skillTree.isValid(proposed) || this.skillTree.getTotalPoints(proposed) > this.skillTree.maxPoints) {
      return;
    }

    this.selection = proposed;
    this.render();
    this.handleChange(this.getSelection());
  }

  render() {
    const total = this.skillTree.getTotalPoints(this.selection);
    this.totalOutput.textContent = total;

    for (const button of this.skills.querySelectorAll(".skill-button")) {
      const skill = this.skillTree.getSkill(button.dataset.skillId);
      const level = this.selection.get(skill.id) ?? 0;
      const unlocked = this.skillTree.isUnlocked(skill, this.selection);
      const lowerTierPoints = this.skillTree.getPointsBelowTier(skill.tier, this.selection);
      const output = button.querySelector("[data-level-output]");

      output.textContent = level;
      button.dataset.level = String(level);
      button.classList.toggle("is-selected", level > 0);
      button.classList.toggle("is-locked", !unlocked && level === 0);
      button.setAttribute("aria-disabled", String(!unlocked && level === 0));
      button.dataset.tooltip = this.buildTitle(skill, unlocked, lowerTierPoints);
    }
  }

  buildTitle(skill, unlocked = true, lowerTierPoints = 0) {
    const perLevel = Math.abs(skill.ranks.perLevel ?? 0);
    const lines = [
      skill.name,
      skill.ranks.description.replace("x", `level × ${perLevel}`),
      `${skill.bookType} · Tier ${skill.tier}`
    ];

    if (!unlocked) {
      lines.push(
        `Locked: requires ${skill.requiredPointsInLowerTiers} points in lower tiers ` +
        `(${lowerTierPoints}/${skill.requiredPointsInLowerTiers}).`
      );
    }

    return lines.join("\n");
  }

  prefill(explorerType, skills) {
    if (explorerType !== undefined) {
      const explorerId = normalizeId(explorerType);
      if (!this.explorers.some(({ id }) => id === explorerId)) {
        throw new RangeError(`Unknown explorer type: "${explorerType}".`);
      }
      this.explorerSelect.value = explorerId;
    }

    if (skills !== undefined) {
      this.setSelection(
        this.skillTree.parse(skills)
      );
    }

    this.save();
    this.update();
  }

  updateExplorerIcon() {
    const selectedSepcialistId = this.explorerSelect.value;
    const explorer = this.explorers.find(x => x.id === selectedSepcialistId);
    if (!explorer) {
      throw new Error(`No explorer with id ${selectedSepcialistId}`);
    }
    this.currentExplorerIcon.src = explorer.iconUrl;
  }

  handleChange() {
    this.save();
    this.update();
  }

  update() {
    try {
      const calculation = this.calculator.calculate(
        this.explorerSelect.value,
        Object.fromEntries(this.getSelection()),
        this.searchSelect.value,
        {
          searchSpeedMultiplier: this.buffEnabled
            ? FRIEND_BUFF_MULTIPLIER
            : 1
        }
      );

      this.renderResult(calculation);
    } catch (error) {
      this.result.textContent = error.message;
      this.result.classList.add("error");
    }
  }

  renderResult(calculation) {
    const skillSummary = calculation.appliedSkills.length
      ? calculation.appliedSkills.map(({ name, level }) => `${name} L${level}`).join(", ")
      : "None";

    this.result.classList.remove("error");
    this.result.innerHTML = `
      <span class="result-label">Required search time</span>
      <strong>${calculation.formattedDuration}</strong>
      <dl>
        <div><dt>Base time</dt><dd>${ExplorerSearchCalculator.formatDuration(calculation.baseDurationSeconds)}</dd></div>
        <div><dt>Explorer speed</dt><dd>${calculation.explorerSpeed}×</dd></div>
        <div><dt>Time talents</dt><dd>${skillSummary}</dd></div>
        <div><dt>Friend buff</dt><dd>${this.buffEnabled ? "Enabled (20% shorter)" : "Disabled"}</dd></div>
      </dl>
    `;
  }

  renderBuff() {
    this.buffButton.classList.toggle("is-enabled", this.buffEnabled);
    this.buffButton.setAttribute("aria-pressed", String(this.buffEnabled));
  }

  save() {
    this.storage.save({
      explorerId: this.explorerSelect.value,
      searchType: this.searchSelect.value,
      selectedSkills: Object.fromEntries(this.getSelection()),
      prestigiousFriendBuffEnabled: this.buffEnabled
    });
  }

  restore() {
    const state = this.storage.load(null);
    if (!state || typeof state !== "object") return;

    if (this.explorers.some(({ id }) => id === state.explorerId)) {
      this.explorerSelect.value = state.explorerId;
    }

    if ([...this.searchSelect.options].some(({ value }) => value === state.searchType)) {
      this.searchSelect.value = state.searchType;
    }

    try {
      this.setSelection(
        this.skillTree.parse(state.selectedSkills ?? {})
      );
    } catch (error) {
      console.warn("Ignored invalid persisted skill selection.", error);
    }

    this.buffEnabled = state.prestigiousFriendBuffEnabled === true;
  }
}


export default ExplorerSkillPanelComponent;