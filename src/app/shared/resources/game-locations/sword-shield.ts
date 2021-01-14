import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.SwordShield,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['grookey', 'scorbunny', 'sobble'],
      order: 0
    },
    {
      location: 'Gigantamax Pikachu',
      pokemon: ['pikachu'],
      order: 4
    },
    {
      location: 'Gigantamax Eevee',
      pokemon: ['eevee'],
      order: 5
    },
    {
      location: 'Day Care Egg',
      pokemon: ['toxel'],
      order: 11
    },
    {
      location: 'Mismatched Fossil',
      pokemon: ['dracozolt', 'arctozolt', 'dracovish', 'arctovish'],
      order: 16
    }
  ],
  statics: [
    {
      location: 'Energy Plant',
      pokemon: ['eternatus'],
      order: 23
    }
  ],
  encounters: [
    {
      location: 'Slumbering Weald',
      pokemon: ['skwovet', 'rookidee', 'blipbug', 'grubbin', 'hoothoot'],
      order: 1
    },
    {
      location: 'Route 1',
      pokemon: [
        'skwovet',
        'rookidee',
        'wooloo',
        'nickit',
        'blipbug',
        'caterpie',
        'grubbin',
        'hoothoot'
      ],
      order: 2
    },
    {
      location: 'Route 2',
      pokemon: [
        'skwovet',
        'rookidee',
        'nickit',
        'chewtle',
        'yamper',
        'zigzagoon-galar',
        'blipbug',
        'seedot',
        'hoothoot',
        'magikarp',
        'arrokuda',
        'barraskewda',
        'gyarados'
      ],
      order: 3
    },
    {
      location: 'Wild Area',
      pokemon: [],
      order: 6
    },
    {
      location: 'Route 3',
      pokemon: [
        'zigzagoon-galar',
        'gossifleur',
        'vulpix',
        'growlithe',
        'stunky',
        'trubbish',
        'tyrogue',
        'rookidee',
        'machop',
        'pancham',
        'mudbray',
        'klink',
        'sizzlipede',
        'skwovet',
        'cherubi'
      ],
      order: 7
    },
    {
      location: 'Galar Mine',
      pokemon: [
        'rolycoly',
        'timburr',
        'woobat',
        'diglett',
        'drilbur',
        'roggenrola',
        'carkol'
      ],
      order: 8
    },
    {
      location: 'Route 4',
      pokemon: [
        'electrike',
        'meowth-galar',
        'yamper',
        'pumpkaboo',
        'pikachu',
        'eevee',
        'diglett',
        'wooloo',
        'milcery',
        'joltik',
        'cutiefly',
        'budew',
        'ferroseed',
        'skwovet',
        'magikarp',
        'chewtle',
        'goldeen'
      ],
      order: 9
    },
    {
      location: 'Route 5',
      pokemon: [
        'stufful',
        'swirlix',
        'spritzee',
        'minccino',
        'wobbuffet',
        "farfetch'd-galar",
        'drifloon',
        'dottler',
        'espurr',
        'nuzleaf',
        'lombre',
        'applin',
        'dewpider',
        'nincada',
        'skwovet',
        'magikarp',
        'chewtle',
        'goldeen'
      ],
      order: 10
    },
    {
      location: 'Hulbery',
      pokemon: ['arrokuda', 'chinchou', 'basculin', 'chewtle'],
      order: 12
    },
    {
      location: 'Galar Mine No. 2',
      pokemon: [
        'shellos',
        'wimpod',
        'binacle',
        'scraggy',
        'croagunk',
        'noibat',
        'chewtle',
        'shuckle',
        'stunfisk-galar',
        'barboach',
        'corphish'
      ],
      order: 13
    },
    {
      location: 'Motostoke Outskirts',
      pokemon: ['arrokuda', 'chinchou', 'basculin', 'chewtle'],
      order: 14
    },
    {
      location: 'Route 6',
      pokemon: [
        'yamask-galar',
        'helioptile',
        'dugtrio',
        'maractus',
        'axew',
        'trapinch',
        'silicobra',
        'durant',
        'duskull',
        'skorupi',
        'hippopotas',
        'heatmor',
        'torkoal',
        'hawlucha',
        'greedent',
        'magikarp',
        'drednaw',
        'goldeen'
      ],
      order: 15
    },
    {
      location: 'Glimwood Tangle',
      pokemon: [
        'morgrem',
        'shiinotic',
        'hattrem',
        'sinistea',
        'phantump',
        'swirlix',
        'spritzee',
        'indeedee',
        'ponyta-galar',
        'passimian',
        'oranguru',
        'impidimp'
      ],
      order: 16
    },
    {
      location: 'Route 7',
      pokemon: [
        'perrserker',
        'thievul',
        'galvantula',
        'liepard',
        'inkay',
        'morpeko',
        'toxel',
        'karrablast',
        'corviknight',
        'meowstic',
        'seismitoad',
        'shelmet',
        'greedent'
      ],
      order: 17
    },
    {
      location: 'Route 8',
      pokemon: [
        'golett',
        'golurk',
        'pawniard',
        'boldore',
        'rufflet',
        'togedemaru',
        'solrock',
        'sandaconda',
        'rhyhorn',
        'dusclops',
        'haunter',
        'bronzong',
        'hippowdon',
        'drapion',
        'falinks',
        'crustle'
      ],
      order: 18
    },
    {
      location: 'Route 9',
      pokemon: [
        'pelipper',
        'mareanie',
        'gastrodon',
        'jellicent',
        'pyukumuku',
        'cramorant',
        'octillery',
        'kingler',
        'pincurchin',
        'wishiwashi',
        'qwilfish',
        'mantyke'
      ],
      order: 19
    },
    {
      location: 'Circhester Bay',
      pokemon: [
        'clobbopus',
        'octillery',
        'barbaracle',
        'bergmite',
        'toxapex',
        'dhelmise',
        'remoraid',
        'cramorant',
        'gastrodon',
        'inkay',
        'pincurchin',
        'mantyke',
        'wailmer',
        'mantine',
        'wailord',
        'lapras',
        'greedent',
        'grapploct'
      ],
      order: 20
    },
    {
      location: 'Outer Spikemuth',
      pokemon: [
        'bergmite',
        'clobbopus',
        'mareanie',
        'toxapex',
        'dhelmise',
        'perrserker',
        'thievul',
        'liepard',
        'morpeko',
        'greedent'
      ],
      order: 21
    },
    {
      location: 'Route 10',
      pokemon: [
        'mr. mime-galar',
        'snover',
        'cubchoo',
        'sneasel',
        'duraludon',
        'vanillish',
        'abomasnow',
        'beartic',
        'snom',
        'darumaka-galar',
        'eiscue',
        'stonjourner',
        'glalie',
        'vanilluxe',
        'klang',
        'rhydon'
      ],
      order: 22
    }
  ]
};

export const swordExclusives = [
  'farfetchd-galar',
  'pinsir',
  'omanyte',
  'omastar',
  'ho-oh',
  'seedot',
  'nuzleaf',
  'shiftry',
  'mawile',
  'solrock',
  'bagon',
  'shelgon',
  'salamence',
  'latios',
  'groudon',
  'dialga',
  'darumaka-galar',
  'darmanitan-galar',
  'scraggy',
  'scrafty',
  'gothita',
  'gothorita',
  'gothitelle',
  'rufflet',
  'braviary',
  'deino',
  'zweilous',
  'hydreigon',
  'tornadus',
  'reshiram',
  'swirlix',
  'slurpuff',
  'clauncher',
  'clawitzer',
  'xerneas',
  'passimian',
  'turtonator',
  'jangmo-o',
  'hakamo-o',
  'kommo-o',
  'solgaleo',
  'sirfetchd',
  'stonjourner',
  'zacian'
];
export const shieldExclusives = [
  'ponyta-galar',
  'rapidash-galar',
  'kabuto',
  'kabutops',
  'heracross',
  'corsola-galar',
  'larvitar',
  'pupitar',
  'tyranitar',
  'lugia',
  'lotad',
  'lombre',
  'ludicolo',
  'sableye',
  'lunatone',
  'latias',
  'kyogre',
  'gible',
  'gabite',
  'garchomp',
  'croagunk',
  'toxicroak',
  'palkia',
  'solosis',
  'duosion',
  'reuniclus',
  'vullaby',
  'mandibuzz',
  'thundurus',
  'zekrom',
  'spritzee',
  'aromatisse',
  'skrelp',
  'dragalge',
  'goomy',
  'sliggoo',
  'goodra',
  'yveltal',
  'oranguru',
  'drampa',
  'lunala',
  'cursola',
  'zamazenta'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.SwordShield),
  [swordExclusives, shieldExclusives]
);
