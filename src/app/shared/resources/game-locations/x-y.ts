import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.XY,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['chespin', 'fennekin', 'froakie'],
      order: 0
    },
    {
      location: 'Kanto Starter',
      pokemon: ['bulbasaur', 'charmander', 'squirtle'],
      order: 6
    },
    {
      location: 'Glittering Cave Fossil',
      pokemon: ['tyrunt', 'amaura'],
      order: 16
    },
    {
      location: 'Tower of Mastery',
      pokemon: ['lucario'],
      order: 22
    },
    {
      location: 'Route 12',
      pokemon: ['lapras'],
      order: 24
    }
  ],
  statics: [
    {
      location: 'Route 7',
      pokemon: ['snorlax'],
      order: 10
    },
    {
      location: 'Team Flare Secret HQ',
      pokemon: ['xerneas', 'yveltal'],
      order: 34
    }
  ],
  encounters: [
    {
      location: 'Route 2',
      pokemon: [
        'bunnelby',
        'fletchling',
        'scatterbug',
        'zigzagoon',
        'pidgey',
        'weedle',
        'caterpie'
      ],
      order: 1
    },
    {
      location: 'Santalune Forest',
      pokemon: [
        'scatterbug',
        'weedle',
        'caterpie',
        'pansage',
        'pansear',
        'panpour',
        'fletchling',
        'caterpie',
        'weedle',
        'pikachu',
        'kakuna',
        'metapod'
      ],
      order: 2
    },
    {
      location: 'Route 3',
      pokemon: [
        'bidoof',
        'bunnelby',
        'fletchling',
        'pidgey',
        'azurill',
        'burmy',
        'pikachu',
        'dunsparce'
      ],
      order: 3
    },
    {
      location: 'Route 4',
      pokemon: ['combee', 'flabébé', 'ledyba', 'skitty', 'budew', 'ralts'],
      order: 5
    },
    {
      location: 'Route 5',
      pokemon: [
        'bunnelby',
        'furfrou',
        'skiddo',
        'pancham',
        'doduo',
        'gulpin',
        'abra',
        'plusle',
        'minun',
        'scraggy'
      ],
      order: 7
    },
    {
      location: 'Route 7',
      pokemon: [
        'smeargle',
        'volbeat',
        'illumise',
        'roselia',
        'croagunk',
        'ducklett',
        'flabébé',
        'spritzee',
        'swirlix',
        'psyduck',
        'hoppip'
      ],
      order: 8
    },
    {
      location: 'Route 6',
      pokemon: [
        'oddish',
        'sentret',
        'espurr',
        'nincada',
        'honedge',
        'kecleon',
        'venipede',
        'audino'
      ],
      order: 9
    },
    {
      location: 'Connecting Cave',
      pokemon: ['zubat', 'whismur', 'meditite', 'axew'],
      order: 11
    },
    {
      location: 'Route 8',
      pokemon: [
        'spoink',
        'drifloon',
        'zangoose',
        'seviper',
        'absol',
        'mienfoo',
        'inkay',
        'bagon',
        'wingull',
        'taillow',
        'dwebble',
        'binacle',
        'luvdisc'
      ],
      order: 12
    },
    {
      location: 'Ambrette Town',
      pokemon: ['dwebble', 'binacle'],
      order: 13
    },
    {
      location: 'Route 9',
      pokemon: ['hippopotas', 'sandile', 'helioptile'],
      order: 14
    },
    {
      location: 'Glittering Cave',
      pokemon: [
        'machop',
        'cubone',
        'onix',
        'rhyhorn',
        'lunatone',
        'solrock',
        'kangaskhan',
        'mawile',
        'woobat',
        'ferroseed',
        'dwebble'
      ],
      order: 15
    },
    {
      location: 'Cyllage City',
      pokemon: ['onix', 'dwebble', 'binacle', 'luvdisc'],
      order: 17
    },
    {
      location: 'Route 10',
      pokemon: [
        'sigilyph',
        'golett',
        'hawlucha',
        'snubbull',
        'houndour',
        'electrike',
        'eevee',
        'emolga',
        'nosepass',
        'yanma'
      ],
      order: 18
    },
    {
      location: 'Route 11',
      pokemon: [
        'hariyama',
        'staravia',
        'sawk',
        'throh',
        'nidorino',
        'chingling',
        'stunky',
        'nidorina',
        'dedenne',
        'nidoran ♂',
        'nidoran ♀',
        'stunky',
        'starly'
      ],
      order: 19
    },
    {
      location: 'Reflection Cave',
      pokemon: [
        'mr. mime',
        'roggenrola',
        'solosis',
        'wobbuffet',
        'chingling',
        'carbink',
        'sableye',
        'mime jr.',
        'woobat',
        'ferroseed'
      ],
      order: 20
    },
    {
      location: 'Shalour City',
      pokemon: ['tentacool', 'mantyke', 'luvdisc'],
      order: 21
    },
    {
      location: 'Route 12',
      pokemon: [
        'slowpoke',
        'chatot',
        'exeggcute',
        'tauros',
        'miltank',
        'pinsir',
        'heracross',
        'pachirisu',
        'wingull',
        'mareep',
        'tentacool',
        'mantyke',
        'lapras',
        'luvdisc',
        'dwebble',
        'binacle'
      ],
      order: 23
    },
    {
      location: 'Azure Bay',
      pokemon: [
        'slowpoke',
        'chatot',
        'exeggcute',
        'inkay',
        'wingull',
        'tentacool',
        'mantyke',
        'lapras',
        'luvdisc',
        'dwebble',
        'binacle'
      ],
      order: 25
    },
    {
      location: 'Route 13',
      pokemon: ['dugtrio', 'trapinch', 'gible', 'graveler', 'slugma'],
      order: 26
    },
    {
      location: 'Route 14',
      pokemon: [
        'weepinbell',
        'skorupi',
        'quagsire',
        'carnivine',
        'karrablast',
        'shelmet',
        'goomy',
        'haunter',
        'bellsprout',
        'ekans',
        'stunfisk',
        'poliwag',
        'poliwhirl',
        'barboach'
      ],
      order: 27
    },
    {
      location: 'Laverre City',
      pokemon: ['poliwag', 'poliwhirl', 'basculin'],
      order: 28
    },
    {
      location: 'Route 15',
      pokemon: [
        'mightyena',
        'skorupi',
        'liepard',
        'foongus',
        'watchog',
        'pawniard',
        'klefki',
        'murkrow',
        'lombre',
        'floatzel',
        'poliwag',
        'basculin',
        'poliwhirl'
      ],
      order: 29
    },
    {
      location: 'Lost Hotel',
      pokemon: [
        'magneton',
        'electrode',
        'litwick',
        'pawniard',
        'klefki',
        'trubbish',
        'garbodor',
        'rotom'
      ],
      order: 30
    },
    {
      location: 'Route 16',
      pokemon: [
        'foongus',
        'klefki',
        'pumpkaboo',
        'phantump',
        'weepinbell',
        'floatzel',
        'skorupi',
        'murkrow',
        'lombre',
        'poliwag',
        'basculin',
        'poliwhirl'
      ],
      order: 31
    },
    {
      location: 'Frost Cavern',
      pokemon: [
        'jynx',
        'piloswine',
        'beartic',
        'bergmite',
        'haunter',
        'cryogonal',
        'vanillite',
        'cubchoo',
        'smoochum',
        'poliwhirl',
        'floatzel',
        'poliwag',
        'basculin'
      ],
      order: 32
    },
    {
      location: 'Route 17',
      pokemon: ['delibird', 'sneasel', 'snover', 'abomasnow'],
      order: 33
    },
    {
      location: 'Route 18',
      pokemon: [
        'torkoal',
        'gurdurr',
        'sandslash',
        'graveler',
        'lairon',
        'pupitar',
        'durant',
        'heatmor',
        'shuckle'
      ],
      order: 35
    },
    {
      location: 'Couriway Town',
      pokemon: ['lombre', 'floatzel', 'poliwag', 'basculin', 'poliwhirl'],
      order: 36
    },
    {
      location: 'Route 19',
      pokemon: [
        'weepinbell',
        'drapion',
        'quagsire',
        'karrablast',
        'shelmet',
        'sliggoo',
        'haunter',
        'carnivine',
        'gligar',
        'arbok',
        'stunfisk',
        'poliwag',
        'poliwhirl',
        'barboach',
        'whiscash',
        'politoed'
      ],
      order: 37
    },
    {
      location: 'Route 20',
      pokemon: [
        'jigglypuff',
        'noctowl',
        'amoonguss',
        'gothorita',
        'trevenant',
        'zoroark',
        'foongus',
        'sudowoodo'
      ],
      order: 38
    },
    {
      location: 'Pokemon Village',
      pokemon: [
        'ditto',
        'gothorita',
        'amoonguss',
        'jigglypuff',
        'noctowl',
        'zoroark',
        'poliwag',
        'lombre',
        'poliwhirl',
        'basculin',
        'garbodor',
        'banette'
      ],
      order: 39
    },
    {
      location: 'Route 21',
      pokemon: [
        'floatzel',
        'spinda',
        'altaria',
        'scyther',
        'ursaring',
        'lombre',
        'poliwag',
        'basculin',
        'poliwhirl',
        'dratini',
        'dragonair'
      ],
      order: 40
    },
    {
      location: 'Route 22',
      pokemon: [
        'azurill',
        'bunnelby',
        'litleo',
        'psyduck',
        "farfetch'd",
        'bidoof',
        'dunsparce',
        'riolu',
        'azumarill',
        'bibarel',
        'diggersby',
        'riolu',
        'magikarp',
        'goldeen',
        'carvanha',
        'gyarados',
        'seaking',
        'sharpedo'
      ],
      order: 4
    },
    {
      location: 'Victory Road',
      pokemon: [
        'graveler',
        'gurdurr',
        'haunter',
        'lickitung',
        'druddigon',
        'zweilous',
        'geodude',
        'floatzel',
        'shuckle',
        'ariados',
        'noibat',
        'fearow',
        'skarmory',
        'hydreigon',
        'lombre',
        'poliwhirl',
        'poliwag',
        'basculin',
        'poliwrath'
      ],
      order: 41
    }
  ]
};

export const xExclusives = [
  'staryu',
  'starmie',
  'pinsir',
  'houndour',
  'houndoom',
  'poochyena',
  'mightyena',
  'aron',
  'lairon',
  'aggron',
  'lileep',
  'cradily',
  'anorith',
  'armaldo',
  'sawk',
  'swirlix',
  'slurpuff',
  'clauncher',
  'clawitzer',
  'xerneas'
];
export const yExclusives = [
  'shellder',
  'cloyster',
  'omanyte',
  'omastar',
  'kabuto',
  'kabutops',
  'heracross',
  'larvitar',
  'pupitar',
  'tyranitar',
  'electrike',
  'manectric',
  'purrloin',
  'liepard',
  'throh',
  'spritzee',
  'aromatisse',
  'skrelp',
  'dragalge',
  'yveltal'
];

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.XY),
  [xExclusives, yExclusives]
);
