import explorerSkills from "./data/explorer-skills.mjs";

const thresholds = Object.fromEntries(
  explorerSkills.treeRules.tiers.map(
    ({ tier, requiredPointsInLowerTiers }) => [
      tier,
      requiredPointsInLowerTiers
    ]
  )
);

console.log(thresholds);
// { 1: 0, 2: 5, 3: 10, 4: 15, 5: 20 }
