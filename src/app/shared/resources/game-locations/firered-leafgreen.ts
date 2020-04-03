import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.FireRedLeafGreen,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['bulbasaur', 'charmander', 'squirtle'],
      order: 0
    },
    {
      location: 'Route 4',
      pokemon: ['magikarp'],
      order: 9
    },
    {
      location: 'Celadon City',
      pokemon: ['eevee'],
      order: 26
    },
    {
      location: 'Saffron City',
      pokemon: ['hitmonchan', 'hitmonlee'],
      order: 28
    },
    {
      location: 'Silph Co.',
      pokemon: ['lapras'],
      order: 29
    },
    {
      location: 'Mt. Moon Fossil',
      pokemon: ['omantye', 'kabuto'],
      order: 46
    },
    {
      location: 'Old Amber Fossil',
      pokemon: ['aerodactyl'],
      order: 47
    }
  ],
  statics: [
    {
      location: 'Route 12',
      pokemon: ['snorlax'],
      order: 40
    },
    {
      location: 'Route 16',
      pokemon: ['snorlax'],
      order: 30
    },
    {
      location: 'Berry Forest',
      pokemon: ['hypno'],
      order: 56
    },
    {
      location: 'Seafoam Islands',
      pokemon: ['articuno'],
      order: 42
    },
    {
      location: 'Power Plant',
      pokemon: ['zapdos'],
      order: 59
    },
    {
      location: 'Mt. Ember',
      pokemon: ['moltres'],
      order: 52
    }
  ],
  encounters: [
    {
      location: 'Berry Forest',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'venomoth',
        'psyduck',
        'golduck',
        'poliwag',
        'bellsprout',
        'weepinbell',
        'slowpoke',
        'slowbro',
        'drowzee',
        'hypno',
        'exeggcute',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados'
      ],
      order: 55
    },
    {
      location: 'Bond Bridge',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'meowth',
        'persian',
        'psyduck',
        'bellsprout',
        'weepinbell',
        'tentacool',
        'tentacruel',
        'slowpoke',
        'krabby',
        'kingler',
        'horsea',
        'seadra',
        'magikarp',
        'gyarados'
      ],
      order: 54
    },
    {
      location: 'Cape Brink',
      pokemon: [
        'spearow',
        'fearow',
        'oddish',
        'gloom',
        'meowth',
        'persian',
        'psyduck',
        'golduck',
        'poliwag',
        'poliwhirl',
        'bellsprout',
        'weepinbell',
        'slowpoke',
        'slowbro',
        'goldeen',
        'magikarp',
        'gyarados'
      ],
      order: 53
    },
    {
      location: 'Celadon City',
      pokemon: ['psyduck', 'slowpoke', 'grimer', 'koffing', 'magikarp'],
      order: 25
    },
    {
      location: 'Cerulean City',
      pokemon: [
        'psyduck',
        'tentacool',
        'slowpoke',
        'krabby',
        'horsea',
        'magikarp',
        'gyarados'
      ],
      order: 11
    },
    {
      location: 'Cinnabar Island',
      pokemon: [
        'psyduck',
        'tentacool',
        'slowpoke',
        'slowbro',
        'shellder',
        'krabby',
        'horsea',
        'seadra',
        'staryu',
        'magikarp',
        'gyarados'
      ],
      order: 44
    },
    { location: "Diglett's Cave", pokemon: ['diglett', 'dugtrio'], order: 18 },
    {
      location: 'Fuchsia City',
      pokemon: [
        'psyduck',
        'poliwag',
        'slowpoke',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados'
      ],
      order: 33
    },
    {
      location: 'Kindle Road',
      pokemon: [
        'spearow',
        'fearow',
        'meowth',
        'persian',
        'psyduck',
        'tentacool',
        'tentacruel',
        'geodude',
        'graveler',
        'ponyta',
        'rapidash',
        'slowpoke',
        'krabby',
        'kingler',
        'horsea',
        'seadra',
        'magikarp',
        'gyarados'
      ],
      order: 50
    },
    {
      location: 'Mt. Ember',
      pokemon: [
        'spearow',
        'fearow',
        'machop',
        'geodude',
        'graveler',
        'ponyta',
        'rapidash',
        'magmar',
        'machoke',
        'slugma',
        'magcargo'
      ],
      order: 51
    },
    {
      location: 'Mt. Moon',
      pokemon: ['clefairy', 'zubat', 'paras', 'geodude'],
      order: 10
    },
    {
      location: 'One Island',
      pokemon: [
        'psyduck',
        'tentacool',
        'tentacruel',
        'slowpoke',
        'shellder',
        'krabby',
        'kingler',
        'horsea',
        'seadra',
        'staryu',
        'magikarp',
        'gyarados'
      ],
      order: 48
    },
    {
      location: 'Pallet Town',
      pokemon: [
        'psyduck',
        'tentacool',
        'slowpoke',
        'shellder',
        'krabby',
        'kingler',
        'horsea',
        'seadra',
        'staryu',
        'magikarp',
        'gyarados'
      ],
      order: 1
    },
    {
      location: 'Pokémon Mansion',
      pokemon: [
        'rattata',
        'raticate',
        'vulpix',
        'growlithe',
        'grimer',
        'muk',
        'koffing',
        'weezing',
        'ditto'
      ],
      order: 45
    },
    {
      location: 'Pokémon Tower',
      pokemon: ['gastly', 'haunter', 'cubone'],
      order: 22
    },
    {
      location: 'Power Plant',
      pokemon: ['pikachu', 'magnemite', 'magneton', 'voltorb', 'electabuzz'],
      order: 49
    },
    {
      location: 'Rock Tunnel',
      pokemon: ['zubat', 'mankey', 'machop', 'geodude', 'onix', 'graveler'],
      order: 21
    },
    { location: 'Route 1', pokemon: ['pidgey', 'rattata'], order: 2 },
    {
      location: 'Route 2',
      pokemon: ['caterpie', 'weedle', 'pidgey', 'rattata'],
      order: 4
    },
    {
      location: 'Route 3',
      pokemon: [
        'pidgey',
        'spearow',
        'nidoran-f',
        'nidoran-m',
        'jigglypuff',
        'mankey'
      ],
      order: 3
    },
    {
      location: 'Route 4',
      pokemon: [
        'rattata',
        'spearow',
        'ekans',
        'sandshrew',
        'psyduck',
        'mankey',
        'tentacool',
        'slowpoke',
        'krabby',
        'horsea',
        'magikarp',
        'gyarados'
      ],
      order: 8
    },
    {
      location: 'Route 5',
      pokemon: ['pidgey', 'oddish', 'meowth', 'bellsprout'],
      order: 14
    },
    {
      location: 'Route 6',
      pokemon: [
        'pidgey',
        'oddish',
        'meowth',
        'psyduck',
        'poliwag',
        'poliwhirl',
        'bellsprout',
        'slowpoke',
        'goldeen',
        'magikarp',
        'gyarados'
      ],
      order: 15
    },
    {
      location: 'Route 7',
      pokemon: [
        'pidgey',
        'vulpix',
        'oddish',
        'meowth',
        'growlithe',
        'bellsprout'
      ],
      order: 23
    },
    {
      location: 'Route 8',
      pokemon: [
        'pidgey',
        'ekans',
        'sandshrew',
        'vulpix',
        'meowth',
        'growlithe'
      ],
      order: 24
    },
    {
      location: 'Route 9',
      pokemon: ['rattata', 'spearow', 'ekans', 'sandshrew'],
      order: 19
    },
    {
      location: 'Route 10',
      pokemon: [
        'spearow',
        'ekans',
        'sandshrew',
        'psyduck',
        'tentacool',
        'slowpoke',
        'krabby',
        'voltorb',
        'horsea',
        'magikarp',
        'gyarados'
      ],
      order: 20
    },
    {
      location: 'Route 11',
      pokemon: [
        'spearow',
        'ekans',
        'sandshrew',
        'psyduck',
        'tentacool',
        'slowpoke',
        'drowzee',
        'krabby',
        'horsea',
        'magikarp',
        'gyarados'
      ],
      order: 17
    },
    {
      location: 'Route 12',
      pokemon: [
        'pidgey',
        'oddish',
        'gloom',
        'venonat',
        'psyduck',
        'bellsprout',
        'weepinbell',
        'tentacool',
        'slowpoke',
        'krabby',
        'horsea',
        'magikarp',
        'gyarados'
      ],
      order: 39
    },
    {
      location: 'Route 13',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'psyduck',
        'bellsprout',
        'weepinbell',
        'tentacool',
        'slowpoke',
        'krabby',
        'horsea',
        'magikarp',
        'gyarados',
        'ditto'
      ],
      order: 38
    },
    {
      location: 'Route 14',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'bellsprout',
        'weepinbell',
        'ditto'
      ],
      order: 37
    },
    {
      location: 'Route 15',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'bellsprout',
        'weepinbell',
        'ditto'
      ],
      order: 36
    },
    {
      location: 'Route 16',
      pokemon: ['rattata', 'raticate', 'spearow', 'doduo'],
      order: 27
    },
    {
      location: 'Route 17',
      pokemon: ['rattata', 'raticate', 'spearow', 'fearow', 'doduo'],
      order: 31
    },
    {
      location: 'Route 18',
      pokemon: ['rattata', 'raticate', 'spearow', 'fearow', 'doduo'],
      order: 32
    },
    {
      location: 'Route 19',
      pokemon: [
        'psyduck',
        'tentacool',
        'slowpoke',
        'krabby',
        'kingler',
        'horsea',
        'seadra',
        'magikarp',
        'gyarados'
      ],
      order: 35
    },
    {
      location: 'Route 20',
      pokemon: [
        'psyduck',
        'tentacool',
        'slowpoke',
        'krabby',
        'kingler',
        'horsea',
        'seadra',
        'magikarp',
        'gyarados'
      ],
      order: 43
    },
    {
      location: 'Route 21',
      pokemon: [
        'psyduck',
        'tentacool',
        'slowpoke',
        'krabby',
        'kingler',
        'tangela',
        'horsea',
        'seadra',
        'magikarp',
        'gyarados'
      ],
      order: 57
    },
    {
      location: 'Route 22',
      pokemon: [
        'rattata',
        'spearow',
        'psyduck',
        'mankey',
        'poliwag',
        'poliwhirl',
        'slowpoke',
        'goldeen',
        'magikarp',
        'gyarados'
      ],
      order: 5
    },
    {
      location: 'Route 23',
      pokemon: [
        'spearow',
        'fearow',
        'ekans',
        'arbok',
        'sandshrew',
        'sandslash',
        'psyduck',
        'mankey',
        'primeape',
        'poliwag',
        'poliwhirl',
        'slowpoke',
        'goldeen',
        'magikarp',
        'gyarados'
      ],
      order: 60
    },
    {
      location: 'Route 24',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'oddish',
        'psyduck',
        'abra',
        'bellsprout',
        'tentacool',
        'slowpoke',
        'krabby',
        'horsea',
        'magikarp',
        'gyarados'
      ],
      order: 12
    },
    {
      location: 'Route 25',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'oddish',
        'psyduck',
        'poliwag',
        'poliwhirl',
        'abra',
        'bellsprout',
        'slowpoke',
        'goldeen',
        'magikarp',
        'gyarados'
      ],
      order: 13
    },
    {
      location: 'Safari Zone',
      pokemon: [
        'nidoran-f',
        'nidorina',
        'nidoran-m',
        'nidorino',
        'paras',
        'parasect',
        'venonat',
        'psyduck',
        'poliwag',
        'slowpoke',
        'exeggcute',
        'rhyhorn',
        'chansey',
        'goldeen',
        'seaking',
        'scyther',
        'pinsir',
        'magikarp',
        'dratini',
        'dragonair',
        'doduo',
        'kangaskhan',
        'tauros',
        'venomoth'
      ],
      order: 34
    },
    {
      location: 'Seafoam Islands',
      pokemon: [
        'zubat',
        'golbat',
        'psyduck',
        'golduck',
        'slowpoke',
        'slowbro',
        'seel',
        'krabby',
        'horsea',
        'dewgong',
        'magikarp',
        'gyarados'
      ],
      order: 41
    },
    {
      location: 'Treasure Beach',
      pokemon: [
        'spearow',
        'fearow',
        'meowth',
        'persian',
        'psyduck',
        'tentacool',
        'tentacruel',
        'slowpoke',
        'krabby',
        'kingler',
        'tangela',
        'horsea',
        'seadra',
        'magikarp',
        'gyarados'
      ],
      order: 49
    },
    {
      location: 'Vermilion City',
      pokemon: [
        'psyduck',
        'tentacool',
        'slowpoke',
        'shellder',
        'krabby',
        'horsea',
        'staryu',
        'magikarp',
        'gyarados'
      ],
      order: 16
    },
    {
      location: 'Victory Road',
      pokemon: [
        'arbok',
        'sandslash',
        'zubat',
        'golbat',
        'machop',
        'machoke',
        'geodude',
        'onix',
        'marowak',
        'primeape'
      ],
      order: 61
    },
    {
      location: 'Viridian City',
      pokemon: [
        'psyduck',
        'poliwag',
        'poliwhirl',
        'slowpoke',
        'goldeen',
        'magikarp',
        'gyarados'
      ],
      order: 3
    },
    {
      location: 'Viridian Forest',
      pokemon: ['caterpie', 'metapod', 'weedle', 'kakuna', 'pikachu'],
      order: 6
    }
  ]
};

export default convertGameLocationToRoutes(gameLocation);
