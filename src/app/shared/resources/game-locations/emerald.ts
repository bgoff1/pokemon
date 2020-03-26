import { convertGameLocationToRoutes } from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

export default convertGameLocationToRoutes({
  game: GameGroup.Emerald,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['treecko', 'torchic', 'mudkip']
    },
    {
      location: 'Lavaridge Town',
      pokemon: ['wynaut']
    },
    {
      location: 'Weather Institute',
      pokemon: ['castform']
    },
    {
      location: 'Route 111 Fossil',
      pokemon: ['lileep', 'anorith']
    }
  ],
  statics: [
    {
      location: 'Devon Scope',
      pokemon: ['kecleon']
    },
    { location: 'Sky Pillar', pokemon: ['rayquaza'] }
  ],
  encounters: [
    {
      location: 'Abandoned Ship',
      pokemon: ['tentacool', 'tentacruel', 'magikarp']
    },
    { location: 'Cave of Origin', pokemon: ['zubat', 'golbat', 'sableye'] },
    {
      location: 'Dewford Town',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer']
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
      ]
    },
    {
      location: 'Fiery Path',
      pokemon: ['machop', 'grimer', 'koffing', 'slugma', 'numel', 'torkoal']
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
      ]
    },
    { location: 'Jagged Pass', pokemon: ['machop', 'numel', 'spoink'] },
    {
      location: 'Lilycove City',
      pokemon: [
        'tentacool',
        'staryu',
        'magikarp',
        'wingull',
        'pelipper',
        'wailmer'
      ]
    },
    { location: 'Magma Hideout', pokemon: ['geodude', 'graveler', 'torkoal'] },
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
      ]
    },
    { location: 'Mirage Tower', pokemon: ['sandshrew', 'trapinch'] },
    {
      location: 'Mossdeep City',
      pokemon: [
        'tentacool',
        'magikarp',
        'wingull',
        'pelipper',
        'sharpedo',
        'wailmer'
      ]
    },
    {
      location: 'Mt. Pyre',
      pokemon: ['shuppet', 'duskull', 'vulpix', 'wingull', 'chimecho']
    },
    {
      location: 'New Mauville',
      pokemon: ['magnemite', 'voltorb', 'magneton', 'electrode']
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
      ]
    },
    {
      location: 'Petalburg City',
      pokemon: ['goldeen', 'magikarp', 'marill', 'corphish']
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
      ]
    },
    { location: 'Route 101', pokemon: ['poochyena', 'zigzagoon', 'wurmple'] },
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
      ]
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
      ]
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
      ]
    },
    {
      location: 'Route 105',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer']
    },
    {
      location: 'Route 106',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer']
    },
    {
      location: 'Route 107',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer']
    },
    {
      location: 'Route 108',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer']
    },
    {
      location: 'Route 109',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer']
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
      ]
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
      ]
    },
    { location: 'Route 112', pokemon: ['marill', 'numel'] },
    { location: 'Route 113', pokemon: ['slugma', 'skarmory', 'spinda'] },
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
      ]
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
      ]
    },
    {
      location: 'Route 116',
      pokemon: ['abra', 'poochyena', 'taillow', 'nincada', 'whismur', 'skitty']
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    { location: 'Rusturf Tunnel', pokemon: ['whismur'] },
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
      ]
    },
    {
      location: 'Seafloor Cavern',
      pokemon: ['zubat', 'golbat', 'tentacool', 'magikarp', 'wailmer']
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
      ]
    },
    {
      location: 'Sky Pillar',
      pokemon: ['golbat', 'sableye', 'claydol', 'banette', 'altaria']
    },
    {
      location: 'Slateport City',
      pokemon: ['tentacool', 'magikarp', 'wingull', 'pelipper', 'wailmer']
    },
    {
      location: 'Sootopolis City',
      pokemon: ['tentacool', 'magikarp', 'gyarados']
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
      ]
    }
  ]
});
