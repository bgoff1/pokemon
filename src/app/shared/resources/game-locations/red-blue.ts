import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.RedBlue,
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
      location: 'Seafoam Islands',
      pokemon: ['articuno'],
      order: 42
    },
    {
      location: 'Power Plant',
      pokemon: ['zapdos'],
      order: 50
    },
    {
      location: 'Victory Road',
      pokemon: ['moltres'],
      order: 53
    }
  ],
  encounters: [
    {
      location: 'Celadon City',
      pokemon: ['poliwag', 'poliwhirl', 'slowpoke', 'goldeen', 'magikarp'],
      order: 25
    },
    {
      location: 'Cerulean City',
      pokemon: ['psyduck', 'poliwag', 'krabby', 'goldeen', 'magikarp'],
      order: 11
    },
    {
      location: 'Cinnabar Island',
      pokemon: [
        'poliwag',
        'shellder',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 44
    },
    { location: "Diglett's Cave", pokemon: ['diglett', 'dugtrio'], order: 18 },
    {
      location: 'Fuchsia City',
      pokemon: ['poliwag', 'krabby', 'goldeen', 'seaking', 'magikarp'],
      order: 33
    },
    {
      location: 'Mt. Moon',
      pokemon: ['clefairy', 'zubat', 'paras', 'geodude'],
      order: 10
    },
    {
      location: 'Pallet Town',
      pokemon: ['poliwag', 'tentacool', 'goldeen', 'magikarp'],
      order: 1
    },
    {
      location: 'Pokémon Mansion',
      pokemon: [
        'vulpix',
        'growlithe',
        'ponyta',
        'grimer',
        'muk',
        'koffing',
        'weezing',
        'magmar'
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
      pokemon: [
        'pikachu',
        'raichu',
        'magnemite',
        'magneton',
        'voltorb',
        'electabuzz'
      ],
      order: 49
    },
    {
      location: 'Rock Tunnel',
      pokemon: ['zubat', 'machop', 'geodude', 'onix'],
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
      pokemon: ['pidgey', 'spearow', 'jigglypuff'],
      order: 7
    },
    {
      location: 'Route 4',
      pokemon: ['rattata', 'spearow', 'ekans', 'sandshrew'],
      order: 8
    },
    {
      location: 'Route 5',
      pokemon: ['pidgey', 'oddish', 'meowth', 'mankey', 'bellsprout'],
      order: 14
    },
    {
      location: 'Route 6',
      pokemon: [
        'pidgey',
        'oddish',
        'meowth',
        'mankey',
        'poliwag',
        'bellsprout',
        'shellder',
        'krabby',
        'goldeen',
        'magikarp'
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
        'mankey',
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
        'mankey',
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
        'poliwag',
        'poliwhirl',
        'slowpoke',
        'voltorb',
        'goldeen',
        'magikarp'
      ],
      order: 20
    },
    {
      location: 'Route 11',
      pokemon: [
        'spearow',
        'ekans',
        'sandshrew',
        'poliwag',
        'shellder',
        'drowzee',
        'krabby',
        'goldeen',
        'magikarp'
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
        'poliwag',
        'bellsprout',
        'weepinbell',
        'tentacool',
        'krabby',
        'goldeen',
        'magikarp'
      ],
      order: 39
    },
    {
      location: 'Route 13',
      pokemon: [
        'pidgey',
        'oddish',
        'gloom',
        'venonat',
        'poliwag',
        'bellsprout',
        'weepinbell',
        'tentacool',
        'krabby',
        'goldeen',
        'magikarp',
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
      pokemon: [
        'raticate',
        'spearow',
        'fearow',
        'poliwag',
        'tentacool',
        'doduo',
        'krabby',
        'goldeen',
        'magikarp'
      ],
      order: 31
    },
    {
      location: 'Route 18',
      pokemon: [
        'raticate',
        'spearow',
        'fearow',
        'poliwag',
        'tentacool',
        'doduo',
        'krabby',
        'goldeen',
        'magikarp'
      ],
      order: 32
    },
    {
      location: 'Route 19',
      pokemon: [
        'poliwag',
        'tentacool',
        'shellder',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 35
    },
    {
      location: 'Route 20',
      pokemon: [
        'poliwag',
        'tentacool',
        'shellder',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 43
    },
    {
      location: 'Route 21',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'rattata',
        'raticate',
        'poliwag',
        'tentacool',
        'shellder',
        'tangela',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 48
    },
    {
      location: 'Route 22',
      pokemon: [
        'rattata',
        'spearow',
        'nidoran-f',
        'nidoran-m',
        'poliwag',
        'goldeen',
        'magikarp'
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
        'poliwag',
        'slowbro',
        'kingler',
        'seadra',
        'goldeen',
        'seaking',
        'magikarp',
        'ditto'
      ],
      order: 51
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
        'poliwag',
        'abra',
        'bellsprout',
        'krabby',
        'goldeen',
        'magikarp'
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
        'abra',
        'bellsprout',
        'krabby',
        'goldeen',
        'magikarp'
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
        'krabby',
        'exeggcute',
        'rhyhorn',
        'chansey',
        'goldeen',
        'scyther',
        'pinsir',
        'magikarp',
        'dratini',
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
        'shellder',
        'krabby',
        'horsea',
        'staryu',
        'dewgong',
        'kingler',
        'seadra',
        'poliwag',
        'goldeen',
        'magikarp'
      ],
      order: 41
    },
    {
      location: 'Vermilion City',
      pokemon: ['poliwag', 'shellder', 'krabby', 'goldeen', 'magikarp'],
      order: 16
    },
    {
      location: 'Victory Road',
      pokemon: [
        'zubat',
        'golbat',
        'machop',
        'machoke',
        'geodude',
        'graveler',
        'onix',
        'marowak',
        'venomoth'
      ],
      order: 52
    },
    {
      location: 'Viridian City',
      pokemon: ['poliwag', 'tentacool', 'goldeen', 'magikarp'],
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
