import { convertGameLocationToRoutes } from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

export default convertGameLocationToRoutes({
  game: GameGroup.HeartGoldSoulSilver,
  gifts: [
    { location: 'Starter', pokemon: ['chikorita', 'cyndaquil', 'totodile'] },
    { location: 'Goldenrod City', pokemon: ['eevee'] },
    { location: 'Violet City Egg', pokemon: ['togepi'] },
    { location: 'Primo Egg - Mareep', pokemon: ['mareep'] },
    { location: 'Primo Egg - Wooper', pokemon: ['wooper'] },
    { location: 'Primo Egg - Slugma', pokemon: ['slugma'] },
    { location: 'Cianwood City', pokemon: ['shuckle'] },
    { location: 'Mt. Mortar', pokemon: ['tyrogue'] }
  ],
  statics: [
    { location: 'Lake of Rage', pokemon: ['gyarados'] },
    { location: 'Union Cave', pokemon: ['lapras'] },
    { location: 'Seafoam Islands', pokemon: ['articuno'] },
    { location: 'Power Plant', pokemon: ['zapdos'] },
    { location: 'Mt. Silver', pokemon: ['moltres'] },
    { location: "Dragon's Den", pokemon: ['dratini'] },
    { location: 'Vermillion City', pokemon: ['snorlax'] },
    { location: 'Route 36', pokemon: ['sudowoodo'] },
    { location: 'Roaming (Raikou)', pokemon: ['raikou'] },
    { location: 'Roaming (Entei)', pokemon: ['entei'] },
    { location: 'Route 25', pokemon: ['suicune'] },
    { location: 'Whirl Islands', pokemon: ['lugia'] },
    { location: 'Bell Tower', pokemon: ['ho-oh'] },
    { location: 'Roaming (Eon Member)', pokemon: ['latias', 'latios'] }
  ],
  encounters: [
    { location: 'Celadon City', pokemon: ['grimer', 'muk'] },
    {
      location: 'Cerulean Cave',
      pokemon: [
        'golbat',
        'parasect',
        'persian',
        'psyduck',
        'golduck',
        'primeape',
        'poliwag',
        'poliwhirl',
        'kadabra',
        'machoke',
        'geodude',
        'graveler',
        'magneton',
        'electrode',
        'goldeen',
        'magikarp',
        'gyarados',
        'ditto',
        'wobbuffet',
        'makuhita',
        'absol',
        'chingling',
        'bronzor'
      ]
    },
    {
      location: 'Cerulean City',
      pokemon: ['goldeen', 'seaking', 'magikarp']
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
      ]
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
      ]
    },
    { location: 'Fuchsia City', pokemon: ['magikarp', 'gyarados'] },
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      location: 'Route 17',
      pokemon: ['fearow', 'grimer', 'muk', 'slugma', 'plusle', 'minun', 'shinx']
    },
    {
      location: 'Route 18',
      pokemon: ['fearow', 'grimer', 'muk', 'slugma', 'plusle', 'minun', 'shinx']
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
        'lanturn',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      location: 'Viridian City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp']
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
      ]
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
      ]
    },
    { location: 'Blackthorn City', pokemon: ['poliwag', 'magikarp'] },
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      location: "Dragon's Den",
      pokemon: ['magikarp', 'dratini', 'dragonair']
    },
    {
      location: 'Ecruteak City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp']
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
      ]
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
      ]
    },
    { location: 'Lake of Rage', pokemon: ['magikarp', 'gyarados'] },
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
        'yanma',
        'linoone',
        'whismur',
        'bidoof',
        'buizel'
      ]
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
        'stantler',
        'plusle',
        'minun',
        'shinx'
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      location: 'Route 46',
      pokemon: ['rattata', 'spearow', 'geodude', 'plusle', 'minun', 'shinx']
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    { location: 'Unknown; all bugs', pokemon: ['caterpie', 'weedle'] },
    { location: 'Unknown; all Poliwag', pokemon: ['poliwag', 'magikarp'] },
    {
      location: 'Unknown; all Rattata',
      pokemon: ['rattata', 'goldeen', 'magikarp', 'zigzagoon', 'bidoof']
    },
    {
      location: 'Violet City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp', 'whiscash']
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
      ]
    }
  ]
});
