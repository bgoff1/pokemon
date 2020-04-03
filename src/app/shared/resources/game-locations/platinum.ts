import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.Platinum,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['turtwig', 'piplup', 'chimchar'],
      order: 0
    },
    { location: 'Hearthome City', pokemon: ['eevee'], order: 27 },
    { location: 'Veilstone City', pokemon: ['porygon'], order: 33 },
    { location: 'Eterna City Egg', pokemon: ['togepi'], order: 19 },
    { location: 'Iron Island Egg', pokemon: ['riolu'], order: 47 }
  ],
  statics: [
    { location: 'Valley Windworks', pokemon: ['drifloon'], order: 15 },
    { location: 'Hallowed Tower', pokemon: ['spiritomb'], order: 65 },
    { location: 'Old Chateau', pokemon: ['rotom'], order: 21 },
    { location: 'Lake Acuity', pokemon: ['uxie'], order: 58 },
    { location: 'Lake Valor', pokemon: ['azelf'], order: 59 },
    {
      location: 'Roaming Lake Guardian',
      pokemon: ['mesprit'],
      order: 60
    },
    { location: 'Distortion World', pokemon: ['giratina'], order: 52 }
  ],
  encounters: [
    {
      location: 'Acuity Lakefront',
      pokemon: ['sneasel', 'ursaring', 'swinub', 'snorunt', 'snover'],
      order: 50
    },
    {
      location: 'Canalave City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'staryu',
        'magikarp',
        'gyarados',
        'shellos',
        'gastrodon',
        'finneon',
        'lumineon'
      ],
      order: 45
    },
    {
      location: 'Celestic Town',
      pokemon: [
        'psyduck',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'corphish',
        'crawdaunt'
      ],
      order: 43
    },
    {
      location: 'Eterna City',
      pokemon: [
        'psyduck',
        'golduck',
        'magikarp',
        'gyarados',
        'barboach',
        'whiscash'
      ],
      order: 18
    },
    {
      location: 'Eterna Forest',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'gastly',
        'hoothoot',
        'pineco',
        'wurmple',
        'silcoon',
        'beautifly',
        'cascoon',
        'dustox',
        'seedot',
        'slakoth',
        'nincada',
        'bidoof',
        'kricketot',
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
        'magmar',
        'magikarp',
        'gyarados',
        'aron',
        'floatzel',
        'shellos',
        'gastrodon',
        'finneon',
        'lumineon'
      ],
      order: 44
    },
    {
      location: 'Great Marsh',
      pokemon: [
        'arbok',
        'tangela',
        'magikarp',
        'gyarados',
        'hoothoot',
        'noctowl',
        'yanma',
        'wooper',
        'quagsire',
        'carvanha',
        'barboach',
        'whiscash',
        'tropius',
        'bibarel'
      ],
      order: 40
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
      order: 46
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
        'sneasel',
        'teddiursa',
        'lunatone',
        'solrock',
        'snorunt',
        'bibarel',
        'snover'
      ],
      order: 51
    },
    {
      location: 'Lake Valor',
      pokemon: [
        'psyduck',
        'golduck',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'wobbuffet',
        'lunatone',
        'solrock',
        'staravia',
        'bibarel'
      ],
      order: 37
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
        'lunatone',
        'solrock',
        'starly',
        'bidoof'
      ],
      order: 3
    },
    {
      location: 'Lost Tower',
      pokemon: ['zubat', 'gastly', 'duskull', 'golbat'],
      order: 29
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
        'nosepass',
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
        'absol',
        'snover',
        'abomasnow',
        'dratini',
        'dragonair',
        'chimecho'
      ],
      order: 25
    },
    { location: 'Old Chateau', pokemon: ['gastly', 'gengar'], order: 20 },
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
        'shellos',
        'gastrodon'
      ],
      order: 39
    },
    {
      location: 'Pokémon League',
      pokemon: [
        'tentacruel',
        'magikarp',
        'gyarados',
        'remoraid',
        'octillery',
        'wingull',
        'pelipper',
        'luvdisc'
      ],
      order: 64
    },
    {
      location: 'Ravaged Path',
      pokemon: [
        'zubat',
        'golbat',
        'psyduck',
        'golduck',
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
        'nidoran-f',
        'nidoran-m',
        'growlithe',
        'doduo',
        'starly',
        'bidoof',
        'kricketot'
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
        'wurmple',
        'lotad',
        'seedot',
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
        'bidoof',
        'pachirisu',
        'buizel',
        'shellos',
        'gastrodon',
        'finneon',
        'lumineon',
        'psyduck',
        'golduck',
        'slowpoke',
        'hoothoot',
        'wurmple',
        'silcoon',
        'beautifly',
        'cascoon',
        'dustox',
        'lotad',
        'barboach',
        'whiscash',
        'kricketot',
        'budew'
      ],
      order: 16
    },
    {
      location: 'Route 206',
      pokemon: [
        'zubat',
        'machop',
        'geodude',
        'ponyta',
        'gligar',
        'larvitar',
        'baltoy',
        'kricketune'
      ],
      order: 23
    },
    {
      location: 'Route 207',
      pokemon: [
        'zubat',
        'machop',
        'geodude',
        'ponyta',
        'phanpy',
        'stantler',
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
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'dunsparce',
        'smeargle',
        'ralts',
        'roselia',
        'zangoose',
        'seviper',
        'bidoof',
        'bibarel',
        'budew'
      ],
      order: 26
    },
    {
      location: 'Route 209',
      pokemon: [
        'vulpix',
        'zubat',
        'psyduck',
        'golduck',
        'chansey',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'snubbull',
        'ralts',
        'kirlia',
        'roselia',
        'duskull',
        'staravia',
        'bibarel'
      ],
      order: 28
    },
    {
      location: 'Route 210',
      pokemon: [
        'geodude',
        'ponyta',
        'chansey',
        'scyther',
        'tauros',
        'hoothoot',
        'noctowl',
        'pineco',
        'miltank',
        'seedot',
        'nuzleaf',
        'roselia',
        'staravia',
        'psyduck',
        'golduck',
        'machop',
        'machoke',
        'magikarp',
        'gyarados',
        'meditite',
        'swablu',
        'zangoose',
        'seviper',
        'barboach',
        'whiscash',
        'bagon',
        'bibarel'
      ],
      order: 31
    },
    {
      location: 'Route 211',
      pokemon: [
        'zubat',
        'machop',
        'hoothoot',
        'teddiursa',
        'tyrogue',
        'meditite',
        'bidoof',
        'chingling',
        'bronzor',
        'machoke',
        'graveler',
        'noctowl'
      ],
      order: 22
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
        'marill',
        'smeargle',
        'ralts',
        'kirlia',
        'roselia',
        'staravia',
        'ekans',
        'tentacool',
        'tentacruel',
        'grimer',
        'quagsire',
        'remoraid',
        'octillery',
        'lotad',
        'lombre',
        'buizel',
        'shellos',
        'gastrodon',
        'croagunk'
      ],
      order: 41
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
        'buizel',
        'shellos',
        'gastrodon',
        'chatot'
      ],
      order: 38
    },
    {
      location: 'Route 214',
      pokemon: [
        'vulpix',
        'zubat',
        'psyduck',
        'golduck',
        'geodude',
        'graveler',
        'rhyhorn',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'houndour',
        'poochyena',
        'spoink'
      ],
      order: 34
    },
    {
      location: 'Route 215',
      pokemon: [
        'abra',
        'kadabra',
        'drowzee',
        'lickitung',
        'scyther',
        'marill',
        'staravia'
      ],
      order: 32
    },
    {
      location: 'Route 216',
      pokemon: [
        'zubat',
        'graveler',
        'sneasel',
        'ursaring',
        'meditite',
        'snorunt',
        'snover'
      ],
      order: 48
    },
    {
      location: 'Route 217',
      pokemon: [
        'sneasel',
        'ursaring',
        'swinub',
        'piloswine',
        'delibird',
        'snorunt',
        'snover'
      ],
      order: 49
    },
    {
      location: 'Route 218',
      pokemon: [
        'tentacool',
        'tentacruel',
        'voltorb',
        'mr-mime',
        'magikarp',
        'gyarados',
        'floatzel',
        'shellos',
        'gastrodon',
        'chatot',
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
        'girafarig',
        'wingull',
        'pelipper',
        'roselia',
        'floatzel',
        'finneon',
        'lumineon'
      ],
      order: 55
    },
    {
      location: 'Route 222',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magnemite',
        'magneton',
        'electabuzz',
        'magikarp',
        'gyarados',
        'flaaffy',
        'remoraid',
        'octillery',
        'wingull',
        'pelipper',
        'skitty',
        'luxio',
        'floatzel',
        'chatot'
      ],
      order: 56
    },
    {
      location: 'Route 224',
      pokemon: [
        'oddish',
        'gloom',
        'bellsprout',
        'weepinbell',
        'tentacruel',
        'magikarp',
        'gyarados',
        'natu',
        'shuckle',
        'remoraid',
        'octillery',
        'beautifly',
        'dustox',
        'pelipper',
        'roselia',
        'luvdisc',
        'floatzel',
        'gastrodon'
      ],
      order: 63
    },
    {
      location: 'Ruin Maniac Cave',
      pokemon: ['geodude', 'hippopotas'],
      order: 35
    },
    {
      location: 'Route 220',
      pokemon: [
        'tentacool',
        'tentacruel',
        'magikarp',
        'gyarados',
        'chinchou',
        'wingull',
        'pelipper',
        'finneon',
        'lumineon'
      ],
      order: 54
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
      order: 61
    },
    {
      location: 'Sendoff Spring',
      pokemon: [
        'golbat',
        'golduck',
        'graveler',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados',
        'lunatone',
        'solrock',
        'dusclops',
        'staravia',
        'bibarel',
        'chingling'
      ],
      order: 53
    },
    { location: 'Solaceon Ruins', pokemon: ['unown'], order: 30 },
    {
      location: 'Sunyshore City',
      pokemon: [
        'tentacool',
        'tentacruel',
        'staryu',
        'magikarp',
        'gyarados',
        'remoraid',
        'octillery',
        'wingull',
        'pelipper'
      ],
      order: 57
    },
    {
      location: 'Trophy Garden',
      pokemon: ['pikachu', 'pichu', 'roselia', 'staravia', 'kricketune'],
      order: 42
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
        'electrike',
        'shinx',
        'pachirisu',
        'buizel',
        'shellos',
        'gastrodon',
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
        'girafarig',
        'houndour',
        'staravia',
        'bibarel',
        'kricketune'
      ],
      order: 36
    },
    {
      location: 'Victory Road',
      pokemon: [
        'golbat',
        'graveler',
        'onix',
        'rhyhorn',
        'rhydon',
        'steelix',
        'gabite',
        'magneton',
        'magikarp',
        'gyarados',
        'azumarill',
        'floatzel',
        'dewgong',
        'lapras'
      ],
      order: 62
    },
    {
      location: 'Wayward Cave',
      pokemon: ['sandshrew', 'zubat', 'geodude', 'onix', 'bronzor', 'gible'],
      order: 24
    }
  ]
};

export default convertGameLocationToRoutes(gameLocation);
