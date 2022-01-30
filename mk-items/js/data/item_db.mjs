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
        tagsId: [1, 5, 10],
		states: [
			{
				attributeId: [1, 2],				
				initValue: 20,
				step: 1,
				maxFusion: 10
			}		
		]
	},	
	{
		id: 1001,
		name: "Bracers",
        tagsId: [1, 5, 9],
		images: ['Bracers.webp', 'Bracers.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: 10,
				step: 1,
				maxFusion: 10
			}		
		]
	},
	{
		id: 1002,
		name: "Brawler Gloves",
        tagsId: [1, 5, 10],
		images: ['Brawler_Gloves.webp', 'Brawler_Gloves.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: 15,
				step: 1,
				maxFusion: 10
			}		
		]
	},
	{
		id: 1003,
		name: "Healing Herbs",
        tagsId: [1, 5, 10],
		images: ['Healing_Herbs.webp', 'Healing_Herbs.webp'],
		states: [
			{
				attributeId: [5],
				initValue: 10,
				step: 1,
				maxFusion: 10
			}		
		]
	},
	{
		id: 1004,
		name: "Hood",
        tagsId: [1, 5, 9],
		images: ['Hood.webp', 'Hood.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: 10,
				step: 1,
				maxFusion: 10
			}		
		]
	},		
	{
		id: 1005,
		name: "Medallion",
        tagsId: [1, 5, 10],
		images: ['Medallion.webp', 'Medallion.webp'],
		states: [
			{
				attributeId: [6, 7],				
				initValue: 20,
				step: 1,
				maxFusion: 10
			}		
		]
	},		
	{
		id: 1006,
		name: "Riot Gear",
        tagsId: [1, 5, 9],
		images: ['Riot_Gear.webp', 'Riot_Gear.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			}		
		]
	},
	{
		id: 1007,
		name: "Robes",
        tagsId: [1, 5, 10],
		images: ['Robes.webp', 'Robes.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			}		
		]
	},	
	{
		id: 1008,
		name: "Shuriken",
        tagsId: [1, 5, 8],
		images: ['Shuriken.webp', 'Shuriken.webp'],
		states: [
			{
				attributeId: [9],				
				initValue: 15,
				step: 1,
				maxFusion: 10
			}		
		]
	},	
	{
		id: 1009,
		name: "Sword",
        tagsId: [1, 5, 8],
		images: ['Sword.webp', 'Sword.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: 10,
				step: 1,
				maxFusion: 10,
			}		
		]
	},	
	
	// uncommon	
	{
		id: 2000,
		name: "Blood Stone Ring",
        tagsId: [2, 5, 10],
		images: ['Blood_Stone_Ring.webp', 'Blood_Stone_Ring.webp'],
		states: [
			{
				attributeId: [6, 7],				
				initValue: 30,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [6],				
				initValue: 30,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2001,
		name: "Combat Shotgun",
        tagsId: [2, 5, 8],
		images: ['Combat_Shotgun.webp', 'Combat_Shotgun.webp'],
		states: [
			{
				attributeId: [11],				
				initValue: 15,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [12, 13],				
				initValue: 30,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},		
	
	{
		id: 2002,
		name: "Draconic Shield",
        tagsId: [2, 5, 9],
		images: ['Draconic_Shield.webp', 'Draconic_Shield.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: 10,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [12, 13],				
				initValue: 30,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
    },
    {
		id: 2003,
		name: "Dragon Essence",
        tagsId: [2, 5, 10],
		images: ['Dragon_Essence.webp', 'Dragon_Essence.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2004,
		name: "Elemental Stones",
        tagsId: [2, 5, 10],
		images: ['Elemental_Stones.webp', 'Elemental_Stones.webp'],
		states: [
			{
				attributeId: [1, 2],				
				initValue: 30,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [17],				
				initValue: 30,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2005,
		name: "Executioner Axe",
        tagsId: [2, 5, 8],
		images: ['Executioner_Axe.webp', 'Executioner_Axe.webp'],
		states: [
			{
				attributeId: [18],				
				initValue: 15,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [4],				
				initValue: 30,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2006,
		name: "Gladiator Mask",
        tagsId: [2, 5, 9],
		images: ['Gladiator_Mask.webp', 'Gladiator_Mask.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: 20,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [1, 2],				
				initValue: 50,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2007,
		name: "Katana",
        tagsId: [2, 5, 8],
		images: ['Katana.webp', 'Katana.webp'],
		states: [
			{
				attributeId: [19],				
				initValue: 15,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [10],				
				initValue: 15,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2008,
		name: "Outworld Gear",
        tagsId: [2, 5, 9],
		images: ['Outworld_Gear.webp', 'Outworld_Gear.webp'],
		states: [
			{
				attributeId: [8],				
				initValue: 10,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [6, 7],				
				initValue: 50,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2009,
		name: "Soul Elixir",
        tagsId: [2, 5, 10],
		images: ['Soul_Elixir.webp', 'Soul_Elixir.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: 20,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [20],				
				initValue: 15,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2500,
		name: "Bone Claw",
        tagsId: [2, 7, 10, 200],
		images: ['BoneClaw_PostEvo.webp', 'BoneClaw_PostEvo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: 20,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},						
			{
				attributeId: [6, 7],				
				initValue: 50,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2501,
		name: "Demon Eye",
        tagsId: [2, 7, 10, 200],
		images: ['DemonEye_PostEvo.webp', 'DemonEye_PostEvo.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: 20,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},	
			{
				attributeId: [15],				
				initValue: 20,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2502,
		name: "Death Rattle",
        tagsId: [2, 7, 10, 200],
		images: ['DeathRattle_PostEvo.webp', 'DeathRattle_PostEvo.webp'],
		states: [
			{
				attributeId: [17],				
				initValue: 20,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [22],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [21],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},			
			{
				attributeId: [5],				
				initValue: 50,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	{
		id: 2503,
		name: "Kuai Liang's Bracers",
        tagsId: [2, 7, 10, 16, 201],
		images: ['Kuailiangbracers_postevo.webp', 'Kuailiangbracers_postevo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: 20,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [23],				
				initValue: 10,
				step: 4,
				maxFusion: 10
			},
			{
				attributeId: [24],				
				initValue: 20,
				step: 8,
				maxFusion: 10
			},
			{
				attributeId: [200],				
				initValue: 8,
				step: 0,
				maxFusion: 0,
				brutalityFor: 400,
			},
			{
				attributeId: [100],				
				initValue: 20,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}			
		]
	},

	{
		id: 2504,
		name: "Ice Bomb",
        tagsId: [2, 7, 10, 201],
		images: ['Icebomb_postevo.webp', 'Icebomb_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 10,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [23],				
				initValue: 10,
				step: 4,
				maxFusion: 10
			},
			{
				attributeId: [24],				
				initValue: 20,
				step: 8,
				maxFusion: 10
			},
			{
				attributeId: [101],				
				initValue: 100,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2505,
		name: "Frozen Mummy",
        tagsId: [2, 7, 10, 201],
		images: ['Frozenmummy_postevo.webp', 'Frozenmummy_postevo.webp'],
		states: [
			{
				attributeId: [102],				
				initValue: 50,
				step: 5,
				maxFusion: 10
			},
			{
				attributeId: [23],				
				initValue: 10,
				step: 4,
				maxFusion: 10
			},
			{
				attributeId: [24],				
				initValue: 20,
				step: 8,
				maxFusion: 10
			},			
			{
				attributeId: [20],				
				initValue: 15,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2506,
		name: "Black Dragon Sword",
        tagsId: [2, 7, 8, 202],
		images: ['BlackDragonSword_postEvo.webp', 'BlackDragonSword_postEvo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: 20,
				step: 3,
				maxFusion: 10
			},
			{
				attributeId: [25],				
				initValue: 20,
				step: 13,
				maxFusion: 10
			},
			{
				attributeId: [8],				
				initValue: 20,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2507,
		name: "Dragon Teeth",
        tagsId: [2, 7, 8, 202],
		images: ['DragonTeeth_postEvo.webp', 'DragonTeeth_postEvo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: 20,
				step: 6,
				maxFusion: 10
			},
			{
				attributeId: [25],				
				initValue: 20,
				step: 13,
				maxFusion: 10
			},			
			{
				attributeId: [103],				
				initValue: 75,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2508,
		name: "Kobra's Boxing Gloves",
        tagsId: [2, 7, 8, 202],
		images: ['KobrasBoxingGloves_postEvo.webp', 'KobrasBoxingGloves_postEvo.webp'],
		states: [
			{
				attributeId: [1, 2],				
				initValue: 30,
				step: 5,
				maxFusion: 10
			},
			{
				attributeId: [25],				
				initValue: 20,
				step: 13,
				maxFusion: 10
			},		
			{
				attributeId: [4],				
				initValue: 50,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2509,
		name: "Fire Garden Bell",
        tagsId: [2, 7, 10, 203],
		images: ['Srt_fire_garden_bell_PostEvo.webp', 'Srt_fire_garden_bell_PostEvo.webp'],
		states: [
			{
				attributeId: [10],				
				initValue: 10,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [27],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [28],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},				
			{
				attributeId: [104],				
				initValue: 100,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2510,
		name: "Survivor Memories",
        tagsId: [2, 7, 10, 203],
		images: ['Srt_survivor_memories_PostEvo.webp', 'Srt_survivor_memories_PostEvo.webp'],
		states: [
			{
				attributeId: [105],				
				initValue: 30,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [27],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [28],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},	
			{
				attributeId: [4],				
				initValue: 50,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2511,
		name: "Secret Scrolls",
        tagsId: [2, 7, 10, 203],
		images: ['Srt_secret_scrolls_PostEvo.webp', 'Srt_secret_scrolls_PostEvo.webp'],
		states: [
			{
				attributeId: [3],				
				initValue: 20,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [27],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [28],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [106],				
				initValue: 100,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2512,
		name: "Trophy Collection",
        tagsId: [2, 7, 10, 204],
		images: ['Nt_trophy_collection_post.webp', 'Nt_trophy_collection_post.webp'],
		states: [
			{
				attributeId: [7],				
				initValue: 30,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [29],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [30],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [107],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10,
				onlyFor: [401]
			}				
		]
	},
	{
		id: 2513,
		name: "Jump Rope Song",
        tagsId: [2, 7, 10, 204],
		images: ['Nt_jump_rope_song_post.webp', 'Nt_jump_rope_song_post.webp'],
		states: [
			{
				attributeId: [103],				
				initValue: 20,
				step: 3,
				maxFusion: 10
			},
			{
				attributeId: [29],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [30],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [108],				
				initValue: 30,
				step: 0,
				maxFusion: 10,
				reqFusion: 10,
				onlyFor: [402]
			}				
		]
	},
	{
		id: 2514,
		name: "Family Tools",
        tagsId: [2, 7, 10, 204],
		images: ['Nt_family_tools_post.webp', 'Nt_family_tools_post.webp'],
		states: [
			{
				attributeId: [2],				
				initValue: 35,
				step: 4,
				maxFusion: 10
			},
			{
				attributeId: [29],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [30],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [109],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2515,
		name: "Bayonet",
        tagsId: [2, 7, 10, 205],
		images: ['Kw_bayonet_postevo.webp', 'Kw_bayonet_postevo.webp'],
		states: [
			{
				attributeId: [103],				
				initValue: 10,
				step: 3,
				maxFusion: 10
			},
			{
				attributeId: [31],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [32],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [10],				
				initValue: 20,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2516,
		name: "Deadly Icicles",
        tagsId: [2, 7, 10, 205],
		images: ['Kw_deadly_icicle_postevo.webp', 'Kw_deadly_icicle_postevo.webp'],
		states: [
			{
				attributeId: [4],				
				initValue: 20,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [31],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [32],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [110],				
				initValue: 100,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2517,
		name: "Ushanka",
        tagsId: [2, 7, 10, 205],
		images: ['Kw_ushanka_postevo.webp', 'Kw_ushanka_postevo.webp'],
		states: [
			{
				attributeId: [111],				
				initValue: 10,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [31],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [32],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [112],				
				initValue: 25,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
	{
		id: 2518,
		name: "Ouroboros Ring",
        tagsId: [2, 7, 10, 206],
		images: ['Ouroboros_Ring_postEvo.webp', 'Ouroboros_Ring_postEvo.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: 40,
				step: 6,
				maxFusion: 10
			},
			{
				attributeId: [33],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [34],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [113],				
				initValue: 75,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2519,
		name: "Salamander Gloves",
        tagsId: [2, 7, 10, 206],
		d: `30-100% Combo Ender damage boost.
		10-80% Damage boost. Sorcerer's Tower only.		
		20-160% Max health boost. Sorcerer's Tower only.
		[Fusion Level X] Damage from Poison, Bleed and Fire DOTs is increased by 25%.  acc`,
		images: ['Salamander_Gloves_postEvo.webp', 'Salamander_Gloves_postEvo.webp'],
		states: [
			{
				attributeId: [114],				
				initValue: 30,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [33],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [34],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [115],				
				initValue: 25,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2520,
		name: "Snake Fang",
        tagsId: [2, 7, 10, 206],
		images: ['SnakeFang_postEvo.webp', 'SnakeFang_postEvo.webp'],
		states: [
			{
				attributeId: [116],				
				initValue: 10,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [33],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [34],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [16],				
				initValue: 35,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2521,
		name: "Edenian Pie",
        tagsId: [2, 7, 10, 207],
		images: ['EdenianPie_postEvo.webp', 'EdenianPie_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 10,
				step: 0.5,
				maxFusion: 10
			},
			{
				attributeId: [35],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [36],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [118],				
				initValue: 25,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2522,
		name: "Royal Wine",
        tagsId: [2, 7, 10, 207],
		images: ['Royal_Wine_postEvo.webp', 'Royal_Wine_postEvo.webp'],
		states: [
			{
				attributeId: [119],				
				initValue: 10,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [35],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [36],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [9],				
				initValue: 20,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2523,
		name: "Traitor's Wreath",
        tagsId: [2, 7, 10, 207],
		images: ['Traitors_Wreath_postEvo.webp', 'Traitors_Wreath_postEvo.webp'],
		states: [
			{
				attributeId: [5],				
				initValue: 40,
				step: 6,
				maxFusion: 10
			},
			{
				attributeId: [35],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [36],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},
			{
				attributeId: [120],				
				initValue: 40,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2524,
		name: "Cyberpack 2007",
        tagsId: [2, 7, 10, 208],
		images: ['Earth_cyberpack_2007_PostEvo.webp', 'Earth_cyberpack_2007_PostEvo.webp'],
		states: [
			{
				attributeId: [121],				
				initValue: 10,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [37],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [38],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [122],				
				initValue: 0.5,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2525,
		name: "Jiaozi",
        tagsId: [2, 7, 10, 208],
		images: ['Earth_jiaozi_PostEvo.webp', 'Earth_jiaozi_PostEvo.webp'],
		states: [
			{
				attributeId: [103],				
				initValue: 10,
				step: 3,
				maxFusion: 10
			},
			{
				attributeId: [37],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [38],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},	
			{
				attributeId: [123],				
				initValue: 10,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2526,
		name: "Peaceful Mind",
        tagsId: [2, 7, 10, 208],
		images: ['Earth_peaceful_mind_PostEvo.webp', 'Earth_peaceful_mind_PostEvo.webp'],
		states: [
			{
				attributeId: [17],				
				initValue: 20,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [37],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [38],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [20],				
				initValue: 15,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2527,
		name: "Bloody Mary",
        tagsId: [2, 7, 10, 209],
		images: ['Dq_bloody_mary_PostEvo.webp', 'Dq_bloody_mary_PostEvo.webp'],
		states: [
			{
				attributeId: [124],				
				initValue: 10,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [39],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [40],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [125],				
				initValue: 20,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2528,
		name: "Tiara of the Damned",
        tagsId: [2, 7, 10, 209],
		d: `Take 20-30% less damage from all attacks when blocking.
		10-80% Damage boost. Dark Queen's Tower only.		
		20-160% Max health boost. Dark Queen's Tower only.		
		[Fusion Level X] 40% Chance to reflect all damage and combat effects from an opponent's combo ender.  acc`,
		images: ['Dq_tiara_of_the_damned_PostEvo.webp', 'Dq_tiara_of_the_damned_PostEvo.webp'],
		states: [
			{
				attributeId: [126],				
				initValue: 20,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [39],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [40],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},			
			{
				attributeId: [127],				
				initValue: 40,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 2529,
		name: "Toxic Fruit",
        tagsId: [2, 7, 10, 209],
		images: ['Dq_toxic_fruit_PostEvo.webp', 'Dq_toxic_fruit_PostEvo.webp'],
		states: [
			{
				attributeId: [128],				
				initValue: 10,
				step: 2,
				maxFusion: 10
			},
			{
				attributeId: [39],				
				initValue: 10,
				step: 7,
				maxFusion: 10
			},
			{
				attributeId: [40],				
				initValue: 20,
				step: 14,
				maxFusion: 10
			},	
			{
				attributeId: [129],				
				initValue: 50,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},

	// rares
	{
		id: 3000,
		name: "Bladed Fan",
		d: `25-45% Unblockable chance on basic attacks.

		[KITANA] 15-25% Chance to reflect 100% Special Attack damage when blocking.
		
		[Fusion Level X] 25% Chance to convert 50% damage to health on Special Attack 1.  wea`,
        tagsId: [2, 5, 10],
		images: ['Bladed_Fan_FX.webp', 'Bladed_Fan_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3001,
		name: "Bladed Hat",
        tagsId: [2, 5, 10],
		d: `25-45% Toughness boost.

		[KUNG LAO] 20-40% Special Attack 1 damage boost.
		
		[Fusion Level X] 25% Chance to reflect 100% basic attack damage when blocking.  arm`,
		images: ['Bladed_Hat_FX.webp', 'Bladed_Hat_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3002,
		name: "Bladed Whips",
        tagsId: [2, 5, 10],
		d: `5-15% X-Ray/Fatal Blow attack damage boost.

		[TAKEDA] 5-15% Damage Boost.
		
		[Fusion Level X] 25% Chance to apply Bleed to the active enemy at the start of the match.  wea`,
		images: ['Whips_takeda_post.webp', 'Whips_takeda_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3003,
		name: "Bo' Rai Cho's Flask",
		d: `15-25% Critical Hit Chance Boost.

		[BO' RAI CHO] 5-15% Damage Boost.
		
		[Fusion Level X] 25% Chance to apply Cripple to the active enemy at the start of the match. wea`,
        tagsId: [2, 5, 10],
		images: ['Boraicho_flask_post.webp', 'Boraicho_flask_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3004,
		name: "Body Armor",
		d: `25-45% Toughness boost.

		[CASSIE CAGE] 30-50% Resistance to all Debuffs.
		
		[Fusion Level X] 50% Opponent Critical Hit Chance reduction.`,
        tagsId: [2, 5, 10],
		images: ['Body_Armor_FX.webp', 'Body_Armor_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3005,
		name: "Bojutsu Staff",
        tagsId: [2, 5, 10],
		d: `15-25% Critical Hit Chance Boost.

		[JADE] Every missed attack boosts Jade's attack power by 10-60%.
		
		[Fusion Level X] 25% Damage boost against enemies affected by Bleed or Poison. wea`,
		images: ['Bojutsu_Staff_FX.webp', 'Bojutsu_Staff_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3006,
		name: "Bound Demon",
		d: `10-20% Power generation boost.

		[QUAN CHI] 15-25% Reduced Power cost on all Special Attacks.
		
		[Fusion Level X] 25% Chance to transfer 50% damage to health on Special Attack 2.  acc`,
        tagsId: [2, 5, 10],
		images: ['Bound_Demon_FX.webp', 'Bound_Demon_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3007,
		name: "Combat Knife",
        tagsId: [2, 5, 10],
		d: `30-50% Basic attack damage boost.

		[KANO] 10-20% Special Attack 3 or X-Ray/Fatal Blow attack damage boost.
		
		[Fusion Level X] 15% Damage boost. Faction Wars Only.  we`,
		images: ['Combat_Knife_FX.webp', 'Combat_Knife_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3008,
		name: "Cyber Armor",
        tagsId: [2, 5, 10],
		d: `15-35% Self heal at the end of Special Attack 3 or X-Ray/Fatal Blow attack.

		[TRIBORG] 30-50% Resistance to all Debuffs.
		
		[Fusion Level X] 25% Basic attack damage boost.  arm`,
		images: ['Cyber_Armor_FX.webp', 'Cyber_Armor_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3009,
		name: "Cybernetic Arm",
        tagsId: [2, 5, 10],
		d: `25-45% Toughness boost.

		[JAX BRIGGS] 20-30% Chance to reflect 100% Special Attack damage when blocking.
		
		[Fusion Level X] 25% Chance to reflect 100% basic attack damage when blocking.  arm`,
		images: ['Cybernetic_Arm_FX.webp', 'Cybernetic_Arm_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3010,
		name: "Dragon Fangs",
        tagsId: [2, 5, 10],
		d: `5-15% X-Ray/Fatal Blow attack damage boost.

		[GORO] 5-15% Damage Boost.
		
		[Fusion Level X] 25% Chance to apply Bleed to the active enemy at the start of the match.  acc`,
		images: ['Goro_dragon_fangs_post.webp', 'Goro_dragon_fangs_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3011,
		name: "Earth Elemental Facemask",
        tagsId: [2, 5, 10],
		d: `20-30% Resistance to all Debuffs.

		[TREMOR] 10-20% Chance to convert 50% damage to health on Special Attack 1.
		
		[Fusion Level X] 20% Power generation boost.  arm`,
		images: ['Facemask_tremor_post.webp', 'Facemask_tremor_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3012,
		name: "Femme Fatale Comb",
        tagsId: [2, 5, 10],
		d: `15-35% Max health boost.

		[SINDEL] 1 Additional counter-attack for Sindel. Second additional counter-attack unlocks at Fusion X.
		
		[Fusion Level X] 25% Chance to convert 50% damage to health on Special Attack 1.  acc`,
		images: ['Femme_fatale_comb_sindel_PostEvo.webp', 'Femme_fatale_comb_sindel_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3013,
		name: "Freddy's Glove",
		d: `15-25% Critical Hit Chance Boost.

		[FREDDY KRUEGER] 20-100% Chance to enter a 2nd Opponent into a Nightmare.
		
		[Fusion Level X] 20% Damage boost. Faction Wars Only. we`,
        tagsId: [2, 5, 10],
		images: ['Freddys_Glove_FX.webp', 'Freddys_Glove_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3014,
		name: "Grim Essence",
        tagsId: [2, 5, 10],
		d: `10-20% Power generation boost.

		[NOOB SAIBOT] Death Mark lasts 5-10s longer.
		
		
		[Fusion Level X] 50% Critical Hit Chance boost against enemies affected by Bleed. acc`,
		images: ['Grim_FX.webp', 'Grim_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3015,
		name: "Hockey Mask",
		d: `15-35% Max health boost.

		[JASON VOORHEES] 30-50% Resistance to all Debuffs.
		
		
		[Fusion Level X] 25% Chance to reflect 100% basic attack damage when blocking.  arm`,
        tagsId: [2, 5, 10],
		images: ['Hockey_Mask_FX.webp', 'Hockey_Mask_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3016,
		name: "Ice Daggers",
        tagsId: [2, 5, 10],
		d: `30-50% Basic attack damage boost.

		[SUB-ZERO] 30-50% Chance to convert 50% damage to health on Special Attack 2.
		
		
		[Fusion Level X] 50% Critical Hit Chance boost against enemies affected by Freeze.  wea`,
		images: ['Ice_Daggers_FX.webp', 'Ice_Daggers_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3017,
		name: "Killer Wasp",
		d: `25-45% Recovery boost.

		[D'VORAH] 20-30% Special Attack 1 and 2 unblockable chance.
		
		
		[Fusion Level X] 25% Damage boost against enemies affected by Bleed or Poison. acc`,
        tagsId: [2, 5, 10],
		images: ['Killer_Wasp_FX.webp', 'Killer_Wasp_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3018,
		name: "Kintaro's Tiger's Eye",
        tagsId: [2, 5, 10],
		d: `30-50% Basic attack damage boost.

		[KINTARO] 10-20% Chance to apply Bleed DOT on basic attacks that does 11.5% damage.
		
		[Fusion Level X] 25% Damage boost against enemies affected by Bleed or Poison. wea`,
		images: ['Kintaro_tigerseye_post.webp', 'Kintaro_tigerseye_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3019,
		name: "Kobu Jutsu Blades",
		d: `30-50% Basic attack damage boost.

		[TANYA] 20-30% Special Attack 1 and 2 unblockable chance.
		
		
		[Fusion Level X] 25% Chance to convert 50% damage to health on Special Attack 1.  we`,
        tagsId: [2, 5, 10],
		images: ['Kobu_Jutsu_FX.PNG.webp', 'Kobu_Jutsu_FX.PNG.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3020,
		name: "Military Vest",
        tagsId: [2, 5, 10],
		d: `15-35% Max health boost.

		[SONYA BLADE] 10-20% Self heal at the end of Special Attack 3 or X-Ray/Fatal Blow attack.
		
		
		[Fusion Level X] 50% Opponent Critical Hit Chance reduction.  arm`,
		images: ['Military_Vest_FX.webp', 'Military_Vest_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3021,
		name: "Ninja Yoroi",
        tagsId: [2, 5, 10],
		d: `15-35% Max health boost.

		[SMOKE] 30-50% Resistance to all Debuffs.
		
		
		[Fusion Level X] 35% Damage boost against enemies affected by Blind. arm`,
		images: ['Yoroi_FX.webp', 'Yoroi_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3022,
		name: "Power Glove",
        tagsId: [2, 5, 10],
		d: `15-35% Max health boost.

		[JACQUI BRIGGS] 25-35% Basic attack damage boost.
		
		
		[Fusion Level X] 25% Chance to reflect 100% basic attack damage when blocking.  arm`,
		images: ['Power_Glove_FX.webp', 'Power_Glove_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3023,
		name: "Razor Sai",
        tagsId: [2, 5, 10],
		d: `15-25% Critical Hit Chance Boost.

		[MILEENA] 30-50% Chance to convert 50% damage to health on Special Attack 2.
		
		
		[Fusion Level X] 25% Damage boost against enemies affected by Bleed or Poison.  we`,
		images: ['Razor_Sai_FX.webp', 'Razor_Sai_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3024,
		name: "Red Headband",
        tagsId: [2, 5, 10],
		d: `25-45% Recovery boost.

		[LIU KANG] 25-35% Unblockable chance on basic attacks.
		
		
		[Fusion Level X] 20% Power generation boost. acc`,
		images: ['Red_Headband_FX.webp', 'Red_Headband_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3025,
		name: "Respirator",
		d: `Critical damage received is reduced by 25-50%.

		[KABAL] 10-30% Health Regen over 5-15s after X-Ray/Fatal Blow attacks.
		
		[Fusion Level X] Lethal Blow damage received is reduced by 75%. arm`,
        tagsId: [2, 5, 10],
		images: ['Respirator_kabal_post.webp', 'Respirator_kabal_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3026,
		name: "Revolvers",
        tagsId: [2, 5, 10],
		d: `25-45% Unblockable chance on basic attacks.

		[ERRON BLACK] 10-20% Special Attack 1 and 2 damage boost.
		
		
		[Fusion Level X] 25% Critical Hit Chance boost.  we`,
		images: ['Revolvers_FX.webp', 'Revolvers_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3027,
		name: "Rusty Chainsaw",
        tagsId: [2, 5, 10],
		d: `25-45% Unblockable chance on basic attacks.

		[LEATHERFACE] Enrage duration increased by 1-5s.
		
		[Fusion Level X] 50% Reduced Power cost on Special Attack 2. we`,
		images: ['Rustychainsaw_leatherface_post.webp', 'Rustychainsaw_leatherface_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3028,
		name: "Sacrificial Knife",
        tagsId: [2, 5, 10],
		d: `30-50% Basic attack damage boost.

		[KOTAL KAHN] 30-50% Chance to drain 33% Power on Special Attack 2.
		
		
		[Fusion Level X] 25% Damage boost against enemies affected by Bleed or Poison.  we`,
		images: ['Sacrificial_Knife_FX.webp', 'Sacrificial_Knife_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3029,
		name: "Saurian Armor",
		d: `15-35% Max health boost.

		[REPTILE] 10-20% Self heal at the end of Special Attack 3 or X-Ray/Fatal Blow attack.
		
		
		[Fusion Level X] 50% Recovery boost.  ar`,
        tagsId: [2, 5, 10],
		images: ['Saurian_Armor_FX.PNG.webp', 'Saurian_Armor_FX.PNG.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3030,
		name: "Sento Blade",
        tagsId: [2, 5, 10],
		d: `25-45% Unblockable chance on basic attacks.

		[KENSHI] 10-20% Special Attack 3 or X-Ray/Fatal Blow attack damage boost.
		
		
		[Fusion Level X] 15% Damage boost. Faction Wars Only. we`,
		images: ['Sento_Blade_FX.PNG.webp', 'Sento_Blade_FX.PNG.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3031,
		name: "Shao Kahn's Helmet",
        tagsId: [2, 5, 10],
		d: `5-40% Critical Hit Chance Boost.

		[SHAO KAHN] 1 Bar of starting Power.
		
		[SHAO KAHN] If this is equipped alongside Wrath Hammer, Shao Kahn gains an additional 4th bar of Power!
		
		
		[Fusion Level X] 35% Max health boost.  ar`,
		images: ['Helmet_shaokahn_postevo.webp', 'Helmet_shaokahn_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3032,
		name: "Shaolin Bow",
        tagsId: [2, 5, 10],
		d: `15-25% Critical Hit Chance Boost.

		[KUNG JIN] 30-50% Chance to drain 33% Power on Special Attack 2.
		
		
		[Fusion Level X] 25% Damage boost against enemies affected by Bleed or Poison.  we`,
		images: ['Shaolin_Bow_FX.webp', 'Shaolin_Bow_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3033,
		name: "Shinnok's Amulet",
        tagsId: [2, 5, 10],
		d: `25-45% Recovery boost.

		[SHINNOK] 10-20% Power generation boost.
		
		
		[Fusion Level X] 25% Chance to convert 50% damage to health on Special Attack 2.  acc`,
		images: ['Shinnoks_Amulet_FX.webp', 'Shinnoks_Amulet_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3034,
		name: "Shirai Ryu Kunai",
        tagsId: [2, 5, 10],
		images: ['Shirai_Ryu_Kunai_FX.webp', 'Shirai_Ryu_Kunai_FX.webp'],
		d: `15-25% Critical Hit Chance Boost.
		[SCORPION] 20-30% Special Attack 1 and 2 unblockable chance.
		
		
		[Fusion Level X] 50% Damage boost against enemies affected by Stun or Slow. wea`,
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3035,
		name: "Soulsnake Arms",
        tagsId: [2, 5, 10],
		d: `5-15% X-Ray/Fatal Blow attack damage boost.


		[SHANG TSUNG] Transfer 5-25% damage to Health on all attacks against enemies affected by Weaken, Bleed or Fire.
		
		
		[Fusion Level X] Gain invincibility for 3s after the user performs X-ray/Fatal Blow.  acc`,
		images: ['Soulsnake_FX.webp', 'Soulsnake_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3036,
		name: "Soul Medallion",
        tagsId: [2, 5, 10],
		d: `10-20% Power generation boost.


		[ERMAC] 10-20% Self heal at the end of Special Attack 3 or X-Ray/Fatal Blow attack.
		
		
		[Fusion Level X] 50% Reduced Power cost on Special Attack 2. acc`,
		images: ['Soul_Medallion_FX.webp', 'Soul_Medallion_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},
	{
		id: 3037,
		name: "Storm Hat",
        tagsId: [2, 5, 10],
		d: `25-45% Toughness boost.


		[RAIDEN] 10-20% X-Ray/Fatal Blow attack damage boost.
		
		
		[Fusion Level X] 20% Power generation boost.  ar`,
		images: ['Storm_Hat_FX.webp', 'Storm_Hat_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},


    {
		id: 3038,
		name: "Subtle Tattoo",
		d: `25-45% Recovery boost.


		[JOHNNY CAGE] 40-60% Basic attack damage boost.
		
		
		[Fusion Level X] 50% Reduced Power cost on Special Attack 2.  acc`,
        tagsId: [2, 5, 10],
		images: ['Subtle_Tattoo_FX.webp', 'Subtle_Tattoo_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3039,
		name: "T-800 Endoskeleton Arm",
        tagsId: [2, 5, 10],
		d: `15-35% Max health boost.

		[TERMINATOR] 40-60% Basic attack damage boost.
		
		[Fusion Level X] 50% Reduced Power cost on Special Attack 2. acc`,
		images: ['T-800_FX.webp', 'T-800_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3040,
		name: "Tarkatan Gi",
        tagsId: [2, 5, 10],
		d: `25-45% Recovery boost.
		[BARAKA] 20-30% Chance to apply Bleed to the active enemy at the start of the match.
		[Fusion Level X] 25% Chance to convert 50% damage to health on Special Attack 1.  ar`,
		images: ['Tarkatan_Gi_FX.webp', 'Tarkatan_Gi_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3041,
		name: "Thunderblade",
        tagsId: [2, 5, 10],
		d: `30-50% Basic attack damage boost.
		[RAIN] 10-30% Damage boost against enemies affected by Bleed, Fire or Poison.
		[Fusion Level X] 50% Reduced power cost on Special Attack 2.  we`,
		images: ['Thunderblade_FX.webp', 'Thunderblade_FX.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3042,
		name: "Tribal Headband",
        tagsId: [2, 5, 10],
		d: `25-35% Unblockable chance on basic attacks.

		[NIGHTWOLF] 10-30% Chance to apply Snare on Block Breaker.
		
		[Fusion Level X] Slow, Snare, Shield Break, and Cripple last 30% longer.  acc`,
		images: ['Tribal_headband_nightwolf_PostEvo.webp', 'Tribal_headband_nightwolf_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3043,
		name: "Vial of Infinite Blood",
        tagsId: [2, 5, 10],
		d: `25-35% Unblockable chance on basic attacks.

		[SKARLET] Skarlet is healed when Bleed Effects for 50-100% of Bleed damage.
		
		[Fusion Level X] 50% Chance to apply Bleed on Combo Ender. acc`,
		images: ['VialsOfInfiniteBlood_PostEvo.webp', 'VialsOfInfiniteBlood_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	

	/* Tower rares */

    {
		id: 3500,
		name: "Witch's Ward",
        tagsId: [2, 5, 10],
		d: `45-95% Resistance to Fire.

		30-50% Recovery boost.
		
		80-600% Max Health boost. Tower of Horror only.
		
		[Fusion Level X] 25% Power generation boost. arm`,
		images: ['WitchsWard_PostEvo.webp', 'WitchsWard_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3501,
		name: "Meat's Cleaver",
		d: `On tag-in, Meat’s Cleaver is tossed at the opponent, dealing 100-500% of its base damage.

		20-30% Critical Hit Chance Boost.
		
		20-150% Damage boost. Tower of Horror only.
		
		40-300% Health boost. Tower of Horror only.
		
		[Fusion Level X] On tag-in, Meat's Cleaver's attack has 100% Critical Hit Chance. acc`,
        tagsId: [2, 5, 10],
		images: ['Meatscleaver_postevo.webp', 'Meatscleaver_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3502,
		name: "Bloodsucker",
        tagsId: [2, 5, 10],
		d: `Basic attacks heal for 25-75% of damage done to opponents affected by Bleed.

		15-25% Power generation boost.
		
		20-150% Damage boost. Tower of Horror only.
		
		40-300% Health boost. Tower of Horror only.
		
		[Fusion Level X] 25% Damage boost against enemies affected by Bleed. acc`,
		images: ['Bloodsucker_PostEvo.webp', 'Bloodsucker_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3503,
		name: "Cryomancer Armor",
        tagsId: [2, 5, 10],
		d: `20-40% Chance to reflect 50% Special Attack damage when blocking.

		At the start of the match apply Ice Armor for 5-25s.
		
		60-500% Max health boost. Lin Kuei Tower only.
		
		[Fusion Level X] 25% Chance to reflect 25% basic attack damage when blocking. arm`,
		images: ['Cryomancerarmor_postevo.webp', 'Cryomancerarmor_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3504,
		name: "Frost Axe",
        tagsId: [2, 5, 10],
		d: `60-80% Basic attack damage boost against enemies affected by Frostbite.

		30-250% Damage boost. Lin Kuei Tower only.
		
		[SUB-ZERO] 30-50% Chance to apply Frostbite on enemy on Special Attack 1.
		
		[Fusion Level X] 50% Unblockable chance on basic attacks. wea`,
		images: ['Frostaxe_postevo.webp', 'Frostaxe_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3505,
		name: "Ice Gloves",
        tagsId: [2, 5, 10],
		d: `None 	

		20-40% Basic attack damage boost.
		
		30-50% Chance to apply Strengthen to the owner after Freezing an opponent.
		
		60-500% Max health boost. Lin Kuei Tower only.
		
		[Fusion Level X] 50% Opponent Critical Hit Chance reduction. ar`,
		images: ['Icegloves_postevo.webp', 'Icegloves_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3506,
		name: "Nomad's Deadly Vapors",
        tagsId: [2, 5, 10],
		d: `20-80% Chance to apply Poison for 6 seconds to the active enemy at the start of the match when equipped on active fighter.

		10-25% Chance to apply Poison to the enemy after gaining Speed.
		
		15-155% Damage boost. Black Dragon Tower only.
		
		30-310% Health boost. Black Dragon Tower only.
		
		[KABAL] [SET] If this is equipped along with Nomad's Buzz Saw, Diamond Character gains a 40% chance to perform a Special Combo Ender dealing massive damage. If it is the last opponent and they are under 25% health, Character performs a Brutality instead, ending the fight immediately.
		
		[Fusion Level X] 40% Damage boost against enemies affected by Poison. acc`,
		images: ['DeadlyVapors_postEvo.webp', 'DeadlyVapors_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3507,
		name: "Scoundrel's Elbow Blades",
		d: `50-100% Chance to apply Bleed when Cripple or Weaken is applied.

		30-80% Basic damage boost against opponents with less than 30% Health.
		
		15-155% Damage boost. Black Dragon Tower only.
		
		30-310% Health boost. Black Dragon Tower only.
		
		[KANO] [SET] If this is equipped with another 1 card from Scoundrel's set, Diamond Character gains a 40% chance to perform a Special Combo Ender dealing massive damage. If it is the last opponent and they are under 25% health, Kano performs a Brutality instead, ending the fight immediately.
		
		[Fusion Level X] 100% Critical Damage boost when user is below 50% Health. acc`,
        tagsId: [2, 5, 10],
		images: ['ElbowBlades_postEvo.webp', 'ElbowBlades_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3508,
		name: "Stone Fists",
        tagsId: [2, 5, 10],
		d: `10-20% Attack boost.

		35-285% Damage boost. Black Dragon Tower only.
		
		[TREMOR] 10-20% Chance to apply Stun on Combo Ender for 3 seconds.
		
		[Fusion Level X] 100% Critical Hit Chance boost against stunned enemies. wea`,
		images: ['StoneFists_postEvo.webp', 'StoneFists_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3509,
		name: "Specter's Infernal Chains",
        tagsId: [2, 5, 10],
		d: `50-100% Chance to drain 33% Power on Special Attack 1.

		10-40% Fire Damage boost.
		
		40-300% Max health boost. Shirai Ryu Tower only.
		
		20-150% Damage boost. Shirai Ryu Tower only.
		
		[SCORPION] [SET] If this is equipped alongside Specter's Burning Vengeance, any DIAMOND Scorpion gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		[Fusion Level X] [SCORPION, SMOKE] 50% Chance opponent is immediately pulled back with a Spear and stunned when tagging out. acc`,
		images: ['Srt_specters_infernal_chains_PostEvo.webp', 'Srt_specters_infernal_chains_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3510,
		name: "Champion's Leather Bracers",
        tagsId: [2, 5, 10],
		d: `300-1200% Recovery boost.

		30-75% Chance of Lethal Blow immunity.
		
		80-600% Max health boost. Shirai Ryu Tower only.
		
		[LIU KANG] [SET] If this is equipped alongside Champion's Nunchaku, any DIAMOND Liu Kang gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		[Fusion Level X] 50% Damage boost when wearer is affected by Fire. arm`,
		images: ['Srt_champions_leather_bracers_PostEvo.webp', 'Srt_champions_leather_bracers_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3511,
		name: "Muramasa Blades",
        tagsId: [2, 5, 10],
		d: `25-45% Unblockable chance on basic attacks.

		10-20% Attack boost.
		
		40-300% Damage boost. Shirai Ryu Tower Only.
		
		[Fusion Level X] 125% Combo Ender damage boost against enemies affected by Fire, consuming the Fire DOT on the victim in the process. w`,
		images: ['Srt_muramasa_blades_PostEvo.webp', 'Srt_muramasa_blades_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3512,
		name: "Bi-Han's Visage",
		d: `15-35% Max health boost.

		80-600% Max health boost. Nightmare Tower only.
		
		25% Chance to reflect 30-100% basic attack damage when blocking.
		
		[NOOB SAIBOT] [SET] If this is equipped alongside Bi-Han's Tormentor, any Diamond Noob Saibot gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] At the start of X-Ray/Fatal Blow, apply Death Mark.  ar`,
        tagsId: [2, 5, 10],
		images: ['Nt_bihans_visage_post.webp', 'Nt_bihans_visage_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3513,
		name: "Thunder Lord's Sigil",
        tagsId: [2, 5, 10],
		d: `Deal 5-15% of non-boss opponents' health as additional damage on Stun.

		10-20% X-Ray/Fatal Blow attack damage boost.
		
		20-150% Damage boost. Nightmare Tower only.
		
		40-300% Max health boost. Nightmare Tower only.
		
		[RAIDEN] [SET] If this is equipped alongside Thunder Lord's Stormweaver any DIAMOND Raiden gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 15% health, Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] For each debuff removed by Dispel, gain 1 Strengthen buff. Strengthen buffs stack.  acc`,
		images: ['Nt_thunder_lords_sigil_post.webp', 'Nt_thunder_lords_sigil_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3514,
		name: "Krypt Spider Fang",
        tagsId: [2, 5, 10],
		d: `20-40% Chance to apply Poison on Combo Ender.

		10-30% Chance to also apply Weaken when Poison is applied.
		
		40-300% Damage boost. Nightmare Tower Only.
		
		
		[Fusion Level X] Deal 35% more damage on Poison DOTs. wea`,
		images: ['Nt_krypt_spider_fang_post.webp', 'Nt_krypt_spider_fang_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3515,
		name: "Bloodmaster's Bloody Finka",
        tagsId: [2, 5, 10],
		d: `15-35% Critical Hit Chance boost.


		10-40% Bleed damage boost.
		
		
		40-300% Damage boost. Kold War Tower only.
		
		
		[SKARLET] [SET] If this is equipped alongside Bloodmaster's Iron Curtain, any DIAMOND Skarlet gains 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] DOTs can Critical Hit. wea`,
		images: ['Kw_bloodmasters_bloody_finka_postevo.webp', 'Kw_bloodmasters_bloody_finka_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3516,
		name: "General's Knockout Gloves",
        tagsId: [2, 5, 10],
		d: `15-25% Power generation boost.


		5-25% Chance to remove Opponent's active buffs (Strengthen, Shield, Luck, Regeneration and Speed) on Combo Ender.
		
		
		20-150% Damage boost. Kold War Tower only.
		
		
		40-300% Max health boost. Kold War Tower only.
		
		
		[SONYA BLADE] [SET] If this is equipped alongside General's Father Gun, any DIAMOND Sonya Blade gains 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] 7% Chance to Stun an opponent for 3 seconds when dealing a Critical Hit on Basic Attacks.  acc`,
		images: ['Kw_generals_knockout_gloves_postevo.webp', 'Kw_generals_knockout_gloves_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3517,
		name: "Telogreika",
        tagsId: [2, 5, 10],
		d: `50-100% Resistance to Stun and Bleed.


		Heal 1-6% of max Health every second while affected by Frostbite.
		
		
		80-600% Max health boost. Kold War Tower only.
		
		
		[Fusion Level X] Gain Invulnerability while Frozen.  arm`,
		images: ['Kw_telogreika_postevo.webp', 'Kw_telogreika_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3518,
		name: "Acid Dragon's Tekko-Kagi",
		d: `10-20% Damage boost against enemies affected by Poison.


		15-35% Chance to apply Blind on Special Attack 1.
		
		
		40-300% Damage boost. Sorcerer's Tower only.
		
		
		[REPTILE] [SET] If this is equipped alongside Acid Dragon's Deathly Vial, any DIAMOND Reptile gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] Gain 100% Critical Hit damage boost for 5 seconds whenever a Blinded opponent misses any attacks.  wea`,
        tagsId: [2, 5, 10],
		images: ['St_acid_dragons_tekko_kagi_postEvo.webp', 'St_acid_dragons_tekko_kagi_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3519,
		name: "Soul Reaver's King Kobra Belt",
        tagsId: [2, 5, 10],
		d: `15-35% Max Health boost.


		Whenever an opponent performs a successful Special Attack or Combo Ender, there is a 10-40% chance to apply Cripple.
		
		
		80-600% Max Health boost. Sorcerer's Tower only.
		
		
		[SHANG TSUNG] [SET] If this is equipped alongside Soul Reaver's Servant, any DIAMOND Shang Tsung gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] 50% Incoming DOT and Dark Magic damage reduction.  ar`,
		images: ['SoulReaversKingKobraBelt_postEvo.webp', 'SoulReaversKingKobraBelt_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3520,
		name: "Viper Hood",
		d: `20-60% Resistance to Snare.


		15-35% Chance to apply Weaken to enemies affected by DOT on Special Attack 1.
		
		
		20-150% Damage boost. Sorcerer's Tower only.
		
		
		40-300% Max health boost. Sorcerer's Tower only.
		
		
		[Fusion Level X] Apply Dispel and Regeneration for 7s on Special Attack 2.  acc`,
        tagsId: [2, 5, 10],
		images: ['ViperHood_postEvo.webp', 'ViperHood_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3521,
		name: "Divine Tornadic Pauldron",
		d: `Rain 	15-35% Critical Hit Chance boost.


		5-15% Chance to gain Strengthen after user deals Critical Hit or Lethal Damage.
		
		
		20-150% Damage boost. Edenian Tower only.
		
		
		40-300% Max health boost. Edenian Tower only.
		
		
		[RAIN] [SET] If this is equipped alongside Divine Argus Cloak, any DIAMOND Rain gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] Strengthen buffs can stack 3 times.  acc`,
        tagsId: [2, 5, 10],
		images: ['DivineTornadicPauldron_postEvo.webp', 'DivineTornadicPauldron_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3522,
		name: "Dynasty Parade Uniform",
        tagsId: [2, 5, 10],
		d: `20-50% Chance to apply Shield Break on Combo Ender.


		35-65% Chance to gain Regeneration for 10sec after performing Special Attack 2.
		
		
		80-600% Max Health boost. Edenian Tower only.
		
		
		[KITANA] [SET] If this is equipped alongside Dynasty Mask of Madness, any DIAMOND Kitana gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] 20% All Special Attacks damage boost.  ar`,
		images: ['DynastyParadeUniform_postEvo.webp', 'DynastyParadeUniform_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3523,
		name: "Sapphire Dagger",
        tagsId: [2, 5, 10],
		d: `20-50% Opponent Critical Hit Chance reduction.


		10-30% Reduced Power cost on all Special Attacks.
		
		
		40-300% Damage boost. Edenian Tower only.
		
		
		[Fusion Level X] While user is active, gains 6% Damage boost every 6 sec. Maximum 60% Damage boost. The user looses the stack after tag-out.  we`,
		images: ['SapphireDagger_postEvo.webp', 'SapphireDagger_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3524,
		name: "Body of Steel",
        tagsId: [2, 5, 10],
		d: `10-30% Opponent unblockable attack chance reduction.
		20-30% Resistance to all debuffs.		
		80-600% Max Health boost. Earthrealm Tower only.	
		[Fusion Level X] 20% of incoming Basic Attack damage transform to Health and 50% transform to Power.  arm`,
		images: ['Earth_body_of_steel_PostEvo.webp', 'Earth_body_of_steel_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3525,
		name: "Famous Dashing Smile",
        tagsId: [2, 5, 10],
		d: `50-150% Combo Ender damage boost.


		20-40% Chance to apply Incurability debuff to the whole team for 10sec on Special Attack 1.
		
		
		40-300% Damage boost. Earthrealm Tower only.
		
		
		[JOHNNY CAGE] [SET] If this is equipped alongside Famous Fashion Dominator, any DIAMOND Johnny Cage gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		
		[Fusion Level X] Gain 30% more Power from hitting an opponent. Opponent doesn't get Power from those hits.  wea`,
		images: ['Earth_famous_dashing_smile_PostEvo.webp', 'Earth_famous_dashing_smile_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3526,
		name: "Wushu Master's True Weapon",
		d: `40-60% Basic Attack damage boost.
		30-60% Chance to transfer 50% damage to Health on Special Attack 2.
		20-150% Damage boost. Earthrealm Tower only.		
		40-300% Max health boost. Earthrealm Tower only.
		[KUNG LAO] [SET] If this is equipped alongside Wushu Master's Guandao Blade, any DIAMOND Kung Lao gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] Health is increased and restored by 10% after performing any Special attack. Max 5 times in the battle.  acc`,
        tagsId: [2, 5, 10],
		images: ['Earth_wushu_masters_true_weapon_PostEvo.webp', 'Earth_wushu_masters_true_weapon_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3527,
		name: "Dark Mantle",
        tagsId: [2, 5, 10],
		d: `15-35% Max Health boost.
		Gain Invulnerability for 2-7sec after tag-in.
		
		80-600% Max health boost. Dark Queen's Tower only.
		
		[Fusion Level X] 20% Chance to avoid damage from opponent's Special Attack and apply Freeze.  ar`,
		images: ['Dq_dark_mantle_PostEvo.webp', 'Dq_dark_mantle_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3528,
		name: "Wicked Sister's Festive mask",
        tagsId: [2, 5, 10],
		d: `30-50% Chance to apply Bleed to an opponent on any successful Special Attack.


		20-40% Chance to apply Incurability debuff to the whole team for 10 sec on Combo Ender.
		10-150% Damage boost. Dark Queen's Tower only.
		
		20-300% Max health boost. Dark Queen's Tower only.
		
		[MILEENA] [SET] If this is equipped alongside Wicked Sister's Sultry Gown, any DIAMOND Mileena gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		
		[Fusion Level X] Bleed stacks up to 3 times. The user Vampires 33% damage from up to 3 last Bleed DOTs.  acc`,
		images: ['Dq_wicked_sisters_festive_mask_PostEvo.webp', 'Dq_wicked_sisters_festive_mask_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 3529,
		name: "Wrestling Star's Jaxophone",
        tagsId: [2, 5, 10],
		d: `20-30% All Special Attacks unblockable chance.
		30-50% Chance to apply Shield Break on Block Breaker attack.
		40-300% Damage boost. Dark Queen's Tower only.
		[JAX BRIGGS] [SET] If this is equipped alongside Wrestling Star's Last Puff, any DIAMOND Jax Briggs gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 40% Chance to apply Silence debuff to he whole opponent team on successful Special Attack 1.  wea`,
		images: ['Dq_wrestling_stars_jaxophone_PostEvo.webp', 'Dq_wrestling_stars_jaxophone_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	

	/* Faction War and other Epics */

    {
		id: 4000,
		name: "Wrath Hammer",
        tagsId: [2, 5, 10],
		d: `1 Bar of starting Power.

		10-20% Attack Boost.
		
		[SHAO KAHN] If this is equipped alongside Shao Khan's Helmet, Shao Kahn gains an additional 4th bar of Power!
		
		[Fusion Level X] 30% Critical Hit Chance Boost.  we`,
		images: ['Wrath_Hammer_2.0.webp', 'Wrath_Hammer_2.0.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4001,
		name: "Bloody Tomahawk",
        tagsId: [2, 5, 10],
		d: `20-40% Chance to drain 33% Power on Special Attack 2.

		5-15% Damage boost. Faction Wars Only.
		
		[Fusion Level X] 1 Bar of starting Power. w`,
		images: ['Bloody_Tomahawk_2.0.webp', 'Bloody_Tomahawk_2.0.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4002,
		name: "Bloody Shokan Armor",
        tagsId: [2, 5, 10],
		d: `10-20% Chance to reflect 100% Special Attack damage when blocking.

		5-10% Damage boost. Faction Wars Only.
		
		[Fusion Level X] 75% Opponent Critical Hit Chance reduction.  ar`,
		images: ['Bloody_Shokan_Armor.webp', 'Bloody_Shokan_Armor.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4003,
		name: "Bloody Voodoo Doll",
        tagsId: [2, 5, 10],
		d: `10-15% Reduced Power cost on all Special Attacks.

		5-10% Damage boost. Faction Wars Only.
		
		[Fusion Level X] 25% Power generation boost. acc`,
		images: ['Bloody_Voodoo_Doll.webp', 'Bloody_Voodoo_Doll.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4004,
		name: "Datusha, Bane of the Moroi",
        tagsId: [2, 5, 10],
		d: `100-300% Damage boost against Resurrected Enemies.
		5-15% Damage boost. Faction Wars Only.		
		[Fusion Level X] 25% Special Attack 1 and 2 damage boost. w`,
		images: ['Datusha,_Bane_of_the_Moroi.webp', 'Datusha,_Bane_of_the_Moroi.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4005,
		name: "Devastator",
        tagsId: [2, 5, 10],
		d: `30-80% Chance to steal 50% of the enemy's Power at the start of the match.

		10-50% Special Attack 1 damage boost.
		
		[Fusion Level X] If the opposing team shares the same class, receive 20% Health and 20% Damage boost, as well as a bar of Power. w`,
		images: ['Devestator.webp', 'Devestator.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4006,
		name: "Blaze's Life Force",
        tagsId: [2, 5, 10],
		d: `50-100% Chance to apply Fire to the active enemy at the start of the match.

		5-25% Fire Damage boost.
		
		[Fusion Level X] 100% Chance to apply Power Drain to the active enemy at the start of the match.  acc`,
		images: ['Blazes_Life_Force_2.0.webp', 'Blazes_Life_Force_2.0.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4007,
		name: "Moloch's Ball and Chain",
        tagsId: [2, 5, 10],
		d: `5-10% Lethal Blow chance: +300% damage. Faction Wars Only.

		10-30% Unblockable chance on all Special Attacks.
		
		100% Reduced Power cost on Special Attack 2 (5-15% Effect chance)  w`,
		images: ['Molochs_Ball_and_Chain_2.0.webp', 'Molochs_Ball_and_Chain_2.0.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4008,
		name: "Drahmin's Mask",
        tagsId: [2, 5, 10],
		d: `Take 5-20% less basic attack damage.

		10-30% Opponent Critical Hit Chance reduction.
		
		10-30% Resistance to Lethal Blow. Faction Wars Only.
		
		[Fusion Level X] 15% Faction Battle Rating boost.  arm`,
		images: ['DMask.webp', 'DMask.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4009,
		name: "Sindel's Signet Ring",
        tagsId: [2, 5, 10],
		d: `30-40% Opponent Critical Hit Chance reduction.

		30-50% Resistance to Bleed and Poison.
		
		30-50% Resistance to Slow and Stun.
		
		[Fusion Level X] While tagged-in, the wearer copies buffs (Strenthen, Shield, Luck, Regen or Speed) from non-boss opponents. acc`,
		images: ['Sindels_Signet_Ring_2.0.webp', 'Sindels_Signet_Ring_2.0.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4010,
		name: "Shadow Sash",
        tagsId: [2, 5, 10],
		d: `Take 10-20% less Special Attacks and X-Ray/Fatal Blow attack damage.

		20-40% Unblockable attack chance reduction.
		
		[Fusion Level X] 100% Chance to Apply Blind on enemy team at the Start of the match. ar`,
		images: ['Shadow_Sash_2.0.webp', 'Shadow_Sash_2.0.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4011,
		name: "Shang Tsung's Stone",
        tagsId: [2, 5, 10],
		d: `10-15% Reduced Power cost on all Special Attacks.

		20-30% Recovery Boost.
		
		[Fusion Level X] When the wearer defeats a Character, the entire opponent team loses 30% of their current health. Faction Wars Only.  acc`,
		images: ['Shang_Tsungs_Stone_2.0.webp', 'Shang_Tsungs_Stone_2.0.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4012,
		name: "Caro's Guidance",
        tagsId: [2, 5, 10],
		d: `5-10% Increased Quest loot boost.

		5-10% Shorter Quest duration.
		
		[Fusion Level X] 30% Max Health boost.  acc`,
		images: ['Guidance.webp', 'Guidance.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	

	/* Tower Epics */ 
    {
		id: 4500,
		name: "Hellfire Blade",
        tagsId: [2, 5, 10],
		d: `Special Attacks that apply Fire deal 20-80% bonus damage against opponents already affected by Fire.

		200-700% Damage boost. Tower of Horror only.
		
		100-500% Max Health boost. Tower of Horror only.
		
		On Tag-in, apply Fire to both the wearer and the opponent for 2-7s.
		
		[Fusion Level X] 100% Chance to drain 33% Power on Fire attacks. w`,
		images: ['Hellfire_Blade.webp', 'Hellfire_Blade.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4501,
		name: "Wailing Spirit",
        tagsId: [2, 5, 10],
		d: `On Tag-in, Power Drain 0.5-2 bars of opponent’s Power.


		30-100% Chance to steal 50% of the enemy’s Power at the start of the match when equipped on a starting character.
		
		
		75-225% Damage boost. Tower of Horror only.
		
		
		100-450% Max Health boost. Tower of Horror only.
		
		[Fusion Level X] Steal 50% of Power Drained on tag-in.  acc`,
		images: ['WailingSpirit_PostEvo.webp', 'WailingSpirit_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
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
        tagsId: [2, 5, 10],
		images: ['LivingDead_PostEvo.webp', 'LivingDead_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4503,
		name: "Reaper's End",
        tagsId: [2, 5, 10],
		d: `25-75% Chance to apply Curse on Combo Ender.
		200-700% Damage boost. Tower of Horror only.		
		100-500% Max Health boost. Tower of Horror only.		
		30-50% Unblockable chance on basic attacks.		
		[Fusion Level X] 30% Critical Hit Chance boost.  w`,
		images: ['Reapersend_postevo.webp', 'Reapersend_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
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
        tagsId: [2, 5, 10],
		images: ['Frostmask_postevo.webp', 'Frostmask_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4505,
		name: "Frost Orb",
        tagsId: [2, 5, 10],
		d: `10-15% Reduced Power cost on all Special Attacks.
		Once per fight spawn an Ice Clone that will save the wearer from a knockout blow. There is 10-50% chance the Ice Clone will explode and apply Frostbite to the opponent.
		45-250% Damage boost. Lin Kuei Tower only.		
		100-300% Max Health boost. Lin Kuei Tower only.		
		[Fusion Level X] Immune to Frostbite and Stun. acc`,
		images: ['Frostorb_postevo.webp', 'Frostorb_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4506,
		name: "Kori Blade",
        tagsId: [2, 5, 10],
		d: `15-25% Attack boost.
		50-100% Chance to apply Ice Armor after defeating an opponent.
		100-500% Damage boost. Lin Kuei Tower only.		
		[Fusion Level X] Every time an owner defeats an opponent, each surviving opponent get 1 bar of their Power drained.  w`,
		images: ['Kori_Blade.webp', 'Kori_Blade.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
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
        tagsId: [2, 5, 10],
		images: ['Kuai_Liangs_Scepter.webp', 'Kuai_Liangs_Scepter.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4508,
		name: "Nomad's Buzz Saw",
        tagsId: [2, 5, 10],
		d: `20-50% Chance to gain Speed after a successful critical hit.
		Poison applies to the enemy lasts 60-120% longer.		
		150-600% Damage boost. Black Dragon Tower only.		
		[KABAL] [SET] If this is equipped along with Nomad's Deadly Vapors, Diamond Character gains a 40% chance to perform a Special Combo Ender dealing massive damage. If it is the last opponent and they are under 25% health, Character performs a Brutality instead, ending the fight immediately.
		[Fusion Level X] Gain 2 Bars of Power after a teammate is defeated. w`,
		images: ['Nomads_Buzz_Saw.webp', 'Nomads_Buzz_Saw.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4509,
		name: "Psych Bomb",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
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
        tagsId: [2, 5, 10],
		images: ['CyberneticHeart_postEvo.webp', 'CyberneticHeart_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4511,
		name: "Smuggler's Luck",
        tagsId: [2, 5, 10],
		d: `30-60% Chance to gain Luck after Special Attack 1.

		Special Attack 1 deals 10-20% more damage after each use, stacks up to 5 times.
		
		75-225% Damage boost. Black Dragon Tower only.
		
		150-450% Max health boost. Black Dragon Tower only.
		
		[Fusion Level X] On tag-out, gain Dispel. acc`,
		images: ['SmugglerLuck_postEvo.webp', 'SmugglerLuck_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4512,
		name: "Specter's Burning Vengeance",
        tagsId: [2, 5, 10],
		d: `100% Chance to apply Fire on Special Attacks 2-7 times per battle.
		20-40% Chance to apply Fire when blocking an enemy attack.		
		300-1200% Max health Boost. Shirai Ryu Tower only.		
		[SCORPION] [SET] If this is equipped alongside Specter's Infernal Chains, any DIAMOND Scorpion gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.		
		[Fusion Level X] Wearer explodes into flames when defeated, dealing massive damage and applying Fire to all opponents. arm`,
		images: ['Srt_specters_burning_vengeance_PostEvo.webp', 'Srt_specters_burning_vengeance_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4513,
		name: "Champion's Nunchaku",
        tagsId: [2, 5, 10],
		d: `10-40% Chance to apply Fire on basic attacks.
		30-100% Damage boost against Outworld Characters.		
		150-600% Damage boost. Shirai Ryu Tower only.		
		[LIU KANG] [SET] If this is equipped alongside Champion's Leather Bracers, any DIAMOND Liu Kang gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.		
		[Fusion Level X] [LIU KANG] When a teammate tags in, Liu Kang throws Dragon Fire from the sidelines, dealing 500% of his basic attack damage with 50% chance to apply Fire. wea`,
		images: ['Srt_champions_nunchaku_PostEvo.webp', 'Srt_champions_nunchaku_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4514,
		name: "Edenian Bracelets",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4515,
		name: "Edenian Force Rejection Field",
        tagsId: [2, 5, 10],
		d: `25-45% Max health boost.
		Opponents affected by Blind have a 30-60% chance to also miss during Special Attacks.		
		300-1200% Max health boost. Shirai Ryu Tower only.		
		[JADE] [SET] If this is equipped alongside Edenian Bracelets, any DIAMOND Jade gains a 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.
		[Fusion Level X] 50% Resistance to all Debuffs. ar`,
		images: ['Srt_edenian_force_rejection_field_PostEvo.webp', 'Srt_edenian_force_rejection_field_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4516,
		name: "Bi-Han's Tormentor",
        tagsId: [2, 5, 10],
		d: `5-15% Lethal Blow chance.
		10-20% Reduced Power cost on all Special Attacks.
		150-600% Damage boost. Nightmare Tower only.
		[NOOB SAIBOT] [SET] If this is equipped alongside Bi-Han's Visage, any Diamond Noob Saibot gain 40% chance to perform a Special Combo Ender dealing massive damage. If the last opponent is under 25% health, a Brutality is performed instead of the Special Combo Ender, ending the fight immediately.		
		[Fusion Level X] [NOOB SAIBOT] Gain 1 Bar of Power after any teammate or ally Summon is defeated. w`,
		images: ['Nt_bihans_tormentor_post.webp', 'Nt_bihans_tormentor_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4517,
		name: "Demon Bat",
        tagsId: [2, 5, 10],
		d: `After performing any Special Attack, a demon bat also attacks the victim, dealing additional damage and applying Bleed while dying in the process. Demon Bat respawns every 30-10 seconds.
		20-30% Power generation boost.
		75-225% Damage boost. Nightmare Tower only.		
		150-450% Max health boost. Nightmare Tower only.
		[Fusion Level X] When Demon Bat attacks an opponent affected by Bleed, user heals for 20% of the victim's max health.  acc`,
		images: ['Nt_demon_bat_post.webp', 'Nt_demon_bat_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4518,
		name: "Thunder Lord's Stormweaver",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4519,
		name: "Killer Jacket",
        tagsId: [2, 5, 10],
		d: `10-60% Toughness boost.
		30-100% Chance to gain Shield after suffering from a Lethal Blow.
		300-1200% Max health boost. Nightmare Tower only.	
		[Fusion Level X] Gain Shield at the start of the match.  ar`,
		images: ['Nt_killer_jacket_post.webp', 'Nt_killer_jacket_post.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
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
        tagsId: [2, 5, 10],
		images: ['Kw_bloodmasters_iron_curtain_postevo.webp', 'Kw_bloodmasters_iron_curtain_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4521,
		name: "General's Father Gun",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4522,
		name: "Missile Gap",
        tagsId: [2, 5, 10],
		d: `30-70% Critical Hit Chance boost.
		3-13% Chance a missile counter-attacks whenever hit by an opponent.
		150-600% Damage boost. Kold War Tower only.
		[Fusion Level X] Missile bombing applies Stun to an opponent for 3 seconds.  w`,
		images: ['Kw_missile_gap_postevo.webp', 'Kw_missile_gap_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4523,
		name: "Weather Warfare",
        tagsId: [2, 5, 10],
		d: `Frozen opponents remain frozen up for 2-4 successive hit.


		50-100% Chance to also apply Frostbite when freezing an opponent.
		
		
		75-225% Damage boost. Kold War Tower only.
		
		150-450% Max Health boost. Kold War Tower only.
		
		[Fusion Level X] A gust of wind Freezes tagged-in opponent.  acc`,
		images: ['Kw_weather_warfare_postevo.webp', 'Kw_weather_warfare_postevo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4524,
		name: "Acid Dragon's Deathly Vial",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4525,
		name: "Serpent Kusarigama",
        tagsId: [2, 5, 10],
		d: `50-100% Critical Hit Chance boost when below 40% Health.
		30-50% Chance to gain Speed increased for 5s after performing a Combo Ender.
		150-600% Damage boost. Sorcerer's Tower only.
		[Fusion Level X] Critical Hits have 70% chance to Vampire the damage when below 40% Health.  we`,
		images: ['SerpentKusarigama_postEvo.webp', 'SerpentKusarigama_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4526,
		name: "Soul Reaver's Servant",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4527,
		name: "Varan Jacket",
        tagsId: [2, 5, 10],
		d: `15-35% Chance to dodge a Special Attack.
		40% Chance opponent's Basic Attack Critical Hit heal for 20-50% of incoming damage instead of dealing damage.
		300-1200% Max Health boost. Sorcerer's Tower only.
		[Fusion Level X] Damage from Special Attacks is reduced by 50%.  arm`,
		images: ['Varan_Jacket_postEvo.webp', 'Varan_Jacket_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4528,
		name: "Divine Argus Cloak",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4529,
		name: "Dynasty Mask of Madness",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4530,
		name: "King Jerrod's Spear",
        tagsId: [2, 5, 10],
		d: `0.5-1.5 Bar of starting Power.
		25-50% Chance to apply Snare on any Special Attack.
		150-600% Damage boost. Edenian Tower only.
		[Fusion Level X] 10% Chance Basic Attacks cause Lightning strike that deals 5% max Health damage to the opponent. wea`,
		images: ['King_Jerrod_s_Spear_postEvo.webp', 'King_Jerrod_s_Spear_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4531,
		name: "Princess Guard",
        tagsId: [2, 5, 10],
		d: `5-15% Lethal Blow Chance boost.
		Special Attack 2 applies Incurability debuff to whole opponent team for 5-15sec. Incurability cancels opponent's healing effects. Any healing, including Recovery, is also restricted while Incurability is active.
		150-600% Damage boost. Edenian Tower only.
		[Fusion Level X] When user applies Lethal Blow, next hit base damage is 150% higher. wea`,
		images: ['Princess_Guard_postEvo.webp', 'Princess_Guard_postEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4532,
		name: "Famous Fashion Dominator",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4533,
		name: "Jinsei Hat",
        tagsId: [2, 5, 10],
		d: `30-50% Critical Hit chance boost.
		20% Chance to apply Weaken, Shield Break or Curse on a Critical Hit.
		75-225% Damage boost. Earthrealm Tower only.
		150-450% Max Health boost. Earthrealm Tower only.
		[Fusion Level X] Once per match, avoid death by automatically tagging out before the killing blow. After tag-out user gains 1000% Recovery for 7sec. This effect does not trigger if the killing blow is a Brutality.  acc`,
		images: ['Earth_jinsei_hat_PostEvo.webp', 'Earth_jinsei_hat_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4534,
		name: "The Torturer",
        tagsId: [2, 5, 10],
		d: `Debuffs applied to an opponent are 10-30% more powerful. This applies to Bleed, Fire, Poison, Blind, Weaken, Curse, Shield Break, Vampire, Power Drain, and Power Steal.
		50% Chance to apply Fire, Bleed or Poison on Combo Ender.
		150-600% Damage boost. Earthrealm Tower only.
		[Fusion Level X] 50% Chance to reflect any debuff back to an opponent. Team debuffs are not affected.  we`,
		images: ['Earth_the_torturer_PostEvo.webp', 'Earth_the_torturer_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4535,
		name: "Wushu Master's Guandao Blade",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4536,
		name: "Jinxed Whip",
        tagsId: [2, 5, 10],
		d: `25-45% Critical Hit chance boost.
		Apply Curse on Combo Ender for 10-20sec.
		150-600% Damage boost. Dark Queen's Tower only.
		[Fusion Level X] When an opponent affected by Curse performs a Special Attack, there is a 50% chance to reflect the damage and distribute it evenly to the whole enemy team.  we`,
		images: ['Dq_jinxed_whip_PostEvo.webp', 'Dq_jinxed_whip_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4537,
		name: "The Soul Seeker",
        tagsId: [2, 5, 10],
		d: `30-50% Chance to apply Death Mark on any Special Attack.
		The user Vampires 5-10% of the damage dealt on all attacks for each active Death Mark on an opponent.
		150-600% Damage boost. Dark Queen's Tower only.
		[Fusion Level X] When an opponent is affected by 3 Death Marks at once, there is a 50% chance to apply Stun on Combo Ender.  wea`,
		images: ['Dq_the_soul_seeker_PostEvo.webp', 'Dq_the_soul_seeker_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
				maxFusion: 10,
				reqFusion: 10
			}				
		]
	},	
    {
		id: 4538,
		name: "Wicked Sister's Sultry Gown",
        tagsId: [2, 5, 10],
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
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
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
        tagsId: [2, 5, 10],
		images: ['Dq_wrestling_stars_last_puff_PostEvo.webp', 'Dq_wrestling_stars_last_puff_PostEvo.webp'],
		states: [
			{
				attributeId: [15],				
				initValue: 5,
				step: 1,
				maxFusion: 10
			},
			{
				attributeId: [16],				
				initValue: 8,
				step: 0,
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

