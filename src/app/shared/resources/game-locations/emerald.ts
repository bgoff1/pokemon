import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.Emerald,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['treecko', 'torchic', 'mudkip'],
      order: 0
    },
    { location: 'Lavaridge Town', pokemon: ['wynaut'], order: 27 },
    { location: 'Weather Institute', pokemon: ['castform'], order: 36 },
    { location: 'Route 111 Fossil', pokemon: ['lileep', 'anorith'], order: 29 }
  ],
  statics: [
    { location: 'Devon Scope', pokemon: ['kecleon'], order: 38 },
    { location: 'Team Hideout', pokemon: ['electrode'], order: 46 },
    { location: 'Sky Pillar', pokemon: ['rayquaza'], order: 62 },
    { location: 'Ancient Tomb', pokemon: ['registeel'], order: 66 },
    { location: 'Desert Ruins', pokemon: ['regirock'], order: 67 },
    { location: 'Island Cave', pokemon: ['regice'], order: 68 }
  ],
  encounters: [
    {
      location: 'Abandoned Ship',
      pokemon: ['tentacool', 'tentacruel', 'magikarp'],
      order: 34
    },
    {
      location: 'Cave of Origin',
      pokemon: ['zubat', 'golbat', 'sableye'],
      order: 56
    },
    {
      location: 'Dewford Town',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer'],
      order: 9
    },
    {
      location: 'Ever Grande City',
      pokemon: [
        'tentacool',
        'magikarp',
        'corsola',
        'wingull',
        'pelipper',
        'wailmer',
        'luvdisc'
      ],
      order: 69
    },
    {
      location: 'Fiery Path',
      pokemon: ['machop', 'grimer', 'koffing', 'slugma', 'numel', 'torkoal'],
      order: 21
    },
    {
      location: 'Granite Cave',
      pokemon: [
        'zubat',
        'abra',
        'geodude',
        'makuhita',
        'sableye',
        'aron',
        'nosepass'
      ],
      order: 11
    },
    {
      location: 'Jagged Pass',
      pokemon: ['machop', 'numel', 'spoink'],
      order: 26
    },
    {
      location: 'Lilycove City',
      pokemon: [
        'tentacool',
        'staryu',
        'magikarp',
        'wingull',
        'pelipper',
        'wailmer'
      ],
      order: 41
    },
    {
      location: 'Magma Hideout',
      pokemon: ['geodude', 'graveler', 'torkoal'],
      order: 45
    },
    {
      location: 'Meteor Falls',
      pokemon: [
        'zubat',
        'goldeen',
        'magikarp',
        'solrock',
        'barboach',
        'golbat',
        'whiscash',
        'bagon'
      ],
      order: 24
    },
    { location: 'Mirage Tower', pokemon: ['sandshrew', 'trapinch'], order: 19 },
    {
      location: 'Mossdeep City',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 48
    },
    {
      location: 'Mt. Pyre',
      pokemon: ['shuppet', 'duskull', 'vulpix', 'wingull', 'chimecho'],
      order: 43
    },
    {
      location: 'New Mauville',
      pokemon: ['magnemite', 'voltorb', 'magneton', 'electrode'],
      order: 30
    },
    {
      location: 'Pacifidlog Town',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 60
    },
    {
      location: 'Petalburg City',
      pokemon: ['goldeen', 'magikarp', 'marill', 'corphish'],
      order: 4
    },
    {
      location: 'Petalburg Woods',
      pokemon: [
        'poochyena',
        'wurmple',
        'silcoon',
        'cascoon',
        'taillow',
        'shroomish',
        'slakoth'
      ],
      order: 6
    },
    {
      location: 'Route 101',
      pokemon: ['poochyena', 'zigzagoon', 'wurmple'],
      order: 1
    },
    {
      location: 'Route 102',
      pokemon: [
        'goldeen',
        'magikarp',
        'marill',
        'poochyena',
        'zigzagoon',
        'wurmple',
        'lotad',
        'seedot',
        'ralts',
        'corphish'
      ],
      order: 3
    },
    {
      location: 'Route 103',
      pokemon: [
        'tentacool',
        'magikarp',
        'poochyena',
        'zigzagoon',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 2
    },
    {
      location: 'Route 104',
      pokemon: [
        'magikarp',
        'marill',
        'poochyena',
        'wurmple',
        'taillow',
        'wingull',
        'pelipper'
      ],
      order: 31
    },
    {
      location: 'Route 105',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer'],
      order: 32
    },
    {
      location: 'Route 106',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer'],
      order: 10
    },
    {
      location: 'Route 107',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer'],
      order: 12
    },
    {
      location: 'Route 108',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer'],
      order: 33
    },
    {
      location: 'Route 109',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer'],
      order: 13
    },
    {
      location: 'Route 110',
      pokemon: [
        'oddish',
        'tentacool',
        'magikarp',
        'poochyena',
        'wingull',
        'pelipper',
        'electrike',
        'plusle',
        'minun',
        'gulpin',
        'wailmer'
      ],
      order: 15
    },
    {
      location: 'Route 111',
      pokemon: [
        'sandshrew',
        'geodude',
        'goldeen',
        'magikarp',
        'marill',
        'trapinch',
        'cacnea',
        'barboach',
        'baltoy'
      ],
      order: 28
    },
    { location: 'Route 112', pokemon: ['marill', 'numel'], order: 20 },
    {
      location: 'Route 113',
      pokemon: ['slugma', 'skarmory', 'spinda'],
      order: 22
    },
    {
      location: 'Route 114',
      pokemon: [
        'geodude',
        'goldeen',
        'magikarp',
        'marill',
        'lotad',
        'lombre',
        'nuzleaf',
        'swablu',
        'seviper',
        'barboach'
      ],
      order: 23
    },
    {
      location: 'Route 115',
      pokemon: [
        'jigglypuff',
        'tentacool',
        'magikarp',
        'taillow',
        'swellow',
        'wingull',
        'pelipper',
        'wailmer',
        'swablu'
      ],
      order: 25
    },
    {
      location: 'Route 116',
      pokemon: ['abra', 'poochyena', 'taillow', 'nincada', 'whismur', 'skitty'],
      order: 7
    },
    {
      location: 'Route 117',
      pokemon: [
        'oddish',
        'goldeen',
        'magikarp',
        'marill',
        'poochyena',
        'seedot',
        'volbeat',
        'illumise',
        'corphish'
      ],
      order: 16
    },
    {
      location: 'Route 118',
      pokemon: [
        'tentacool',
        'magikarp',
        'zigzagoon',
        'linoone',
        'wingull',
        'pelipper',
        'electrike',
        'manectric',
        'carvanha',
        'sharpedo',
        'kecleon'
      ],
      order: 17
    },
    {
      location: 'Route 119',
      pokemon: [
        'oddish',
        'tentacool',
        'magikarp',
        'zigzagoon',
        'linoone',
        'wingull',
        'pelipper',
        'carvanha',
        'kecleon',
        'tropius'
      ],
      order: 35
    },
    {
      location: 'Route 120',
      pokemon: [
        'oddish',
        'goldeen',
        'magikarp',
        'marill',
        'poochyena',
        'mightyena',
        'seedot',
        'barboach',
        'kecleon',
        'absol'
      ],
      order: 37
    },
    {
      location: 'Route 121',
      pokemon: [
        'oddish',
        'gloom',
        'tentacool',
        'magikarp',
        'poochyena',
        'mightyena',
        'wingull',
        'pelipper',
        'wailmer',
        'kecleon',
        'shuppet'
      ],
      order: 39
    },
    {
      location: 'Route 122',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 42
    },
    {
      location: 'Route 123',
      pokemon: [
        'oddish',
        'gloom',
        'tentacool',
        'magikarp',
        'poochyena',
        'mightyena',
        'wingull',
        'pelipper',
        'wailmer',
        'kecleon',
        'shuppet'
      ],
      order: 44
    },
    {
      location: 'Route 124',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer',
        'chinchou',
        'clamperl',
        'relicanth'
      ],
      order: 47
    },
    {
      location: 'Route 125',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 49
    },
    {
      location: 'Route 126',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer',
        'chinchou',
        'clamperl',
        'relicanth'
      ],
      order: 51
    },
    {
      location: 'Route 127',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 52
    },
    {
      location: 'Route 128',
      pokemon: [
        'tentacool',
        'magikarp',
        'corsola',
        'wingull',
        'pelipper',
        'wailmer',
        'luvdisc'
      ],
      order: 53
    },
    {
      location: 'Route 129',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer',
        'wailord'
      ],
      order: 57
    },
    {
      location: 'Route 130',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer',
        'wynaut'
      ],
      order: 58
    },
    {
      location: 'Route 131',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 59
    },
    {
      location: 'Route 132',
      pokemon: [
        'tentacool',
        'horsea',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 63
    },
    {
      location: 'Route 133',
      pokemon: [
        'tentacool',
        'horsea',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 64
    },
    {
      location: 'Route 134',
      pokemon: [
        'tentacool',
        'horsea',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ],
      order: 65
    },
    { location: 'Rusturf Tunnel', pokemon: ['whismur'], order: 8 },
    {
      location: 'Safari Zone',
      pokemon: [
        'oddish',
        'gloom',
        'psyduck',
        'golduck',
        'doduo',
        'dodrio',
        'rhyhorn',
        'goldeen',
        'seaking',
        'pinsir',
        'magikarp',
        'geodude',
        'natu',
        'xatu',
        'heracross',
        'phanpy',
        'pikachu',
        'wobbuffet',
        'girafarig',
        'hoothoot',
        'spinarak',
        'mareep',
        'marill',
        'aipom',
        'sunkern',
        'wooper',
        'quagsire',
        'gligar',
        'snubbull',
        'remoraid',
        'octillery',
        'stantler',
        'ledyba',
        'pineco',
        'shuckle',
        'teddiursa',
        'houndour',
        'miltank'
      ],
      order: 40
    },
    {
      location: 'Seafloor Cavern',
      pokemon: ['zubat', 'golbat', 'tentacool', 'magikarp', 'wailmer'],
      order: 54
    },
    {
      location: 'Shoal Cave',
      pokemon: [
        'zubat',
        'golbat',
        'tentacool',
        'magikarp',
        'wailmer',
        'spheal',
        'snorunt'
      ],
      order: 50
    },
    {
      location: 'Sky Pillar',
      pokemon: ['golbat', 'sableye', 'claydol', 'banette', 'altaria'],
      order: 61
    },
    {
      location: 'Slateport City',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer'],
      order: 14
    },
    {
      location: 'Sootopolis City',
      pokemon: ['tentacool', 'magikarp', 'gyarados'],
      order: 55
    },
    {
      location: 'Victory Road',
      pokemon: [
        'zubat',
        'golbat',
        'whismur',
        'loudred',
        'makuhita',
        'hariyama',
        'aron',
        'lairon',
        'geodude',
        'graveler',
        'mawile',
        'goldeen',
        'magikarp',
        'sableye',
        'barboach',
        'whiscash'
      ],
      order: 70
    }
  ]
};

export default convertGameLocationToRoutes(gameLocation);
