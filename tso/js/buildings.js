const buildings = {
    // basic
    'mayor_house': {
        name: 'Mayor\'s house',
        level: 0,
        icon: 'https://settlersonlinewiki.eu/budynek/ratusz.png',
        perLevel: [
            {
                cost: [],
                gem: 0,
                duration: 0,
                image: 'https://settlersonlinewiki.eu/budynek/ratusz1.png',
                storage: 500,
            },
            {
                cost: [['hardwood_plank', 800], ['marble', 450]],
                gem: 1226,
                duration: 2.5 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/ratusz2.png',
                storage: 1600,
            },
            {
                cost: [['coin', 400], ['marble', 450]],
                gem: 1766,
                duration: 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/ratusz3.png',
                storage: 1500,
            },
            {
                cost: [['exotic_wood_plank', 750], ['coin', 900]],
                gem: 3908,
                duration: 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/ratusz4.png',
                storage: 3000,
            },
            {
                cost: [['exotic_wood_plank', 1500], ['granite', 1800]],
                gem: 5371,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/ratusz5.png',
                storage: 4000,
            },
            {
                cost: [['grout', 600], ['granite', 3000]],
                amount2: 3000,
                gem: 6993,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/ratusz6.png',
                storage: 5900,
            },
            {
                cost: [['advanced_tool', 3400], ['oil', 2750]],
                gem: 5535,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/ratusz7.png',
                storage: 9000
            },
        ]
    },
    'pinewood_cutter': {
        name: 'Pinewood Cutter',
        level: 1,
        icon: 'https://settlersonlinewiki.eu/images/drwal0.png',
        needLicense: true,
        production: {
            time: 1.5 * 60,
            input: [
                { item: 'pinewood_deposit', amount: 1 },
            ],
            output: [
                { item: 'pinewood', amount: 1 },
            ],
        },
        perLevel: [
            {
                cost: [],
                moveCost: [['pinewood_pank', 2], ['stone', 2]],
                gem: 2,
                moveGem: 1,
                duration: 10,
                image: 'https://settlersonlinewiki.eu/budynek/drwal1.png',
            },
            {
                cost: [['hardwood_plank', 120], ['marble', 100]],
                moveCost: [['pinewood_pank', 40], ['stone', 40]],
                gem: 221,
                moveGem: 2,
                duration: 2.5 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/drwal2.png',
            },
            {
                cost: [['hardwood_plank', 300], ['marble', 150]],
                moveCost: [['hardwood_plank', 100], ['stone', 75]],
                gem: 439,
                moveGem: 7,
                duration: 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/drwal3.png',
            },
            {
                cost: [['coin', 500], ['marble', 300]],
                moveCost: [['hardwood_plank', 100], ['marble', 100]],
                gem: 1913,
                moveGem: 11,
                duration: 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/drwal4.png',
            },
            {
                cost: [['exotic_wood_plank', 500], ['granite', 300]],
                moveCost: [['coin', 100], ['marble', 200]],
                gem: 1253,
                moveGem: 29,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/drwal5.png',
            },
            {
                cost: [['grout', 50], ['granite', 500]],
                moveCost: [['coin', 100], ['marble', 200]],
                gem: 1031,
                moveGem: 29,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/drwal6.png',
            },
            {
                cost: [['advanced_tool', 500], ['oil', 250]],
                moveCost: [['coin', 200], ['marble', 300]],
                gem: 675,
                moveGem: 53,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/drwal7.png',
            },
        ],
    },
    'pinewood_sawmill': {
        name: 'Pinewood Sawmill',
        level: 2,
        icon: 'https://settlersonlinewiki.eu/images/tartakigla0.png',
        needLicense: true,
        production: {
            time: 3 * 60,
            input: [
                { item: 'pinewood', amount: 1 },
            ],
            output: [
                { item: 'pinewood_pank', amount: 1 },
            ],
        },
        perLevel: [
            {
                cost: [['pinewood', 10]],
                moveCost: [['pinewood_pank', 2], ['stone', 2]],
                gem: 2,
                moveGem: 1,
                duration: 10,
                image: 'https://settlersonlinewiki.eu/budynek/tartakigla1.png',
            },
            {
                cost: [['hardwood_plank', 120], ['marble', 100]],
                moveCost: [['pinewood_pank', 40], ['stone', 40]],
                gem: 221,
                moveGem: 2,
                duration: 2.5 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/tartakigla2.png',
            },
            {
                cost: [['hardwood_plank', 300], ['marble', 150]],
                moveCost: [['hardwood_plank', 100], ['stone', 75]],
                gem: 439,
                moveGem: 7,
                duration: 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/tartakigla3.png',
            },
            {
                cost: [['coin', 500], ['marble', 300]],
                moveCost: [['hardwood_plank', 100], ['marble', 100]],
                gem: 1913,
                moveGem: 11,
                duration: 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/tartakigla4.png',
            },
            {
                cost: [['exotic_wood_plank', 500], ['granite', 300]],
                moveCost: [['coin', 100], ['marble', 200]],
                gem: 1253,
                moveGem: 29,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/tartakigla5.png',
            },
            {
                cost: [['grout', 50], ['granite', 500]],
                moveCost: [['coin', 100], ['marble', 200]],
                gem: 1031,
                moveGem: 29,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/tartakigla6.png',
            },
            {
                cost: [['advanced_tool', 500], ['oil', 200]],
                moveCost: [['coin', 200], ['marble', 300]],
                gem: 630,
                moveGem: 53,
                duration: 7 * 24  * 60 * 60,
                image: 'https://settlersonlinewiki.eu/budynek/tartakigla7.png',
            },
        ]
    },
/*
    'farm': {
        name: 'Farm',
        icon: '🌾',
        productionTime: 12 * 60,
        cost: [],
        output: [
            { item: 'wheat', amount: 1 },
        ],
    },
    'improved_farm': {
        name: 'Improved Farm',
        icon: '🌾',
        productionTime: 4 * 60,
        cost: [],
        output: [
            { item: 'wheat', amount: 1 },
        ],
    },
    'bio_farm': {
        name: 'Bio Farm',
        icon: '🌾',
        productionTime: 10 * 60,
        cost: [],
        output: [
            { item: 'wheat', amount: 1 },
        ],
    },
    'watermill': {
        name: 'Watermill',
        icon: '🌾',
        productionTime: 3 * 60,
        cost: [],
        output: [
            { item: 'water', amount: 1 },
        ],
    },
    'improved_watermill': {
        name: 'Improved Watermill',
        icon: '🌾',
        productionTime: 1 * 60,
        cost: [],
        output: [
            { item: 'water', amount: 1 },
        ],
    },
    'copper_mine': {
        name: 'Cooper Mine',
        icon: '🌾',
        productionTime: 3 * 60,
        cost: [{ item: 'copper_deposit', amount: 1 }],
        output: [
            { item: 'cooper_ore', amount: 1 },
        ],
    },
    'copper_smelter': {
        name: 'Copper Smelter',
        icon: '🌾',
        productionTime: 3 * 60,
        cost: [
            { item: 'copper_ore', amount: 1 }
            { item: 'coal', amount: 1 }
        ],
        output: [
            { item: 'bronze', amount: 1 },
        ],
    },
    'coal_mine': {
        name: 'Coal Mine',
        icon: '🌾',
        productionTime: 1.5 * 60,
        cost: [{ item: 'coal_deposit', amount: 1 }],
        output: [
            { item: 'coal', amount: 1 },
        ],
    },
    'iron_mine': {
        name: 'Iron Mine',
        icon: '🌾',
        productionTime: 6 * 60,
        cost: [{ item: 'iron_deposit', amount: 1 }],
        output: [
            { item: 'iron_ore', amount: 1 },
        ],
    },
    */
};