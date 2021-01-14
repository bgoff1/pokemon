import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.DiamondPearl,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['turtwig', 'piplup', 'chimchar'],
      order: 0
    },
    { location: 'Hearthome City Egg', pokemon: ['happiny'], order: 25 },
    { location: 'Iron Island Egg', pokemon: ['riolu'], order: 44 }
  ],
  statics: [
    { location: 'Valley Windworks', pokemon: ['drifloon'], order: 15 },
    { location: 'Hallowed Tower', pokemon: ['spiritomb'], order: 61 },
    { location: 'Lake Acuity', pokemon: ['uxie'], order: 54 },
    { location: 'Lake Valor', pokemon: ['azelf'], order: 55 },
    { location: 'Roaming Lake Guardian', pokemon: ['mesprit'], order: 56 },
    { location: 'Spear Pillar', pokemon: ['dialga', 'palkia'], order: 49 }
  ],
  encounters: [
    {
      location: 'Acuity Lakefront',
      pokemon: [
        'zubat',
        'machoke',
        'noctowl',
        'sneasel',
        'teddiursa',
        'meditite',
        'medicham',
        'snorunt',
        'snover'
      ],
      order: 47
    },
    {
      location: 'Canalave City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'staryu',
        'magikarp',
        'gyarados',
        'wingull',
        'pelipper',
        'finneon',
        'lumineon'
      ],
      order: 42
    },
    {
      location: 'Celestic Town',
      pokemon: [
        'psyduck',
        'golduck',
        'magikarp',
        'gyarados',
        'barboach',
        'whiscash',
        'corphish',
        'crawdaunt'
      ],
      order: 40
    },
    {
      location: 'Eterna City',
      pokemon: [
        'psyduck',
        'golduck',
        'magikarp',
        'gyarados',
        'barboach',
        'whiscash',
        'togepi'
      ],
      order: 18
    },
    {
      location: 'Eterna Forest',
      pokemon: [
        'metapod',
        'kakuna',
        'murkrow',
        'misdreavus',
        'pineco',
        'wurmple',
        'silcoon',
        'beautifly',
        'cascoon',
        'dustox',
        'seedot',
        'slakoth',
        'nincada',
        'budew',
        'buneary'
      ],
      order: 17
    },
    {
      location: 'Fuego Ironworks',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magnemite',
        'shellder',
        'magikarp',
        'gyarados',
        'hoppip',
        'skiploom',
        'wingull',
        'pelipper',
        'aron',
        'shinx',
        'luxio',
        'pachirisu',
        'floatzel',
        'shellos',
        'gastrodon',
        'finneon',
        'lumineon'
      ],
      order: 41
    },
    {
      location: 'Great Marsh',
      pokemon: [
        'arbok',
        'psyduck',
        'magikarp',
        'gyarados',
        'hoothoot',
        'noctowl',
        'marill',
        'wooper',
        'quagsire',
        'azurill',
        'carvanha',
        'barboach',
        'whiscash',
        'starly',
        'bidoof',
        'bibarel',
        'budew'
      ],
      order: 37
    },
    {
      location: 'Iron Island',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magikarp',
        'gyarados',
        'qwilfish',
        'wingull',
        'pelipper',
        'finneon',
        'lumineon',
        'zubat',
        'golbat',
        'geodude',
        'graveler',
        'onix',
        'sableye',
        'mawile',
        'steelix'
      ],
      order: 43
    },
    {
      location: 'Lake Acuity',
      pokemon: [
        'psyduck',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'noctowl',
        'wobbuffet',
        'sneasel',
        'ursaring',
        'smoochum',
        'lunatone',
        'solrock',
        'bibarel',
        'chingling'
      ],
      order: 48
    },
    {
      location: 'Lake Valor',
      pokemon: [
        'psyduck',
        'golduck',
        'lickitung',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'noctowl',
        'wobbuffet',
        'lunatone',
        'solrock',
        'staravia',
        'bibarel',
        'chingling'
      ],
      order: 34
    },
    {
      location: 'Lake Verity',
      pokemon: [
        'psyduck',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'wobbuffet',
        'surskit',
        'lunatone',
        'solrock',
        'starly',
        'staravia',
        'bidoof',
        'bibarel'
      ],
      order: 3
    },
    {
      location: 'Lost Tower',
      pokemon: ['zubat', 'gastly', 'murkrow', 'misdreavus', 'golbat'],
      order: 27
    },
    {
      location: 'Mt. Coronet',
      pokemon: [
        'clefairy',
        'zubat',
        'golbat',
        'machop',
        'geodude',
        'magikarp',
        'gyarados',
        'cleffa',
        'meditite',
        'barboach',
        'whiscash',
        'chingling',
        'bronzor',
        'machoke',
        'graveler',
        'medicham',
        'lunatone',
        'solrock',
        'bronzong',
        'noctowl',
        'loudred',
        'snover',
        'abomasnow',
        'dratini',
        'dragonair',
        'chimecho'
      ],
      order: 23
    },
    {
      location: 'Old Chateau',
      pokemon: ['gastly', 'haunter', 'gengar'],
      order: 19
    },
    {
      location: 'Oreburgh Gate',
      pokemon: [
        'zubat',
        'psyduck',
        'geodude',
        'golbat',
        'golduck',
        'magikarp',
        'gyarados',
        'barboach',
        'whiscash'
      ],
      order: 10
    },
    {
      location: 'Oreburgh Mine',
      pokemon: ['zubat', 'geodude', 'onix'],
      order: 12
    },
    {
      location: 'Pastoria City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magikarp',
        'gyarados',
        'remoraid',
        'octillery',
        'wingull',
        'pelipper'
      ],
      order: 36
    },
    {
      location: 'Pokémon League',
      pokemon: [
        'tentacruel',
        'magikarp',
        'gyarados',
        'remoraid',
        'octillery',
        'pelipper',
        'luvdisc'
      ],
      order: 60
    },
    {
      location: 'Ravaged Path',
      pokemon: [
        'zubat',
        'golbat',
        'psyduck',
        'golduck',
        'geodude',
        'magikarp',
        'gyarados',
        'barboach',
        'whiscash'
      ],
      order: 8
    },
    {
      location: 'Route 201',
      pokemon: [
        'nidoran ♀',
        'nidoran ♂',
        'growlithe',
        'doduo',
        'starly',
        'bidoof'
      ],
      order: 2
    },
    {
      location: 'Route 202',
      pokemon: [
        'growlithe',
        'sentret',
        'zigzagoon',
        'starly',
        'bidoof',
        'kricketot',
        'shinx'
      ],
      order: 4
    },
    {
      location: 'Route 203',
      pokemon: [
        'zubat',
        'psyduck',
        'golduck',
        'abra',
        'cubone',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'pineco',
        'lotad',
        'seedot',
        'ralts',
        'kirlia',
        'starly',
        'bidoof',
        'kricketot',
        'shinx'
      ],
      order: 9
    },
    {
      location: 'Route 204',
      pokemon: [
        'caterpie',
        'weedle',
        'zubat',
        'psyduck',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'pineco',
        'lotad',
        'seedot',
        'ralts',
        'kirlia',
        'starly',
        'bidoof',
        'kricketot',
        'shinx',
        'budew',
        'sunkern'
      ],
      order: 7
    },
    {
      location: 'Route 205',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'gyarados',
        'hoppip',
        'elekid',
        'wingull',
        'pelipper',
        'bidoof',
        'pachirisu',
        'buizel',
        'shellos',
        'finneon',
        'lumineon',
        'psyduck',
        'golduck',
        'slowpoke',
        'skiploom',
        'lotad',
        'barboach',
        'whiscash'
      ],
      order: 16
    },
    {
      location: 'Route 206',
      pokemon: [
        'zubat',
        'geodude',
        'ponyta',
        'gligar',
        'nosepass',
        'baltoy',
        'kricketot',
        'kricketune',
        'stunky',
        'bronzor'
      ],
      order: 21
    },
    {
      location: 'Route 207',
      pokemon: [
        'zubat',
        'machop',
        'geodude',
        'gligar',
        'phanpy',
        'stantler',
        'larvitar',
        'kricketot'
      ],
      order: 11
    },
    {
      location: 'Route 208',
      pokemon: [
        'zubat',
        'psyduck',
        'golduck',
        'machop',
        'magikarp',
        'gyarados',
        'dunsparce',
        'tyrogue',
        'meditite',
        'zangoose',
        'seviper',
        'barboach',
        'whiscash',
        'bidoof',
        'bibarel'
      ],
      order: 24
    },
    {
      location: 'Route 209',
      pokemon: [
        'vulpix',
        'zubat',
        'psyduck',
        'golduck',
        'gastly',
        'chansey',
        'goldeen',
        'seaking',
        'tauros',
        'magikarp',
        'gyarados',
        'snubbull',
        'miltank',
        'starly',
        'staravia',
        'bibarel',
        'bonsly',
        'mime jr.'
      ],
      order: 26
    },
    {
      location: 'Route 210',
      pokemon: [
        'geodude',
        'ponyta',
        'chansey',
        'tauros',
        'hoothoot',
        'noctowl',
        'pineco',
        'miltank',
        'seedot',
        'nuzleaf',
        'kricketune',
        'bonsly',
        'mime jr.',
        'psyduck',
        'golduck',
        'machop',
        'machoke',
        'magikarp',
        'gyarados',
        'meditite',
        'zangoose',
        'seviper',
        'barboach',
        'whiscash',
        'kecleon',
        'bagon',
        'bibarel'
      ],
      order: 29
    },
    {
      location: 'Route 211',
      pokemon: [
        'zubat',
        'geodude',
        'ponyta',
        'hoothoot',
        'teddiursa',
        'tyrogue',
        'meditite',
        'bidoof',
        'chingling',
        'machoke',
        'graveler',
        'noctowl',
        'swablu'
      ],
      order: 20
    },
    {
      location: 'Route 212',
      pokemon: [
        'psyduck',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'smeargle',
        'roselia',
        'starly',
        'staravia',
        'kricketune',
        'budew',
        'ekans',
        'grimer',
        'wooper',
        'quagsire',
        'lotad',
        'lombre',
        'barboach',
        'whiscash',
        'bibarel'
      ],
      order: 38
    },
    {
      location: 'Route 213',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magikarp',
        'gyarados',
        'remoraid',
        'octillery',
        'swellow',
        'wingull',
        'pelipper',
        'sharpedo',
        'absol',
        'buizel',
        'floatzel',
        'shellos'
      ],
      order: 35
    },
    {
      location: 'Route 214',
      pokemon: [
        'vulpix',
        'psyduck',
        'golduck',
        'geodude',
        'graveler',
        'ponyta',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'sudowoodo',
        'girafarig',
        'gligar',
        'houndoom',
        'mightyena',
        'spoink',
        'kricketune',
        'stunky'
      ],
      order: 31
    },
    {
      location: 'Route 215',
      pokemon: [
        'abra',
        'kadabra',
        'geodude',
        'ponyta',
        'drowzee',
        'gligar',
        'houndoom',
        'mightyena',
        'kricketune'
      ],
      order: 30
    },
    {
      location: 'Route 216',
      pokemon: [
        'zubat',
        'machoke',
        'graveler',
        'noctowl',
        'sneasel',
        'ursaring',
        'delibird',
        'meditite',
        'snorunt',
        'snover'
      ],
      order: 45
    },
    {
      location: 'Route 217',
      pokemon: [
        'zubat',
        'machoke',
        'noctowl',
        'sneasel',
        'ursaring',
        'swinub',
        'meditite',
        'medicham',
        'snorunt',
        'snover'
      ],
      order: 46
    },
    {
      location: 'Route 218',
      pokemon: [
        'tentacool',
        'tentacruel',
        'voltorb',
        'mr. mime',
        'magikarp',
        'gyarados',
        'ditto',
        'wingull',
        'pelipper',
        'floatzel',
        'shellos',
        'gastrodon',
        'glameow',
        'finneon',
        'lumineon'
      ],
      order: 6
    },
    {
      location: 'Route 219',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magikarp',
        'gyarados',
        'wingull',
        'pelipper',
        'clamperl',
        'finneon',
        'lumineon'
      ],
      order: 5
    },
    {
      location: 'Route 221',
      pokemon: [
        'nidorina',
        'nidorino',
        'tentacool',
        'tentacruel',
        'farfetchd',
        'magikarp',
        'gyarados',
        'sudowoodo',
        'wingull',
        'pelipper',
        'roselia',
        'clamperl',
        'floatzel',
        'shellos',
        'gastrodon',
        'stunky',
        'skuntank',
        'finneon',
        'lumineon'
      ],
      order: 51
    },
    {
      location: 'Route 222',
      pokemon: [
        'tentacool',
        'tentacruel',
        'mr. mime',
        'magikarp',
        'gyarados',
        'flaaffy',
        'remoraid',
        'octillery',
        'wingull',
        'pelipper',
        'skitty',
        'sharpedo',
        'floatzel',
        'gastrodon',
        'glameow',
        'purugly',
        'chatot'
      ],
      order: 52
    },
    {
      location: 'Route 224',
      pokemon: [
        'gloom',
        'weepinbell',
        'tentacruel',
        'magikarp',
        'gyarados',
        'natu',
        'shuckle',
        'remoraid',
        'octillery',
        'beautifly',
        'pelipper',
        'roselia',
        'duskull',
        'dusclops',
        'luvdisc',
        'buizel',
        'floatzel',
        'shellos',
        'gastrodon',
        'chatot'
      ],
      order: 59
    },
    {
      location: 'Ruin Maniac Cave',
      pokemon: ['geodude', 'hippopotas'],
      order: 32
    },
    {
      location: 'Route 220',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magikarp',
        'gyarados',
        'chinchou',
        'lanturn',
        'wingull',
        'pelipper',
        'finneon',
        'lumineon'
      ],
      order: 50
    },
    {
      location: 'Route 223',
      pokemon: [
        'tentacruel',
        'magikarp',
        'gyarados',
        'remoraid',
        'octillery',
        'pelipper',
        'wailmer',
        'wailord',
        'mantyke'
      ],
      order: 57
    },
    { location: 'Solaceon Ruins', pokemon: ['unown'], order: 28 },
    {
      location: 'Sunyshore City',
      pokemon: [
        'tentacruel',
        'staryu',
        'magikarp',
        'gyarados',
        'remoraid',
        'octillery',
        'pelipper',
        'mantyke'
      ],
      order: 53
    },
    {
      location: 'Trophy Garden',
      pokemon: ['pikachu', 'pichu', 'roselia', 'staravia', 'kricketune'],
      order: 39
    },
    {
      location: 'Twinleaf Town',
      pokemon: [
        'psyduck',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados'
      ],
      order: 1
    },
    {
      location: 'Valley Windworks',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'gyarados',
        'mareep',
        'elekid',
        'wingull',
        'pelipper',
        'electrike',
        'bidoof',
        'pachirisu',
        'buizel',
        'shellos',
        'finneon',
        'lumineon'
      ],
      order: 14
    },
    {
      location: 'Valor Lakefront',
      pokemon: [
        'nidorina',
        'nidorino',
        'geodude',
        'graveler',
        'girafarig',
        'staravia',
        'bibarel',
        'kricketune'
      ],
      order: 33
    },
    {
      location: 'Victory Road',
      pokemon: [
        'golbat',
        'machoke',
        'graveler',
        'onix',
        'steelix',
        'medicham',
        'kadabra',
        'magikarp',
        'gyarados',
        'floatzel',
        'lapras'
      ],
      order: 58
    },
    {
      location: 'Wayward Cave',
      pokemon: ['sandshrew', 'zubat', 'geodude', 'bronzor', 'gible'],
      order: 22
    }
  ]
};

export const diamondExclusives = [
  'seel',
  'dewgong',
  'scyther',
  'murkrow',
  'scizor',
  'larvitar',
  'pupitar',
  'tyranitar',
  'poochyena',
  'mightyena',
  'aron',
  'lairon',
  'aggron',
  'kecleon',
  'cranidos',
  'rampardos',
  'honchkrow',
  'stunky',
  'skuntank',
  'dialga'
];
export const pearlExclusives = [
  'slowpoke',
  'slowbro',
  'pinsir',
  'slowking',
  'misdreavus',
  'houndour',
  'houndoom',
  'stantler',
  'spheal',
  'sealeo',
  'walrein',
  'bagon',
  'shelgon',
  'salamence',
  'sheildon',
  'bastiodon',
  'mismagius',
  'glameow',
  'purugly',
  'palkia'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.DiamondPearl),
  [diamondExclusives, pearlExclusives]
);
