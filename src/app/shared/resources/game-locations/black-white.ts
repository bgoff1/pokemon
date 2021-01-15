import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.BlackWhite,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['snivy', 'oshawott', 'tepig'],
      order: 0
    },
    {
      location: 'Dreamyard',
      pokemon: ['pansage', 'panpour', 'pansear'],
      order: 3
    },
    {
      location: 'Fossil',
      pokemon: ['tirtouga', 'archen'],
      order: 11
    },
    {
      location: 'Route 18 Egg',
      pokemon: ['larvesta'],
      order: 20
    }
  ],
  statics: [
    {
      location: 'Relic Castle',
      pokemon: ['darmanitan'],
      order: 12
    },
    {
      location: "N's Castle",
      pokemon: ['reshiram', 'zekrom'],
      order: 35
    },
    {
      location: 'Mistralton Cave',
      pokemon: ['cobalion'],
      order: 23
    },
    {
      location: 'Trial Chamber',
      pokemon: ['terrakion'],
      order: 34
    },
    {
      location: 'Rumination Field',
      pokemon: ['virizion'],
      order: 24
    },
    {
      location: 'Roaming Storm',
      pokemon: ['tornadus', 'thundurus'],
      order: 31
    }
  ],
  encounters: [
    {
      location: 'Route 1',
      pokemon: ['patrat', 'lillipup'],
      order: 1
    },
    {
      location: 'Route 2',
      pokemon: ['patrat', 'lillipup', 'purrloin'],
      order: 2
    },
    {
      location: 'Dreamyard',
      pokemon: ['patrat', 'purrloin', 'munna', 'audino', 'musharna'],
      order: 4
    },
    {
      location: 'Route 3',
      pokemon: [
        'pidove',
        'patrat',
        'blitzle',
        'lillipup',
        'purrloin',
        'audino'
      ],
      order: 5
    },
    {
      location: 'Wellspring Cave',
      pokemon: ['roggenrola', 'woobat', 'drilbur'],
      order: 6
    },
    {
      location: 'Pinwheel Forest',
      pokemon: [
        'tympole',
        'pidove',
        'timburr',
        'sawk',
        'throh',
        'audino',
        'sewaddle',
        'cottonee',
        'petilil',
        'venipede',
        'pidove',
        'pansage',
        'pansear',
        'panpour',
        'whimsicott',
        'lilligant',
        'swadloon',
        'tranquill',
        'whirlipede'
      ],
      order: 7
    },
    {
      location: 'Route 4',
      pokemon: ['sandile', 'darumaka', 'scraggy'],
      order: 8
    },
    {
      location: 'Desert Resort',
      pokemon: [
        'sandile',
        'darumaka',
        'scraggy',
        'maractus',
        'dwebble',
        'sigilyph'
      ],
      order: 9
    },
    {
      location: 'Relic Castle',
      pokemon: ['sandile', 'yamask'],
      order: 10
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
        'cinccino'
      ],
      order: 12
    },
    {
      location: 'Cold Storage',
      pokemon: [
        'herdier',
        'vanillite',
        'timburr',
        'minccino',
        'audino',
        'cinccino',
        'stoutland'
      ],
      order: 13
    },
    {
      location: 'Route 6',
      pokemon: [
        'deerling',
        'karrablast',
        'foongus',
        'tranquill',
        'vanillite',
        'swadloon',
        'audino',
        'emolga',
        'unfezant',
        'leavanny'
      ],
      order: 14
    },
    {
      location: 'Chargestone Cave',
      pokemon: ['joltik', 'klink', 'ferroseed', 'boldore', 'tynamo', 'drilbur'],
      order: 15
    },
    {
      location: 'Route 7',
      pokemon: [
        'tranquill',
        'cubchoo',
        'watchog',
        'zebstrika',
        'deerling',
        'foongus',
        'audino',
        'unfezant',
        'emolga'
      ],
      order: 16
    },
    {
      location: 'Celestial Tower',
      pokemon: ['litwick', 'elgyem'],
      order: 17
    },
    {
      location: 'Route 17',
      pokemon: ['frillish', 'alomomola', 'jellicent'],
      order: 18
    },
    {
      location: 'Route 18',
      pokemon: [
        'scraggy',
        'dwebble',
        'watchog',
        'sawk',
        'throh',
        'crustle',
        'audino',
        'frillish',
        'alomomola',
        'jellicent'
      ],
      order: 19
    },
    {
      location: 'P2 Laboratory',
      pokemon: [
        'watchog',
        'herdier',
        'scraggy',
        'klink',
        'audino',
        'stoutland',
        'frillish',
        'alomomola',
        'jellicent'
      ],
      order: 21
    },
    {
      location: 'Mistralton Cave',
      pokemon: ['boldore', 'woobat', 'axew', 'drilbur'],
      order: 22
    },
    {
      location: 'Twist Mountain',
      pokemon: [
        'boldore',
        'woobat',
        'gurdurr',
        'cubchoo',
        'cryogonal',
        'drilbur'
      ],
      order: 25
    },
    {
      location: 'Icirrus City',
      pokemon: ['palpitoad', 'shelmet', 'stunfisk', 'seismitoad'],
      order: 26
    },
    {
      location: 'Dragonspiral Tower',
      pokemon: [
        'tranquill',
        'vanillite',
        'deerling',
        'mienfoo',
        'druddigon',
        'cubchoo',
        'audino',
        'emolga',
        'unfezant',
        'sawsbuck',
        'beartic',
        'basculin',
        'golett'
      ],
      order: 27
    },
    {
      location: 'Route 8',
      pokemon: ['palpitoad', 'shelmet', 'stunfisk', 'seismitoad'],
      order: 28
    },
    {
      location: 'Moor of Icirrus',
      pokemon: ['palpitoad', 'shelmet', 'stunfisk', 'seismitoad'],
      order: 29
    },
    {
      location: 'Route 9',
      pokemon: [
        'gothorita',
        'duosion',
        'garbodor',
        'minccino',
        'pawniard',
        'liepard',
        'audino',
        'emolga',
        'cinccino',
        'gothitelle',
        'reuniclus'
      ],
      order: 30
    },
    {
      location: 'Route 10',
      pokemon: [
        'herdier',
        'rufflet',
        'vullaby',
        'bouffalant',
        'throh',
        'sawk',
        'foongus',
        'amoonguss',
        'audino',
        'emolga',
        'stoutland'
      ],
      order: 32
    },
    {
      location: 'Victory Road',
      pokemon: [
        'heatmor',
        'vullaby',
        'rufflet',
        'fraxure',
        'mienfoo',
        'durant',
        'deino',
        'boldore',
        'woobat',
        'excadrill',
        'basculin'
      ],
      order: 33
    }
  ]
};

export const blackExclusives = [
  'weedle',
  'kakuna',
  'beedrill',
  'murkrow',
  'houndour',
  'houndoom',
  'shroomish',
  'breloom',
  'plusle',
  'volbeat',
  'honchkrow',
  'cottonee',
  'whimsicott',
  'gothita',
  'gothorita',
  'gothitelle',
  'vullaby',
  'mandibuzz',
  'tornadus',
  'reshiram'
];
export const whiteExclusives = [
  'caterpie',
  'metapod',
  'butterfree',
  'paras',
  'parasect',
  'misdreavus',
  'poochyena',
  'mightyena',
  'minun',
  'illumise',
  'mismagius',
  'petilil',
  'lilligant',
  'solosis',
  'duosion',
  'reuniclus',
  'rufflet',
  'braviary',
  'thundurus',
  'zekrom'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.BlackWhite),
  [blackExclusives, whiteExclusives]
);
