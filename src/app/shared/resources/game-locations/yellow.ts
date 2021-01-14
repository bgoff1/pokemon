import {
  convertGameLocationToRoutes,
  GameLocation
} from '@models/game-location.model';
import { GameGroup, getGamesFromGameGroup } from '@models/pokemon/game-groups';

const gameLocation: GameLocation = {
  game: GameGroup.Yellow,
  gifts: [
    {
      location: 'Starter',
      pokemon: ['pikachu'],
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
      pokemon: ['omanyte', 'kabuto'],
      order: 46
    },
    {
      location: 'Old Amber Fossil',
      pokemon: ['aerodactyl'],
      order: 47
    },
    {
      location: 'Cerulean City',
      pokemon: ['bulbasaur'],
      order: 12
    },
    {
      location: 'Route 24',
      pokemon: ['charmander'],
      order: 14
    },
    {
      location: 'Vermillion City',
      pokemon: ['squirtle'],
      order: 19
    }
  ],
  statics: [
    {
      location: 'Route 12',
      pokemon: ['snorlax'],
      order: 43
    },
    {
      location: 'Route 16',
      pokemon: ['snorlax'],
      order: 33
    },
    {
      location: 'Seafoam Islands',
      pokemon: ['articuno'],
      order: 45
    },
    {
      location: 'Power Plant',
      pokemon: ['zapdos'],
      order: 53
    },
    {
      location: 'Victory Road',
      pokemon: ['moltres'],
      order: 56
    }
  ],
  encounters: [
    {
      location: 'Celadon City',
      pokemon: ['poliwag', 'poliwhirl', 'slowpoke', 'goldeen', 'magikarp'],
      order: 28
    },
    {
      location: 'Cerulean City',
      pokemon: [
        'psyduck',
        'poliwag',
        'krabby',
        'goldeen',
        'seaking',
        'magikarp'
      ],
      order: 11
    },
    {
      location: 'Cinnabar Island',
      pokemon: [
        'poliwag',
        'tentacool',
        'shellder',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 47
    },
    { location: "Diglett's Cave", pokemon: ['diglett', 'dugtrio'], order: 21 },
    {
      location: 'Fuchsia City',
      pokemon: [
        'poliwag',
        'krabby',
        'goldeen',
        'seaking',
        'magikarp',
        'gyarados'
      ],
      order: 36
    },
    {
      location: 'Mt. Moon',
      pokemon: ['sandshrew', 'clefairy', 'zubat', 'paras', 'geodude'],
      order: 10
    },
    {
      location: 'Pallet Town',
      pokemon: ['poliwag', 'tentacool', 'goldeen', 'staryu', 'magikarp'],
      order: 1
    },
    {
      location: 'Pokémon Mansion',
      pokemon: [
        'rattata',
        'raticate',
        'growlithe',
        'ponyta',
        'grimer',
        'muk',
        'koffing',
        'weezing',
        'ditto'
      ],
      order: 48
    },
    {
      location: 'Pokémon Tower',
      pokemon: ['gastly', 'haunter', 'cubone'],
      order: 25
    },
    {
      location: 'Power Plant',
      pokemon: [
        'pikachu',
        'magnemite',
        'magneton',
        'grimer',
        'muk',
        'voltorb',
        'electabuzz'
      ],
      order: 52
    },
    {
      location: 'Rock Tunnel',
      pokemon: ['zubat', 'machop', 'geodude', 'onix'],
      order: 24
    },
    { location: 'Route 1', pokemon: ['pidgey', 'rattata'], order: 2 },
    {
      location: 'Route 2',
      pokemon: ['weedle', 'pidgey', 'rattata', 'nidoran ♀', 'nidoran ♂'],
      order: 4
    },
    {
      location: 'Route 3',
      pokemon: [
        'pidgey',
        'rattata',
        'spearow',
        'sandshrew',
        'jigglypuff',
        'mankey'
      ],
      order: 7
    },
    {
      location: 'Route 4',
      pokemon: ['rattata', 'spearow', 'ekans', 'sandshrew', 'mankey'],
      order: 8
    },
    {
      location: 'Route 5',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'rattata',
        'jigglypuff',
        'oddish',
        'mankey',
        'abra'
      ],
      order: 16
    },
    {
      location: 'Route 6',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'rattata',
        'jigglypuff',
        'oddish',
        'psyduck',
        'golduck',
        'mankey',
        'poliwag',
        'abra',
        'shellder',
        'krabby',
        'goldeen',
        'magikarp'
      ],
      order: 17
    },
    {
      location: 'Route 7',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'rattata',
        'jigglypuff',
        'oddish',
        'mankey',
        'growlithe',
        'abra'
      ],
      order: 26
    },
    {
      location: 'Route 8',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'rattata',
        'ekans',
        'jigglypuff',
        'mankey',
        'growlithe',
        'abra',
        'kadabra'
      ],
      order: 27
    },
    {
      location: 'Route 9',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'ekans',
        'nidoran ♀',
        'nidorina',
        'nidoran ♂',
        'nidorino'
      ],
      order: 22
    },
    {
      location: 'Route 10',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'ekans',
        'nidoran ♀',
        'nidoran ♂',
        'poliwag',
        'poliwhirl',
        'machop',
        'slowpoke',
        'magnemite',
        'krabby',
        'kingler',
        'voltorb',
        'horsea',
        'goldeen',
        'magikarp'
      ],
      order: 23
    },
    {
      location: 'Route 11',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'rattata',
        'raticate',
        'spearow',
        'ekans',
        'poliwag',
        'tentacool',
        'shellder',
        'drowzee',
        'krabby',
        'horsea',
        'goldeen',
        'magikarp'
      ],
      order: 20
    },
    {
      location: 'Route 12',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'poliwag',
        'bellsprout',
        'weepinbell',
        'tentacool',
        'slowpoke',
        'slowbro',
        'farfetchd',
        'krabby',
        'horsea',
        'seadra',
        'goldeen',
        'magikarp'
      ],
      order: 42
    },
    {
      location: 'Route 13',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'poliwag',
        'bellsprout',
        'weepinbell',
        'tentacool',
        'slowpoke',
        'slowbro',
        'farfetchd',
        'krabby',
        'horsea',
        'seadra',
        'goldeen',
        'magikarp',
        'ditto'
      ],
      order: 41
    },
    {
      location: 'Route 14',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'venomoth',
        'bellsprout',
        'weepinbell',
        'ditto'
      ],
      order: 40
    },
    {
      location: 'Route 15',
      pokemon: [
        'pidgey',
        'pidgeotto',
        'oddish',
        'gloom',
        'venonat',
        'venomoth',
        'bellsprout',
        'weepinbell',
        'ditto'
      ],
      order: 39
    },
    {
      location: 'Route 16',
      pokemon: ['rattata', 'raticate', 'spearow', 'fearow', 'doduo'],
      order: 30
    },
    {
      location: 'Route 17',
      pokemon: [
        'raticate',
        'spearow',
        'fearow',
        'poliwag',
        'tentacool',
        'ponyta',
        'doduo',
        'dodrio',
        'shellder',
        'krabby',
        'goldeen',
        'magikarp'
      ],
      order: 34
    },
    {
      location: 'Route 18',
      pokemon: [
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'poliwag',
        'tentacool',
        'doduo',
        'shellder',
        'krabby',
        'goldeen',
        'magikarp'
      ],
      order: 35
    },
    {
      location: 'Route 19',
      pokemon: [
        'poliwag',
        'tentacool',
        'tentacruel',
        'shellder',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 38
    },
    {
      location: 'Route 20',
      pokemon: [
        'poliwag',
        'tentacool',
        'tentacruel',
        'shellder',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 46
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
        'tentacruel',
        'shellder',
        'tangela',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 51
    },
    {
      location: 'Route 22',
      pokemon: [
        'rattata',
        'spearow',
        'nidoran ♀',
        'nidoran ♂',
        'mankey',
        'poliwag',
        'poliwhirl',
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
        'nidorina',
        'nidorino',
        'mankey',
        'primeape',
        'poliwag',
        'poliwhirl',
        'slowbro',
        'kingler',
        'seadra',
        'goldeen',
        'seaking',
        'magikarp',
        'ditto'
      ],
      order: 54
    },
    {
      location: 'Route 24',
      pokemon: [
        'weedle',
        'kakuna',
        'pidgey',
        'pidgeotto',
        'oddish',
        'venonat',
        'psyduck',
        'poliwag',
        'abra',
        'bellsprout',
        'krabby',
        'goldeen',
        'seaking',
        'magikarp'
      ],
      order: 13
    },
    {
      location: 'Route 25',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'pidgeotto',
        'oddish',
        'venonat',
        'psyduck',
        'poliwag',
        'abra',
        'bellsprout',
        'krabby',
        'kingler',
        'goldeen',
        'magikarp'
      ],
      order: 15
    },
    {
      location: 'Safari Zone',
      pokemon: [
        'nidoran ♀',
        'nidorina',
        'nidoran ♂',
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
        'tangela',
        'goldeen',
        'scyther',
        'pinsir',
        'magikarp',
        'dratini',
        'dragonair',
        'doduo',
        'cubone',
        'marowak',
        'kangaskhan',
        'tauros',
        'venomoth'
      ],
      order: 37
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
        'tentacool',
        'goldeen',
        'magikarp'
      ],
      order: 44
    },
    {
      location: 'Vermilion City',
      pokemon: [
        'poliwag',
        'tentacool',
        'shellder',
        'krabby',
        'horsea',
        'goldeen',
        'staryu',
        'magikarp'
      ],
      order: 18
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
      order: 55
    },
    {
      location: 'Viridian City',
      pokemon: ['poliwag', 'tentacool', 'goldeen', 'magikarp'],
      order: 3
    },
    {
      location: 'Viridian Forest',
      pokemon: [
        'caterpie',
        'metapod',
        'weedle',
        'kakuna',
        'pidgey',
        'pidgeotto',
        'pikachu'
      ],
      order: 6
    }
  ]
};

export default convertGameLocationToRoutes(
  gameLocation,
  getGamesFromGameGroup(GameGroup.Yellow),
  [[], []]
);
