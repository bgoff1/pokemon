import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.Black2White2,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['snivy', 'oshawott', 'tepig'],
      order: 0
    },
    {
      location: 'Driftveil City',
      pokemon: ['Zorua'],
      order: 13
    },
    {
      location: 'Route 6 Weather Institute',
      pokemon: ['deerling'],
      order: 17
    }
  ],
  statics: [
    {
      location: 'Seaside Cave',
      pokemon: ['crustle'],
      order: 37
    },
    {
      location: 'Relic Castle',
      pokemon: ['volcarona'],
      order: 15
    },
    {
      location: 'Route 13 Roaming',
      pokemon: ['cobalion'],
      order: 26
    },
    {
      location: 'Route 22 Roaming',
      pokemon: ['terrakion'],
      order: 34
    },
    {
      location: 'Route 11 Roaming',
      pokemon: ['virizion'],
      order: 30
    }
  ],
  encounters: [
    {
      location: 'Route 19',
      pokemon: ['patrat', 'purrloin'],
      order: 1
    },
    {
      location: 'Route 20',
      pokemon: [
        'sewaddle',
        'pidove',
        'sunkern',
        'patrat',
        'purrloin',
        'audino',
        'dunsparce',
        'venipede'
      ],
      order: 2
    },
    {
      location: 'Floccesy Ranch',
      pokemon: [
        'patrat',
        'lillipup',
        'psyduck',
        'azurill',
        'pidove',
        'mareep',
        'riolu'
      ],
      order: 3
    },
    {
      location: 'Virbank Complex',
      pokemon: [
        'patrat',
        'pidove',
        'magnemite',
        'elekid',
        'magby',
        'audino',
        'growlithe',
        'koffing'
      ],
      order: 4
    },
    {
      location: 'Castelia Sewers',
      pokemon: ['rattata', 'zubat', 'grimer'],
      order: 5
    },
    {
      location: 'Castelia Park',
      pokemon: [
        'cottonee',
        'petilil',
        'rattata',
        'skitty',
        'buneary',
        'pidove',
        'eevee',
        'audino',
        'lopunny',
        'delcatty',
        'whimsicott',
        'lilligant'
      ],
      order: 6
    },
    {
      location: 'Route 4',
      pokemon: [
        'sandile',
        'darumaka',
        'minccino',
        'trubbish',
        'scraggy',
        'mandibuzz',
        'braviary'
      ],
      order: 7
    },
    {
      location: 'Desert Resort',
      pokemon: [
        'sandshrew',
        'sandile',
        'darumaka',
        'maractus',
        'dwebble',
        'scraggy',
        'trapinch',
        'sigilyph'
      ],
      order: 8
    },
    {
      location: 'Relic Castle',
      pokemon: [
        'sandile',
        'yamask',
        'sandshrew',
        'sandslash',
        'krokorok',
        'baltoy'
      ],
      order: 9
    },
    {
      location: 'Route 16',
      pokemon: [
        'minccino',
        'gothita',
        'solosis',
        'liepard',
        'trubbish',
        'audino',
        'emolga',
        'cinccino'
      ],
      order: 10
    },
    {
      location: 'Lostlorn Forest',
      pokemon: [
        'swadloon',
        'cottonee',
        'petilil',
        'venipede',
        'roselia',
        'combee',
        'heracross',
        'pinsir',
        'audino',
        'emolga',
        'pansage',
        'pansear',
        'panpour',
        'vespiquen',
        'roserade',
        'leavanny',
        'whimsicott',
        'lilligant'
      ],
      order: 11
    },
    {
      location: 'Route 5',
      pokemon: [
        'minccino',
        'gothita',
        'solosis',
        'liepard',
        'trubbish',
        'audino',
        'emolga',
        'cinccino',
        'foongus'
      ],
      order: 12
    },
    {
      location: 'Relic Passage',
      pokemon: [
        'boldore',
        'woobat',
        'gurdurr',
        'raticate',
        'onix',
        'drilbur',
        'roggenrola',
        'timburr',
        'rattata'
      ],
      order: 14
    },
    {
      location: 'Route 6',
      pokemon: [
        'deerling',
        'shelmet',
        'karrablast',
        'tranquill',
        'swadloon',
        'foongus',
        'marill',
        'audino',
        'emolga',
        'dunsparce',
        'azumarill',
        'castform',
        'unfezant',
        'leavanny',
        'basculin'
      ],
      order: 16
    },
    {
      location: 'Mistralton Cave',
      pokemon: ['boldore', 'woobat', 'aron', 'axew', 'drilbur'],
      order: 18
    },
    {
      location: 'Chargestone Cave',
      pokemon: [
        'joltik',
        'klink',
        'ferroseed',
        'nosepass',
        'boldore',
        'tynamo',
        'drilbur'
      ],
      order: 19
    },
    {
      location: 'Route 7',
      pokemon: [
        'tranquill',
        'cubchoo',
        'zebstrika',
        'deerling',
        'watchog',
        'zangoose',
        'seviper',
        'foongus',
        'audino',
        'emolga',
        'unfezant'
      ],
      order: 20
    },
    {
      location: 'Celestial Tower',
      pokemon: ['litwick', 'elgyem', 'golbat'],
      order: 21
    },
    {
      location: 'Strange House',
      pokemon: [
        'litwick',
        'gothita',
        'solosis',
        'raticate',
        'golbat',
        'banette',
        'gothorita',
        'duosion'
      ],
      order: 22
    },
    {
      location: 'Reversal Mountain',
      pokemon: [
        'skorupi',
        'spoink',
        'numel',
        'drifblim',
        'trapinch',
        'camerupt',
        'grumpig',
        'skarmory',
        'audino',
        'vibrava',
        'woobat',
        'boldore',
        'excadrill'
      ],
      order: 23
    },
    {
      location: 'Undella Town',
      pokemon: ['frillish', 'staryu', 'basculin', 'starmie'],
      order: 24
    },
    {
      location: 'Undella Bay',
      pokemon: [
        'frillish',
        'mantyke',
        'spheal',
        'remoraid',
        'wailmer',
        'jellicent',
        'sealeo',
        'wailord',
        'mantine',
        'walrein'
      ],
      order: 24
    },
    {
      location: 'Route 13',
      pokemon: [
        'tangela',
        'pelipper',
        'drifblim',
        'absol',
        'lunatone',
        'solrock',
        'audino',
        'emolga',
        'tangrowth',
        'frillish',
        'staryu',
        'basculin',
        'jellicent',
        'starmie',
        'foongus',
        'drifloon',
        'spheal'
      ],
      order: 25
    },
    {
      location: 'Route 12',
      pokemon: [
        'roselia',
        'tranquill',
        'combee',
        'heracross',
        'pinsir',
        'sewaddle',
        'audino',
        'dunsparce',
        'emolga',
        'roserade',
        'vespiquen',
        'unfezant',
        'leavanny'
      ],
      order: 27
    },
    {
      location: 'Village Bridge',
      pokemon: [
        'golduck',
        'marill',
        'zangoose',
        'seviper',
        'audino',
        'dunsparce',
        'emolga',
        'azumarill',
        'basculin',
        'lapras'
      ],
      order: 28
    },
    {
      location: 'Route 11',
      pokemon: [
        'shelmet',
        'karrablast',
        'golduck',
        'gligar',
        'marill',
        'zangoose',
        'seviper',
        'amoonguss',
        'audino',
        'emolga',
        'azumarill',
        'gliscor',
        'basculin',
        'buizel',
        'floatzel'
      ],
      order: 29
    },
    {
      location: 'Route 9',
      pokemon: [
        'minccino',
        'gothorita',
        'duosion',
        'garbodor',
        'pawniard',
        'liepard',
        'muk',
        'audino',
        'emolga',
        'cinccino',
        'gothitelle',
        'reuniclus',
        'bouffalant'
      ],
      order: 31
    },
    {
      location: 'Humilau City',
      pokemon: ['frillish', 'staryu', 'basculin', 'corsola', 'starmie'],
      order: 32
    },
    {
      location: 'Route 22',
      pokemon: [
        'mienfoo',
        'amoonguss',
        'golduck',
        'marill',
        'pelipper',
        'lunatone',
        'solrock',
        'delibird',
        'audino',
        'emolga',
        'azumarill',
        'basculin'
      ],
      order: 33
    },
    {
      location: 'Route 21',
      pokemon: [
        'frillish',
        'mantyke',
        'remoraid',
        'jellicent',
        'alomomola',
        'mantine'
      ],
      order: 35
    },
    {
      location: 'Seaside Cave',
      pokemon: [
        'golduck',
        'woobat',
        'boldore',
        'seel',
        'tynamo',
        'excadrill',
        'shuckle',
        'eelektrik',
        'frillish',
        'seel',
        'jellicent',
        'dewgong'
      ],
      order: 36
    },
    {
      location: 'Giant Chasm',
      pokemon: [
        'tangela',
        'pelipper',
        'clefairy',
        'lunatone',
        'solrock',
        'vanillish',
        'delibird',
        'audino',
        'clefable',
        'tangrowth',
        'vanilluxe',
        'piloswine',
        'sneasel',
        'excadrill',
        'basculin',
        'seel',
        'dewgong',
        'ditto',
        'metang',
        'metagross',
        'mamoswine'
      ],
      order: 38
    },
    {
      location: 'Route 23',
      pokemon: [
        'sawk',
        'throh',
        'bouffalant',
        'mienfoo',
        'golduck',
        'gligar',
        'amoonguss',
        'vullaby',
        'rufflet',
        'mienshao',
        'audino',
        'emolga',
        'gliscor',
        'basculin',
        'buizel',
        'floatzel',
        'zangoose',
        'seviper',
        'absol'
      ],
      order: 39
    },
    {
      location: 'Victory Road',
      pokemon: [
        'banette',
        'golurk',
        'basculin',
        'marill',
        'azumarill',
        'cottonee',
        'petilil',
        'roselia',
        'audino',
        'dunsparce',
        'roserade',
        'whimsicott',
        'lilligant',
        'tranquill',
        'altaria',
        'unfezant',
        'buizel',
        'floatzel',
        'boldore',
        'onix',
        'excadrill',
        'druddigon',
        'zweilous',
        'gurdurr',
        'throh',
        'sawk'
      ],
      order: 40
    }
  ]
};

export const black2Exclusives = [
  'weedle',
  'kakuna',
  'beedrill',
  'magmar',
  'spinarak',
  'ariados',
  'sudowoodo',
  'heracross',
  'magby',
  'plusle',
  'volbeat',
  'spoink',
  'grumpig',
  'registeel',
  'latios',
  'buneary',
  'lopunny',
  'stunky',
  'skuntank',
  'bonsly',
  'gible',
  'gabite',
  'garchomp',
  'magmortar',
  'cottonee',
  'whimsicott',
  'gothita',
  'gothorita',
  'gothitelle',
  'vullaby',
  'manidbuzz',
  'zekrom'
];
export const white2Exclusives = [
  'caterpie',
  'metapod',
  'butterfree',
  'mr. mime',
  'electabuzz',
  'pinsir',
  'ledyba',
  'ledian',
  'elekid',
  'skitty',
  'delcatty',
  'minun',
  'illumise',
  'numel',
  'camerupt',
  'regice',
  'latias',
  'glameow',
  'purugly',
  'mime jr.',
  'electivire',
  'petilil',
  'lilligant',
  'solosis',
  'duosion',
  'reuniclus',
  'rufflet',
  'braviary',
  'reshiram'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.Black2White2),
  [black2Exclusives, white2Exclusives]
);
