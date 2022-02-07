// 	// towerId: 1,
// //  brutalityFor: [1],
// states - isBrutality: true,		character: [1], onlyTower: 1,
// reqFusion: 10,

export const items = [
	// common
	{
		id: 1000,
		name: "Amulet",
        images: ['Amulet.webp', 'Amulet.webp'],
        tagsId: [1, 1000, 10],
		states: [
			{
				attributeId: [1, 2],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			}		
		]
	},	
	{
		id: 1001,
		name: "Bracers",
        tagsId: [1, 1000, 9],
		images: ['Bracers.webp', 'Bracers.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			}		
		]
	},
	{
		id: 1002,
		name: "Brawler Gloves",
        tagsId: [1, 1000, 10],
		images: ['Brawler_Gloves.webp', 'Brawler_Gloves.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			}		
		]
	},
	{
		id: 1003,
		name: "Healing Herbs",
        tagsId: [1, 1000, 10],
		images: ['Healing_Herbs.webp', 'Healing_Herbs.webp'],
		states: [
			{
				attributeId: [5],
				initValue: [10],
				step: [1],
				maxFusion: 10
			}		
		]
	},
	{
		id: 1004,
		name: "Hood",
        tagsId: [1, 1000, 9],
		images: ['Hood.webp', 'Hood.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			}		
		]
	},		
	{
		id: 1005,
		name: "Medallion",
        tagsId: [1, 1000, 10],
		images: ['Medallion.webp', 'Medallion.webp'],
		states: [
			{
				attributeId: [6, 7],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			}		
		]
	},		
	{
		id: 1006,
		name: "Riot Gear",
        tagsId: [1, 1000, 9],
		images: ['Riot_Gear.webp', 'Riot_Gear.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			}		
		]
	},
	{
		id: 1007,
		name: "Robes",
        tagsId: [1, 1000, 10],
		images: ['Robes.webp', 'Robes.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			}		
		]
	},	
	{
		id: 1008,
		name: "Shuriken",
        tagsId: [1, 1000, 8],
		images: ['Shuriken.webp', 'Shuriken.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			}		
		]
	},	
	{
		id: 1009,
		name: "Sword",
        tagsId: [1, 1000, 8],
		images: ['Sword.webp', 'Sword.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
			}		
		]
	},	
	
	// uncommon	
	{
		id: 2000,
		name: "Blood Stone Ring",
        tagsId: [2, 1000, 10],
		images: ['Blood_Stone_Ring.webp', 'Blood_Stone_Ring.webp'],
		states: [
			{
				attributeId: [6, 7],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [6],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2001,
		name: "Combat Shotgun",
        tagsId: [2, 1000, 8],
		images: ['Combat_Shotgun.webp', 'Combat_Shotgun.webp'],
		states: [
			{
				attributeId: [11],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [12, 13],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},		
	
	{
		id: 2002,
		name: "Draconic Shield",
        tagsId: [2, 1000, 9],
		images: ['Draconic_Shield.webp', 'Draconic_Shield.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [14],				
				initValue: [25, 25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
    },
    {
		id: 2003,
		name: "Dragon Essence",
        tagsId: [2, 1000, 10],
		images: ['Dragon_Essence.webp', 'Dragon_Essence.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2004,
		name: "Elemental Stones",
        tagsId: [2, 1000, 10],
		images: ['Elemental_Stones.webp', 'Elemental_Stones.webp'],
		states: [
			{
				attributeId: [1, 2],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [17],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2005,
		name: "Executioner Axe",
        tagsId: [2, 1000, 8],
		images: ['Executioner_Axe.webp', 'Executioner_Axe.webp'],
		states: [
			{
				attributeId: [18],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [4],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2006,
		name: "Gladiator Mask",
        tagsId: [2, 1000, 9],
		images: ['Gladiator_Mask.webp', 'Gladiator_Mask.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [1, 2],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2007,
		name: "Katana",
        tagsId: [2, 1000, 8],
		images: ['Katana.webp', 'Katana.webp'],
		states: [
			{
				attributeId: [19],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [10],				
				initValue: [15],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2008,
		name: "Outworld Gear",
        tagsId: [2, 1000, 9],
		images: ['Outworld_Gear.webp', 'Outworld_Gear.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [6, 7],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2009,
		name: "Soul Elixir",
        tagsId: [2, 1000, 10],
		images: ['Soul_Elixir.webp', 'Soul_Elixir.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [20],				
				initValue: [15],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2500,
		name: "Bone Claw",
        tagsId: [2, 1002, 10, 200],
		images: ['BoneClaw_PostEvo.webp', 'BoneClaw_PostEvo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [200]
			},						
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [6, 7],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2501,
		name: "Demon Eye",
        tagsId: [2, 1002, 10, 200],
		images: ['DemonEye_PostEvo.webp', 'DemonEye_PostEvo.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [200]
			},	
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [15],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2502,
		name: "Death Rattle",
        tagsId: [2, 1002, 10, 200],
		images: ['DeathRattle_PostEvo.webp', 'DeathRattle_PostEvo.webp'],
		states: [
			{
				attributeId: [17],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [200]
			},			
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [5],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2503,
		name: "Kuai Liang's Bracers",
        tagsId: [2, 1002, 10, 16, 201],
		images: ['Kuailiangbracers_postevo.webp', 'Kuailiangbracers_postevo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [4],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [8],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [400]
			},
			{
				attributeId: [100],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}			
		]
	},

	{
		id: 2504,
		name: "Ice Bomb",
        tagsId: [2, 1002, 10, 201],
		images: ['Icebomb_postevo.webp', 'Icebomb_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [4],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [8],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [101],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2505,
		name: "Frozen Mummy",
        tagsId: [2, 1002, 10, 201],
		images: ['Frozenmummy_postevo.webp', 'Frozenmummy_postevo.webp'],
		states: [
			{
				attributeId: [102],				
				initValue: [50],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [4],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [8],
				maxFusion: 10,
				forTower: [201]
			},			
			{
				attributeId: [20],				
				initValue: [15],
				step: [0],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2506,
		name: "Black Dragon Sword",
        tagsId: [2, 1002, 8, 202],
		images: ['BlackDragonSword_postEvo.webp', 'BlackDragonSword_postEvo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [20],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [202]
			},
			{
				attributeId: [8],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2507,
		name: "Dragon Teeth",
        tagsId: [2, 1002, 8, 202],
		images: ['DragonTeeth_postEvo.webp', 'DragonTeeth_postEvo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [20],
				step: [6],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [202]
			},			
			{
				attributeId: [103],				
				initValue: [75],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2508,
		name: "Kobra's Boxing Gloves",
        tagsId: [2, 1002, 8, 202],
		images: ['KobrasBoxingGloves_postEvo.webp', 'KobrasBoxingGloves_postEvo.webp'],
		states: [
			{
				attributeId: [1, 2],				
				initValue: [30],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [202]
			},		
			{
				attributeId: [4],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2509,
		name: "Fire Garden Bell",
        tagsId: [2, 1002, 10, 203],
		images: ['Srt_fire_garden_bell_PostEvo.webp', 'Srt_fire_garden_bell_PostEvo.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [203]
			},				
			{
				attributeId: [104],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2510,
		name: "Survivor Memories",
        tagsId: [2, 1002, 10, 203],
		images: ['Srt_survivor_memories_PostEvo.webp', 'Srt_survivor_memories_PostEvo.webp'],
		states: [
			{
				attributeId: [105],				
				initValue: [30],
				step: [7],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [203]
			},	
			{
				attributeId: [4],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2511,
		name: "Secret Scrolls",
        tagsId: [2, 1002, 10, 203],
		images: ['Srt_secret_scrolls_PostEvo.webp', 'Srt_secret_scrolls_PostEvo.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [106],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2512,
		name: "Trophy Collection",
        tagsId: [2, 1002, 10, 204],
		images: ['Nt_trophy_collection_post.webp', 'Nt_trophy_collection_post.webp'],
		states: [
			{
				attributeId: [7],				
				initValue: [30],
				step: [7],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [107],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10,
				onlyFor: [401]
			}				
		]
	},
	{
		id: 2513,
		name: "Jump Rope Song",
        tagsId: [2, 1002, 10, 204],
		images: ['Nt_jump_rope_song_post.webp', 'Nt_jump_rope_song_post.webp'],
		states: [
			{
				attributeId: [103],				
				initValue: [20],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [108],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10,
				onlyFor: [402]
			}				
		]
	},
	{
		id: 2514,
		name: "Family Tools",
        tagsId: [2, 1002, 10, 204],
		images: ['Nt_family_tools_post.webp', 'Nt_family_tools_post.webp'],
		states: [
			{
				attributeId: [2],				
				initValue: [35],
				step: [4],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [204]
			},			
			{
				attributeId: [109],				
				initValue: [8],
				step: [0],
				maxFusion: 10,
				reqFusion: 10,
				onlyFor: [403]
			}				
		]
	},
	{
		id: 2515,
		name: "Bayonet",
        tagsId: [2, 1002, 10, 205],
		images: ['Kw_bayonet_postevo.webp', 'Kw_bayonet_postevo.webp'],
		states: [
			{
				attributeId: [103],				
				initValue: [10],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [205]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [205]
			},
			{
				attributeId: [10],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2516,
		name: "Deadly Icicles",
        tagsId: [2, 1002, 10, 205],
		images: ['Kw_deadly_icicle_postevo.webp', 'Kw_deadly_icicle_postevo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [205]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [205]
			},			
			{
				attributeId: [110],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2517,
		name: "Ushanka",
        tagsId: [2, 1002, 10, 205],
		images: ['Kw_ushanka_postevo.webp', 'Kw_ushanka_postevo.webp'],
		states: [
			{
				attributeId: [111],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [205]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [205]
			},			
			{
				attributeId: [112],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
	{
		id: 2518,
		name: "Ouroboros Ring",
        tagsId: [2, 1002, 10, 206],
		images: ['Ouroboros_Ring_postEvo.webp', 'Ouroboros_Ring_postEvo.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [40],
				step: [6],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [206]
			},			
			{
				attributeId: [113],				
				initValue: [75],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2519,
		name: "Salamander Gloves",
        tagsId: [2, 1002, 10, 206],
		images: ['Salamander_Gloves_postEvo.webp', 'Salamander_Gloves_postEvo.webp'],
		states: [
			{
				attributeId: [114],				
				initValue: [30],
				step: [7],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [115],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2520,
		name: "Snake Fang",
        tagsId: [2, 1002, 10, 206],
		images: ['SnakeFang_postEvo.webp', 'SnakeFang_postEvo.webp'],
		states: [
			{
				attributeId: [116],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [206]
			},			
			{
				attributeId: [16],				
				initValue: [35],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2521,
		name: "Edenian Pie",
        tagsId: [2, 1002, 10, 207],
		images: ['EdenianPie_postEvo.webp', 'EdenianPie_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [10],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [207]
			},			
			{
				attributeId: [118],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2522,
		name: "Royal Wine",
        tagsId: [2, 1002, 10, 207],
		images: ['Royal_Wine_postEvo.webp', 'Royal_Wine_postEvo.webp'],
		states: [
			{
				attributeId: [119],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [9],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2523,
		name: "Traitor's Wreath",
        tagsId: [2, 1002, 10, 207],
		images: ['Traitors_Wreath_postEvo.webp', 'Traitors_Wreath_postEvo.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [40],
				step: [6],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [120],				
				initValue: [40],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2524,
		name: "Cyberpack 2007",
        tagsId: [2, 1002, 10, 208],
		images: ['Earth_cyberpack_2007_PostEvo.webp', 'Earth_cyberpack_2007_PostEvo.webp'],
		states: [
			{
				attributeId: [121],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [208]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [208]
			},			
			{
				attributeId: [122],				
				initValue: [0.5],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2525,
		name: "Jiaozi",
        tagsId: [2, 1002, 10, 208],
		images: ['Earth_jiaozi_PostEvo.webp', 'Earth_jiaozi_PostEvo.webp'],
		states: [
			{
				attributeId: [103],				
				initValue: [10],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [208]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [208]
			},	
			{
				attributeId: [123],				
				initValue: [10],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2526,
		name: "Peaceful Mind",
        tagsId: [2, 1002, 10, 208],
		images: ['Earth_peaceful_mind_PostEvo.webp', 'Earth_peaceful_mind_PostEvo.webp'],
		states: [
			{
				attributeId: [17],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [208]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [208]
			},			
			{
				attributeId: [20],				
				initValue: [15],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2527,
		name: "Bloody Mary",
        tagsId: [2, 1002, 10, 209],
		images: ['Dq_bloody_mary_PostEvo.webp', 'Dq_bloody_mary_PostEvo.webp'],
		states: [
			{
				attributeId: [124],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [209]
			},			
			{
				attributeId: [125],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2528,
		name: "Tiara of the Damned",
        tagsId: [2, 1002, 10, 209],
		images: ['Dq_tiara_of_the_damned_PostEvo.webp', 'Dq_tiara_of_the_damned_PostEvo.webp'],
		states: [
			{
				attributeId: [126],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [209]
			},			
			{
				attributeId: [127],				
				initValue: [40],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2529,
		name: "Toxic Fruit",
        tagsId: [2, 1002, 10, 209],
		images: ['Dq_toxic_fruit_PostEvo.webp', 'Dq_toxic_fruit_PostEvo.webp'],
		states: [
			{
				attributeId: [128],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [7],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [14],
				maxFusion: 10,
				forTower: [209]
			},	
			{
				attributeId: [129],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	// rares
	{
		id: 3000,
		name: "Bladed Fan",
        tagsId: [3, 1000, 8],
		images: ['Bladed_Fan_FX.webp', 'Bladed_Fan_FX.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [14],				
				initValue: [15],
				step: [1],
				onlyFor: [404],
				maxFusion: 10
			},			
			{
				attributeId: [112],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3001,
		name: "Bladed Hat",
        tagsId: [3, 1000, 9],
		images: ['Bladed_Hat_FX.webp', 'Bladed_Hat_FX.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [130],				
				initValue: [20],
				step: [2],
				maxFusion: 10,
				onlyFor: [405]
			},			
			{
				attributeId: [14],				
				initValue: [25, 100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3002,
		name: "Bladed Whips",
        tagsId: [3, 1000, 8],
		images: ['Whips_takeda_post.webp', 'Whips_takeda_post.webp'],
		states: [
			{
				attributeId: [132],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [133],				
				initValue: [5],
				step: [1],
				maxFusion: 10,
				onlyFor: [406]
			},
			{
				attributeId: [134],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3003,
		name: "Bo' Rai Cho's Flask",
        tagsId: [3, 1000, 8],
		images: ['Boraicho_flask_post.webp', 'Boraicho_flask_post.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [133],				
				initValue: [5],
				step: [1],
				maxFusion: 10,
				onlyFor: [407]
			},
			{
				attributeId: [16],				
				initValue: [25],
				step: [0],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3004,
		name: "Body Armor",
        tagsId: [3, 1000, 9],
		images: ['Body_Armor_FX.webp', 'Body_Armor_FX.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [136],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				onlyFor: [408]
			},
			{
				attributeId: [17],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3005,
		name: "Bojutsu Staff",
        tagsId: [3, 1000, 8],
		images: ['Bojutsu_Staff_FX.webp', 'Bojutsu_Staff_FX.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [137],				
				initValue: [10],
				step: [5],
				maxFusion: 10,
				onlyFor: [409]
			},
			{
				attributeId: [138, 139],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3006,
		name: "Bound Demon",
        tagsId: [3, 1000, 10],
		images: ['Bound_Demon_FX.webp', 'Bound_Demon_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [20],				
				initValue: [15],
				step: [1],
				maxFusion: 10,
				onlyFor: [410]
			},
			{
				attributeId: [140],				
				initValue: [25, 50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3007,
		name: "Combat Knife",
        tagsId: [3, 1000, 8],
		images: ['Combat_Knife_FX.webp', 'Combat_Knife_FX.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [132],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [411]
			},
			{
				attributeId: [16],				
				initValue: [15],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3008,
		name: "Cyber Armor",
        tagsId: [3, 1000, 9],
		images: ['Cyber_Armor_FX.webp', 'Cyber_Armor_FX.webp'],
		states: [
			{
				attributeId: [141],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [136],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				onlyFor: [412]
			},
			{
				attributeId: [4],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3009,
		name: "Cybernetic Arm",
        tagsId: [3, 1000, 9],
		images: ['Cybernetic_Arm_FX.webp', 'Cybernetic_Arm_FX.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [142, 100],				
				initValue: [20],
				step: [1],
				maxFusion: 10,
				onlyFor: [413]
			},
			{
				attributeId: [14],				
				initValue: [25, 100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3010,
		name: "Dragon Fangs",
        tagsId: [3, 1000, 10],
		images: ['Goro_dragon_fangs_post.webp', 'Goro_dragon_fangs_post.webp'],
		states: [
			{
				attributeId: [132],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [133],				
				initValue: [5],
				step: [1],
				maxFusion: 10,
				onlyFor: [414]
			},
			{
				attributeId: [134],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3011,
		name: "Earth Elemental Facemask",
        tagsId: [3, 1000, 9],
		images: ['Facemask_tremor_post.webp', 'Facemask_tremor_post.webp'],
		states: [
			{
				attributeId: [136],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [112],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [415]
			},
			{
				attributeId: [15],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3012,
		name: "Femme Fatale Comb",
        tagsId: [3, 1000, 10],
		images: ['Femme_fatale_comb_sindel_PostEvo.webp', 'Femme_fatale_comb_sindel_PostEvo.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [143],				
				initValue: [1],
				step: [],
				maxFusion: 10,
				reqFusion: 10,
				onlyFor: [416]
			},
			{
				attributeId: [112],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3013,
		name: "Freddy's Glove",
        tagsId: [3, 1000, 8],
		images: ['Freddys_Glove_FX.webp', 'Freddys_Glove_FX.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [144],				
				initValue: [20],
				step: [8],
				maxFusion: 10,
				onlyFor: [402]
			},
			{
				attributeId: [16],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3014,
		name: "Grim Essence",
        tagsId: [3, 1000, 10],
		images: ['Grim_FX.webp', 'Grim_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [145],				
				initValue: [5],
				step: [0.5],
				maxFusion: 10,
				onlyFor: [417]
			},
			{
				attributeId: [146],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3015,
		name: "Hockey Mask",
        tagsId: [3, 1000, 9],
		images: ['Hockey_Mask_FX.webp', 'Hockey_Mask_FX.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [136],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				onlyFor: [401]
			},
			{
				attributeId: [14],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3016,
		name: "Ice Daggers",
        tagsId: [3, 1000, 8],
		images: ['Ice_Daggers_FX.webp', 'Ice_Daggers_FX.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [140],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				onlyFor: [400]
			},
			{
				attributeId: [147],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3017,
		name: "Killer Wasp",
        tagsId: [3, 1000, 10],
		images: ['Killer_Wasp_FX.webp', 'Killer_Wasp_FX.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [148],				
				initValue: [20],
				step: [1],
				maxFusion: 10,
				onlyFor: [418]
			},
			{
				attributeId: [138, 139],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3018,
		name: "Kintaro's Tiger's Eye",
        tagsId: [3, 1000, 8],
		images: ['Kintaro_tigerseye_post.webp', 'Kintaro_tigerseye_post.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [149],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [419]
			},
			{
				attributeId: [138, 139],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3019,
		name: "Kobu Jutsu Blades",
        tagsId: [3, 1000, 8],
		images: ['Kobu_Jutsu_FX.PNG.webp', 'Kobu_Jutsu_FX.PNG.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [148],				
				initValue: [20],
				step: [10],
				maxFusion: 10,
				onlyFor: [420]
			},
			{
				attributeId: [112],				
				initValue: [25, 50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3020,
		name: "Military Vest",
        tagsId: [3, 1000, 9],
		images: ['Military_Vest_FX.webp', 'Military_Vest_FX.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [141],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [421]
			},
			{
				attributeId: [17],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3021,
		name: "Ninja Yoroi",
        tagsId: [3, 1000, 9],
		images: ['Yoroi_FX.webp', 'Yoroi_FX.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [136],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				onlyFor: [422]
			},
			{
				attributeId: [150],				
				initValue: [35],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3022,
		name: "Power Glove",
        tagsId: [3, 1000, 9],
		images: ['Power_Glove_FX.webp', 'Power_Glove_FX.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [4],				
				initValue: [25],
				step: [1],
				maxFusion: 10,
				onlyFor: [423]
			},
			{
				attributeId: [14],				
				initValue: [25, 100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3023,
		name: "Razor Sai",
        tagsId: [3, 1000, 8],
		images: ['Razor_Sai_FX.webp', 'Razor_Sai_FX.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [140],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				onlyFor: [424]
			},
			{
				attributeId: [138, 139],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3024,
		name: "Red Headband",
        tagsId: [3, 1000, 10],
		images: ['Red_Headband_FX.webp', 'Red_Headband_FX.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [9],				
				initValue: [25],
				step: [1],
				maxFusion: 10,
				onlyFor: [425]
			},
			{
				attributeId: [15],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3025,
		name: "Respirator",
        tagsId: [3, 1000, 9],
		images: ['Respirator_kabal_post.webp', 'Respirator_kabal_post.webp'],
		states: [
			{
				attributeId: [151],				
				initValue: [25],
				step: [2.5],
				maxFusion: 10
			},
			{
				attributeId: [152],				
				initValue: [10, 5],
				step: [2, 1],
				maxFusion: 10,
				onlyFor: [426]
			},
			{
				attributeId: [153],				
				initValue: [75],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3026,
		name: "Revolvers",
        tagsId: [3, 1000, 8],
		images: ['Revolvers_FX.webp', 'Revolvers_FX.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [130, 131],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [427]
			},
			{
				attributeId: [10],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3027,
		name: "Rusty Chainsaw",
        tagsId: [3, 1000, 8],
		images: ['Rustychainsaw_leatherface_post.webp', 'Rustychainsaw_leatherface_post.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [154],				
				initValue: [1],
				step: [0.5],
				maxFusion: 10,
				onlyFor: [403]
			},
			{
				attributeId: [155],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3028,
		name: "Sacrificial Knife",
        tagsId: [3, 1000, 8],
		images: ['Sacrificial_Knife_FX.webp', 'Sacrificial_Knife_FX.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [156],				
				initValue: [30, 33],
				step: [2],
				maxFusion: 10,
				onlyFor: [428]
			},
			{
				attributeId: [138, 139],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3029,
		name: "Saurian Armor",
        tagsId: [3, 1000, 9],
		images: ['Saurian_Armor_FX.PNG.webp', 'Saurian_Armor_FX.PNG.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [157],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [429]
			},
			{
				attributeId: [5],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3030,
		name: "Sento Blade",
        tagsId: [3, 1000, 8],
		images: ['Sento_Blade_FX.PNG.webp', 'Sento_Blade_FX.PNG.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [132],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [430]
			},
			{
				attributeId: [16],				
				initValue: [15],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3031,
		name: "Shao Kahn's Helmet",
        tagsId: [3, 1000, 9],
		images: ['Helmet_shaokahn_postevo.webp', 'Helmet_shaokahn_postevo.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [5],
				step: [3.5],
				maxFusion: 10
			},
			{
				attributeId: [122],				
				initValue: [1],
				step: [],
				maxFusion: 10,
				onlyFor: [431]
			},
			{
				attributeId: [158],				
				initValue: [4],
				step: [],
				maxFusion: 10,
				onlyFor: [431]
			},
			{
				attributeId: [8],				
				initValue: [35],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3032,
		name: "Shaolin Bow",
        tagsId: [3, 1000, 8],
		images: ['Shaolin_Bow_FX.webp', 'Shaolin_Bow_FX.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [156],				
				initValue: [30, 33],
				step: [2],
				maxFusion: 10,
				onlyFor: [432]
			},
			{
				attributeId: [138, 139],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3033,
		name: "Shinnok's Amulet",
        tagsId: [3, 1000, 10],
		images: ['Shinnoks_Amulet_FX.webp', 'Shinnoks_Amulet_FX.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [15],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [433]
			},
			{
				attributeId: [140],				
				initValue: [25, 50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3034,
		name: "Shirai Ryu Kunai",
        tagsId: [3, 1000, 8],
		images: ['Shirai_Ryu_Kunai_FX.webp', 'Shirai_Ryu_Kunai_FX.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [148],				
				initValue: [20],
				step: [1],
				maxFusion: 10,
				onlyFor: [434]
			},
			{
				attributeId: [12, 13],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3035,
		name: "Soulsnake Arms",
        tagsId: [3, 1000, 10],
		images: ['Soulsnake_FX.webp', 'Soulsnake_FX.webp'],
		states: [
			{
				attributeId: [132],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [160],				
				initValue: [5],
				step: [2],
				maxFusion: 10,
				onlyFor: [435]
			},
			{
				attributeId: [161],				
				initValue: [3],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3036,
		name: "Soul Medallion",
        tagsId: [3, 1000, 10],
		images: ['Soul_Medallion_FX.webp', 'Soul_Medallion_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [141],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [436]
			},
			{
				attributeId: [155],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3037,
		name: "Storm Hat",
        tagsId: [3, 1000, 9],
		images: ['Storm_Hat_FX.webp', 'Storm_Hat_FX.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [132],				
				initValue: [10],
				step: [1],
				maxFusion: 10,
				onlyFor: [437]
			},
			{
				attributeId: [15],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
    {
		id: 3038,
		name: "Subtle Tattoo",
        tagsId: [3, 1000, 10],
		images: ['Subtle_Tattoo_FX.webp', 'Subtle_Tattoo_FX.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [4],				
				initValue: [40],
				step: [2],
				maxFusion: 10,
				onlyFor: [438]
			},
			{
				attributeId: [155],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3039,
		name: "T-800 Endoskeleton Arm",
        tagsId: [3, 1000, 10],
		images: ['T-800_FX.webp', 'T-800_FX.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [4],				
				initValue: [40],
				step: [2],
				maxFusion: 10,
				onlyFor: [439]
			},
			{
				attributeId: [155],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3040,
		name: "Tarkatan Gi",
        tagsId: [3, 1000, 9],
		images: ['Tarkatan_Gi_FX.webp', 'Tarkatan_Gi_FX.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [134],				
				initValue: [20],
				step: [1],
				maxFusion: 10,
				onlyFor: [440]
			},
			{
				attributeId: [112],				
				initValue: [25, 50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3041,
		name: "Thunderblade",
        tagsId: [3, 1000, 8],
		images: ['Thunderblade_FX.webp', 'Thunderblade_FX.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [115],				
				initValue: [10],
				step: [2],
				maxFusion: 10,
				onlyFor: [441]
			},
			{
				attributeId: [155],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3042,
		name: "Tribal Headband",
        tagsId: [3, 1000, 10],
		images: ['Tribal_headband_nightwolf_PostEvo.webp', 'Tribal_headband_nightwolf_PostEvo.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [25],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [162],				
				initValue: [10],
				step: [2],
				maxFusion: 10,
				onlyFor: [442]
			},
			{
				attributeId: [163],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3043,
		name: "Vial of Infinite Blood",
        tagsId: [3, 1000, 10],
		images: ['VialsOfInfiniteBlood_PostEvo.webp', 'VialsOfInfiniteBlood_PostEvo.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [25],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [164],				
				initValue: [50],
				step: [5],
				maxFusion: 10,
				onlyFor: [443]
			},
			{
				attributeId: [165],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	

	/* Tower rares */

    {
		id: 3500,
		name: "Witch's Ward",
        tagsId: [3, 1002, 10, 200],
		images: ['WitchsWard_PostEvo.webp', 'WitchsWard_PostEvo.webp'],
		states: [
			{
				attributeId: [105],				
				initValue: [45],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [5],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [15],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3501,
		name: "Meat's Cleaver",
        tagsId: [3, 1002, 10, 200],
		images: ['Meatscleaver_postevo.webp', 'Meatscleaver_postevo.webp'],
		states: [
			{
				attributeId: [166],				
				initValue: [100],
				step: [40],
				maxFusion: 10
			},
			{
				attributeId: [10],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [167],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3502,
		name: "Bloodsucker",
        tagsId: [3, 1002, 10, 200],
		images: ['Bloodsucker_PostEvo.webp', 'Bloodsucker_PostEvo.webp'],
		states: [
			{
				attributeId: [168],				
				initValue: [25],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [15],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [200]
			},
			{
				attributeId: [139],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3503,
		name: "Cryomancer Armor",
        tagsId: [3, 1002, 9, 201],
		images: ['Cryomancerarmor_postevo.webp', 'Cryomancerarmor_postevo.webp'],
		states: [
			{
				attributeId: [142],				
				initValue: [20, 50],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [169],				
				initValue: [5],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: [60],
				step: [44],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [14],				
				initValue: [25, 25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3504,
		name: "Frost Axe",
        tagsId: [3, 1002, 8, 201],
		images: ['Frostaxe_postevo.webp', 'Frostaxe_postevo.webp'],
		states: [
			{
				attributeId: [170],				
				initValue: [60],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [30],
				step: [22],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [171],				
				initValue: [30],
				step: [2],
				maxFusion: 10,
				onlyFor: [400]
			},
			{
				attributeId: [9],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3505,
		name: "Ice Gloves",
        tagsId: [3, 1002, 9, 201],
		images: ['Icegloves_postevo.webp', 'Icegloves_postevo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [172],				
				initValue: [30],
				step: [50],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [22],				
				initValue: [60],
				step: [44],
				maxFusion: 10,
				forTower: [201]
			},
			{
				attributeId: [17],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3506,
		name: "Nomad's Deadly Vapors",
        tagsId: [3, 1002, 10, 202],
		images: ['DeadlyVapors_postEvo.webp', 'DeadlyVapors_postEvo.webp'],
		states: [
			{
				attributeId: [173],				
				initValue: [20, 6],
				step: [6],
				maxFusion: 10
			},
			{
				attributeId: [174],				
				initValue: [10],
				step: [1.5],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [15],
				step: [14],
				maxFusion: 10,
				forTower: [202]
			},
			{
				attributeId: [22],				
				initValue: [30],
				step: [28],
				maxFusion: 10,
				forTower: [202]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [426]
			},
			{
				attributeId: [138],				
				initValue: [40],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3507,
		name: "Scoundrel's Elbow Blades",
        tagsId: [3, 1002, 10, 202],
		images: ['ElbowBlades_postEvo.webp', 'ElbowBlades_postEvo.webp'],
		states: [
			{
				attributeId: [175],				
				initValue: [50],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [176],				
				initValue: [30, 30],
				step: [5],
				maxFusion: 10,
			},
			{
				attributeId: [21],				
				initValue: [15],
				step: [14],
				maxFusion: 10,
				forTower: [202]
			},
			{
				attributeId: [22],				
				initValue: [30],
				step: [28],
				maxFusion: 10,
				forTower: [202]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [411]
			},
			{
				attributeId: [177],				
				initValue: [100, 50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3508,
		name: "Stone Fists",
        tagsId: [3, 1002, 8, 202],
		images: ['StoneFists_postEvo.webp', 'StoneFists_postEvo.webp'],
		states: [
			{
				attributeId: [206],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [35],
				step: [25],
				maxFusion: 10,
				forTower: [202]
			},
			{
				attributeId: [178],				
				initValue: [10, 3],
				step: [1],
				maxFusion: 10,
				onlyFor: [415]
			},
			{
				attributeId: [179],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3509,
		name: "Specter's Infernal Chains",
        tagsId: [3, 1002, 10, 203],
		images: ['Srt_specters_infernal_chains_PostEvo.webp', 'Srt_specters_infernal_chains_PostEvo.webp'],
		states: [
			{
				attributeId: [180],				
				initValue: [50, 33],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [181],				
				initValue: [10],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [434]
			},
			{
				attributeId: [182],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10,
				onlyFor: [434, 422]
			}				
		]
	},	
    {
		id: 3510,
		name: "Champion's Leather Bracers",
        tagsId: [3, 1002, 9, 203],
		images: ['Srt_champions_leather_bracers_PostEvo.webp', 'Srt_champions_leather_bracers_PostEvo.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: [300],
				step: [90],
				maxFusion: 10
			},
			{
				attributeId: [183],				
				initValue: [30],
				step: [4.5],
				maxFusion: 10
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [425]
			},	
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [184],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3511,
		name: "Muramasa Blades",
        tagsId: [3, 1002, 8, 203],
		images: ['Srt_muramasa_blades_PostEvo.webp', 'Srt_muramasa_blades_PostEvo.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: [25],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [206],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [203]
			},
			{
				attributeId: [185],				
				initValue: [125],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3512,
		name: "Bi-Han's Visage",
        tagsId: [3, 1002, 9, 204],
		images: ['Nt_bihans_visage_post.webp', 'Nt_bihans_visage_post.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [14],				
				initValue: [25, 30],
				step: [0, 7],
				maxFusion: 10
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [417]
			},
			{
				attributeId: [186],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3513,
		name: "Thunder Lord's Sigil",
        tagsId: [3, 1002, 10, 204],
		images: ['Nt_thunder_lords_sigil_post.webp', 'Nt_thunder_lords_sigil_post.webp'],
		states: [
			{
				attributeId: [187],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [132],				
				initValue: [10],
				step: [20],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [437]
			},
			{
				attributeId: [188],				
				initValue: [1],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3514,
		name: "Krypt Spider Fang",
        tagsId: [3, 1002, 8, 204],
		images: ['Nt_krypt_spider_fang_post.webp', 'Nt_krypt_spider_fang_post.webp'],
		states: [
			{
				attributeId: [189],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [190],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [204]
			},
			{
				attributeId: [138],				
				initValue: [35],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3515,
		name: "Bloodmaster's Bloody Finka",
        tagsId: [3, 1002, 8, 205],
		images: ['Kw_bloodmasters_bloody_finka_postevo.webp', 'Kw_bloodmasters_bloody_finka_postevo.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [191],				
				initValue: [10],
				step: [3],
				maxFusion: 10
			},			
			{
				attributeId: [21],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [443]
			},
			{
				attributeId: [192],				
				initValue: [1],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3516,
		name: "General's Knockout Gloves",
        tagsId: [3, 1002, 10, 205],
		images: ['Kw_generals_knockout_gloves_postevo.webp', 'Kw_generals_knockout_gloves_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [15],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [193],				
				initValue: [5],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [205]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [205]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [421]
			},
			{
				attributeId: [194],				
				initValue: [7, 3],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3517,
		name: "Telogreika",
        tagsId: [3, 1002, 9, 205],
		images: ['Kw_telogreika_postevo.webp', 'Kw_telogreika_postevo.webp'],
		states: [
			{
				attributeId: [2, 7],				
				initValue: [50],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [195],				
				initValue: [1],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [205]
			},
			{
				attributeId: [196],				
				initValue: [1],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3518,
		name: "Acid Dragon's Tekko-Kagi",
        tagsId: [3, 1002, 8, 206],
		images: ['St_acid_dragons_tekko_kagi_postEvo.webp', 'St_acid_dragons_tekko_kagi_postEvo.webp'],
		states: [
			{
				attributeId: [138],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [197],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [429]
			},
			{
				attributeId: [198],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3519,
		name: "Soul Reaver's King Kobra Belt",
        tagsId: [3, 1002, 9, 206],
    	images: ['SoulReaversKingKobraBelt_postEvo.webp', 'SoulReaversKingKobraBelt_postEvo.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [199],				
				initValue: [10],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [435]
			},
			{
				attributeId: [200],				
				initValue: [50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3520,
		name: "Viper Hood",
        tagsId: [3, 1002, 10, 206],
		images: ['ViperHood_postEvo.webp', 'ViperHood_postEvo.webp'],
		states: [
			{
				attributeId: [201],				
				initValue: [20],
				step: [4],
				maxFusion: 10
			},
			{
				attributeId: [202],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [206]
			},
			{
				attributeId: [203],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3521,
		name: "Divine Tornadic Pauldron",
        tagsId: [3, 1002, 10, 207],
		images: ['DivineTornadicPauldron_postEvo.webp', 'DivineTornadicPauldron_postEvo.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [204],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [441]
			},
			{
				attributeId: [205],				
				initValue: [3],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3522,
		name: "Dynasty Parade Uniform",
        tagsId: [3, 1002, 9, 207],
		images: ['DynastyParadeUniform_postEvo.webp', 'DynastyParadeUniform_postEvo.webp'],
		states: [
			{
				attributeId: [207],				
				initValue: [20],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [208],				
				initValue: [35],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [404]
			},
			{
				attributeId: [124],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3523,
		name: "Sapphire Dagger",
        tagsId: [3, 1002, 8, 207],
		images: ['SapphireDagger_postEvo.webp', 'SapphireDagger_postEvo.webp'],
		states: [
			{
				attributeId: [17],				
				initValue: [20],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [20],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [207]
			},
			{
				attributeId: [209],				
				initValue: [6, 6, 60],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3524,
		name: "Body of Steel",
        tagsId: [3, 1002, 9, 208],
		images: ['Earth_body_of_steel_PostEvo.webp', 'Earth_body_of_steel_PostEvo.webp'],
		states: [
			{
				attributeId: [210],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [136],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [208]
			},
			{
				attributeId: [211],				
				initValue: [20, 50],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3525,
		name: "Famous Dashing Smile",
        tagsId: [3, 1002, 8, 208],
		images: ['Earth_famous_dashing_smile_PostEvo.webp', 'Earth_famous_dashing_smile_PostEvo.webp'],
		states: [
			{
				attributeId: [114],				
				initValue: [50],
				step: [10],
				maxFusion: 10
			},
			{
				attributeId: [212],				
				initValue: [20, 10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [208]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [438]
			},
			{
				attributeId: [213],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3526,
		name: "Wushu Master's True Weapon",
        tagsId: [3, 1002, 10, 208],
		images: ['Earth_wushu_masters_true_weapon_PostEvo.webp', 'Earth_wushu_masters_true_weapon_PostEvo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: [40],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [140],				
				initValue: [30, 50],
				step: [3],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [20],
				step: [13],
				maxFusion: 10,
				forTower: [208]
			},
			{
				attributeId: [22],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [208]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [405]
			},
			{
				attributeId: [214],				
				initValue: [10, 5],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3527,
		name: "Dark Mantle",
        tagsId: [3, 1002, 9, 209],
		images: ['Dq_dark_mantle_PostEvo.webp', 'Dq_dark_mantle_PostEvo.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: [15],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [215],				
				initValue: [2],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: [80],
				step: [52],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [216],				
				initValue: [20],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3528,
		name: "Wicked Sister's Festive mask",
        tagsId: [3, 1002, 10, 209],
		d: `30-50% Chance to apply Bleed to an opponent on any successful Special Attack.
		20-40% Chance to apply Incurability debuff to the whole team for 10 sec on Combo Ender.
		10-150% Damage boost. Dark Queen's Tower only.
		20-300% Max health boost. Dark Queen's Tower only.
		[MILEENA] [SET] If this is equipped alongside Wicked Sister's Sultry Gown, any DIAMOND Mileena gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] Bleed stacks up to 3 times. The user Vampires 33% damage from up to 3 last Bleed DOTs.  acc`,
		images: ['Dq_wicked_sisters_festive_mask_PostEvo.webp', 'Dq_wicked_sisters_festive_mask_PostEvo.webp'],
		states: [
			{
				attributeId: [217],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [218],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [10],
				step: [14],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [22],				
				initValue: [20],
				step: [28],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [424]
			},
			{
				attributeId: [219],				
				initValue: [3, 33, 3],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3529,
		name: "Wrestling Star's Jaxophone",
        tagsId: [3, 1002, 8, 209],
		images: ['Dq_wrestling_stars_jaxophone_PostEvo.webp', 'Dq_wrestling_stars_jaxophone_PostEvo.webp'],
		states: [
			{
				attributeId: [148],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [220],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: [40],
				step: [26],
				maxFusion: 10,
				forTower: [209]
			},
			{
				attributeId: [1000],				
				initValue: [40, 25],
				step: [],
				maxFusion: 0,
				onlyFor: [413]
			},
			{
				attributeId: [221],				
				initValue: [40],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	

	/* Faction War and other Epics */

    {
		id: 4000,
		name: "Wrath Hammer",
        tagsId: [4, 1004, 8],
		images: ['Wrath_Hammer_2.0.webp', 'Wrath_Hammer_2.0.webp'],
		states: [
			{
				attributeId: [222],				
				initValue: [1],
				step: [],
				maxFusion: 0
			},
			{
				attributeId: [206],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [158],				
				initValue: [4],
				step: [0],
				maxFusion: 0
			},
			{
				attributeId: [10],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4001,
		name: "Bloody Tomahawk",
        tagsId: [4, 1001, 8],
		images: ['Bloody_Tomahawk_2.0.webp', 'Bloody_Tomahawk_2.0.webp'],
		states: [
			{
				attributeId: [156],				
				initValue: [20, 33],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [122],				
				initValue: [1],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4002,
		name: "Bloody Shokan Armor",
        tagsId: [4, 1001, 9],
		images: ['Bloody_Shokan_Armor.webp', 'Bloody_Shokan_Armor.webp'],
		states: [
			{
				attributeId: [142],				
				initValue: [10, 100],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [17],				
				initValue: [75],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4003,
		name: "Bloody Voodoo Doll",
        tagsId: [4, 1001, 10],
		images: ['Bloody_Voodoo_Doll.webp', 'Bloody_Voodoo_Doll.webp'],
		states: [
			{
				attributeId: [20],				
				initValue: [10],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [5],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [15],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4004,
		name: "Datusha, Bane of the Moroi",
        tagsId: [4, 1001, 8],
		images: ['Datusha,_Bane_of_the_Moroi.webp', 'Datusha,_Bane_of_the_Moroi.webp'],
		states: [
			{
				attributeId: [223],				
				initValue: [10],
				step: [20],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [130, 131],				
				initValue: [25],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4005,
		name: "Devastator",
        tagsId: [4, 1001, 8],
		images: ['Devestator.webp', 'Devestator.webp'],
		states: [
			{
				attributeId: [224],				
				initValue: [30, 50],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [130],				
				initValue: [10],
				step: [4],
				maxFusion: 10
			},
			{
				attributeId: [225],				
				initValue: [20, 20, 1],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4006,
		name: "Blaze's Life Force",
        tagsId: [4, 1001, 10],
		images: ['Blazes_Life_Force_2.0.webp', 'Blazes_Life_Force_2.0.webp'],
		states: [
			{
				attributeId: [226],				
				initValue: [50],
				step: [5],
				maxFusion: 10
			},
			{
				attributeId: [181],				
				initValue: [5],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [227],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4007,
		name: "Moloch's Ball and Chain",
        tagsId: [4, 1001, 8],
		images: ['Molochs_Ball_and_Chain_2.0.webp', 'Molochs_Ball_and_Chain_2.0.webp'],
		states: [
			{
				attributeId: [228],				
				initValue: [5, 300],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [148],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [229],				
				initValue: [100, 5],
				step: [0, 1],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4008,
		name: "Drahmin's Mask",
        tagsId: [4, 1001, 9],
		images: ['DMask.webp', 'DMask.webp'],
		states: [
			{
				attributeId: [230],				
				initValue: [5],
				step: [1.5],
				maxFusion: 10
			},
			{
				attributeId: [17],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [231],				
				initValue: [10],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [232],				
				initValue: [15],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4009,
		name: "Sindel's Signet Ring",
        tagsId: [4, 1001, 10],
		images: ['Sindels_Signet_Ring_2.0.webp', 'Sindels_Signet_Ring_2.0.webp'],
		states: [
			{
				attributeId: [17],				
				initValue: [30],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [6, 7],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [1, 2],				
				initValue: [30],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [233],				
				initValue: [1],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4010,
		name: "Shadow Sash",
        tagsId: [4, 1001, 9],
		images: ['Shadow_Sash_2.0.webp', 'Shadow_Sash_2.0.webp'],
		states: [
			{
				attributeId: [234],				
				initValue: [10],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [210],				
				initValue: [20],
				step: [2],
				maxFusion: 10
			},
			{
				attributeId: [235],				
				initValue: [100],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4011,
		name: "Shang Tsung's Stone",
        tagsId: [4, 1001, 10],
		images: ['Shang_Tsungs_Stone_2.0.webp', 'Shang_Tsungs_Stone_2.0.webp'],
		states: [
			{
				attributeId: [20],				
				initValue: [10],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [5],				
				initValue: [20],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [236],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4012,
		name: "Caro's Guidance",
        tagsId: [4, 1003, 10],
		images: ['Guidance.webp', 'Guidance.webp'],
		states: [
			{
				attributeId: [237],				
				initValue: [5],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [238],				
				initValue: [5],
				step: [0.5],
				maxFusion: 10
			},
			{
				attributeId: [8],				
				initValue: [30],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	

	/* Tower Epics */ 
    {
		id: 4500,
		name: "Hellfire Blade",
        tagsId: [4, 1002, 8, 200],
		d: `Special Attacks that apply Fire deal 20-80% bonus damage against opponents already affected by Fire.
		200-700% Damage boost. Tower of Horror only.
		100-500% Max Health boost. Tower of Horror only.
		On Tag-in, apply Fire to both the wearer and the opponent for 2-7s.
		[Fusion Level X] 100% Chance to drain 33% Power on Fire attacks. w`,
		images: ['Hellfire_Blade.webp', 'Hellfire_Blade.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4501,
		name: "Wailing Spirit",
        tagsId: [4, 1002, 10, 200],
		d: `On Tag-in, Power Drain 0.5-2 bars of opponent’s Power.
		30-100% Chance to steal 50% of the enemy’s Power at the start of the match when equipped on a starting character.
		75-225% Damage boost. Tower of Horror only.
		100-450% Max Health boost. Tower of Horror only.
		[Fusion Level X] Steal 50% of Power Drained on tag-in.  acc`,
		images: ['WailingSpirit_PostEvo.webp', 'WailingSpirit_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4502,
		name: "Living Dead",
		d: `Once per match, resurrect after being defeated, and gain Invulnerability and 100% Unblockable chance on basic attacks for 2-7s.
		200-700% Damage boost. Tower of Horror only.		
		100-500% Max Health boost. Tower of Horror only.
		30-50% Self heal at the end of Special Attack 3 or X-Ray/Fatal Blow attack.
		[Fusion Level X] Apply Bleed to opponent when resurrecting.  ar`,
        tagsId: [4, 1002, 9, 200],
		images: ['LivingDead_PostEvo.webp', 'LivingDead_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4503,
		name: "Reaper's End",
        tagsId: [4, 1002, 8, 200],
		d: `25-75% Chance to apply Curse on Combo Ender.
		200-700% Damage boost. Tower of Horror only.		
		100-500% Max Health boost. Tower of Horror only.		
		30-50% Unblockable chance on basic attacks.		
		[Fusion Level X] 30% Critical Hit Chance boost.  w`,
		images: ['Reapersend_postevo.webp', 'Reapersend_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4504,
		name: "Frost Mask",
		d: `35-55% Max health boost.
		After defeating an opponent apply Frostbite on their teammates for 5-15s.
		200-1000% Max Health boost. Lin Kuei Tower only.
		[SUB-ZERO] 50-100% Chance to apply Frostbite on enemy team at the start of the match.
		[Fusion Level X] 50% Opponent unblockable attack chance reduction. `,
        tagsId: [4, 1002, 9, 201],
		images: ['Frostmask_postevo.webp', 'Frostmask_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4505,
		name: "Frost Orb",
        tagsId: [4, 1002, 10, 201],
		d: `10-15% Reduced Power cost on all Special Attacks.
		Once per fight spawn an Ice Clone that will save the wearer from a knockout blow. There is 10-50% chance the Ice Clone will explode and apply Frostbite to the opponent.
		45-250% Damage boost. Lin Kuei Tower only.		
		100-300% Max Health boost. Lin Kuei Tower only.		
		[Fusion Level X] Immune to Frostbite and Stun. acc`,
		images: ['Frostorb_postevo.webp', 'Frostorb_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4506,
		name: "Kori Blade",
        tagsId: [4, 1002, 8, 201],
		d: `15-25% Attack boost.
		50-100% Chance to apply Ice Armor after defeating an opponent.
		100-500% Damage boost. Lin Kuei Tower only.		
		[Fusion Level X] Every time an owner defeats an opponent, each surviving opponent get 1 bar of their Power drained.  w`,
		images: ['Kori_Blade.webp', 'Kori_Blade.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4507,
		name: "Kuai Liang's Scepter",
		d: `0.5-1.5% Bar of starting Power.
		50-100% Lethal Blow chance against enemies affected by Freeze: +300% damage.		
		100-500% Damage boost. Lin Kuei Tower only.		
		[SUB-ZERO] [SET] If this is equipped with another 1 card from Kuai Liang’s set, Diamond Character gain a 40% chance to perform a Special Combo Ender dealing massive damage. If it is the last opponent and they are under 25% health, Sub-Zero performs a Brutality instead, ending the fight immediately.		
		[Fusion Level X] 100% Chance to apply Bleed when hitting an opponent affected by Freeze.  w`,
        tagsId: [4, 1002, 8, 201],
		images: ['Kuai_Liangs_Scepter.webp', 'Kuai_Liangs_Scepter.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4508,
		name: "Nomad's Buzz Saw",
        tagsId: [4, 1002, 8, 202],
		d: `20-50% Chance to gain Speed after a successful critical hit.
		Poison applies to the enemy lasts 60-120% longer.		
		150-600% Damage boost. Black Dragon Tower only.		
		[KABAL] [SET] If this is equipped along with Nomad's Deadly Vapors, Diamond Character gains a 40% chance to perform a Special Combo Ender dealing massive damage. If it is the last opponent and they are under 25% health, Character performs a Brutality instead, ending the fight immediately.
		[Fusion Level X] Gain 2 Bars of Power after a teammate is defeated. w`,
		images: ['Nomads_Buzz_Saw.webp', 'Nomads_Buzz_Saw.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4509,
		name: "Psych Bomb",
        tagsId: [4, 1002, 10, 202],
		d: `On tag-in, Psych Bomb is tossed, dealing 200-400% of the basic attack damage.
		On tag-in, Psych Bomb is tossed, having a 30-80% chance to apply stun for 3 seconds.		
		75-225% Damage boost. Black Dragon Tower only.		
		150-450% Max health boost. Black Dragon Tower only.		
		20-40% Chance to apply Cripple when stunning an opponent.		
		[Fusion Level X] 50% Reduced power cost on Special Attack 2. acc`,
		images: ['Psych_Bomb.webp', 'Psych_Bomb.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4510,
		name: "Scoundrel's Cybernetic Heart",
		d: `Regenerates 3 bars of Power over 15 seconds below 30-60% Health.

		300-1200% Max health boost. Black Dragon Tower only.
		
		[KANO] 20-40% Damage boost against enemies affected by Bleed.
		
		[KANO] [SET] If this is equipped with another 1 card from Scoundrel's set, Diamond Character gains a 40% chance to perform a Special Combo Ender dealing massive damage. If it is the last opponent and they are under 25% health, Kano performs a Brutality instead, ending the fight immediately.
		
		[Fusion Level X] 40% Max Health boost. ar`,
        tagsId: [4, 1002, 9, 202],
		images: ['CyberneticHeart_postEvo.webp', 'CyberneticHeart_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4511,
		name: "Smuggler's Luck",
        tagsId: [4, 1002, 10, 202],
		d: `30-60% Chance to gain Luck after Special Attack 1.

		Special Attack 1 deals 10-20% more damage after each use, stacks up to 5 times.
		
		75-225% Damage boost. Black Dragon Tower only.
		
		150-450% Max health boost. Black Dragon Tower only.
		
		[Fusion Level X] On tag-out, gain Dispel. acc`,
		images: ['SmugglerLuck_postEvo.webp', 'SmugglerLuck_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4512,
		name: "Specter's Burning Vengeance",
        tagsId: [4, 1002, 9, 203],
		d: `100% Chance to apply Fire on Special Attacks 2-7 times per battle.
		20-40% Chance to apply Fire when blocking an enemy attack.		
		300-1200% Max health Boost. Shirai Ryu Tower only.		
		[SCORPION] [SET] If this is equipped alongside Specter's Infernal Chains, any DIAMOND Scorpion gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.		
		[Fusion Level X] Wearer explodes into flames when defeated, dealing massive damage and applying Fire to all opponents. arm`,
		images: ['Srt_specters_burning_vengeance_PostEvo.webp', 'Srt_specters_burning_vengeance_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4513,
		name: "Champion's Nunchaku",
        tagsId: [4, 1002, 8, 203],
		d: `10-40% Chance to apply Fire on basic attacks.
		30-100% Damage boost against Outworld Characters.		
		150-600% Damage boost. Shirai Ryu Tower only.		
		[LIU KANG] [SET] If this is equipped alongside Champion's Leather Bracers, any DIAMOND Liu Kang gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.		
		[Fusion Level X] [LIU KANG] When a teammate tags in, Liu Kang throws Dragon Fire from the sidelines, dealing 500% of his basic attack damage with 50% chance to apply Fire. wea`,
		images: ['Srt_champions_nunchaku_PostEvo.webp', 'Srt_champions_nunchaku_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4514,
		name: "Edenian Bracelets",
        tagsId: [4, 1002, 10, 203],
		d: `25-50% Special Attack 2 Damage boost.

		20-40% Power generation boost.
		
		75-225% Damage boost. Shirai Ryu Tower only.
		
		150-450% Max health boost. Shirai Ryu Tower only.
		
		[JADE] [SET] If this is equipped alongside Edenian Force Rejection Field, any DIAMOND Jade gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		[Fusion Level X] [JADE] Once per match, Jade avoids death by automatically tagging out before the killing blow. This effect does not trigger if the killing blow is a Brutality. acc`,
		images: ['Srt_edenian_bracelets_PostEvo.webp', 'Srt_edenian_bracelets_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4515,
		name: "Edenian Force Rejection Field",
        tagsId: [4, 1002, 9, 203],
		d: `25-45% Max health boost.
		Opponents affected by Blind have a 30-60% chance to also miss during Special Attacks.		
		300-1200% Max health boost. Shirai Ryu Tower only.		
		[JADE] [SET] If this is equipped alongside Edenian Bracelets, any DIAMOND Jade gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 50% Resistance to all Debuffs. ar`,
		images: ['Srt_edenian_force_rejection_field_PostEvo.webp', 'Srt_edenian_force_rejection_field_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4516,
		name: "Bi-Han's Tormentor",
        tagsId: [4, 1002, 8, 204],
		d: `5-15% Lethal Blow chance.
		10-20% Reduced Power cost on all Special Attacks.
		150-600% Damage boost. Nightmare Tower only.
		[NOOB SAIBOT] [SET] If this is equipped alongside Bi-Han's Visage, any Diamond Noob Saibot gain 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.		
		[Fusion Level X] [NOOB SAIBOT] Gain 1 Bar of Power after any teammate or ally Summon is defeated. w`,
		images: ['Nt_bihans_tormentor_post.webp', 'Nt_bihans_tormentor_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4517,
		name: "Demon Bat",
        tagsId: [4, 1002, 10, 204],
		d: `After performing any Special Attack, a demon bat also attacks the victim, dealing additional damage and applying Bleed while dying in the process. Demon Bat respawns every 30-10 seconds.
		20-30% Power generation boost.
		75-225% Damage boost. Nightmare Tower only.		
		150-450% Max health boost. Nightmare Tower only.
		[Fusion Level X] When Demon Bat attacks an opponent affected by Bleed, user heals for 20% of the victim's max health.  acc`,
		images: ['Nt_demon_bat_post.webp', 'Nt_demon_bat_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4518,
		name: "Thunder Lord's Stormweaver",
        tagsId: [4, 1002, 8, 204],
		d: `15-25% Attack boost.
		30-100% Chance to gain Dispel after performing a Special Attack.
		150-600% Damage boost. Nightmare Tower only.
		[RAIDEN] 10-30% Chance lightning will strike the opponent on basic attack, dealing additional Damage.
		[RAIDEN] [SET] If this equipped alongside Thunder Lord's Sigil, any DIAMOND Raiden gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 1.5 Bar of starting Power.  we`,
		images: ['Nt_thunder_lords_stormweaver_post.webp', 'Nt_thunder_lords_stormweaver_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4519,
		name: "Killer Jacket",
        tagsId: [4, 1002, 9, 204],
		d: `10-60% Toughness boost.
		30-100% Chance to gain Shield after suffering from a Lethal Blow.
		300-1200% Max health boost. Nightmare Tower only.	
		[Fusion Level X] Gain Shield at the start of the match.  ar`,
		images: ['Nt_killer_jacket_post.webp', 'Nt_killer_jacket_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4520,
		name: "Bloodmaster's Iron Curtain",
		d: `20-50% Max health boost.
		Bleed lasts 10-50% longer.
		300-1200% Max health boost. Kold War Tower only.
		[SKARLET] 15-25% Chance to convert 50% damage to Health on Special Attack 1.
		[SKARLET] [SET] If this is equipped alongside Bloodmaster's Bloody Finka, any DIAMOND Skarlet gains 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] Immunity to all DOTs including Dark Magic.  ar`,
        tagsId: [4, 1002, 9, 205],
		images: ['Kw_bloodmasters_iron_curtain_postevo.webp', 'Kw_bloodmasters_iron_curtain_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4521,
		name: "General's Father Gun",
        tagsId: [4, 1002, 8, 205],
		d: `30-60% Damage boost against enemies affected by Stun.
		30-50% Unblockable chance on basic attacks.
		150-600% Damage boost. Kold War Tower only.
		[SONYA BLADE] 10-30% Unblockable chance on all Special Attacks.
		[SONYA BLADE] [SET] If this is equipped alongside General's Knockout Gloves, any DIAMOND Sonya Blade gains 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 50% Chance to apply Shield Break on Special Attack 1.  w`,
		images: ['Kw_generals_father_gun_postevo.webp', 'Kw_generals_father_gun_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4522,
		name: "Missile Gap",
        tagsId: [4, 1002, 8, 205],
		d: `30-70% Critical Hit Chance boost.
		3-13% Chance a missile counter-attacks whenever hit by an opponent.
		150-600% Damage boost. Kold War Tower only.
		[Fusion Level X] Missile bombing applies Stun to an opponent for 3 seconds.  w`,
		images: ['Kw_missile_gap_postevo.webp', 'Kw_missile_gap_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4523,
		name: "Weather Warfare",
        tagsId: [4, 1002, 10, 205],
		d: `Frozen opponents remain frozen up for 2-4 successive hit.


		50-100% Chance to also apply Frostbite when freezing an opponent.
		
		
		75-225% Damage boost. Kold War Tower only.
		
		150-450% Max Health boost. Kold War Tower only.
		
		[Fusion Level X] A gust of wind Freezes tagged-in opponent.  acc`,
		images: ['Kw_weather_warfare_postevo.webp', 'Kw_weather_warfare_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4524,
		name: "Acid Dragon's Deathly Vial",
        tagsId: [4, 1002, 10, 206],
		d: `10-20% Power generation boost.
		40-70% Chance to gain 7% max Power for all teammates after the user successfully applies Poison or Bleed to an opponent.
		75-225% Damage boost. Sorcerer's Tower only.
		150-450% Max Health boost. Sorcerer's Tower only.
		[REPTILE] Basic attacks heal for 20-50% of damage done to opponents affected by Poison.
		[REPTILE] [SET] If this is equipped alongside Acid Dragon's Tekko-Kagi, any DIAMOND Reptile gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] Power Drain applied to the owner is reflected onto an opponent and is turned into Power Steal that grants 50% of draining Power. acc`,
		images: ['St_acid_dragons_deathly_vial_postEvo.webp', 'St_acid_dragons_deathly_vial_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4525,
		name: "Serpent Kusarigama",
        tagsId: [4, 1002, 8, 206],
		d: `50-100% Critical Hit Chance boost when below 40% Health.
		30-50% Chance to gain Speed increased for 5s after performing a Combo Ender.
		150-600% Damage boost. Sorcerer's Tower only.
		[Fusion Level X] Critical Hits have 70% chance to Vampire the damage when below 40% Health.  we`,
		images: ['SerpentKusarigama_postEvo.webp', 'SerpentKusarigama_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4526,
		name: "Soul Reaver's Servant",
        tagsId: [4, 1002, 8, 206],
		d: `10-20% Chance to apply Curse on Critical Hit.
		15-35% Damage boost against enemies affected by Cripple.
		150-600% Damage boost. Sorcerer's Tower only.
		[SHANG TSUNG] When Shang Tsung defeat an opponent, he and his teammates gain the defeated opponents remaining Power, distributing it equally among them.
		[SHANG TSUNG] [SET] If this is equipped alongside Soul Reaver's King Kobra Belt, any DIAMOND Shang Tsung gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] Curse debuffs can stack up 2 times. w`,
		images: ['SoulReaversServant_proEvo.webp', 'SoulReaversServant_proEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4527,
		name: "Varan Jacket",
        tagsId: [4, 1002, 9, 206],
		d: `15-35% Chance to dodge a Special Attack.
		40% Chance opponent's Basic Attack Critical Hit heal for 20-50% of incoming damage instead of dealing damage.
		300-1200% Max Health boost. Sorcerer's Tower only.
		[Fusion Level X] Damage from Special Attacks is reduced by 50%.  arm`,
		images: ['Varan_Jacket_postEvo.webp', 'Varan_Jacket_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4528,
		name: "Divine Argus Cloak",
        tagsId: [4, 1002, 9, 207],
		d: `25-55% Max Health boost.
		70-100% Chance to apply random negative effects to an opponent who performed a Block Breaker attack against user. Max 3 negative effects on the opponent simultaneously.
		300-1200% Max Health boost. Edenian Tower only.
		[RAIN] Whenever Rain applies Soaked there is 20-50% chance it spreads to the whole opponent team.
		[RAIN] [SET] If this is equipped alongside Divine Tornadic Pauldron, any DIAMOND Rain gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 15% Chance to gain Invulnerability for 5sec whenever affected by a negative effect. arm`,
		images: ['Divine_Argus_Cloak_postEvo.webp', 'Divine_Argus_Cloak_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4529,
		name: "Dynasty Mask of Madness",
        tagsId: [4, 1002, 10, 207],
		d: `20-40% Resistance to all debuffs.
		Power Drain, Weaken and Shield Break effects applied to the opponent are 15-35% more effective.
		75-225% Damage boost. Edenian Tower only.
		150-450% Max Health boost. Edenian Tower only.
		[KITANA] After a Special Attack performed against Kitana, she gains 50% Power generation boost.
		[KITANA] [SET] If this is equipped alongside Dynasty Parade Uniform, any DIAMOND Kitana gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 30% Chance perform Special Attack 1 with zero Power cost.  acc`,
		images: ['DynastyMaskofMadness_postEvo.webp', 'DynastyMaskofMadness_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4530,
		name: "King Jerrod's Spear",
        tagsId: [4, 1002, 8, 207],
		d: `0.5-1.5 Bar of starting Power.
		25-50% Chance to apply Snare on any Special Attack.
		150-600% Damage boost. Edenian Tower only.
		[Fusion Level X] 10% Chance Basic Attacks cause Lightning strike that deals 5% max Health damage to the opponent. wea`,
		images: ['King_Jerrod_s_Spear_postEvo.webp', 'King_Jerrod_s_Spear_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4531,
		name: "Princess Guard",
        tagsId: [4, 1002, 8, 207],
		d: `5-15% Lethal Blow Chance boost.
		Special Attack 2 applies Incurability debuff to whole opponent team for 5-15sec. Incurability cancels opponent's healing effects. Any healing, including Recovery, is also restricted while Incurability is active.
		150-600% Damage boost. Edenian Tower only.
		[Fusion Level X] When user applies Lethal Blow, next hit base damage is 150% higher. wea`,
		images: ['Princess_Guard_postEvo.webp', 'Princess_Guard_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4532,
		name: "Famous Fashion Dominator",
        tagsId: [4, 1002, 9, 208],
		d: `35-55% Max Health boost.
		40-70% Chance to apply Blind to an opponent for using a Special Attack against the user.
		300-1200% Max Health boost. Earthrealm Tower only.
		[JOHNNY CAGE] [SET] If this is equipped alongside Famous Dashing Smile, any DIAMOND Johnny Cage gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[JOHNNY CAGE] 5-10% Power generation boost after performing a successful Special Attack. Stackes up to 5 times.
		[Fusion Level X] Gain Energy Shield when below 80% Health. Energy Shield reduced all incoming damage when user loses health. The more Health is lost, the higher is Energy Shield damage reduction. Maximum reduction - 50% at 20% Health and below. ar`,
		images: ['Earth_famous_fashion_dominator_PostEvo.webp', 'Earth_famous_fashion_dominator_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4533,
		name: "Jinsei Hat",
        tagsId: [4, 1002, 10, 208],
		d: `30-50% Critical Hit chance boost.
		20% Chance to apply Weaken, Shield Break or Curse on a Critical Hit.
		75-225% Damage boost. Earthrealm Tower only.
		150-450% Max Health boost. Earthrealm Tower only.
		[Fusion Level X] Once per match, avoid death by automatically tagging out before the killing blow. After tag-out user gains 1000% Recovery for 7sec. This effect does not trigger if the killing blow is a Brutality.  acc`,
		images: ['Earth_jinsei_hat_PostEvo.webp', 'Earth_jinsei_hat_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4534,
		name: "The Torturer",
        tagsId: [4, 1002, 8, 208],
		d: `Debuffs applied to an opponent are 10-30% more powerful. This applies to Bleed, Fire, Poison, Blind, Weaken, Curse, Shield Break, Vampire, Power Drain, and Power Steal.
		50% Chance to apply Fire, Bleed or Poison on Combo Ender.
		150-600% Damage boost. Earthrealm Tower only.
		[Fusion Level X] 50% Chance to reflect any debuff back to an opponent. Team debuffs are not affected.  we`,
		images: ['Earth_the_torturer_PostEvo.webp', 'Earth_the_torturer_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4535,
		name: "Wushu Master's Guandao Blade",
        tagsId: [4, 1002, 8, 208],
		d: `50% Chance Basic Attacks deal 30-50% of damage to all opponents.
		10-30% Damage boost after tag-in for 15 seconds. All following damage boosts gained from this Equipment is 15% more powerful. Max 75% damage boost.
		150-600% Damage boost. Earthrealm Tower only.
		[KUNG LAO] Whenever opponent uses a Special Attack, gain 10-20% Critical Hit chance boost till the end of the match. Can stack up to 5 times.
		[KUNG LAO] [SET] If this is equipped alongside Wushu Master's True Weapon, any DIAMOND Kung Lao gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] Successful Special 2 Attacks apply Silence debuff for 15 seconds to the opposing team. Silence prevents the affected Characters from using Special Attack 1 and reduces their Power generation by 60%.  we`,
		images: ['Earth_wushu_masters_guandao_blade_PostEvo.webp', 'Earth_wushu_masters_guandao_blade_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4536,
		name: "Jinxed Whip",
        tagsId: [4, 1002, 8, 209],
		d: `25-45% Critical Hit chance boost.
		Apply Curse on Combo Ender for 10-20sec.
		150-600% Damage boost. Dark Queen's Tower only.
		[Fusion Level X] When an opponent affected by Curse performs a Special Attack, there is a 50% chance to reflect the damage and distribute it evenly to the whole enemy team.  we`,
		images: ['Dq_jinxed_whip_PostEvo.webp', 'Dq_jinxed_whip_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4537,
		name: "The Soul Seeker",
        tagsId: [4, 1002, 8, 209],
		d: `30-50% Chance to apply Death Mark on any Special Attack.
		The user Vampires 5-10% of the damage dealt on all attacks for each active Death Mark on an opponent.
		150-600% Damage boost. Dark Queen's Tower only.
		[Fusion Level X] When an opponent is affected by 3 Death Marks at once, there is a 50% chance to apply Stun on Combo Ender.  wea`,
		images: ['Dq_the_soul_seeker_PostEvo.webp', 'Dq_the_soul_seeker_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4538,
		name: "Wicked Sister's Sultry Gown",
        tagsId: [4, 1002, 9, 209],
		d: `40-100% Chance to apply Blind to an opponent after their tag-in.
		Gain Speed for 5-15sec upon applying Blind to an opponent.
		300-1200% Max health boost. Dark Queen's Tower only.
		[MILEENA] 20-40% Chance any negative effect successfully applied by an opponent to Mileena will grant her 0.5 Bar of power.
		[MILEENA] [SET] If this is equipped alongside Wicked Sister's Festive Mask, any DIAMOND Mileena gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] When in a fight against new opponent, reduce their max Health by 10% (5% for Bosses) and increase the user's max Health by the same amount until the end of the match. Summoned characters are not affected.  arm`,
		images: ['Dq_wicked_sisters_sultry_gown_PostEvo.webp', 'Dq_wicked_sisters_sultry_gown_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4539,
		name: "Wrestling Star's Last Puff",
		d: `30-40% Basic Attacks unblockable chance.
		50-100% Chance to gain Luck on Block Breaker attack.
		75-225% Damage boost. Dark Queen's Tower only.
		150-450% Max health boost. Dark Queen's Tower only.
		[JAX BRIGGS] Once per match, resurrect, instantly restore 50% Health, and gain 100-200% damage boost with a 30% chance to Power Steal on Basic Attacks for 20 sec. This effects does not trigger if the killing blow is a Brutality.
		[JAX BRIGGS] [SET] If this is equipped alongside Wrestling Star's Jaxophone, any DIAMOND Jax Briggs gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 50% Chance Critical Hit on Basic Attacks deals additional 1% max Health damage and inevitable exhausts 10% of opponent's max Power.  acc`,
        tagsId: [4, 1002, 10, 209],
		images: ['Dq_wrestling_stars_last_puff_PostEvo.webp', 'Dq_wrestling_stars_last_puff_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: [5],
				step: [1],
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: [8],
				step: [],
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
];

items.valueMap = items.reduce((obj, x) => (obj[x.id] = x, obj), {});

// const equipmentTriggering = [
// 	{
// 		id: 1,
// 		name: "Passive"
// 	},
// 	{
// 		id: 2,
// 		name: "At start"
// 	},
// 	{
// 		id: 3,
// 		name: "Tag In"
// 	},
// 	{
// 		id: 4,
// 		name: "While Tagged In"
// 	},
// 	{
// 		id: 5,
// 		name: "While Blocking"
// 	},
// 	{
// 		id: 5,
// 		name: "While Blocking Basic Attack"
// 	},
// 	{
// 		id: 5,
// 		name: "While Blocking Special Attack"
// 	},
// 	{
// 		id: 6,
// 		name: "When attack"
// 	},
// 	{
// 		id: 3,
// 		name: "My basic attack"
// 	},
// 	{
// 		id: 4,
// 		name: "My special attack 1"
// 	},
// 	{
// 		id: 4,
// 		name: "My special attack 2"
// 	},
// 	{
// 		id: 4,
// 		name: "My fatal blow"
// 	},
// 	{
// 		id: 3,
// 		name: "My critical attack"
// 	},
// 	{
// 		id: 3,
// 		name: "My critical attack"
// 	},
// ];


const characters = [
	{
		id: 1,
		name: "Johnny Cage"
	},
];



const towers = [
	{
		id: 1,
		name: "Tower of Horror",
	},
	{
		id: 2,
		name: "Lin Kuei Tower",
	},
	{
		id: 3,
		name: "Black Dragon Tower",
	},
	{
		id: 4,
		name: "Shirai Ryu Tower",
	},
	{
		id: 5,
		name: "Nightmare Tower",
	},
	{
		id: 6,
		name: "Kold War Tower",
	},
	{
		id: 7,
		name: "Edenian Tower",
	},
	{
		id: 8,
		name: "Earthrealm Tower",
	},
	{
		id: 9,
		name: "Dark Queen",
	},
]

