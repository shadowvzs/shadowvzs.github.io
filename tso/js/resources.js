const deposits = {
    "copper_deposit": {
        name: 'Copper deposit',
        icon: '🌾',
        category: ['deposit'],
    },
    "coal_deposit": {
        name: 'Coal deposit',
        icon: '🌾',
        category: ['deposit'],
    },
    "iron_deposit": {
        name: 'Iron deposit',
        icon: '🌾',
        category: ['deposit'],
    },
    "pinewood_deposit": {
        name: 'Exotic Wood deposit',
        icon: 'https://settlersonlinewiki.eu/images/drzewo.png',
        category: ['deposit'],
    },
    "exotic_wood_deposit": {
        name: 'Exotic Wood deposit',
        icon: '🌾',
        category: ['deposit'],
    },
};



const basicResources = {
    "settler": {
        name: 'Settler',
        icon: 'https://settlersonlinewiki.eu/images/osadnik.png',
        category: ['barrack'],
        grade: 'basic',
    },
    "pinewood": {
        name: 'Pinewood',
        icon: 'https://settlersonlinewiki.eu/images/pienigla.png',
        category: [],
        grade: 'basic',
    },
    "pinewood_pank": {
        name: 'Pinewood Plank',
        icon: 'https://settlersonlinewiki.eu/images/deskiigl.png',
        category: ['construction'],
        grade: 'basic',
    },
    "stone": {
        name: 'Stone',
        icon: 'https://settlersonlinewiki.eu/images/kamien.png',
        category: ['construction'],
        grade: 'basic',
    },
    "fish": {
        name: 'Fish',
        icon: 'https://settlersonlinewiki.eu/images/ryba.png',
        category: ['food'],
        grade: 'basic',
    },
    "map_fragment": {
        name: 'Map Fragment',
        icon: 'https://settlersonlinewiki.eu/images/fragment.png',
        category: ['adventure'],
        grade: 'basic',
    },
    "guild_coin": {
        name: 'Guild Coin',
        icon: 'https://settlersonlinewiki.eu/images/monetygildi.png',
        category: [],
        grade: 'basic',
    },
    "token": {
        name: 'Token',
        icon: 'https://settlersonlinewiki.eu/images/token.png',
        category: ['construction'],
        grade: 'basic',
    },
    "crystal": {
        name: 'Crystal',
        icon: 'https://settlersonlinewiki.eu/images/krysztal.png',
        category: [],
        grade: 'basic',
    },
    "crystal_shard": {
        name: 'Crystal Shard',
        icon: 'https://settlersonlinewiki.eu/images/odlamek.png',
        category: [],
        grade: 'basic',
    },
    "star_dust": {
        name: 'Star Dust',
        icon: 'https://settlersonlinewiki.eu/images/stardust.png',
        category: [],
        grade: 'basic',
    },
    "star_shard": {
        name: 'Star Shard',
        icon: 'https://settlersonlinewiki.eu/images/starshards.png',
        category: [],
        grade: 'basic',
    },
};

const intermediateResources = {
    "coal": {
        name: 'Coal',
        icon: 'https://settlersonlinewiki.eu/images/wegiel.png',
        category: ['mine'],
        grade: 'intermediate',
    },
    "cooper_ore": {
        name: 'Copper ore',
        icon: 'https://settlersonlinewiki.eu/images/miedz.png',
        category: ['mine'],
        grade: 'intermediate',
    },
    "bronze": {
        name: 'Bronze',
        icon: 'https://settlersonlinewiki.eu/images/miedz2.png',
        category: [],
        grade: 'intermediate',
    },
    "tool": {
        name: 'Tool',
        icon: 'https://settlersonlinewiki.eu/images/mlotek.png',
        category: ['construction'],
        grade: 'intermediate',
    },
    "water": {
        name: 'Water',
        icon: 'https://settlersonlinewiki.eu/images/woda.png',
        category: [],
        grade: 'intermediate',
    },
    "wheat": {
        name: 'Wheat',
        icon: 'https://settlersonlinewiki.eu/images/zboze.png',
        category: [],
        grade: 'intermediate',
    },
    "beer":{
        name: 'Beer',
        icon: 'https://settlersonlinewiki.eu/images/piwo.png',
        category: ['barrack', 'food'],
        grade: 'intermediate',
    },
    "flour": {
        name: 'Flour',
        icon: 'https://settlersonlinewiki.eu/images/maka.png',
        category: [],
        grade: 'intermediate',
    },
    "bread": {
        name: 'Bread',
        icon: 'https://settlersonlinewiki.eu/images/chleb.png',
        category: ['food'],
        grade: 'intermediate',
    },
    "bronze_sword": {
        name: 'Bronze Sword',
        icon: 'https://settlersonlinewiki.eu/images/mieczbraz.png',
        category: ['weapon'],
        grade: 'intermediate',
    },
    "bow": {
        name: 'Bow',
        icon: 'https://settlersonlinewiki.eu/images/luk.png',
        category: ['weapon'],
        grade: 'intermediate',
    },
    "simple_paper": {
        name: 'Simple Paper',
        icon: 'https://settlersonlinewiki.eu/images/zwyklypapier.png',
        category: ['science'],
        grade: 'intermediate',
    },
    "nib": {
        name: 'Nib',
        icon: 'https://settlersonlinewiki.eu/images/stalowka.png',
        category: ['science'],
        grade: 'intermediate',
    },
    "manuscript": {
        name: 'Manuscript',
        icon: 'https://settlersonlinewiki.eu/images/manuskrypt2.png',
        category: ['book'],
        grade: 'intermediate',
    },
    "adventure_tale": {
        name: 'Aventure Tale',
        icon: 'https://settlersonlinewiki.eu/images/opowiesc.png',
        category: ['science', 'adventure'],
        grade: 'intermediate',
    },
};

const advancedResources = {
    "hardwood": {
        name: 'Hardwood',
        icon: 'https://settlersonlinewiki.eu/images/pienlisc.png',
        category: [],
        grade: 'advanced',
    },
    "hardwood_plank": {
        name: 'Hardwood Plank',
        icon: 'https://settlersonlinewiki.eu/images/deskilisc.png',
        category: ['construction'],
        grade: 'advanced',
    },
    "iron_ore": {
        name: 'Iron Ore',
        icon: 'https://settlersonlinewiki.eu/images/zelazo.png',
        category: ['mine'],
        grade: 'advanced',
    },
    "iron": {
        name: 'Iron',
        icon: 'https://settlersonlinewiki.eu/images/zelazo2.png',
        category: [],
        grade: 'advanced',
    },
    "steel": {
        name: 'Steel',
        icon: 'https://settlersonlinewiki.eu/images/stal.png',
        category: [],
        grade: 'advanced',
    },
    "gold_ore": {
        name: 'Gold Ore',
        icon: 'https://settlersonlinewiki.eu/images/zloto.png',
        category: ['mine'],
        grade: 'advanced',
    },
    "gold": {
        name: 'Gold',
        icon: 'https://settlersonlinewiki.eu/images/zloto2.png',
        category: [],
        grade: 'advanced',
    },
    "coin": {
        name: 'Coin',
        icon: 'https://settlersonlinewiki.eu/images/monety.png',
        category: ['construction'],
        grade: 'advanced',
    },
    "marble": {
        name: 'Marble',
        icon: 'https://settlersonlinewiki.eu/images/marmur.png',
        category: ['construction'],
        grade: 'advanced',
    },
    "meat": {
        name: 'Meat',
        icon: 'https://settlersonlinewiki.eu/images/mieso.png',
        category: ['food', 'materia'],
        grade: 'advanced',
    },
    "sausage": {
        name: 'Sausage',
        icon: 'https://settlersonlinewiki.eu/images/wedliny.png',
        category: ['food'],
        grade: 'advanced',
    },
    "horse": {
        name: 'Horse',
        icon: 'https://settlersonlinewiki.eu/images/kon.png',
        category: ['weapon', 'barrack'],
        grade: 'advanced',
    },
    "iron_sword": {
        name: 'Iron Sword',
        icon: 'https://settlersonlinewiki.eu/images/mieczzelazo.png',
        category: ['weapon', 'barrack'],
        grade: 'advanced',
    },
    "steel_sword": {
        name: 'Steel Sword',
        icon: 'https://settlersonlinewiki.eu/images/mieczstal.png',
        category: ['weapon', 'barrack'],
        grade: 'advanced',
    },
    "longbow": {
        name: 'Longbow',
        icon: 'https://settlersonlinewiki.eu/images/luk2.png',
        category: ['weapon', 'barrack'],
        grade: 'advanced',
    },
    "intermediate_paper": {
        name: 'Intermediate Paper',
        icon: 'https://settlersonlinewiki.eu/images/dobrypapier.png',
        category: ['science'],
        grade: 'advanced',
    },
    "printing_press_letter": {
        name: 'Printing Press Letter',
        icon: 'https://settlersonlinewiki.eu/images/czcionka.png',
        category: ['science'],
        grade: 'advanced',
    },
    "tome": {
        name: 'Tome',
        icon: 'https://settlersonlinewiki.eu/images/tom2.png',
        category: ['book'],
        grade: 'advanced',
    },
    "attack_pike": {
        name: 'Attack Pike',
        icon: 'https://settlersonlinewiki.eu/images4/wlocznia.png',
        category: ['weapon', 'pvp'],
        grade: 'advanced',
    },
    "attack_bow": {
        name: 'Attack Bow',
        icon: 'https://settlersonlinewiki.eu/images4/luk3.png',
        category: ['weapon', 'pvp'],
        grade: 'advanced',
    },
    "heavy_crossbow": {
        name: 'Heavy Crossbow',
        icon: 'https://settlersonlinewiki.eu/images4/kusza2.png',
        category: ['weapon', 'pvp'],
        grade: 'advanced',
    },
    "heavy_lance": {
        name: 'Heavy Lance',
        icon: 'https://settlersonlinewiki.eu/images4/lanca.png',
        category: ['weapon', 'pvp'],
        grade: 'advanced',
    },
    "attack_sabre": {
        name: 'Attack Sabre',
        icon: 'https://settlersonlinewiki.eu/images4/szabla.png',
        category: ['weapon', 'pvp'],
        grade: 'advanced',
    },
    "heavy_mace": {
        name: 'Heavy Mace',
        icon: 'https://settlersonlinewiki.eu/images4/buzdygan.png',
        category: ['weapon', 'pvp'],
        grade: 'advanced',
    },
};

const expertResources = {
    "exotic_wood": {
        name: 'Exotic Wood',
        icon: 'https://settlersonlinewiki.eu/images/pienegzo.png',
        category: [],
        grade: 'expert',
    },
    "exotic_wood_plank": {
        name: 'Exotic Wood Plank',
        icon: 'https://settlersonlinewiki.eu/images/deskiegzo.png',
        category: ['construction'],
        grade: 'expert',
    },
    "titanium_ore": {
        name: 'Titanium Ore',
        icon: 'https://settlersonlinewiki.eu/images/tytan.png',
        category: ['mine'],
        grade: 'expert',
    },
    "titanium": {
        name: 'Titanium',
        icon: 'https://settlersonlinewiki.eu/images/tytan2.png',
        category: [],
        grade: 'expert',
    },
    "saltpeter": {
        name: 'Saltpeter',
        icon: 'https://settlersonlinewiki.eu/images/saletra.png',
        category: ['mine'],
        grade: 'expert',
    },
    "gunpowder": {
        name: 'Gunpowder',
        icon: 'https://settlersonlinewiki.eu/images/proch.png',
        category: [],
        grade: 'expert',
    },
    "granite": {
        name: 'Granite',
        icon: 'https://settlersonlinewiki.eu/images/granit.png',
        category: ['construction'],
        grade: 'expert',
    },
    "wheel": {
        name: 'Wheel',
        icon: 'https://settlersonlinewiki.eu/images/kolo.png',
        category: [],
        grade: 'expert',
    },
    "carriage": {
        name: 'Carriage',
        icon: 'https://settlersonlinewiki.eu/images/wozek.png',
        category: [],
        grade: 'expert',
    },
    "damascene_sword": {
        name: 'Damascene Sword',
        icon: 'https://settlersonlinewiki.eu/images/mieczdama.png',
        category: ['weapon'],
        grade: 'expert',
    },
    "crossbow": {
        name: 'Crossbow',
        icon: 'https://settlersonlinewiki.eu/images/kusza.png',
        category: ['weapon'],
        grade: 'expert',
    },
    "cannon": {
        name: 'Cannon',
        icon: 'https://settlersonlinewiki.eu/images/armata.png',
        category: ['weapon'],
        grade: 'expert',
    },
    "advanced_paper": {
        name: 'Advanced Paper',
        icon: 'https://settlersonlinewiki.eu/images/najlepszypapier.png',
        category: ['science'],
        grade: 'expert',
    },
    "book_fitting": {
        name: 'Book Fitting',
        icon: 'https://settlersonlinewiki.eu/images/oprawaksiag.png',
        category: ['science'],
        grade: 'expert',
    },
    "codex": {
        name: 'Codex',
        icon: 'https://settlersonlinewiki.eu/images/ksiega2.png',
        category: ['book'],
        grade: 'expert',
    },
    "magic_bean": {
        name: 'Magic Bean',
        icon: 'https://settlersonlinewiki.eu/images/fasola.png',
        category: ['adventure', 'epic_currency'],
        grade: 'expert',
    },
    "magic_beanstalk": {
        name: 'Magic Beanstalk',
        icon: 'https://settlersonlinewiki.eu/images/lodyga.png',
        category: ['adventure', 'epic_currency'],
        grade: 'expert',
    },
    "star_coin": {
        name: 'Star Coin',
        icon: 'https://settlersonlinewiki.eu/images/starcoins2.png',
        category: ['adventure', 'epic_currency'],
        grade: 'expert',
    },
    "grout": {
        name: 'Grout',
        icon: 'https://settlersonlinewiki.eu/images/cement.png',
        category: ['construction'],
        grade: 'expert',
    },
    "valour_point": {
        name: 'Valour Point',
        icon: 'https://settlersonlinewiki.eu/images4/valorpoints.png',
        category: ['pvp'],
        grade: 'expert',
    },
    "oil": {
        name: 'Oil',
        icon: 'https://settlersonlinewiki.eu/images/oil.png',
        category: ['construction'],
        grade: 'expert',
    },
    "advanced_tool": {
        name: 'Acvanced Tool',
        icon: 'https://settlersonlinewiki.eu/images/narzedzia.png',
        category: ['construction'],
        grade: 'expert',
    },
    "oilseed": {
        name: 'Oilseed',
        icon: 'https://settlersonlinewiki.eu/images/slonecznik.png',
        category: [],
        grade: 'expert',
    },
};

const eliteResources = {
    "platinum_ore": {
        name: 'Platinum Ore',
        icon: 'https://settlersonlinewiki.eu/images/platyna.png',
        category: [],
        grade: 'elite',
    },
    "platinum": {
        name: 'Platinum',
        icon: 'https://settlersonlinewiki.eu/images/platyna2.png',
        category: [],
        grade: 'elite',
    },
    "wool": {
        name: 'Wool',
        icon: 'https://settlersonlinewiki.eu/images/welna.png',
        category: [],
        grade: 'elite',
    },
    "woolen_cloth": {
        name: 'Woolen Cloth',
        icon: 'https://settlersonlinewiki.eu/images/welnianeubranie.png',
        category: [],
        grade: 'elite',
    },
    "saddle_cloth": {
        name: 'Saddle Cloth',
        icon: 'https://settlersonlinewiki.eu/images/siodlo.png',
        category: [],
        grade: 'elite',
    },
    "mahogany_wood": {
        name: 'Mahogany Wood',
        icon: 'https://settlersonlinewiki.eu/images/pienmahon.png',
        category: [],
        grade: 'elite',
    },
    "mahogany_plank": {
        name: 'Mahogany Plank',
        icon: 'https://settlersonlinewiki.eu/images/deskimahon.png',
        category: ['construction'],
        grade: 'elite',
    },
    "wagon": {
        name: 'Wagon',
        icon: 'https://settlersonlinewiki.eu/images/wagon.png',
        category: [],
        grade: 'elite',
    },
    "obsidian_ore": {
        name: 'Obsidian Ore',
        icon: 'https://settlersonlinewiki.eu/images/obsydian.png',
        category: ['epic_currency'],
        grade: 'elite',
    },
    "platinum_sword": {
        name: 'Platinum Sword',
        icon: 'https://settlersonlinewiki.eu/images/mieczplatyna.png',
        category: ['weapon', 'barrack'],
        grade: 'elite',
    },
    "battle_horse": {
        name: 'Battle Horse',
        icon: 'https://settlersonlinewiki.eu/images/konbitewny.png',
        category: ['weapon', 'barrack'],
        grade: 'elite',
    },
    "arquebus": {
        name: 'Arquebus',
        icon: 'https://settlersonlinewiki.eu/images/arkabuz.png',
        category: ['weapon', 'barrack'],
        grade: 'elite',
    },
    "mortar": {
        name: 'Mortar',
        icon: 'https://settlersonlinewiki.eu/images/mozdzierz.png',
        category: ['weapon', 'barrack'],
        grade: 'elite',
    },
};

const collectibleResources = {

    "herb": {
        name: 'Herbs',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "scarecrow": {
        name: 'Scarecrow',
        icon: 'https://settlersonlinewiki.eu/images/scarecrow.png',
        category: ['collectible'],
    },
    "food_cart": {
        name: 'Food Cart',
        icon: 'https://settlersonlinewiki.eu/images/foodcart.png',
        category: ['collectible'],
    },
    "kettle": {
        name: 'Kettle',
        icon: 'https://settlersonlinewiki.eu/images/kettle.png',
        category: ['collectible'],
    },
    "banner": {
        name: 'Banner',
        icon: 'https://settlersonlinewiki.eu/images/banner.png',
        category: ['collectible'],
    },
    "bronze_cauldron": {
        name: 'Bronze Cauldron',
        icon: 'https://settlersonlinewiki.eu/images/cauldron.png',
        category: ['collectible'],
    },
    "barrel": {
        name: 'Barrel',
        icon: 'https://settlersonlinewiki.eu/images/barrel.png',
        category: ['collectible'],
    },
    "grain_sack": {
        name: 'Grain Sack',
        icon: 'https://settlersonlinewiki.eu/images/sack.png',
        category: ['collectible'],
    },
    "leather": {
        name: 'Leather',
        icon: 'https://settlersonlinewiki.eu/images/bundle.png',
        category: ['collectible'],
    },
    "adamantium_ore": {
        name: 'Adamantium Ore',
        icon: 'https://settlersonlinewiki.eu/images/ore.png',
        category: ['collectible'],
    },
};

const specialResources = {
    "gem": {
        name: 'Gem',
        icon: 'https://www.settlersonlinewiki.eu/images/diament.png',
        category: ['special', 'currency', 'shop'],
    }
};

const eventResources = {
    "easter_egg": {
        name: 'Easter Egg',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "easter_eggs_in_stripes": {
        name: 'Easter Eggs in Stripes',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "pumpkin": {
        name: 'Pumpkin',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "present": {
        name: 'Present',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "football": {
        name: 'Football',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "ballon": {
        name: 'Ballon',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "token": {
        name: 'Token',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
    "valentine_flower": {
        name: 'Valentine Flowers',
        icon: 'https://settlersonlinewiki.eu/images/herbs.png',
        category: ['collectible'],
    },
};

const resources = {
    ...basicResources,
    ...intermediateResources,
    ...advancedResources,
    ...expertResources,
    ...eliteResources,
};

const allResources = {
    ...resources,
    ...collectibleResources,
    ...deposits,
    ...specialResources,
};