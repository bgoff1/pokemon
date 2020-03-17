import { Pokemon } from './index';
import { Type } from './type';
import { NameReplacementUtility } from '@models/util/name/name-util.model';
import { Region } from './region';

describe('Pokemon Model', () => {
  let pokemon: Pokemon;

  beforeEach(() => {
    NameReplacementUtility.getDisplayName = jest.fn(arg => arg);
    NameReplacementUtility.replaceImageCharacters = jest.fn(arg => arg);
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

  test('should get display name (has name)', () => {
    expect(pokemon.displayName).toEqual(pokemon.name);
    expect(NameReplacementUtility.getDisplayName).toHaveBeenCalled();
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
});
