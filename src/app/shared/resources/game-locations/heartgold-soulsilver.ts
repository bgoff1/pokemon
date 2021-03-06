import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.HeartGoldSoulSilver,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['chikorita', 'cyndaquil', 'totodile'],
      order: 0
    },
    { location: 'Goldenrod City', pokemon: ['eevee'], order: 21 },
    { location: 'Violet City Egg', pokemon: ['togepi'], order: 11 },
    { location: 'Primo Egg - Mareep', pokemon: ['mareep'], order: 8 },
    { location: 'Primo Egg - Wooper', pokemon: ['wooper'], order: 10 },
    { location: 'Primo Egg - Slugma', pokemon: ['slugma'], order: 9 },
    { location: 'Cianwood City', pokemon: ['shuckle'], order: 38 },
    { location: 'Mt. Mortar', pokemon: ['tyrogue'], order: 53 },
    { location: "Dragon's Den", pokemon: ['dratini'], order: 51 }
  ],
  statics: [
    { location: 'Lake of Rage', pokemon: ['gyarados'], order: 46 },
    { location: 'Union Cave', pokemon: ['lapras'], order: 16 },
    { location: 'Seafoam Islands', pokemon: ['articuno'], order: 103 },
    { location: 'Route 10', pokemon: ['zapdos'], order: 104 },
    { location: 'Mt. Silver', pokemon: ['moltres'], order: 102 },
    { location: 'Route 11', pokemon: ['snorlax'], order: 84 },
    { location: 'Route 36', pokemon: ['sudowoodo'], order: 26 },
    { location: 'Roaming Raikou', pokemon: ['raikou'], order: 30 },
    { location: 'Roaming Entei', pokemon: ['entei'], order: 31 },
    { location: 'Route 25', pokemon: ['suicune'], order: 72 },
    { location: 'Whirl Islands', pokemon: ['lugia'], order: 55 },
    { location: 'Bell Tower', pokemon: ['ho-oh'], order: 43 }
  ],
  encounters: [
    { location: 'Celadon City', pokemon: ['grimer', 'muk'], order: 74 },
    {
      location: 'Cerulean City',
      pokemon: ['goldeen', 'seaking', 'magikarp'],
      order: 69
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
      order: 95
    },
    {
      location: "Diglett's Cave",
      pokemon: [
        'diglett',
        'dugtrio',
        'makuhita',
        'absol',
        'chingling',
        'bronzor'
      ],
      order: 85
    },
    { location: 'Fuchsia City', pokemon: ['magikarp', 'gyarados'], order: 78 },
    {
      location: 'Mt. Moon',
      pokemon: [
        'poliwag',
        'magikarp',
        'sandshrew',
        'sandslash',
        'clefairy',
        'zubat',
        'paras',
        'geodude',
        'makuhita',
        'absol',
        'chingling',
        'bronzor'
      ],
      order: 88
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
      order: 93
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
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'kangaskhan'
      ],
      order: 67
    },
    {
      location: 'Route 1',
      pokemon: [
        'pidgey',
        'rattata',
        'sentret',
        'furret',
        'hoothoot',
        'poochyena',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 92
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
        'quagsire',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 66
    },
    {
      location: 'Route 11',
      pokemon: [
        'rattata',
        'magnemite',
        'drowzee',
        'hypno',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 83
    },
    {
      location: 'Route 12',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magikarp',
        'quagsire',
        'qwilfish',
        'relicanth'
      ],
      order: 82
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
        'qwilfish',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 81
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
        'quagsire',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 80
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
        'quagsire',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 79
    },
    {
      location: 'Route 16',
      pokemon: [
        'fearow',
        'grimer',
        'muk',
        'murkrow',
        'slugma',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 75
    },
    {
      location: 'Route 17',
      pokemon: [
        'fearow',
        'grimer',
        'muk',
        'slugma',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 76
    },
    {
      location: 'Route 18',
      pokemon: [
        'fearow',
        'grimer',
        'muk',
        'slugma',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 77
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
        'hoothoot',
        'noctowl',
        'ledyba',
        'ledian',
        'spinarak',
        'ariados',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 86
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
        'magikarp',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 99
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
        'sunkern',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 70
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
        'magikarp',
        'linoone',
        'whismur',
        'bidoof',
        'buizel',
        'buneary'
      ],
      order: 71
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
        'quagsire',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 60
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
        'quagsire',
        'linoone',
        'whismur',
        'luvdisc',
        'bidoof',
        'buizel'
      ],
      order: 58
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
        'donphan',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 100
    },
    {
      location: 'Route 3',
      pokemon: [
        'rattata',
        'spearow',
        'ekans',
        'arbok',
        'jigglypuff',
        'zubat',
        'plusle',
        'minun',
        'gulpin',
        'baltoy',
        'shinx'
      ],
      order: 87
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
        'seaking',
        'magikarp',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 89
    },
    {
      location: 'Route 5',
      pokemon: [
        'pidgey',
        'oddish',
        'gloom',
        'meowth',
        'abra',
        'bellsprout',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 73
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
        'magikarp',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 63
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
        'houndour',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 64
    },
    {
      location: 'Route 8',
      pokemon: [
        'pidgeotto',
        'vulpix',
        'meowth',
        'growlithe',
        'abra',
        'kadabra',
        'haunter',
        'noctowl',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 65
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
        'magikarp',
        'linoone',
        'whismur',
        'sableye',
        'mawile',
        'bidoof',
        'buizel'
      ],
      order: 68
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
        'corsola',
        'clamperl'
      ],
      order: 98
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
      order: 96
    },
    {
      location: 'Route 21',
      pokemon: [
        'tentacool',
        'tentacruel',
        'shellder',
        'tangela',
        'mr. mime',
        'magikarp',
        'chinchou',
        'lanturn',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 94
    },
    {
      location: 'Seafoam Islands',
      pokemon: [
        'zubat',
        'golbat',
        'psyduck',
        'golduck',
        'slowbro',
        'seel',
        'krabby',
        'horsea',
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'dewgong',
        'kingler',
        'seadra',
        'magikarp',
        'gyarados',
        'jynx'
      ],
      order: 97
    },
    {
      location: 'Vermilion City',
      pokemon: [
        'diglett',
        'tentacool',
        'tentacruel',
        'shellder',
        'magikarp',
        'chinchou',
        'lanturn',
        'shuckle',
        'wingull'
      ],
      order: 62
    },
    {
      location: 'Victory Road',
      pokemon: [
        'golbat',
        'graveler',
        'onix',
        'rhyhorn',
        'ursaring',
        'donphan',
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'geodude'
      ],
      order: 61
    },
    {
      location: 'Viridian City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
      order: 91
    },
    {
      location: 'Viridian Forest',
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
        'numel',
        'spoink',
        'kricketot',
        'budew',
        'carnivine'
      ],
      order: 90
    },
    {
      location: 'Bell Tower',
      pokemon: [
        'rattata',
        'gastly',
        'zigzagoon',
        'meditite',
        'spinda',
        'chatot'
      ],
      order: 42
    },
    {
      location: 'Blackthorn City',
      pokemon: ['poliwag', 'magikarp'],
      order: 49
    },
    {
      location: 'Burned Tower',
      pokemon: [
        'rattata',
        'raticate',
        'zubat',
        'koffing',
        'zigzagoon',
        'meditite',
        'spinda',
        'chatot',
        'magmar'
      ],
      order: 29
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
      order: 37
    },
    {
      location: 'Dark Cave',
      pokemon: [
        'zubat',
        'geodude',
        'goldeen',
        'seaking',
        'magikarp',
        'dunsparce',
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'golbat',
        'graveler',
        'wobbuffet'
      ],
      order: 6
    },
    {
      location: "Dragon's Den",
      pokemon: ['magikarp', 'dratini', 'dragonair'],
      order: 50
    },
    {
      location: 'Ecruteak City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
      order: 28
    },
    {
      location: 'Ice Path',
      pokemon: [
        'zubat',
        'golbat',
        'jynx',
        'swinub',
        'delibird',
        'makuhita',
        'absol',
        'chingling',
        'bronzor'
      ],
      order: 48
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
        'magikarp',
        'numel',
        'spoink',
        'budew',
        'carnivine'
      ],
      order: 19
    },
    { location: 'Lake of Rage', pokemon: ['magikarp', 'gyarados'], order: 45 },
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
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'machoke',
        'graveler'
      ],
      order: 52
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
        'steelix',
        'ursaring',
        'donphan',
        'larvitar',
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'sneasel',
        'teddiursa',
        'phanpy',
        'poliwag',
        'poliwhirl',
        'ponyta',
        'rapidash',
        'doduo',
        'dodrio',
        'tangela',
        'linoone',
        'whismur',
        'bidoof',
        'buizel',
        'graveler',
        'onix',
        'gyarados',
        'pupitar'
      ],
      order: 101
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
        'sunkern',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 24
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
      order: 34
    },
    {
      location: 'Route 29',
      pokemon: [
        'pidgey',
        'rattata',
        'sentret',
        'hoothoot',
        'plusle',
        'minun',
        'shinx'
      ],
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
        'spinarak',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
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
        'spinarak',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
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
        'qwilfish',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 13
    },
    {
      location: 'Route 33',
      pokemon: [
        'rattata',
        'spearow',
        'ekans',
        'zubat',
        'hoppip',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 17
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
        'corsola',
        'linoone',
        'ralts',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 20
    },
    {
      location: 'Route 35',
      pokemon: [
        'pidgey',
        'nidoran ♀',
        'nidoran ♂',
        'psyduck',
        'golduck',
        'poliwag',
        'abra',
        'drowzee',
        'magikarp',
        'ditto',
        'hoothoot',
        'yanma',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 22
    },
    {
      location: 'Route 36',
      pokemon: [
        'pidgey',
        'nidoran ♀',
        'nidoran ♂',
        'vulpix',
        'growlithe',
        'hoothoot',
        'stantler',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 25
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
        'stantler',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 27
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
        'miltank',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 32
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
        'miltank',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 33
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
        'flaaffy',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 41
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
        'girafarig',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 44
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
        'remoraid',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ],
      order: 47
    },
    {
      location: 'Route 45',
      pokemon: [
        'poliwag',
        'geodude',
        'graveler',
        'magikarp',
        'gligar',
        'teddiursa',
        'skarmory',
        'phanpy',
        'linoone',
        'whismur',
        'swablu',
        'bidoof',
        'buizel'
      ],
      order: 56
    },
    {
      location: 'Route 46',
      pokemon: ['rattata', 'spearow', 'geodude', 'plusle', 'minun', 'shinx'],
      order: 57
    },
    {
      location: 'Route 47',
      pokemon: [
        'raticate',
        'spearow',
        'fearow',
        'gloom',
        'tentacool',
        'tentacruel',
        'farfetchd',
        'seel',
        'shellder',
        'staryu',
        'magikarp',
        'ditto',
        'noctowl',
        'chinchou',
        'lanturn',
        'miltank',
        'linoone',
        'whismur',
        'bidoof',
        'buizel',
        'poliwag',
        'wooper',
        'quagsire',
        'zubat',
        'golbat',
        'machop',
        'machoke',
        'geodude',
        'graveler',
        'onix',
        'krabby',
        'kingler',
        'misdreavus',
        'steelix',
        'makuhita',
        'absol',
        'chingling',
        'bronzor'
      ],
      order: 39
    },
    {
      location: 'Route 48',
      pokemon: [
        'fearow',
        'vulpix',
        'gloom',
        'diglett',
        'growlithe',
        'farfetchd',
        'tauros',
        'hoppip',
        'girafarig',
        'plusle',
        'minun',
        'shinx'
      ],
      order: 40
    },
    {
      location: 'Ruins of Alph',
      pokemon: [
        'poliwag',
        'geodude',
        'magikarp',
        'natu',
        'wooper',
        'quagsire',
        'smeargle',
        'linoone',
        'whismur',
        'bidoof',
        'buizel',
        'unown'
      ],
      order: 14
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
        'corsola'
      ],
      order: 35
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
      order: 36
    },
    {
      location: 'Slowpoke Well',
      pokemon: [
        'zubat',
        'slowpoke',
        'goldeen',
        'seaking',
        'magikarp',
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'golbat',
        'slowbro'
      ],
      order: 18
    },
    {
      location: 'Sprout Tower',
      pokemon: [
        'rattata',
        'gastly',
        'zigzagoon',
        'meditite',
        'spinda',
        'chatot'
      ],
      order: 12
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
        'magikarp',
        'makuhita',
        'absol',
        'chingling',
        'bronzor'
      ],
      order: 59
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
        'makuhita',
        'absol',
        'chingling',
        'bronzor',
        'raticate',
        'golbat',
        'tentacool',
        'tentacruel',
        'krabby',
        'kingler',
        'staryu',
        'corsola'
      ],
      order: 15
    },
    {
      location: 'Violet City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp', 'whiscash'],
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
        'magikarp',
        'makuhita',
        'absol',
        'chingling',
        'bronzor'
      ],
      order: 54
    }
  ]
};

export const heartGoldExclusives = [
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'spinarak',
  'ariados',
  'gligar',
  'mantine',
  'phanpy',
  'donphan',
  'sableye',
  'baltoy',
  'claydol',
  'kyogre',
  'mantyke',
  'gliscor'
];
export const soulSilverExclusives = [
  'vulpix',
  'ninetales',
  'meowth',
  'persian',
  'ledyba',
  'ledian',
  'teddiursa',
  'ursaring',
  'delibird',
  'skarmory',
  'mawile',
  'gulpin',
  'swalot',
  'groudon'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.HeartGoldSoulSilver),
  [heartGoldExclusives, soulSilverExclusives]
);
