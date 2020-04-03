jest.mock('@util/enum', () => ({
  __esModule: true,
  enumKeys: jest.fn(),
  enumValues: jest.fn(() => ['Unknown'])
}));
import { Pokemon } from './index';
import { Type } from './type';
jest.mock('@util/name', () => ({
  __esModule: true,
  NameUtility: {
    replaceImageCharacters: jest.fn(a => a),
    getDisplayName: jest.fn(a => a)
  }
}));
import { Region } from './region';

describe('Pokemon Model', () => {
  let pokemon: Pokemon;

  beforeEach(() => {
    pokemon = new Pokemon();
  });

  test('should create with no data', () => {
    expect(pokemon.name).toEqual('Empty Team Member');
    expect(pokemon.types).toEqual([Type.Unknown, Type.Unknown]);
    expect(pokemon.cssClasses).toEqual('empty-team-member');
  });

  test('should get display name (empty member)', () => {
    expect(pokemon.displayName).toEqual(pokemon.name);
  });

  test('should get image name', () => {
    expect(pokemon.imageName).toEqual(pokemon.name);
  });

  test('should get national pokedex', () => {
    pokemon.pokedexNumbers = [
      { name: Region.Alola, entryNumber: 2 },
      { name: Region.National, entryNumber: 444 }
    ];
    expect(pokemon.getNationalPokedex()).toEqual({
      name: Region.National,
      entryNumber: 444
    });
  });

  test('should create and set equal', () => {
    pokemon = new Pokemon({
      name: 'a',
      pokedexNumbers: [],
      types: [1],
      generation: '1',
      evolutionChain: 2
    });
    expect(pokemon).toBeTruthy();
  });

  test('should create and set equal with multiple types', () => {
    pokemon = new Pokemon({
      name: 'a',
      pokedexNumbers: [],
      types: [1, 2],
      generation: '1',
      evolutionChain: 2
    });
    expect(pokemon).toBeTruthy();
  });

  test('should see equal', () => {
    pokemon = new Pokemon({
      name: 'a',
      pokedexNumbers: [],
      types: [1],
      generation: '1',
      evolutionChain: 2
    });
    const pokemonB = new Pokemon({
      name: 'a',
      pokedexNumbers: [],
      types: [1, 2],
      generation: '1',
      evolutionChain: 2
    });
    expect(pokemon.equals(pokemonB)).toBe(true);
  });
});
