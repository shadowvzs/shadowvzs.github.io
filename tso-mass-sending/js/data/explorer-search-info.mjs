const assetUrl = (path) => new URL(`../../assets/searches/${path}`, import.meta.url).href;

export const searchTimes = {
  source: "https://settlersonlinewiki.eu/en/guides/explorer/",

  treasureSearches: [
    {
      id: "treasure-short",
      category: "treasure",
      name: "Short",
      level: 1,
      requiredLevel: 16,
      durationHours: 6,
      durationMinutes: 360,
      durationSeconds: 21600,
      iconButtonUrl: assetUrl("button/treasure-search.png"),
      iconUrl: assetUrl("icon/treasure-short.png")
    },
    {
      id: "treasure-medium",
      category: "treasure",
      name: "Medium",
      level: 2,
      requiredLevel: 20,
      durationHours: 12,
      durationMinutes: 720,
      durationSeconds: 43200,
      iconButtonUrl: assetUrl("button/treasure-search.png"),
      iconUrl: assetUrl("icon/treasure-medium.png")
    },
    {
      id: "treasure-long",
      category: "treasure",
      name: "Long",
      level: 3,
      requiredLevel: 32,
      durationHours: 24,
      durationMinutes: 1440,
      durationSeconds: 86400,
      iconButtonUrl: assetUrl("button/treasure-search.png"),
      iconUrl: assetUrl("icon/treasure-long.png")
    },
    {
      id: "treasure-very-long",
      category: "treasure",
      name: "Very Long",
      level: 4,
      requiredLevel: 40,
      durationHours: 48,
      durationMinutes: 2880,
      durationSeconds: 172800,
      iconButtonUrl: assetUrl("button/treasure-search.png"),
      iconUrl: assetUrl("icon/treasure-very-long.png")
    },
    {
      id: "treasure-prolonged",
      category: "treasure",
      name: "Prolonged",
      level: 5,
      requiredLevel: 54,
      durationHours: 72,
      durationMinutes: 4320,
      durationSeconds: 259200,
      iconButtonUrl: assetUrl("button/treasure-search.png"),
      iconUrl: assetUrl("icon/treasure-prolonged.png")
    }
  ],

  adventureSearches: [
    {
      id: "adventure-short",
      category: "adventure",
      name: "Short",
      level: 1,
      requiredLevel: 28,
      durationHours: 24,
      durationMinutes: 1440,
      durationSeconds: 86400,
      iconButtonUrl: assetUrl("button/adventure-search.png"),
      iconUrl: assetUrl("icon/treasure-short.png")
    },
    {
      id: "adventure-medium",
      category: "adventure",
      name: "Medium",
      level: 2,
      requiredLevel: 36,
      durationHours: 32,
      durationMinutes: 1920,
      durationSeconds: 115200,
      iconButtonUrl: assetUrl("button/adventure-search.png"),
      iconUrl: assetUrl("icon/treasure-medium.png")
    },
    {
      id: "adventure-long",
      category: "adventure",
      name: "Long",
      level: 3,
      requiredLevel: 42,
      durationHours: 48,
      durationMinutes: 2880,
      durationSeconds: 172800,
      iconButtonUrl: assetUrl("button/adventure-search.png"),
      iconUrl: assetUrl("icon/treasure-long.png")
    },
    {
      id: "adventure-very-long",
      category: "adventure",
      name: "Very Long",
      level: 4,
      requiredLevel: 56,
      durationHours: 72,
      durationMinutes: 4320,
      durationSeconds: 259200,
      iconButtonUrl: assetUrl("button/adventure-search.png"),
      iconUrl: assetUrl("icon/treasure-very-long.png")
    }
  ],

  specialSearches: [
    {
      id: "treasure-artifact",
      category: "artifact",
      name: "Artifact Search",
      level: null,
      durationSeconds: null,
      unlockedBySkill: "travelling_erudite",
      iconButtonUrl: assetUrl("button/artifact-search.png"),
      iconUrl: assetUrl("icon/artifact.png")
    },
    {
      id: "treasure-rarity",
      category: "rarity",
      name: "Rarity Search",
      level: null,
      durationSeconds: null,
      unlockedBySkill: "bean_a_colada",
      iconButtonUrl: assetUrl("button/rarity-search.png"),
      iconUrl: assetUrl("icon/rarity.png")
    }
  ]
};

export default searchTimes;
