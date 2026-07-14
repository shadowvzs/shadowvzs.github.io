import explorerTypes from "../../data/explorer-types.mjs";
import skills from "../../data/explorer-skills.mjs";
import explorerSearchInfo from "../../data/explorer-search-info.mjs";
import Calculator from "../../engine/ExplorerSearchCalculator.mjs";

export const explorerSearchTimeCalculator = new Calculator(skills, explorerTypes, explorerSearchInfo);

// usage
/*
const result = calculator.calculate(
  "nora_the_explorer",
  { mountain_boots: 3, extended_weekend: 3, pathfinder: 3 },
  "treasure-medium"
);
*/

