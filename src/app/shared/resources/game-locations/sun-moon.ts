import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.SunMoon,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['rowlet', 'litten', 'popplio'],
      order: 0
    },
    {
      location: 'Paniola Ranch Egg',
      pokemon: ['eevee'],
      order: 15
    },
    {
      location: 'Seafolk Village',
      pokemon: ['aerodactyl'],
      order: 48
    }
  ],
  statics: [
    {
      location: 'Exeggutor Island',
      pokemon: ['exeggutor-alola'],
      order: 53
    },
    {
      location: 'Cell Collection',
      pokemon: ['zygarde'],
      order: 9999
    },
    {
      location: 'Title Legendary',
      pokemon: ['solgaleo', 'lunala'],
      order: 55
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
        'pikipek',
        'yungoos',
        'metapod',
        'pichu',
        'pikachu',
        'happiny',
        'grubbin',
        'bonsly',
        'sudowoodo',
        'munchlax',
        'snorlax'
      ],
      order: 1
    },
    {
      location: "Hau'oli Outskirts",
      pokemon: ['rattata-alola', 'slowpoke', 'wingull', 'yungoos'],
      order: 2
    },
    {
      location: 'Trainers School',
      pokemon: ['meowth-alola', 'magnemite', 'grimer-alola'],
      order: 3
    },
    {
      location: "Hau'oli City",
      pokemon: [
        'rattata-alola',
        'meowth-alola',
        'abra',
        'magnemite',
        'grimer-alola',
        'pichu',
        'pikachu',
        'happiny',
        'wingull',
        'yungoos',
        'klink'
      ],
      order: 4
    },
    {
      location: 'Route 2',
      pokemon: [
        'rattata-alola',
        'meowth-alola',
        'abra',
        'drowzee',
        'smeargle',
        'yungoos',
        'spearow',
        'growlithe',
        'cutiefly',
        'makuhita',
        'crabrawler',
        'chikorita'
      ],
      order: 5
    },
    {
      location: "Hau'oli Cemetary",
      pokemon: ['zubat', 'gastly', 'misdreavus', 'drifloon', 'litwick'],
      order: 6
    },
    {
      location: 'Berry Fields',
      pokemon: ['crabrawler'],
      order: 7
    },
    {
      location: 'Verdant Cavern',
      pokemon: ['zubat', 'diglett-alola', 'rattata-alola', 'yungoos'],
      order: 8
    },
    {
      location: 'Route 3',
      pokemon: [
        'rattata-alola',
        'spearow',
        'mankey',
        'delibird',
        'yungoos',
        'cutiefly',
        'bagon',
        'salamence',
        'rufflet',
        'vullaby',
        'crabrawler',
        'cyndaquil'
      ],
      order: 9
    },
    {
      location: 'Melemele Meadow',
      pokemon: [
        'caterpie',
        'metapod',
        'butterfree',
        'cottonee',
        'petilil',
        'oricorio',
        'cutiefly'
      ],
      order: 10
    },
    {
      location: 'Seaward Cave',
      pokemon: ['zubat', 'diglett-alola', 'totodile'],
      order: 11
    },
    {
      location: 'Ten Carat Hill',
      pokemon: [
        'zubat',
        'diglett-alola',
        'roggenrola',
        'carbink',
        'deino',
        'machop',
        'spinda',
        'rockruff'
      ],
      order: 12
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
        ' pikipek',
        'yungoos',
        'grubbin',
        'mudbray',
        'crabrawler',
        'venipede'
      ],
      order: 13
    },
    {
      location: 'Paniola Ranch',
      pokemon: ['tauros', 'miltank', 'lillipup', 'mudbray'],
      order: 14
    },
    {
      location: 'Route 5',
      pokemon: [
        'caterpie',
        'butterfree',
        'metapod',
        'lillipup',
        'pikipek',
        'trumbeak',
        'bonsly',
        'sudowoodo',
        'happiny',
        'diglett-alola',
        'grubbin',
        'fomantis',
        'crabrawler',
        'bellsprout'
      ],
      order: 16
    },
    {
      location: 'Brooklet Hill',
      pokemon: [
        'paras',
        'psyduck',
        'poliwag',
        'wingull',
        'surskit',
        'lillipup',
        'dewpider',
        'morelull',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'feebas',
        'marill'
      ],
      order: 17
    },
    {
      location: 'Route 6',
      pokemon: [
        'rattata-alola',
        'eevee',
        'espeon',
        'umbreon',
        'igglybuff',
        'lillipup',
        'pikipek',
        'yungoos',
        'grubbin',
        'mudbray',
        'oricorio',
        'gothita'
      ],
      order: 18
    },
    {
      location: 'Route 7',
      pokemon: [
        'diglett-alola',
        'staryu',
        'starmie',
        'magikarp',
        'gyarados',
        'wishiwashi',
        'spheal'
      ],
      order: 19
    },
    {
      location: 'Wela Volcano Park',
      pokemon: [
        'cubone',
        'kangaskhan',
        'magby',
        'magmar',
        'fletchling',
        'salandit'
      ],
      order: 20
    },
    {
      location: 'Melemele Sea',
      pokemon: [
        'tentacool',
        'wingull',
        'finneon',
        'magikarp',
        'gyarados',
        'corsola',
        'mareanie',
        'luvdisc',
        'wishiwashi'
      ],
      order: 21
    },
    {
      location: "Kala'e Bay",
      pokemon: [
        'rattata-alola',
        'slowpoke',
        'slowbro',
        'wingull',
        'bagon',
        'shelgon',
        'yungoos',
        'tentacool',
        'finneon',
        'shellder',
        'magikarp',
        'gyarados',
        'wishiwashi',
        'horsea'
      ],
      order: 22
    },
    {
      location: 'Route 8',
      pokemon: [
        'rattata-alola',
        'fletchinder',
        'trumbeak',
        'pikipek',
        'yungoos',
        'salandit',
        'stufful',
        'crabrawler',
        'tentacool',
        'wingull',
        'finneon',
        'magikarp',
        'gyarados',
        'chinchou',
        'wishiwashi',
        'wimpod',
        'luxio'
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
        'bonsly',
        'sudowoodo',
        'happiny',
        'trumbeak',
        'fomantis',
        'morelull',
        'comfey',
        'oranguru',
        'passimian',
        'bounsweet',
        'pinsir',
        'goomy',
        'castform',
        'zubat',
        'diglett-alola'
      ],
      order: 24
    },
    {
      location: "Diglett's Tunnel",
      pokemon: ['zubat', 'diglett-alola'],
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
      pokemon: ['zubat', 'gastly', 'phantump'],
      order: 27
    },
    {
      location: 'Akala Outskirts',
      pokemon: [
        'raticate-alola',
        'wingull',
        'nosepass',
        'gumshoos',
        'stufful',
        'magikarp',
        'gyarados',
        'chinchou',
        'wishiwashi',
        'honedge'
      ],
      order: 28
    },
    {
      location: 'Hano Beach',
      pokemon: [
        'staryu',
        'sandygast',
        'tentacool',
        'wingull',
        'finneon',
        'pyukumuku'
      ],
      order: 29
    },
    {
      location: 'Malie Garden',
      pokemon: [
        'meowth-alola',
        'psyduck',
        'poliwag',
        'ledian',
        'ariados',
        'masquerain',
        'cottonee',
        'petilil',
        'araquanid',
        'poliwhirl',
        'poliwrath',
        'politoed',
        'castform',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados'
      ],
      order: 30
    },
    {
      location: 'Outer Cape',
      pokemon: [
        'raticate-alola',
        'magnemite',
        'grimer-alola',
        'trubbish',
        'garbodor',
        'gumshoos'
      ],
      order: 31
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
        'crabrawler',
        'staravia'
      ],
      order: 32
    },
    {
      location: 'Mount Hokulani',
      pokemon: [
        'fearow',
        'ditto',
        'cleffa',
        'clefairy',
        'chansey',
        'skarmory',
        'beldum',
        'minior',
        'axew'
      ],
      order: 33
    },
    {
      location: 'Route 11',
      pokemon: [
        'raticate-alola',
        'paras',
        'ledian',
        'ariados',
        'pancham',
        'pangoro',
        'trumbeak',
        'gumshoos',
        'morelull',
        'komala',
        'vigoroth'
      ],
      order: 34
    },
    {
      location: 'Route 12',
      pokemon: [
        'geodude-alola',
        'elekid',
        'electabuzz',
        'chansey',
        'torkoal',
        'mudbray'
      ],
      order: 35
    },
    {
      location: 'Blush Mountain',
      pokemon: [
        'geodude-alola',
        'elekid',
        'electabuzz',
        'chansey',
        'torkoal',
        'charjabug',
        'mudbray',
        'turtonator',
        'togedemaru',
        'rhyhorn'
      ],
      order: 36
    },
    {
      location: 'Secluded Shore',
      pokemon: [
        'crabrawler',
        'tentacool',
        'pelipper',
        'finneon',
        'magikarp',
        'gyarados',
        'wishiwashi',
        'bruxish'
      ],
      order: 37
    },
    {
      location: 'Route 13',
      pokemon: ['magikarp', 'gyarados', 'wishiwashi', 'bruxish'],
      order: 38
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
        'swinub'
      ],
      order: 39
    },
    {
      location: 'Route 14',
      pokemon: [
        'tentacool',
        'pelipper',
        'finneon',
        'magikarp',
        'gyarados',
        'wishiwashi',
        'bruxish'
      ],
      order: 40
    },
    {
      location: 'Thrifty Megamart (Abandoned Site)',
      pokemon: ['golbat', 'haunter', 'gengar', 'klefki', 'mimikyu'],
      order: 41
    },
    {
      location: 'Route 15',
      pokemon: [
        'raticate-alola',
        'slowpoke',
        'pelipper',
        'gumshoos',
        'tentacool',
        'finneon',
        'magikarp',
        'gyarados',
        'wishiwashi',
        'bruxish'
      ],
      order: 42
    },
    {
      location: 'Route 16',
      pokemon: [
        'raticate-alola',
        'slowpoke',
        'pelipper',
        'gumshoos',
        'crabrawler',
        'duosion'
      ],
      order: 43
    },
    {
      location: "Ula'ula Meadow",
      pokemon: [
        'ledian',
        'ariados',
        'cottonee',
        'petilil',
        'oricorio',
        'ribombee',
        'roselia'
      ],
      order: 44
    },
    {
      location: 'Route 17',
      pokemon: [
        'raticate-alola',
        'fearow',
        'ledian',
        'ariados',
        'pancham',
        'pangoro',
        'gumshoos',
        'graveler-alola',
        'skarmory',
        'goomy',
        'castform',
        'crabrawler'
      ],
      order: 45
    },
    {
      location: 'Haina Desert',
      pokemon: ['dugtrio-alola', 'sandile', 'trapinch', 'gabite', 'castform'],
      order: 46
    },
    {
      location: 'Seafolk Village',
      pokemon: ['magikarp', 'gyarados', 'wailmer', 'wailord', 'dhelmise'],
      order: 47
    },
    {
      location: 'Poni Wilds',
      pokemon: [
        'raticate-alola',
        'exeggcute',
        'granbull',
        'pelipper',
        'gastrodon',
        'gumshoos',
        'crabrawler',
        'wimpod',
        'tentacruel',
        'lumineon',
        'lapras',
        'pelipper',
        'wailmer',
        'wailord',
        'relicanth',
        'samurott'
      ],
      order: 49
    },
    {
      location: 'Ancient Poni Path',
      pokemon: [
        'raticate-alola',
        'exeggcute',
        'granbull',
        'pelipper',
        'gastrodon',
        'gumshoos',
        'emboar'
      ],
      order: 50
    },
    {
      location: 'Poni Breaker Coast',
      pokemon: [
        'wimpod',
        'magikarp',
        'gyarados',
        'sharpedo',
        'wailmer',
        'wailord'
      ],
      order: 51
    },
    {
      location: 'Exeggutor Island',
      pokemon: [
        'exeggcute',
        'exeggutor-alola',
        'pelipper',
        'gastrodon',
        'sliggoo',
        'castform',
        'serperior'
      ],
      order: 52
    },
    {
      location: 'Vast Poni Canyon',
      pokemon: [
        'machoke',
        'murkrow',
        'skarmory',
        'boldore',
        'carbink',
        'lycanroc',
        'jangmo-o',
        'kommo-o',
        'golbat',
        'dugtrio-alola',
        'sableye',
        'golduck',
        'dratini',
        'dragonair',
        'barboach',
        'whiscash'
      ],
      order: 54
    },
    {
      location: 'Mount Lanakila',
      pokemon: [
        'sandshrew-alola',
        'vulpix-alola',
        'sneasel',
        'absol',
        'snorunt',
        'glalie',
        'vanillish',
        'castform',
        'golbat',
        'drampa'
      ],
      order: 56
    }
  ]
};

export const sunExclusives = [
  'vulpix',
  'ninetales',
  'cranidos',
  'rampardos',
  'tirtouga',
  'carracosta',
  'cottonee',
  'whimsicott',
  'rufflet',
  'braviary',
  'passimian',
  'turtonator',
  'solgaleo',
  'buzzwole',
  'kartana'
];
export const moonExclusives = [
  'sandshrew',
  'sandslash',
  'shieldon',
  'bastiodon',
  'archen',
  'archeops',
  'petilil',
  'lilligant',
  'vullaby',
  'mandibuzz',
  'oranguru',
  'drampa',
  'lunala',
  'pheromosa',
  'celesteela'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.SunMoon),
  [sunExclusives, moonExclusives]
);
