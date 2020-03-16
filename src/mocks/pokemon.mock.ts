import { PokemonInterface } from '@models/pokemon';

export default [
  {
    name: 'bulbasaur',
    pokedexNumbers: [
      { entryNumber: 80, name: 8 },
      { entryNumber: 231, name: 4 },
      { entryNumber: 226, name: 1 },
      { entryNumber: 1, name: 0 },
      { entryNumber: 1, name: 13 }
    ],
    evolutionChain: 1,
    types: [5, 6],
    generation: 'Generation I'
  },
  {
    name: 'charmander',
    pokedexNumbers: [
      { entryNumber: 83, name: 8 },
      { entryNumber: 234, name: 4 },
      { entryNumber: 229, name: 1 },
      { entryNumber: 4, name: 0 },
      { entryNumber: 4, name: 13 },
      { entryNumber: 378, name: 12 }
    ],
    evolutionChain: 2,
    types: [1],
    generation: 'Generation I'
  },
  {
    name: 'turtwig',
    pokedexNumbers: [
      { entryNumber: 1, name: 5 },
      { entryNumber: 1, name: 3 },
      { entryNumber: 387, name: 13 }
    ],
    evolutionChain: 203,
    types: [5],
    generation: 'Generation IV'
  }
] as PokemonInterface[];
