// 	// towerId: 1,
// //  brutalityFor: [1],
// states - isBrutality: true,		character: [1], onlyTower: 1,
// reqFusion: 10,

export const items = [
	// common
	{
		id: 1,
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
		id: 2,
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
		id: 3,
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
		id: 4,
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
		id: 5,
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
		id: 6,
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
		id: 7,
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
		id: 8,
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
		id: 9,
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
		id: 10,
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
		id: 11,
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
		id: 12,
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
		id: 13,
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
		id: 14,
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

