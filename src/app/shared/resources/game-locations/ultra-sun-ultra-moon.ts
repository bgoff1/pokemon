import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.UltraSunUltraMoon,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['rowlet', 'litten', 'popplio'],
      order: 0
    },
    {
      location: 'Purchased Konikoni City Fossil',
      pokemon: [
        'omanyte',
        'kabuto',
        'lileep',
        'anorith',
        'cranidos',
        'shieldon',
        'tirtouga',
        'archen',
        'tyrunt',
        'amaura'
      ],
      order: 27
    },
    {
      location: 'Ultra Beast Gift',
      pokemon: ['poipole'],
      order: 54
    },
    {
      location: '20 Totem Stickers',
      pokemon: ['gumshoos', 'raticate-alola'],
      order: 1000
    },
    {
      location: '40 Totem Stickers',
      pokemon: ['araquanid', 'marowak-alola'],
      order: 1001
    },
    {
      location: '50 Totem Stickers',
      pokemon: ['lurantis', 'salazzle'],
      order: 1002
    },
    {
      location: '70 Totem Stickers',
      pokemon: ['togedemaru', 'vikavolt'],
      order: 1003
    },
    {
      location: '80 Totem Stickers',
      pokemon: ['mimikyu'],
      order: 1004
    },
    {
      location: '100 Totem Stickers',
      pokemon: ['ribombee', 'kommo-o'],
      order: 1005
    }
  ],
  statics: [
    {
      location: 'Mount Lanakila Legendary',
      pokemon: ['necrozma'],
      order: 56
    },
    {
      location: 'Title Legendary',
      pokemon: ['solgaleo', 'lunala'],
      order: 57
    }
  ],
  encounters: [
    {
      location: 'Route 1',
      pokemon: [
        'caterpie',
        'rattata-alola',
        'ledyba',
        'spinarak',
        'pichu',
        'pikachu',
        'happiny',
        'buneary',
        'pikipek',
        'yungoos',
        'grubbin',
        'bonsly',
        'sudowoodo',
        'munchlax',
        'snorlax',
        'rockruff'
      ],
      order: 1
    },
    {
      location: "Hau'oli Outskirts",
      pokemon: [
        'slowpoke',
        'wingull',
        'inkay',
        'tentacool',
        'mantyke',
        'remoraid',
        'finneon'
      ],
      order: 2
    },
    {
      location: "Trainers' School",
      pokemon: ['meowth-alola', 'magnemite', 'grimer-alola', 'zorua'],
      order: 3
    },
    {
      location: "Hau'oli City",
      pokemon: [
        'tentacool',
        'wingull',
        'finneon',
        'mantyke',
        'remoraid',
        'meowth-alola',
        'abra',
        'magnemite',
        'grimer-alola',
        'mime jr.',
        'mr. mime',
        'happiny',
        'furfrou',
        'scatterbug'
      ],
      order: 4
    },
    {
      location: 'Route 2',
      pokemon: [
        'rattata-alola',
        'ekans',
        'meowth-alola',
        'abra',
        'drowzee',
        'smeargle',
        'makuhita',
        'furfrou',
        'yungoos',
        'spearow',
        'growlithe',
        'cutiefly',
        'dunsparce',
        'crabrawler'
      ],
      order: 5
    },
    {
      location: "Hau'oli Cemetary",
      pokemon: ['zubat', 'gastly', 'murkrow', 'drifloon', 'litwick'],
      order: 6
    },
    {
      location: 'Verdant Cavern',
      pokemon: ['zubat', 'diglett-alola', 'noibat', 'rattata-alola', 'yungoos'],
      order: 7
    },
    {
      location: 'Route 3',
      pokemon: [
        'spearow',
        'mankey',
        'hawlucha',
        'cutiefly',
        'bagon',
        'salamence',
        'rufflet',
        'vullaby',
        'crabrawler'
      ],
      order: 8
    },
    {
      location: 'Melemele Meadow',
      pokemon: [
        'caterpie',
        'metapod',
        'butterfree',
        'cottonee',
        'petilil',
        'flabébé',
        'oricorio',
        'cutiefly'
      ],
      order: 9
    },
    {
      location: 'Seaward Cave',
      pokemon: [
        'zubat',
        'psyduck',
        'delibird',
        'smoochum',
        'jynx',
        'happiny',
        'seel',
        'magikarp',
        'gyarados',
        'barboach',
        'whiscash'
      ],
      order: 10
    },
    {
      location: 'Ten Carat Hill',
      pokemon: [
        'zubat',
        'psyduck',
        'mawile',
        'roggenrola',
        'carbink',
        'sableye',
        'machop',
        'spinda',
        'rockruff',
        'onix'
      ],
      order: 11
    },
    {
      location: 'Route 4',
      pokemon: [
        'rattata-alola',
        'eevee',
        'espeon',
        'umbreon',
        'igglybuff',
        'jigglypuff',
        'happiny',
        'lillipup',
        'pikipek',
        'yungoos',
        'grubbin',
        'mudbray',
        'crabrawler',
        'beedrill'
      ],
      order: 12
    },
    {
      location: 'Paniola Town',
      pokemon: ['magikarp', 'gyarados', 'barboach', 'whiscash'],
      order: 16
    },
    {
      location: 'Paniola Ranch',
      pokemon: ['tauros', 'miltank', 'mareep', 'lillipup', 'mudbray'],
      order: 13
    },
    {
      location: 'Route 5',
      pokemon: [
        'caterpie',
        'metapod',
        'butterfree',
        'lillipup',
        'pikipek',
        'grubbin',
        'fomantis',
        'crabrawler',
        'grovyle'
      ],
      order: 14
    },
    {
      location: 'Brooklet Hill',
      pokemon: [
        'paras',
        'psyduck',
        'poliwag',
        'wingull',
        'surskit',
        'dewpider',
        'morelull',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'feebas',
        'basculin',
        'tentacool',
        'finneon',
        'alomomola',
        'wishiwashi',
        'marshtomp'
      ],
      order: 15
    },
    {
      location: 'Route 6',
      pokemon: [
        'rattata-alola',
        'eevee',
        'espeon',
        'umbreon',
        'igglybuff',
        'jigglypuff',
        'happiny',
        'lillipup',
        'pikipek',
        'yungoos',
        'grubbin',
        'mudbray',
        'oricorio',
        'ralts'
      ],
      order: 17
    },
    {
      location: 'Route 7',
      pokemon: [
        'diglett-alola',
        'tentacool',
        'wingull',
        'finneon',
        'pyukumuku',
        'staryu',
        'starmie',
        'magikarp',
        'gyarados',
        'wishiwashi',
        'spheal'
      ],
      order: 18
    },
    {
      location: 'Wela Volcano Park',
      pokemon: [
        'cubone',
        'kangaskhan',
        'magby',
        'magmar',
        'happiny',
        'fletchling',
        'fletchinder',
        'salandit',
        'salazzle'
      ],
      order: 19
    },
    {
      location: 'Melemele Sea',
      pokemon: [
        'tentacool',
        'wingull',
        'mantyke',
        'remoraid',
        'finneon',
        'magikarp',
        'gyarados',
        'corsola',
        'mareanie',
        'octillery',
        'clamperl',
        'gorebyss',
        'huntail',
        'luvdisc',
        'wishiwashi'
      ],
      order: 20
    },
    {
      location: "Kala'e Bay",
      pokemon: [
        'rattata-alola',
        'slowpoke',
        'slowbro',
        'slowking',
        'wingull',
        'bagon',
        'shelgon',
        'yungoos',
        'tentacool',
        'finneon',
        'mantyke',
        'remoraid',
        'shellder',
        'magikarp',
        'gyarados',
        'octillery',
        'wishiwashi',
        'horsea'
      ],
      order: 21
    },
    {
      location: 'Dividing Peak Tunnel',
      pokemon: ['kecleon', 'wimpod'],
      order: 22
    },
    {
      location: 'Route 8',
      pokemon: [
        'rattata-alola',
        'raticate-alola',
        'fletchling',
        'fletchinder',
        'trumbeak',
        'yungoos',
        'gumshoos',
        'salandit',
        'stufful',
        'crabrawler',
        'wimpod',
        'tentacool',
        'wingull',
        'finneon',
        'mantyke',
        'remoraid',
        'magikarp',
        'gyarados',
        'chinchou',
        'octillery',
        'wishiwashi',
        'combusken'
      ],
      order: 23
    },
    {
      location: 'Lush Jungle',
      pokemon: [
        'caterpie',
        'metapod',
        'butterfree',
        'paras',
        'pinsir',
        'hoothoot',
        'noctowl',
        'bonsly',
        'sudowoodo',
        'happiny',
        'trumbeak',
        'fomantis',
        'morelull',
        'steenee',
        'comfey',
        'oranguru',
        'passimian',
        'goomy',
        'castform',
        'golbat',
        'crobat',
        'dugtrio-alola',
        'larvesta',
        'volcarona',
        'salandit',
        'salazzle'
      ],
      order: 24
    },
    {
      location: "Diglett's Tunnel",
      pokemon: ['zubat', 'golbat', 'diglett-alola', 'larvitar'],
      order: 25
    },
    {
      location: 'Route 9',
      pokemon: [
        'magikarp',
        'gyarados',
        'corsola',
        'mareanie',
        'luvdisc',
        'wishiwashi'
      ],
      order: 26
    },
    {
      location: 'Memorial Hill',
      pokemon: ['zubat', 'golbat', 'gastly', 'phantump'],
      order: 28
    },
    {
      location: 'Akala Outskirts',
      pokemon: [
        'raticate-alola',
        'natu',
        'xatu',
        'wingull',
        'nosepass',
        'gumshoos',
        'stufful',
        'magikarp',
        'gyarados',
        'chinchou',
        'lanturn',
        'wishiwashi',
        'honedge'
      ],
      order: 29
    },
    {
      location: 'Hano Beach',
      pokemon: [
        'staryu',
        'starmie',
        'sandygast',
        'tentacool',
        'wingull',
        'finneon',
        'pyukumuku'
      ],
      order: 30
    },
    {
      location: 'Malie Garden',
      pokemon: [
        'meowth-alola',
        'persian-alola',
        'psyduck',
        'poliwhirl',
        'poliwrath',
        'politoed',
        'ledian',
        'ariados',
        'masquerain',
        'cottonee',
        'petilil',
        'araquanid',
        'castform',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'basculin'
      ],
      order: 31
    },
    {
      location: 'Outer Cape',
      pokemon: ['magnemite', 'grimer-alola', 'trubbish', 'minccino'],
      order: 32
    },
    {
      location: 'Route 10',
      pokemon: [
        'raticate-alola',
        'fearow',
        'ledian',
        'ariados',
        'skarmory',
        'pancham',
        'pangoro',
        'gumshoos',
        'pineco',
        'crabrawler',
        'pidgeot'
      ],
      order: 33
    },
    {
      location: 'Mount Hokulani',
      pokemon: [
        'fearow',
        'ditto',
        'cleffa',
        'clefairy',
        'happiny',
        'skarmory',
        'elekid',
        'electabuzz',
        'beldum',
        'elgyem',
        'minior',
        'axew'
      ],
      order: 34
    },
    {
      location: 'Route 11',
      pokemon: [
        'parasect',
        'ledian',
        'ariados',
        'pancham',
        'pangoro',
        'trumbeak',
        'toucannon',
        'shiinotic',
        'komala',
        'monferno'
      ],
      order: 35
    },
    {
      location: 'Route 12',
      pokemon: [
        'graveler-alola',
        'houndoom',
        'manectric',
        'torkoal',
        'mudbray',
        'mudsdale'
      ],
      order: 36
    },
    {
      location: 'Blush Mountain',
      pokemon: [
        'graveler-alola',
        'elekid',
        'electabuzz',
        'happiny',
        'torkoal',
        'dedenne',
        'togedemaru',
        'charjabug',
        'vikavolt',
        'mudbray',
        'mudsdale',
        'turtonator',
        'rhyhorn'
      ],
      order: 37
    },
    {
      location: "Ula'ula Beach",
      pokemon: ['crabrawler'],
      order: 38
    },
    {
      location: 'Route 13',
      pokemon: ['magikarp', 'gyarados', 'wishiwashi', 'bruxish'],
      order: 39
    },
    {
      location: 'Tapu Village',
      pokemon: [
        'raticate-alola',
        'sandshrew-alola',
        'vulpix-alola',
        'pelipper',
        'absol',
        'snorunt',
        'gumshoos',
        'vanillite',
        'castform',
        'phantump',
        'swinub'
      ],
      order: 40
    },
    {
      location: 'Route 14',
      pokemon: [
        'tentacruel',
        'pelipper',
        'finneon',
        'frillish',
        'magikarp',
        'gyarados',
        'wishiwashi',
        'bruxish'
      ],
      order: 41
    },
    {
      location: 'Thrifty Megamart (Abandoned Site)',
      pokemon: ['golbat', 'haunter', 'gengar', 'shuppet', 'klefki', 'mimikyu'],
      order: 42
    },
    {
      location: 'Haina Desert',
      pokemon: [
        'dugtrio-alola',
        'golett',
        'baltoy',
        'krokorok',
        'trapinch',
        'gabite',
        'castform'
      ],
      order: 43
    },
    {
      location: 'Route 15',
      pokemon: [
        'raticate-alola',
        'slowpoke',
        'pelipper',
        'gumshoos',
        'tentacruel',
        'finneon',
        'lumineon',
        'magikarp',
        'gyarados',
        'clamperl',
        'gorebyss',
        'huntail',
        'wishiwashi',
        'bruxish'
      ],
      order: 44
    },
    {
      location: 'Route 16',
      pokemon: [
        'raticate-alola',
        'slowpoke',
        'pelipper',
        'scraggy',
        'gumshoos',
        'crabrawler',
        'prinplup'
      ],
      order: 45
    },
    {
      location: "Ula'ula Meadow",
      pokemon: [
        'ledian',
        'ariados',
        'cottonee',
        'petilil',
        'floette',
        'oricorio',
        'ribombee',
        'grotle'
      ],
      order: 46
    },
    {
      location: 'Route 17',
      pokemon: [
        'raticate-alola',
        'fearow',
        'ledian',
        'ariados',
        'scraggy',
        'gumshoos',
        'graveler-alola',
        'skarmory',
        'bisharp',
        'goomy',
        'castform',
        'crabrawler'
      ],
      order: 47
    },
    {
      location: 'Seafolk Village',
      pokemon: ['magikarp', 'gyarados', 'wailmer', 'wailord', 'dhelmise'],
      order: 48
    },
    {
      location: 'Poni Wilds',
      pokemon: [
        'granbull',
        'pelipper',
        'gastrodon',
        'furfrou',
        'inkay',
        'crabrawler',
        'greninja'
      ],
      order: 49
    },
    {
      location: 'Ancient Poni Path',
      pokemon: [
        'granbull',
        'pelipper',
        'gastrodon',
        'furfrou',
        'inkay',
        'delphox'
      ],
      order: 50
    },
    {
      location: 'Poni Breaker Coast',
      pokemon: [
        'tentacruel',
        'lapras',
        'pelipper',
        'gastrodon',
        'lumineon',
        'magikarp',
        'gyarados',
        'carvanha',
        'sharpedo',
        'wailmer',
        'wailord',
        'relicanth',
        'wimpod',
        'dragalge',
        'clawitzer'
      ],
      order: 51
    },
    {
      location: 'Exeggutor Island',
      pokemon: [
        'exeggcute',
        'exeggutor-alola',
        'pinsir',
        'pelipper',
        'tropius',
        'gastrodon',
        'sliggoo',
        'castform',
        'chesnaught'
      ],
      order: 52
    },
    {
      location: 'Vast Poni Canyon',
      pokemon: [
        'machoke',
        'skarmory',
        'boldore',
        'mienfoo',
        'carbink',
        'lycanroc',
        'jangmo-o',
        'kommo-o',
        'hakamo-o',
        'golbat',
        'dugtrio-alola',
        'sableye',
        'golduck',
        'magikarp',
        'gyarados',
        'barboach',
        'whiscash',
        'corphish',
        'crawdaunt',
        'basculin'
      ],
      order: 53
    },
    {
      location: 'Mount Lanakila',
      pokemon: [
        'raticate-alola',
        'sandshrew-alola',
        'vulpix-alola',
        'absol',
        'snorunt',
        'gumshoos',
        'sneasel',
        'glalie',
        'golbat',
        'drampa',
        'castform',
        'vanillish',
        'vanilluxe'
      ],
      order: 55
    }
  ]
};

export const ultraSunExclusives = [
  'vulpix',
  'ninetales',
  'omanyte',
  'omastar',
  'houndour',
  'houndoom',
  'raikou',
  'ho-oh',
  'anorith',
  'armaldo',
  'latios',
  'groudon',
  'cranidos',
  'rampardos',
  'dialga',
  'heatran',
  'tirtouga',
  'carracosta',
  'cottonee',
  'whimsicott',
  'golett',
  'golurk',
  'tornadus',
  'reshiram',
  'clauncher',
  'clawitzer',
  'tyrunt',
  'tyrantrum',
  'xerneas',
  'rufflet',
  'braviary',
  'passimian',
  'turtonator',
  'solgaleo',
  'buzzwole',
  'blacephalon',
  'kartana'
];
export const ultraMoonExclusives = [
  'sandshrew',
  'sandslash',
  'kabuto',
  'kabutops',
  'entei',
  'lugia',
  'electrike',
  'manectric',
  'baltoy',
  'claydol',
  'lileep',
  'cradily',
  'latias',
  'kyogre',
  'shieldon',
  'bastiodon',
  'palkia',
  'regigigas',
  'archen',
  'archeops',
  'petilil',
  'lilligant',
  'vullaby',
  'mandibuzz',
  'thundurus',
  'zekrom',
  'skrelp',
  'dragalge',
  'amaura',
  'aurorus',
  'yveltal',
  'stakataka',
  'oranguru',
  'drampa',
  'lunala',
  'pheromosa',
  'celesteela'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.UltraSunUltraMoon),
  [ultraSunExclusives, ultraMoonExclusives]
);
