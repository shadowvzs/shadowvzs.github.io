const stats = {};

const commonStats = {
	2: {
		name: "Dex",
	},
	4: {
		name: "Vit",
	},
	5: {
		name: "HP",
	},
	6: {
		name: "MP",
	},
	9: {
		name: "Eva",
	},
	10: {
		name: "Hit",
	},	
	13: {
		name: "Cast Speed",
		perc: true
	},
	14: {
		name: "CD Reduction for all skills",
		perc: true
	},
	15: {
		name: "Reduced NATK Interval",
		perc: true
	},
	16: {
		name: "Damage Reduction",
		perc: true
	},
	19: {
		name: "Class Skill Level",
		perc: true
	},		
}

stats[0] = {
	...commonStats,
	1: {
		name: "Str",
	},
	7: {
		name: "PAtk",
	},
	11: {
		name: "PCrit",
	},
	17: {
		name: "PPen",
	},
};

stats[1] = {
	...commonStats,
	1: {
		name: "Dex",
	},
	7: {
		name: "PAtk",
	},
	11: {
		name: "PCrit",
	},
	17: {
		name: "PPen",
	},
};

stats[2] = {
	...commonStats,
	1: {
		name: "Mag",
	},
	7: {
		name: "MAtk",
	},
	11: {
		name: "MCrit",
	},
	17: {
		name: "MPen",
	},
};


const db = {
	1: {
		id: 1,
		name: "Sacred Book Page",
		description: "Used 6 for craft 1 random level 1 Sacred Book.",
		level: 0,
		initBr: 0,
		statEquip: [],
		statMaster: [],
		source: "Path of Five, Mirage, Hidden Quest reward, Stall etc"
	},
	1001: {
		id: 1001,
		name: "Resolve",
		level: 1,
		initBr: 251,
		statEquip: [[1,7],[7,53]],
		statMaster: [[5,37]],
		source: [[1, 6]]
	},
	1002: {
		id: 1002,
		name: "Sinful Flame",
		level: 1,
		initBr: 248,
		statEquip: [[1,7],[17,13]],
		statMaster: [[7,19]],
		source: [[1, 6]]
	},
	1003: {
		id: 1003,
		name: "Celestial Giant",
		level: 1,
		initBr: 252,
		statEquip: [[4,7],[7,53]],
		statMaster: [[7,19]],
		source: [[1, 6]]
	},
	1004: {
		id: 1004,
		name: "A Flowerless Plant",
		level: 1,
		initBr: 251,
		statEquip: [[4,7],[5,106]],
		statMaster: [[9,19]],
		source: [[1, 6]]
	},
	1005: {
		id: 1005,
		name: "Firbolg Drudge",
		level: 1,
		initBr: 248,
		statEquip: [[17,13],[5,106]],
		statMaster: [[11,10]],
		source: [[1, 6]]
	},
	1006: {
		id: 1006,
		name: "Tome of Grace",
		level: 1,
		initBr: 252,
		statEquip: [[7,53],[5,106]],
		statMaster: [[9,19]],
		source: [[1, 6]]
	},
	1007: {
		id: 1007,
		name: "Soaring Heart",
		level: 1,
		initBr: 249,
		statEquip: [[1,7],[11,28]],
		statMaster: [[5,37]],
		source: [[1, 6]]
	},
	1008: {
		id: 1008,
		name: "Flanker's Tome",
		level: 1,
		initBr: 249,
		statEquip: [[4,7],[11,28]],
		statMaster: [[11,10]],
		source: [[1, 6]]
	},
	
	1101: {
		id: 1101,
		name: "Mediation's Flame",
		level: 2,
		initBr: 389,
		statEquip: [[7,82], [5,162]],
		statMaster: [[9,30]],
		source: [[1006], [1004], [1001]]
	},
	1102: {
		id: 1102,
		name: "Guide to Wolf Hunting",
		level: 2,
		initBr: 375,
		statEquip: [[4,10], [5,162]],
		statMaster: [[9,30]],
		source: [[1004], [1001], [1007]]
	},
	1103: {
		id: 1103,
		name: "Tale of the Peach Fan",
		level: 2,
		initBr: 374,
		statEquip: [[4,10], [11,44]],
		statMaster: [[11,15]],
		source: [[1008], [1005], [1006]]
	},
	1104: {
		id: 1104,
		name: "Under the Wall",
		level: 2,
		initBr: 380,
		statEquip: [[17,20], [5,162]],
		statMaster: [[11,15]],
		source: [[1005], [1006], [1004]]
	},
	1105: {
		id: 1105,
		name: "Red Lotus",
		level: 2,
		initBr: 367,
		statEquip: [[2,10], [17,20]],
		statMaster: [[7,28]],
		source: [[1002], [1008], [1003]]
	},
	1106: {
		id: 1106,
		name: "The Adversary",
		level: 2,
		initBr: 374,
		statEquip: [[5,10], [7,82]],
		statMaster: [[7,28]],
		source: [[1003], [1008], [1005]]
	},
	1107: {
		id: 1107,
		name: "Tome of Iron Will",
		level: 2,
		initBr: 376,
		statEquip: [[2,10], [7,82]],
		statMaster: [[5,57]],
		source: [[1001], [1007], [1002]]
	},
	1108: {
		id: 1108,
		name: "Mist-Peach-Bloom",
		level: 2,
		initBr: 376,
		statEquip: [[2,10], [11,44]],
		statMaster: [[5,57]],
		source: [[1007], [1002], [1003]]
	},
	1201: {
		id: 1201,
		name: "A Poet's Musings",
		level: 3,
		description: "2% chance to enter Windrider status when attacked. Immunizes against slow, stun and root 2 sec.",
		initBr: 664,
		statEquip: [[7,91], [5,180]],
		statMaster: [[9,33]],
		source: [[1108], [1105], [1106]]
	},
	1202: {
		id: 1202,
		name: "The Collapse",
		level: 3,
		description: "Increase damage done by 2% to targets with less than 20% HP.",
		initBr: 663,
		statEquip: [[4,12], [5,180]],
		statMaster: [[9,33]],
		source: [[1102], [1107], [1108]]
	},
	1203: {
		id: 1203,
		name: "Tales of Beauty",
		level: 3,
		description: "Increases healing reiceived by 1%.",
		initBr: 660,
		statEquip: [[4,12], [11,48]],
		statMaster: [[11,17]],
		source: [[1108], [1104], [1101]]
	},
	1204: {
		id: 1204,
		name: "Song of Farewell",
		level: 3,
		description: "Increases movement speed by 2%",
		initBr: 663,
		statEquip: [[17,23], [5,180]],
		statMaster: [[11,17]],
		source: [[1104], [1101], [1102]]
	},
	1205: {
		id: 1205,
		name: "Forged Crimson",
		level: 3,
		description: "Skill casting has a 1% chance of inreasing PPen and MPen Rate to 100% for 3 sec.",
		initBr: 662,
		statEquip: [[2,12], [17,23]],
		statMaster: [[7,32]],
		source: [[1108], [1105], [1106]]
	},
	1206: {
		id: 1206,
		name: "The Mountain Pass",
		level: 3,
		description: "Increases Chi's generation speed by 2%",
		initBr: 664,
		statEquip: [[4,12], [7,91]],
		statMaster: [[7,32]],
		source: [[1106], [1105], [1104]]
	},
	1207: {
		id: 1207,
		name: "Merriment",
		level: 3,
		description: "When attacked, 5% chance to increase movement speed by 5% for 3sec.",
		initBr: 663,
		statEquip: [[2,12], [7,91]],
		statMaster: [[5,63]],
		source: [[1107], [1108], [1105]]
	},	
	1208: {
		id: 1208,
		name: "Sunset Tales",
		level: 3,
		description: "Increases critical rate by 1%.",
		initBr: 661,
		statEquip: [[2,12], [11,48]],
		statMaster: [[5,63]],
		source: [[1108], [1105], [1106]]
	},

	1301: {
		id: 1301,
		name: "Appetites of Spring",
		level: 4,
		description: "Attacks have a 5% chance of triggering a lightning strike dealing 40% physical damage and 40% magic damage.",
		initBr: 1034,
		statEquip: [[2,8], [11,35], [13,0.4]],
		statMaster: [[11,9], [9,18]],
		source: [[1203], [1202], [1207]]
	},
	1302: {
		id: 1302,
		name: "South of the River",
		level: 4,
		description: "Increases healing done to targets with less than 20% HP by 4%.",
		initBr: 1043,
		statEquip: [[13,0.4], [7,65], [5,129]],
		statMaster: [[11,9], [9,18]],
		source: [[1202], [1207], [1201]]
	},
	1303: {
		id: 1303,
		name: "The Rose's Thorn",
		level: 4,
		description: "Skill casting has a 5% chance of reducing skill cooldown by 0.5 sec.",
		initBr: 1032,
		statEquip: [[4,4], [11,19], [16,0.25]],
		statMaster: [[9,18], [5,34]],
		source: [[1203], [1204], [1202]]
	},
	1304: {
		id: 1304,
		name: "Upheaval",
		level: 4,
		description: "Increases damage done by 4% when HP is below 40%.",
		initBr: 1039,
		statEquip: [[17,16], [15,0,4], [5,129]],
		statMaster: [[9,18], [5,34]],
		source: [[1204], [1206], [1202]]
	},
	1305: {
		id: 1305,
		name: "Burning Affection",
		level: 4,
		description: "Decreases target's Mana by 30 upon hitting them. Targets reicive 1% more damage if their Mana empty.",
		initBr: 1028,
		statEquip: [[2,8], [17,16], [14,0.4]],
		statMaster: [[11,9], [7,17]],
		source: [[1206],[1203],[1204]]
	},
	1306: {
		id: 1306,
		name: "Destiny",
		level: 4,
		description: "Decreases damage taken by 3% while stunned.",
		initBr: 1042,
		statEquip: [[14,0.4], [7,65], [5,129]],
		statMaster: [[11,9], [7,17]],
		source: [[1204], [1202], [1207]]
	},
	1307: {
		id: 1307,
		name: "Battle Tactics",
		level: 4,
		description: "Increases damage of all skills that consume Mana by 1%.",
		initBr: 1040,
		statEquip: [[19,1], [4,8], [7,61]],
		statMaster: [[7,17], [5,34]],
		source: [[1207], [1206], [1203]]
	},
	1308: {
		id: 1308,
		name: "Succubus",
		level: 4,
		description: "Skill casting consumes 0.5% HP to increase skill damage by 2%. Disabled if HP is below 50%.",
		initBr: 1044,
		statEquip: [[11,35], [15,0.4], [5,129]],
		statMaster: [[7,17], [5,34]],
		source: "This Sacred Book is only available from Dragon Finder event."
	},
	1401: {
		id: 1401,
		name: "Gang of Hooligans",
		level: 5,
		description: "Increases damage done to stunned, rooted and silenced targets by 2%.",
		initBr: 1564,
		statEquip: [[5,8], [11,35], [13,0.8]],
		statMaster: [[11,12], [9,24]],
		source: [[1301], [1302], [1307]]
	},
	1402: {
		id: 1402,
		name: "Garden of Emptiness",
		level: 5,
		description: "Attacks have 5% chance of decreasing target's Chi by 4% of their Max Chi.",
		initBr: 1573,
		statEquip: [[7,65], [13,0.8], [5,129]],
		statMaster: [[11,12], [9,24]],
		source: [[1302], [1307], [1305]]
	},	
	1403: {
		id: 1403,
		name: "Rouge and Red Lips",
		level: 5,
		description: "Increases critical damage by 10%.",
		initBr: 1576,
		statEquip: [[11,17], [16,0.4], [5,63]],
		statMaster: [[9,24], [5,46]],
		source: [[1303], [1304], [1301]]
	},	
	1404: {
		id: 1404,
		name: "Endless Waves",
		level: 5,
		description: "Overhealing generates a shield that lasts for 3 sec. One shield per target (unstackable).",
		initBr: 1565,
		statEquip: [[5,8], [15,0.8], [5,129]],
		statMaster: [[9,24], [5,46]],
		source: [[1304], [1301], [1302]]
	},	
	1405: {
		id: 1405,
		name: "The Fragrance",
		level: 5,
		description: "When HP is below 5%, increases healing reiceived by 5%.",
		initBr: 1567,
		statEquip: [[17,18], [14,0.7], [5,146]],
		statMaster: [[11,12], [7,23]],
		source: [[1305], [1306], [1303]]
	},	
	1406: {
		id: 1406,
		name: "Parting Grief",
		level: 5,
		description: "Increase Evasion Rate by 2%.",
		initBr: 1560,
		statEquip: [[4,9], [14,0.7], [7,73]],
		statMaster: [[11,12], [7,23]],
		source: [[1306], [1303], [1304]]
	},	
	1407: {
		id: 1407,
		name: "Earth's Celebration",
		level: 5,
		description: "Increases normal attack damage by 5%.",
		initBr: 1575,
		statEquip: [[19,1], [7,95], [5,189]],
		statMaster: [[7,23], [5,46]],
		source: "This Sacred Book is only available from Dragon Finder event."
	},	
	1408: {
		id: 1408,
		name: "The Wrath of the Heaven",
		level: 5,
		description: "Skill casting has 10% chance of increasing movement speed and flying speed by 5%.",
		initBr: 1565,
		statEquip: [[2,8], [11,35], [15,0.8]],
		statMaster: [[7,23], [5,46]],
		source: [[1307], [1305], [1306]]
	},	

	1501: {
		id: 1501,
		name: "Existential Woe",
		level: 6,
		description: "Skill attacks deal splash damage equal of 8% of skill damage to all enemies within a 4m radius.",
		initBr: 2732,
		statEquip: [[4,7], [11,29], [13,1.4]],
		statMaster: [[11,16], [9,31]],
		source: [[1401], [1402], [1408]]
	},
	1502: {
		id: 1502,
		name: "The Creator",
		level: 6,
		description: "Attacks have 40% chance of dealing an additional 5% damage.",
		initBr: 2739,
		statEquip: [[7,55], [5,110], [13,1.4]],
		statMaster: [[11,16], [9,31]],
		source: [[1408], [1404], [1402]]
	},
	1503: {
		id: 1503,
		name: "The Union",
		level: 6,
		description: "Increases deployed Eidolon's damage by 10%.",
		initBr: 2738,
		statEquip: [[11,11], [5,43], [16,0.6]],
		statMaster: [[9,31], [5,60]],
		source: [[1403], [1404], [1401]]
	},
	1504: {
		id: 1504,
		name: "Fool's Enlightenment",
		level: 6,
		description: "20% chance to seal targets with more than 99% HP for 2.5 sec.",
		initBr: 2740,
		statEquip: [[17,14], [5,110], [15,1.4]],
		statMaster: [[9,31], [5,60]],
		source: [[1404], [1401], [1402]]
	},
	1505: {
		id: 1505,
		name: "Hidden Dragon",
		level: 6,
		description: "Attack have a 10% chance of decreasing target's healing received by 10% for 5 sec.",
		initBr: 2739,
		statEquip: [[17,14], [5,110], [15,1.4]],
		statMaster: [[11,16], [7,30]],
		source: [[1405], [1406], [1403]]
	},
	1506: {
		id: 1506,
		name: "Turning the Tide",
		level: 6,
		description: "Reflects 4% of damage taken (up to 10000 back to the attacker.)",
		initBr: 2734,
		statEquip: [[4,7], [7,55], [14,1.4]],
		statMaster: [[11,16], [7,30]],
		source: [[1406], [1403], [1404]]
	},
	1507: {
		id: 1507,
		name: "Tears of Red",
		level: 6,
		description: "Revives at place of death with 10% HP and Mana 3 sec after getting killed. This effect can be triggered once every 300 sec.",
		initBr: 2741,
		statEquip: [[19,1], [7,136], [5,269]],
		statMaster: [[7,30], [5,60]],
		source: "This Sacred Book is only available from Dragon Finder event."
	},
	1508: {
		id: 1508,
		name: "The Frostlands",
		level: 6,
		description: "Upon hitting targets with less than 10% HP, decreases their movement speed and flying speed by 15% for 3 sec.",
		initBr: 2733,
		statEquip: [[2,7], [11,29], [15,1.4]],
		statMaster: [[7,30], [5,60]],
		source: [[1408],[1405],[1406]]
	},		
};