export const explorerSkills = {
  "source": "https://settlersonlinewiki.eu/en/science/science-system-explorer/",
  "totalTalentPointsAllowed": 21,
  "totalTalentPointsPossible": 52,
  "rankModel": {
    "placeholder": "x",
    "calculation": "x = level * perLevel",
    "note": "All percentage-based talents on the source page use a linear per-level progression. Unlock talents have perLevel = null because their effect is binary."
  },
  "searchLengthAliases": {
    "extra_long": [
      "extra-long",
      "very long"
    ],
    "note": "The source uses 'Extra-long' for Sabbatical, while the explorer search-time guide uses 'Very Long'. Normalize these aliases in calculation code."
  },
  "talents": [
    {
      "name": "Sophisticated Pillager",
      "bookType": "Codex",
      "category": "bonus_quest_chance",
      "appliesTo": {
        "searchType": "adventure",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_sophisitcated_pillager.webp",
      "ranks": {
        "maxLevel": 1,
        "perLevel": 30,
        "description": "Grants an x% chance to receive an adventure bonus quest.",
        "valueFormula": "level * perLevel"
      },
      "id": "sophisticated_pillager",
      "uiOrder": 0,
      "tier": 5,
      "requiredPointsInLowerTiers": 20
    },
    {
      "name": "Streetwise Negotiator",
      "bookType": "Codex",
      "category": "bonus_quest_chance",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_streetwise_negotiator.webp",
      "ranks": {
        "maxLevel": 1,
        "perLevel": 30,
        "description": "Grants an x% chance to receive a treasure bonus quest.",
        "valueFormula": "level * perLevel"
      },
      "id": "streetwise_negotiator",
      "uiOrder": 1,
      "tier": 5,
      "requiredPointsInLowerTiers": 20
    },
    {
      "name": "Travelling Erudite",
      "bookType": "Codex",
      "category": "unlock_search",
      "appliesTo": {
        "searchType": "artifact",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_travelling_erudite.webp",
      "ranks": {
        "maxLevel": 1,
        "perLevel": null,
        "description": "Allows the explorer to use Artifact Search to find buffs and productivity items.",
        "valueFormula": null
      },
      "id": "travelling_erudite",
      "uiOrder": 2,
      "tier": 5,
      "requiredPointsInLowerTiers": 20
    },
    {
      "name": "Bean-A-Colada",
      "bookType": "Codex",
      "category": "unlock_search",
      "appliesTo": {
        "searchType": "rarity",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_bean_a_colada.webp",
      "ranks": {
        "maxLevel": 1,
        "perLevel": null,
        "description": "Allows the explorer to use Rarity Search to find rare resources.",
        "valueFormula": null
      },
      "id": "bean_a_colada",
      "uiOrder": 3,
      "tier": 5,
      "requiredPointsInLowerTiers": 20
    },
    {
      "name": "Hero Ore",
      "bookType": "Codex",
      "category": "resource_amount",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "long",
        "resource": "Titanium Ore"
      },
      "iconUrl": "./assets/skills/icon_hero_ore.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 8,
        "description": "Finds x% more Titanium Ore during long treasure searches.",
        "valueFormula": "level * perLevel"
      },
      "id": "hero_ore",
      "uiOrder": 4,
      "tier": 4,
      "requiredPointsInLowerTiers": 15
    },
    {
      "name": "Trouble-seeker",
      "bookType": "Codex",
      "category": "additional_adventure_chance",
      "appliesTo": {
        "searchType": "adventure",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_trouble_seeker.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 10,
        "description": "Grants an x% chance to find an additional adventure.",
        "valueFormula": "level * perLevel"
      },
      "id": "trouble_seeker",
      "uiOrder": 5,
      "tier": 4,
      "requiredPointsInLowerTiers": 15
    },
    {
      "name": "Sabbatical",
      "bookType": "Codex",
      "category": "search_time",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "extra_long"
      },
      "iconUrl": "./assets/skills/icon_faster_search04.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": -5,
        "description": "Shortens the search time for extra-long treasure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "sabbatical",
      "uiOrder": 6,
      "tier": 4,
      "requiredPointsInLowerTiers": 15
    },
    {
      "name": "Pathfinder",
      "bookType": "Codex",
      "category": "search_time",
      "appliesTo": {
        "searchType": "all",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_pathfinder.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": -5,
        "description": "Shortens the search time for all searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "pathfinder",
      "uiOrder": 7,
      "tier": 4,
      "requiredPointsInLowerTiers": 15
    },
    {
      "name": "Loot Wagon",
      "bookType": "Tome",
      "category": "resource_amount",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "medium",
        "resource": "Granite"
      },
      "iconUrl": "./assets/skills/icon_loot_wagon.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 8,
        "description": "Finds x% more Granite during medium treasure searches.",
        "valueFormula": "level * perLevel"
      },
      "id": "loot_wagon",
      "uiOrder": 8,
      "tier": 3,
      "requiredPointsInLowerTiers": 10
    },
    {
      "name": "Sturdy Shovel",
      "bookType": "Tome",
      "category": "loot_amount",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_sturdy_shovel.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 3,
        "description": "Finds x% more loot on all treasure searches.",
        "valueFormula": "level * perLevel"
      },
      "id": "sturdy_shovel",
      "uiOrder": 9,
      "tier": 3,
      "requiredPointsInLowerTiers": 10
    },
    {
      "name": "Mistwalker",
      "bookType": "Tome",
      "category": "resource_find_chance",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "long",
        "resource": "Exotic Wood"
      },
      "iconUrl": "./assets/skills/icon_mist_walker.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 5,
        "description": "Raises the chance to find Exotic Wood during long treasure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "mistwalker",
      "uiOrder": 10,
      "tier": 3,
      "requiredPointsInLowerTiers": 10
    },
    {
      "name": "Travel Expenses",
      "bookType": "Tome",
      "category": "search_cost",
      "appliesTo": {
        "searchType": "adventure",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_travel_cost.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": -10,
        "description": "Reduces the cost of all adventure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "travel_expenses",
      "uiOrder": 11,
      "tier": 3,
      "requiredPointsInLowerTiers": 10
    },
    {
      "name": "Deforestation",
      "bookType": "Tome",
      "category": "resource_amount",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "very_long",
        "resource": "Exotic Wood"
      },
      "iconUrl": "./assets/skills/icon_powder_sack.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 8,
        "description": "Finds x% more Exotic Wood during very long treasure searches.",
        "valueFormula": "level * perLevel"
      },
      "id": "deforestation",
      "uiOrder": 12,
      "tier": 2,
      "requiredPointsInLowerTiers": 5
    },
    {
      "name": "Offbeat Roads",
      "bookType": "Tome",
      "category": "resource_find_chance",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "long",
        "resource": "Titanium Ore"
      },
      "iconUrl": "./assets/skills/icon_offbeat_roads.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 5,
        "description": "Raises the chance to find Titanium Ore during long treasure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "offbeat_roads",
      "uiOrder": 13,
      "tier": 2,
      "requiredPointsInLowerTiers": 5
    },
    {
      "name": "Wild Determination",
      "bookType": "Tome",
      "category": "resource_amount",
      "appliesTo": {
        "searchType": "adventure",
        "searchLength": "all",
        "resource": "Map Fragments"
      },
      "iconUrl": "./assets/skills/icon_wild_determination.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 30,
        "description": "Finds x% more Map Fragments on adventure searches.",
        "valueFormula": "level * perLevel"
      },
      "id": "wild_determination",
      "uiOrder": 14,
      "tier": 2,
      "requiredPointsInLowerTiers": 5
    },
    {
      "name": "Extended Weekend",
      "bookType": "Tome",
      "category": "search_time",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "medium"
      },
      "iconUrl": "./assets/skills/icon_faster_search02.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": -5,
        "description": "Shortens the search time for medium treasure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "extended_weekend",
      "uiOrder": 15,
      "tier": 2,
      "requiredPointsInLowerTiers": 5
    },
    {
      "name": "Fearless Hiker",
      "bookType": "Manuscript",
      "category": "search_time",
      "appliesTo": {
        "searchType": "adventure",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_fearless_hiker.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": -5,
        "description": "Shortens the search time for all adventure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "fearless_hiker",
      "uiOrder": 16,
      "tier": 1,
      "requiredPointsInLowerTiers": 0
    },
    {
      "name": "Lucky Detour",
      "bookType": "Manuscript",
      "category": "resource_find_chance",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "medium",
        "resource": "Granite"
      },
      "iconUrl": "./assets/skills/icon_lucky_detour.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": 8,
        "description": "Raises the chance to find Granite during medium treasure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "lucky_detour",
      "uiOrder": 17,
      "tier": 1,
      "requiredPointsInLowerTiers": 0
    },
    {
      "name": "Pilgrimage",
      "bookType": "Manuscript",
      "category": "search_time",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "long"
      },
      "iconUrl": "./assets/skills/icon_faster_search03.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": -5,
        "description": "Shortens the search time for long treasure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "pilgrimage",
      "uiOrder": 18,
      "tier": 1,
      "requiredPointsInLowerTiers": 0
    },
    {
      "name": "Mountain Boots",
      "bookType": "Manuscript",
      "category": "search_time",
      "appliesTo": {
        "searchType": "treasure",
        "searchLength": "all"
      },
      "iconUrl": "./assets/skills/icon_mountain_boots.webp",
      "ranks": {
        "maxLevel": 3,
        "perLevel": -3,
        "description": "Shortens the search time for all treasure searches by x%.",
        "valueFormula": "level * perLevel"
      },
      "id": "mountain_boots",
      "uiOrder": 19,
      "tier": 1,
      "requiredPointsInLowerTiers": 0
    }
  ],
  "treeRules": {
    "maxTotalPoints": 21,
    "tiers": [
      {
        "tier": 1,
        "requiredPointsInLowerTiers": 0,
        "bookType": "Manuscript"
      },
      {
        "tier": 2,
        "requiredPointsInLowerTiers": 5,
        "bookType": "Tome"
      },
      {
        "tier": 3,
        "requiredPointsInLowerTiers": 10,
        "bookType": "Tome"
      },
      {
        "tier": 4,
        "requiredPointsInLowerTiers": 15,
        "bookType": "Codex"
      },
      {
        "tier": 5,
        "requiredPointsInLowerTiers": 20,
        "bookType": "Codex"
      }
    ]
  }
};

export default explorerSkills;
