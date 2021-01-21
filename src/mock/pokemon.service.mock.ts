export const pokemonServiceMock = {
  getPokemonNames: jest.fn(() => Promise.resolve([] as string[])),
  findEvolutionNames: jest.fn(() => Promise.resolve([] as string[]))
};
