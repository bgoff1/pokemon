import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.GoldSilver,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['chikorita', 'cyndaquil', 'totodile'],
      order: 0
    },
    { location: 'Violet City Egg', pokemon: ['togepi'], order: 8 },
    { location: 'Goldenrod City', pokemon: ['eevee'], order: 18 },
    { location: 'Route 35', pokemon: ['spearow'], order: 20 },
    { location: 'Cianwood City', pokemon: ['shuckle'], order: 36 },
    { location: 'Mt. Mortar', pokemon: ['tyrogue'], order: 48 }
  ],
  statics: [
    { location: 'Union Cave', pokemon: ['lapras'], order: 13 },
    { location: 'Route 36', pokemon: ['sudowoodo'], order: 23 },
    { location: 'Lake of Rage', pokemon: ['gyarados'], order: 42 },
    { location: 'Vermilion City', pokemon: ['snorlax'], order: 78 },
    { location: 'Roaming Raikou', pokemon: ['raikou'], order: 27 },
    { location: 'Roaming Entei', pokemon: ['entei'], order: 28 },
    { location: 'Roaming Suicune', pokemon: ['suicune'], order: 29 },
    { location: 'Whirl Islands', pokemon: ['lugia'], order: 50 },
    { location: 'Tin Tower', pokemon: ['ho-oh'], order: 39 }
  ],
  encounters: [
    { location: 'Bell Tower', pokemon: ['rattata', 'gastly'], order: 38 },
    {
      location: 'Blackthorn City',
      pokemon: ['poliwag', 'magikarp'],
      order: 45
    },
    {
      location: 'Burned Tower',
      pokemon: ['rattata', 'raticate', 'zubat', 'koffing', 'magmar'],
      order: 26
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
        'golbat',
        'graveler',
        'wobbuffet'
      ],
      order: 6
    },
    {
      location: "Dragon's Den",
      pokemon: ['magikarp', 'dratini', 'dragonair'],
      order: 46
    },
    {
      location: 'Ecruteak City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
      order: 25
    },
    {
      location: 'Ice Path',
      pokemon: ['zubat', 'golbat', 'jynx', 'swinub', 'delibird'],
      order: 44
    },
    {
      location: 'Ilex Forest',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'zubat',
        'oddish',
        'paras',
        'psyduck',
        'golduck',
        'poliwag',
        'magikarp'
      ],
      order: 16
    },
    {
      location: 'Lake of Rage',
      pokemon: ['magikarp', 'gyarados'],
      order: 41
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
      order: 47
    },
    {
      location: 'Mt. Silver',
      pokemon: [
        'golbat',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'quagsire',
        'misdreavus',
        'ursaring',
        'donphan',
        'larvitar',
        'sneasel',
        'poliwag',
        'poliwhirl',
        'ponyta',
        'rapidash',
        'doduo',
        'dodrio',
        'tangela',
        'graveler',
        'onix'
      ],
      order: 93
    },
    {
      location: 'National Park',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'hoothoot',
        'sunkern'
      ],
      order: 21
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
      pokemon: ['pidgey', 'rattata', 'sentret', 'hoothoot'],
      order: 2
    },
    {
      location: 'Route 30',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'rattata',
        'poliwag',
        'poliwhirl',
        'magikarp',
        'hoothoot',
        'ledyba',
        'spinarak'
      ],
      order: 4
    },
    {
      location: 'Route 31',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'rattata',
        'poliwag',
        'poliwhirl',
        'bellsprout',
        'magikarp',
        'hoothoot',
        'ledyba',
        'spinarak'
      ],
      order: 5
    },
    {
      location: 'Route 32',
      pokemon: [
        'rattata',
        'ekans',
        'zubat',
        'bellsprout',
        'tentacool',
        'tentacruel',
        'magikarp',
        'mareep',
        'hoppip',
        'wooper',
        'quagsire',
        'qwilfish'
      ],
      order: 10
    },
    {
      location: 'Route 33',
      pokemon: ['rattata', 'spearow', 'ekans', 'zubat', 'hoppip'],
      order: 14
    },
    {
      location: 'Route 34',
      pokemon: [
        'rattata',
        'abra',
        'tentacool',
        'tentacruel',
        'drowzee',
        'krabby',
        'kingler',
        'staryu',
        'magikarp',
        'ditto',
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
        'psyduck',
        'golduck',
        'poliwag',
        'abra',
        'drowzee',
        'magikarp',
        'ditto',
        'hoothoot',
        'yanma'
      ],
      order: 19
    },
    {
      location: 'Route 36',
      pokemon: [
        'pidgey',
        'nidoran-f',
        'nidoran-m',
        'vulpix',
        'growlithe',
        'hoothoot',
        'stantler'
      ],
      order: 22
    },
    {
      location: 'Route 37',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'vulpix',
        'growlithe',
        'hoothoot',
        'ledyba',
        'spinarak',
        'stantler'
      ],
      order: 24
    },
    {
      location: 'Route 38',
      pokemon: [
        'rattata',
        'raticate',
        'meowth',
        'magnemite',
        'farfetchd',
        'tauros',
        'snubbull',
        'miltank'
      ],
      order: 30
    },
    {
      location: 'Route 39',
      pokemon: [
        'rattata',
        'raticate',
        'meowth',
        'magnemite',
        'farfetchd',
        'tauros',
        'miltank'
      ],
      order: 31
    },
    {
      location: 'Route 42',
      pokemon: [
        'spearow',
        'zubat',
        'mankey',
        'goldeen',
        'seaking',
        'magikarp',
        'mareep',
        'flaaffy'
      ],
      order: 37
    },
    {
      location: 'Route 43',
      pokemon: [
        'pidgeotto',
        'venonat',
        'poliwag',
        'magikarp',
        'noctowl',
        'mareep',
        'flaaffy',
        'girafarig'
      ],
      order: 40
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
        'magikarp',
        'remoraid'
      ],
      order: 43
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
        'teddiursa',
        'skarmory',
        'phanpy'
      ],
      order: 51
    },
    {
      location: 'Route 46',
      pokemon: ['rattata', 'spearow', 'jigglypuff', 'geodude'],
      order: 52
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
      order: 54
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
      order: 49
    },
    { location: 'Celadon City', pokemon: ['grimer', 'muk'], order: 68 },
    {
      location: 'Cerulean City',
      pokemon: ['goldeen', 'seaking', 'magikarp'],
      order: 64
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
      order: 88
    },
    {
      location: "Diglett's Cave",
      pokemon: ['diglett', 'dugtrio'],
      order: 79
    },
    {
      location: 'Fuchsia City',
      pokemon: ['magikarp', 'gyarados'],
      order: 72
    },
    {
      location: 'Mt. Moon',
      pokemon: [
        'sandshrew',
        'sandslash',
        'clefairy',
        'zubat',
        'paras',
        'geodude'
      ],
      order: 82
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
      order: 86
    },
    {
      location: 'Rock Tunnel',
      pokemon: [
        'zubat',
        'machop',
        'machoke',
        'geodude',
        'onix',
        'cubone',
        'marowak',
        'kangaskhan'
      ],
      order: 62
    },
    {
      location: 'Route 1',
      pokemon: ['pidgey', 'rattata', 'sentret', 'furret', 'hoothoot'],
      order: 85
    },
    {
      location: 'Route 10',
      pokemon: [
        'raticate',
        'spearow',
        'fearow',
        'voltorb',
        'goldeen',
        'seaking',
        'electabuzz',
        'magikarp',
        'quagsire'
      ],
      order: 61
    },
    {
      location: 'Route 11',
      pokemon: ['rattata', 'magnemite', 'drowzee', 'hypno'],
      order: 77
    },
    {
      location: 'Route 12',
      pokemon: ['tentacool', 'tentacruel', 'magikarp', 'quagsire', 'qwilfish'],
      order: 76
    },
    {
      location: 'Route 13',
      pokemon: [
        'pidgeotto',
        'nidorina',
        'nidorino',
        'tentacool',
        'tentacruel',
        'chansey',
        'magikarp',
        'noctowl',
        'hoppip',
        'quagsire',
        'qwilfish'
      ],
      order: 75
    },
    {
      location: 'Route 14',
      pokemon: [
        'pidgeotto',
        'nidorina',
        'nidorino',
        'chansey',
        'noctowl',
        'hoppip',
        'skiploom',
        'quagsire'
      ],
      order: 74
    },
    {
      location: 'Route 15',
      pokemon: [
        'pidgeotto',
        'nidorina',
        'nidorino',
        'chansey',
        'noctowl',
        'hoppip',
        'quagsire'
      ],
      order: 73
    },
    {
      location: 'Route 16',
      pokemon: ['fearow', 'grimer', 'muk', 'murkrow', 'slugma'],
      order: 69
    },
    {
      location: 'Route 17',
      pokemon: ['fearow', 'grimer', 'muk', 'slugma'],
      order: 70
    },
    {
      location: 'Route 18',
      pokemon: ['fearow', 'grimer', 'muk', 'murkrow', 'slugma'],
      order: 71
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
      order: 90
    },
    {
      location: 'Route 2',
      pokemon: [
        'caterpie',
        'metapod',
        'butterfree',
        'weedle',
        'kakuna',
        'beedrill',
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
      order: 80
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
      order: 89
    },
    {
      location: 'Route 21',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'tangela',
        'mr-mime',
        'magikarp',
        'chinchou',
        'lanturn'
      ],
      order: 87
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
      order: 91
    },
    {
      location: 'Route 24',
      pokemon: [
        'oddish',
        'venonat',
        'venomoth',
        'abra',
        'bellsprout',
        'weepinbell',
        'goldeen',
        'seaking',
        'magikarp',
        'sunkern'
      ],
      order: 65
    },
    {
      location: 'Route 25',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'venonat',
        'venomoth',
        'abra',
        'bellsprout',
        'weepinbell',
        'goldeen',
        'seaking',
        'magikarp'
      ],
      order: 66
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
        'dodrio',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn',
        'quagsire'
      ],
      order: 55
    },
    {
      location: 'Route 27',
      pokemon: [
        'raticate',
        'arbok',
        'sandslash',
        'tentacool',
        'tentacruel',
        'ponyta',
        'doduo',
        'dodrio',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn',
        'quagsire'
      ],
      order: 53
    },
    {
      location: 'Route 28',
      pokemon: [
        'poliwag',
        'poliwhirl',
        'ponyta',
        'rapidash',
        'doduo',
        'dodrio',
        'tangela',
        'magikarp',
        'sneasel',
        'ursaring',
        'donphan'
      ],
      order: 92
    },
    {
      location: 'Route 3',
      pokemon: ['rattata', 'spearow', 'ekans', 'arbok', 'jigglypuff', 'zubat'],
      order: 81
    },
    {
      location: 'Route 4',
      pokemon: [
        'rattata',
        'spearow',
        'ekans',
        'arbok',
        'jigglypuff',
        'zubat',
        'goldeen',
        'seaking'
      ],
      order: 83
    },
    {
      location: 'Route 5',
      pokemon: ['pidgey', 'oddish', 'gloom', 'meowth', 'abra', 'bellsprout'],
      order: 67
    },
    {
      location: 'Route 6',
      pokemon: [
        'pidgey',
        'oddish',
        'meowth',
        'psyduck',
        'golduck',
        'poliwag',
        'abra',
        'bellsprout',
        'magnemite',
        'magikarp'
      ],
      order: 58
    },
    {
      location: 'Route 7',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'vulpix',
        'meowth',
        'persian',
        'growlithe',
        'murkrow',
        'houndour'
      ],
      order: 59
    },
    {
      location: 'Route 8',
      pokemon: [
        'pidgeotto',
        'rattata',
        'vulpix',
        'meowth',
        'growlithe',
        'abra',
        'kadabra',
        'haunter',
        'noctowl'
      ],
      order: 60
    },
    {
      location: 'Route 9',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'mankey',
        'primeape',
        'goldeen',
        'seaking',
        'magikarp'
      ],
      order: 63
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
      order: 57
    },
    {
      location: 'Victory Road',
      pokemon: ['golbat', 'graveler', 'onix', 'rhyhorn', 'ursaring', 'donphan'],
      order: 56
    },
    {
      location: 'Viridian City',
      pokemon: ['poliwag', 'poliwhirl'],
      order: 84
    }
  ]
};

export default convertGameLocationToRoutes(gameLocation);
