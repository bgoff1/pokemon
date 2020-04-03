import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.Crystal,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['chikorita', 'cyndaquil', 'totodile'],
      order: 0
    },
    { location: 'Violet City Egg', pokemon: ['togepi'], order: 8 },
    {
      location: 'Odd Egg',
      pokemon: [
        'pichu',
        'cleffa',
        'igglybuff',
        'tyrogue',
        'smoochum',
        'elekid',
        'magby'
      ],
      order: 18
    },
    { location: 'Goldenrod City', pokemon: ['eevee'], order: 19 },
    { location: 'Route 35', pokemon: ['spearow'], order: 21 },
    { location: 'Cianwood City', pokemon: ['shuckle'], order: 36 },
    { location: 'Mt. Mortar', pokemon: ['tyrogue'], order: 50 },
    { location: "Dragon's Den", pokemon: ['dratini'], order: 48 }
  ],
  statics: [
    { location: 'Union Cave', pokemon: ['lapras'], order: 13 },
    { location: 'Route 36', pokemon: ['sudowoodo'], order: 24 },
    { location: 'Lake of Rage', pokemon: ['gyarados'], order: 43 },
    { location: 'Vermilion City', pokemon: ['snorlax'], order: 80 },
    { location: 'Roaming Raikou', pokemon: ['raikou'], order: 28 },
    { location: 'Roaming Entei', pokemon: ['entei'], order: 29 },
    { location: 'Whirl Islands', pokemon: ['lugia'], order: 52 },
    { location: 'Tin Tower - Ho-Oh', pokemon: ['ho-oh'], order: 40 },
    { location: 'Tin Tower - Suicune', pokemon: ['suicune'], order: 39 }
  ],
  encounters: [
    { location: 'Celadon City', pokemon: ['grimer', 'muk'], order: 70 },
    {
      location: 'Cerulean City',
      pokemon: ['goldeen', 'seaking', 'magikarp'],
      order: 66
    },
    {
      location: 'Cinnabar Island',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn'
      ],
      order: 90
    },
    {
      location: "Diglett's Cave",
      pokemon: ['diglett', 'dugtrio'],
      order: 81
    },
    {
      location: 'Fuchsia City',
      pokemon: ['magikarp', 'gyarados'],
      order: 74
    },
    {
      location: 'Mt. Moon',
      pokemon: ['sandshrew', 'clefairy', 'zubat', 'paras', 'geodude'],
      order: 84
    },
    {
      location: 'Pallet Town',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn'
      ],
      order: 88
    },
    {
      location: 'Rock Tunnel',
      pokemon: [
        'zubat',
        'machop',
        'machoke',
        'geodude',
        'haunter',
        'onix',
        'cubone',
        'marowak',
        'golbat',
        'kangaskhan'
      ],
      order: 64
    },
    {
      location: 'Route 1',
      pokemon: [
        'pidgey',
        'rattata',
        'raticate',
        'sentret',
        'furret',
        'hoothoot'
      ],
      order: 87
    },
    {
      location: 'Route 10',
      pokemon: [
        'raticate',
        'spearow',
        'fearow',
        'zubat',
        'venonat',
        'venomoth',
        'voltorb',
        'marowak',
        'goldeen',
        'seaking',
        'electabuzz',
        'magikarp'
      ],
      order: 63
    },
    {
      location: 'Route 11',
      pokemon: [
        'pidgeotto',
        'rattata',
        'raticate',
        'meowth',
        'magnemite',
        'drowzee',
        'hypno',
        'noctowl',
        'hoppip'
      ],
      order: 79
    },
    {
      location: 'Route 12',
      pokemon: ['tentacool', 'tentacruel', 'magikarp', 'quagsire', 'qwilfish'],
      order: 78
    },
    {
      location: 'Route 13',
      pokemon: [
        'pidgeotto',
        'nidorina',
        'nidorino',
        'venonat',
        'venomoth',
        'tentacool',
        'tentacruel',
        'chansey',
        'magikarp',
        'noctowl',
        'hoppip',
        'quagsire',
        'qwilfish'
      ],
      order: 77
    },
    {
      location: 'Route 14',
      pokemon: [
        'pidgeotto',
        'nidorina',
        'nidorino',
        'venonat',
        'venomoth',
        'chansey',
        'noctowl',
        'hoppip',
        'skiploom',
        'quagsire'
      ],
      order: 76
    },
    {
      location: 'Route 15',
      pokemon: [
        'pidgeotto',
        'nidorina',
        'nidorino',
        'venonat',
        'venomoth',
        'chansey',
        'noctowl',
        'hoppip',
        'quagsire'
      ],
      order: 75
    },
    {
      location: 'Route 16',
      pokemon: ['fearow', 'grimer', 'muk', 'murkrow', 'slugma'],
      order: 71
    },
    {
      location: 'Route 17',
      pokemon: ['fearow', 'grimer', 'muk', 'slugma'],
      order: 72
    },
    {
      location: 'Route 18',
      pokemon: ['fearow', 'grimer', 'muk', 'slugma'],
      order: 73
    },
    {
      location: 'Route 2',
      pokemon: [
        'caterpie',
        'butterfree',
        'pidgey',
        'pidgeotto',
        'pikachu',
        'hoothoot',
        'noctowl',
        'ledyba',
        'ledian',
        'spinarak',
        'ariados'
      ],
      order: 82
    },
    {
      location: 'Route 22',
      pokemon: [
        'rattata',
        'spearow',
        'fearow',
        'poliwag',
        'poliwhirl',
        'ponyta',
        'doduo',
        'magikarp'
      ],
      order: 93
    },
    {
      location: 'Route 24',
      pokemon: [
        'caterpie',
        'metapod',
        'butterfree',
        'oddish',
        'gloom',
        'venonat',
        'abra',
        'bellsprout',
        'goldeen',
        'seaking',
        'magikarp',
        'sunkern'
      ],
      order: 67
    },
    {
      location: 'Route 25',
      pokemon: [
        'caterpie',
        'metapod',
        'butterfree',
        'pidgey',
        'pidgeotto',
        'oddish',
        'venonat',
        'bellsprout',
        'goldeen',
        'seaking',
        'magikarp',
        'hoothoot',
        'noctowl'
      ],
      order: 68
    },
    {
      location: 'Route 26',
      pokemon: [
        'raticate',
        'arbok',
        'sandslash',
        'tentacool',
        'tentacruel',
        'ponyta',
        'doduo',
        'shellder',
        'magikarp',
        'noctowl',
        'chinchou',
        'lanturn',
        'quagsire'
      ],
      order: 57
    },
    {
      location: 'Route 27',
      pokemon: [
        'raticate',
        'arbok',
        'tentacool',
        'tentacruel',
        'ponyta',
        'doduo',
        'dodrio',
        'shellder',
        'magikarp',
        'noctowl',
        'chinchou',
        'lanturn',
        'quagsire'
      ],
      order: 55
    },
    {
      location: 'Route 28',
      pokemon: [
        'arbok',
        'golbat',
        'poliwag',
        'poliwhirl',
        'ponyta',
        'rapidash',
        'doduo',
        'dodrio',
        'tangela',
        'magikarp'
      ],
      order: 94
    },
    {
      location: 'Route 3',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'ekans',
        'arbok',
        'clefairy',
        'zubat'
      ],
      order: 83
    },
    {
      location: 'Route 4',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'ekans',
        'arbok',
        'clefairy',
        'zubat',
        'goldeen',
        'seaking'
      ],
      order: 85
    },
    {
      location: 'Route 5',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'jigglypuff',
        'meowth',
        'abra',
        'hoothoot',
        'noctowl',
        'snubbull'
      ],
      order: 69
    },
    {
      location: 'Route 6',
      pokemon: [
        'rattata',
        'raticate',
        'jigglypuff',
        'meowth',
        'psyduck',
        'golduck',
        'poliwag',
        'magnemite',
        'drowzee',
        'magikarp',
        'snubbull',
        'granbull'
      ],
      order: 60
    },
    {
      location: 'Route 7',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'jigglypuff',
        'meowth',
        'persian',
        'abra',
        'murkrow',
        'snubbull',
        'houndour'
      ],
      order: 61
    },
    {
      location: 'Route 8',
      pokemon: [
        'pidgeotto',
        'jigglypuff',
        'meowth',
        'growlithe',
        'abra',
        'kadabra',
        'haunter',
        'noctowl',
        'snubbull'
      ],
      order: 62
    },
    {
      location: 'Route 9',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'zubat',
        'venonat',
        'venomoth',
        'marowak',
        'goldeen',
        'seaking',
        'magikarp'
      ],
      order: 65
    },
    {
      location: 'Route 19',
      pokemon: [
        'tentacool',
        'tentacruel',
        'krabby',
        'kingler',
        'staryu',
        'magikarp',
        'corsola'
      ],
      order: 92
    },
    {
      location: 'Route 20',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn'
      ],
      order: 91
    },
    {
      location: 'Route 21',
      pokemon: [
        'rattata',
        'raticate',
        'tentacool',
        'tentacruel',
        'shellder',
        'tangela',
        'mr-mime',
        'magikarp',
        'chinchou',
        'lanturn'
      ],
      order: 89
    },
    {
      location: 'Vermilion City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn'
      ],
      order: 59
    },
    {
      location: 'Victory Road',
      pokemon: ['sandslash', 'golbat', 'graveler', 'onix', 'rhyhorn', 'rhydon'],
      order: 58
    },
    {
      location: 'Viridian City',
      pokemon: ['poliwag', 'poliwhirl'],
      order: 86
    },
    { location: 'Bell Tower', pokemon: ['rattata', 'gastly'], order: 38 },
    {
      location: 'Blackthorn City',
      pokemon: ['poliwag', 'magikarp'],
      order: 46
    },
    {
      location: 'Burned Tower',
      pokemon: ['rattata', 'raticate', 'zubat', 'koffing', 'weezing'],
      order: 27
    },
    {
      location: 'Cherrygrove City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'krabby',
        'kingler',
        'staryu',
        'magikarp',
        'corsola'
      ],
      order: 3
    },
    {
      location: 'Cianwood City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'krabby',
        'kingler',
        'staryu',
        'magikarp',
        'shuckle',
        'corsola'
      ],
      order: 35
    },
    {
      location: 'Dark Cave',
      pokemon: [
        'zubat',
        'geodude',
        'krabby',
        'goldeen',
        'seaking',
        'magikarp',
        'dunsparce',
        'shuckle',
        'teddiursa',
        'golbat',
        'graveler',
        'wobbuffet',
        'ursaring'
      ],
      order: 6
    },
    {
      location: "Dragon's Den",
      pokemon: ['magikarp', 'dratini', 'dragonair'],
      order: 47
    },
    {
      location: 'Ecruteak City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
      order: 26
    },
    {
      location: 'Ice Path',
      pokemon: ['golbat', 'jynx', 'swinub', 'delibird', 'sneasel'],
      order: 45
    },
    {
      location: 'Ilex Forest',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'oddish',
        'paras',
        'venonat',
        'psyduck',
        'golduck',
        'poliwag',
        'magikarp',
        'hoothoot'
      ],
      order: 16
    },
    {
      location: 'Lake of Rage',
      pokemon: ['magikarp', 'gyarados'],
      order: 42
    },
    {
      location: 'Mt. Mortar',
      pokemon: [
        'rattata',
        'raticate',
        'zubat',
        'golbat',
        'machop',
        'geodude',
        'goldeen',
        'seaking',
        'magikarp',
        'marill',
        'machoke',
        'graveler'
      ],
      order: 49
    },
    {
      location: 'Mt. Silver',
      pokemon: [
        'golbat',
        'parasect',
        'golduck',
        'machoke',
        'goldeen',
        'seaking',
        'magikarp',
        'quagsire',
        'misdreavus',
        'ursaring',
        'larvitar',
        'arbok',
        'poliwag',
        'poliwhirl',
        'ponyta',
        'rapidash',
        'doduo',
        'dodrio',
        'tangela',
        'graveler',
        'onix',
        'magmar',
        'pupitar'
      ],
      order: 95
    },
    {
      location: 'National Park',
      pokemon: [
        'caterpie',
        'weedle',
        'pidgey',
        'nidoran-f',
        'nidoran-m',
        'venonat',
        'psyduck',
        'hoothoot',
        'ledyba',
        'spinarak',
        'sunkern'
      ],
      order: 22
    },
    {
      location: 'New Bark Town',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn'
      ],
      order: 1
    },
    {
      location: 'Olivine City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'krabby',
        'kingler',
        'staryu',
        'magikarp',
        'corsola'
      ],
      order: 32
    },
    {
      location: 'Route 29',
      pokemon: ['pidgey', 'rattata', 'sentret', 'hoothoot', 'hoppip'],
      order: 2
    },
    {
      location: 'Route 30',
      pokemon: [
        'caterpie',
        'weedle',
        'pidgey',
        'zubat',
        'poliwag',
        'poliwhirl',
        'magikarp',
        'hoothoot',
        'ledyba',
        'spinarak',
        'hoppip'
      ],
      order: 4
    },
    {
      location: 'Route 31',
      pokemon: [
        'caterpie',
        'weedle',
        'pidgey',
        'zubat',
        'poliwag',
        'poliwhirl',
        'bellsprout',
        'gastly',
        'magikarp',
        'hoothoot',
        'ledyba',
        'spinarak',
        'hoppip'
      ],
      order: 5
    },
    {
      location: 'Route 32',
      pokemon: [
        'pidgey',
        'rattata',
        'ekans',
        'zubat',
        'bellsprout',
        'tentacool',
        'tentacruel',
        'gastly',
        'magikarp',
        'hoothoot',
        'hoppip',
        'wooper',
        'quagsire',
        'qwilfish'
      ],
      order: 10
    },
    {
      location: 'Route 33',
      pokemon: ['rattata', 'spearow', 'ekans', 'zubat', 'geodude', 'hoppip'],
      order: 14
    },
    {
      location: 'Route 34',
      pokemon: [
        'pidgey',
        'rattata',
        'jigglypuff',
        'abra',
        'tentacool',
        'tentacruel',
        'drowzee',
        'krabby',
        'kingler',
        'staryu',
        'magikarp',
        'ditto',
        'hoothoot',
        'snubbull',
        'corsola'
      ],
      order: 17
    },
    {
      location: 'Route 35',
      pokemon: [
        'pidgey',
        'nidoran-f',
        'nidoran-m',
        'jigglypuff',
        'meowth',
        'psyduck',
        'golduck',
        'growlithe',
        'poliwag',
        'abra',
        'drowzee',
        'magikarp',
        'ditto',
        'hoothoot',
        'yanma',
        'snubbull'
      ],
      order: 20
    },
    {
      location: 'Route 36',
      pokemon: [
        'pidgey',
        'growlithe',
        'bellsprout',
        'gastly',
        'hoothoot',
        'ledyba',
        'spinarak'
      ],
      order: 23
    },
    {
      location: 'Route 37',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'growlithe',
        'hoothoot',
        'noctowl',
        'spinarak',
        'ariados',
        'stantler'
      ],
      order: 25
    },
    {
      location: 'Route 38',
      pokemon: [
        'pidgeotto',
        'rattata',
        'raticate',
        'meowth',
        'magnemite',
        'tauros',
        'noctowl',
        'miltank'
      ],
      order: 30
    },
    {
      location: 'Route 39',
      pokemon: [
        'pidgeotto',
        'rattata',
        'raticate',
        'meowth',
        'magnemite',
        'tauros',
        'noctowl',
        'miltank'
      ],
      order: 31
    },
    {
      location: 'Route 42',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'ekans',
        'arbok',
        'zubat',
        'golbat',
        'goldeen',
        'seaking',
        'magikarp',
        'marill'
      ],
      order: 37
    },
    {
      location: 'Route 43',
      pokemon: [
        'pidgeotto',
        'raticate',
        'venonat',
        'venomoth',
        'poliwag',
        'farfetchd',
        'magikarp',
        'sentret',
        'furret',
        'hoothoot'
      ],
      order: 41
    },
    {
      location: 'Route 44',
      pokemon: [
        'poliwag',
        'poliwhirl',
        'bellsprout',
        'weepinbell',
        'lickitung',
        'tangela',
        'magikarp'
      ],
      order: 44
    },
    {
      location: 'Route 45',
      pokemon: [
        'geodude',
        'graveler',
        'magikarp',
        'dratini',
        'dragonair',
        'gligar',
        'skarmory',
        'phanpy',
        'donphan'
      ],
      order: 53
    },
    {
      location: 'Route 46',
      pokemon: ['rattata', 'spearow', 'geodude', 'phanpy'],
      order: 54
    },
    {
      location: 'Ruins of Alph',
      pokemon: [
        'poliwag',
        'magikarp',
        'natu',
        'wooper',
        'quagsire',
        'smeargle',
        'unown'
      ],
      order: 11
    },
    {
      location: 'Route 40',
      pokemon: [
        'tentacool',
        'tentacruel',
        'krabby',
        'kingler',
        'staryu',
        'magikarp',
        'shuckle',
        'corsola'
      ],
      order: 33
    },
    {
      location: 'Route 41',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn',
        'mantine'
      ],
      order: 34
    },
    {
      location: 'Slowpoke Well',
      pokemon: [
        'zubat',
        'slowpoke',
        'goldeen',
        'seaking',
        'magikarp',
        'golbat',
        'slowbro'
      ],
      order: 15
    },
    {
      location: 'Sprout Tower',
      pokemon: ['rattata', 'gastly'],
      order: 9
    },
    {
      location: 'Tohjo Falls',
      pokemon: [
        'rattata',
        'raticate',
        'zubat',
        'golbat',
        'slowpoke',
        'goldeen',
        'seaking',
        'magikarp'
      ],
      order: 56
    },
    {
      location: 'Union Cave',
      pokemon: [
        'rattata',
        'sandshrew',
        'zubat',
        'geodude',
        'onix',
        'goldeen',
        'seaking',
        'magikarp',
        'wooper',
        'quagsire',
        'raticate',
        'golbat',
        'tentacool',
        'tentacruel',
        'krabby',
        'kingler',
        'staryu',
        'corsola'
      ],
      order: 12
    },
    {
      location: 'Violet City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
      order: 7
    },
    {
      location: 'Whirl Islands',
      pokemon: [
        'zubat',
        'golbat',
        'tentacool',
        'tentacruel',
        'seel',
        'krabby',
        'kingler',
        'horsea',
        'seadra',
        'magikarp'
      ],
      order: 51
    }
  ]
};

export default convertGameLocationToRoutes(gameLocation);
