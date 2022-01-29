export const itemAttributes = [
	{
		id: 1,
		name: 'Slow Ressistance',
		description: "%d% RESSISTENCE to slow",
		tagsId: [22, 20, 11]
	},
	{
		id: 2,
		name: 'Stun Ressistance',
		description: "%d% RESSISTENCE to stun",
		tagsId: [23, 20, 11]
	},
	{
		id: 3,
		name: 'Thoughness',
		description: "%d% THOUGHNESS boost",
		tagsId: [18, 11]
	},
	{
		id: 4,
		name: 'Basic Damage',
		description: "%d% BASIC DAMAGE boost",
		tagsId: [31, 11]
	},
	{
		id: 5,
		name: 'Recovery',
		description: "%d% RECOVERY boost",
		tagsId: [19, 11]
	},
	{
		id: 6,
		name: 'Poison Resistance',
		description: "%d% RESISTANCE to poison",
		tagsId: [24, 20, 11]
	},
	{
		id: 7,
		name: 'Bleeding Resistance',
		description: "%d% RESISTANCE to bleeding",
		tagsId: [25, 20, 11]
	},	
	{
		id: 8,
		name: 'Max Health',
		description: "%d% MAX HEALTH boost",
		tagsId: [17, 11]
	},
	{
		id: 9,
		name: 'Unblockable Chance',
		description: "%d% Basic attacks UNBLOCKABLE chance",
		tagsId: [28, 11]
	},
	{
		id: 10,
		name: 'Crit Chance',
		description: "%d% CRIT CHANCE boost",
		tagsId: [32, 11]
	},
	{
		id: 11,
		name: 'Damage boost Vs Martial Artists',
		description: "%d% Damage boost against Martial Artist Characters",
		tagsId: [29, 42]
	},
	{
		id: 12,
		name: 'Damage boost Vs Stunned',
		description: "%d% Damage boost against enemies affected by Stun",
		tagsId: [29, 23]
	},
	{
		id: 13,
		name: 'Damage boost Vs Slowed',
		description: "%d% Damage boost against enemies affected by Slow",
		tagsId: [29, 22]
	},
	{
		id: 14,
		name: 'Reflect Basic Attack When Blocking',
		description: "%d% Chance to reflect 25% basic attack damage when blocking",
		tagsId: [41, 31, 15]
    },	
    {
		id: 15,
		name: 'Power generation boost',
		description: "%d% power generation boost",
		tagsId: [21, 11]
    },
    {
		id: 16,
		name: 'Faction War damage boost',
		description: "%d% Damage boost (Faction Wars Only)",
		tagsId: [30, 11]
	},
];

itemAttributes.valueMap = itemAttributes.reduce((obj, x) => (obj[x.id] = x, obj), {});
