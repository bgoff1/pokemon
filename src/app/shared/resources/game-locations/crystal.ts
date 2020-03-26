import { convertGameLocationToRoutes } from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

export default convertGameLocationToRoutes({
  game: GameGroup.Crystal,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['chikorita', 'cyndaquil', 'totodile']
    },
    {
      location: 'Violet City Egg',
      pokemon: ['togepi']
    },
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
      ]
    },
    {
      location: 'Goldenrod City',
      pokemon: ['eevee']
    },
    {
      location: 'Route 35',
      pokemon: ['spearow']
    },
    {
      location: 'Cianwood City',
      pokemon: ['shuckle']
    },
    {
      location: 'Mt. Mortar',
      pokemon: ['tyrogue']
    }
  ],
  statics: [
    {
      location: 'Union Cave',
      pokemon: ['lapras']
    },

    {
      location: 'Route 36',
      pokemon: ['sudowoodo']
    },
    {
      location: 'Lake of Rage',
      pokemon: ['gyarados']
    },
    {
      location: 'Vermillion City',
      pokemon: ['snorlax']
    },
    {
      location: 'Roaming (Raikou)',
      pokemon: ['raikou']
    },
    {
      location: 'Roaming (Entei)',
      pokemon: ['entei']
    },
    {
      location: 'Whirl Islands',
      pokemon: ['lugia']
    },
    {
      location: 'Tin Tower - Ho-Oh',
      pokemon: ['ho-oh']
    },
    { location: 'Tin Tower - Suicune', pokemon: ['suicune'] },
    { location: "Dragon's Den", pokemon: ['dratini'] }
  ],
  encounters: [
    { location: 'Celadon City', pokemon: ['grimer', 'muk'] },
    { location: 'Cerulean City', pokemon: ['goldeen', 'seaking', 'magikarp'] },
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
    { location: "Diglett's Cave", pokemon: ['diglett', 'dugtrio'] },
    { location: 'Fuchsia City', pokemon: ['magikarp', 'gyarados'] },
    {
      location: 'Mt. Moon',
      pokemon: ['sandshrew', 'clefairy', 'zubat', 'paras', 'geodude']
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
        'haunter',
        'onix',
        'cubone',
        'marowak',
        'golbat',
        'kangaskhan'
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      location: 'Route 12',
      pokemon: ['tentacool', 'tentacruel', 'magikarp', 'quagsire', 'qwilfish']
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
      ]
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
      ]
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
      ]
    },
    {
      location: 'Route 16',
      pokemon: ['fearow', 'grimer', 'muk', 'murkrow', 'slugma']
    },
    { location: 'Route 17', pokemon: ['fearow', 'grimer', 'muk', 'slugma'] },
    { location: 'Route 18', pokemon: ['fearow', 'grimer', 'muk', 'slugma'] },
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
        'magikarp'
      ]
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
      ]
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
        'shellder',
        'magikarp',
        'noctowl',
        'chinchou',
        'lanturn',
        'quagsire'
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
        'corsola'
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
      ]
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
      ]
    },
    {
      location: 'Victory Road',
      pokemon: ['sandslash', 'golbat', 'graveler', 'onix', 'rhyhorn', 'rhydon']
    },
    { location: 'Viridian City', pokemon: ['poliwag', 'poliwhirl'] },
    { location: 'Bell Tower', pokemon: ['rattata', 'gastly'] },
    { location: 'Blackthorn City', pokemon: ['poliwag', 'magikarp'] },
    {
      location: 'Burned Tower',
      pokemon: ['rattata', 'raticate', 'zubat', 'koffing', 'weezing']
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
      ]
    },
    { location: "Dragon's Den", pokemon: ['magikarp', 'dratini', 'dragonair'] },
    {
      location: 'Ecruteak City',
      pokemon: ['poliwag', 'poliwhirl', 'magikarp']
    },
    {
      location: 'Ice Path',
      pokemon: ['golbat', 'jynx', 'swinub', 'delibird', 'sneasel']
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
        'machoke',
        'graveler'
      ]
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
      ]
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
      pokemon: ['pidgey', 'rattata', 'sentret', 'hoothoot', 'hoppip']
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
      ]
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
      ]
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
      ]
    },
    {
      location: 'Route 33',
      pokemon: ['rattata', 'spearow', 'ekans', 'zubat', 'geodude', 'hoppip']
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
        'magikarp'
      ]
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
      ]
    },
    {
      location: 'Route 46',
      pokemon: ['rattata', 'spearow', 'geodude', 'phanpy']
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
        'shuckle',
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
        'golbat',
        'slowbro'
      ]
    },
    { location: 'Sprout Tower', pokemon: ['rattata', 'gastly'] },
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
    { location: 'Violet City', pokemon: ['poliwag', 'poliwhirl', 'magikarp'] },
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
      ]
    }
  ]
});
