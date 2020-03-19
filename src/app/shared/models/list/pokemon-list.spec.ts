jest.mock('@models/type-coverage/coverage.model');
jest.mock('@models/pokemon');
import pokemonMocks from '@mocks/pokemon.mock';
jest.mock('@resources/pokemon', () => ({
  __esModule: true,
  default: pokemonMocks
}));
jest.mock('@models/util/name/name-util.model', () => ({
  __esModule: true,
  NameReplacementUtility: {
    characterReplace: jest.fn(arg => arg),
    trimRegionName: jest.fn(arg => arg)
  }
}));
import { PokemonList } from './pokemon-list.model';
import { Pokemon } from '@models/pokemon';
import { FilterProperties } from '@models/filter';
import { Region } from '@models/pokemon/region';

describe('Pokemon List', () => {
  let list: PokemonList;
  const pokemon = pokemonMocks.map(mon => new Pokemon(mon));

  beforeEach(() => {
    list = new PokemonList();
    list.filteredPokemon = list.pokemon;
  });

  test('should create', () => {
    expect(list).toBeTruthy();
  });

  test('should filter out disabled filters', () => {
    list.filterSearch = jest.fn();
    list.filterTypes = jest.fn();
    list.filterRegions = jest.fn();
    list.filterGenerations = jest.fn();
    list.filterCoverage = jest.fn();

    list.callFilters(
      [
        { filter: 1, _id: '', value: '', enabled: false },
        { filter: 1, _id: '', value: '', enabled: true }
      ],
      []
    );
    expect(list.filterSearch).toBeCalledWith([
      { filter: 1, _id: '', value: '', enabled: true }
    ]);
  });

  test('should filter out pokemon in the team', () => {
    list.filterSearch = jest.fn();
    list.filterTypes = jest.fn();
    list.filterRegions = jest.fn();
    list.filterGenerations = jest.fn();
    list.filterCoverage = jest.fn();
    list.callFilters([], pokemon);
    expect(list.filteredPokemon.length).toBe(0);
  });

  test('should do nothing by calling call filters with no filters', () => {
    expect(JSON.stringify(pokemon)).toEqual(
      JSON.stringify(list.callFilters([], []))
    );
  });

  test('should filter search', () => {
    list.filterSearch([
      { filter: FilterProperties.Search, value: 'bulb', _id: '' }
    ]);
    expect(JSON.stringify(list.filteredPokemon)).toEqual(
      JSON.stringify([pokemon[0]])
    );
  });

  test('should filter types', () => {
    list.filterTypes([
      { filter: FilterProperties.Types, value: 'Fire', _id: '' }
    ]);
    expect(JSON.stringify(list.filteredPokemon)).toEqual(
      JSON.stringify([pokemon[1]])
    );
  });

  test('should filter regions', () => {
    list.filterRegions([
      { filter: FilterProperties.Regions, value: 'Kanto', _id: '' }
    ]);
    expect(JSON.stringify(list.filteredPokemon)).toEqual(
      JSON.stringify([pokemon[0], pokemon[1]])
    );
  });

  test('should filter generations', () => {
    list.filterGenerations([
      { filter: FilterProperties.Generations, value: 'Generation IV', _id: '' }
    ]);
    expect(JSON.stringify(list.filteredPokemon)).toEqual(
      JSON.stringify([pokemon[2]])
    );
  });

  test('should filter extras', () => {
    list.filterExtras([
      { filter: FilterProperties.Extras, value: 'mega', _id: '' }
    ]);
    expect(JSON.stringify(list.filteredPokemon)).toEqual(
      JSON.stringify([pokemon[0], pokemon[1], pokemon[2]])
    );
  });

  test('should filter by coverage', () => {
    list.filterCoverage([
      {
        filter: FilterProperties.Coverage,
        value: JSON.stringify(pokemon),
        _id: ''
      }
    ]);
    expect(list.filteredPokemon).not.toContainEqual(pokemon[2]);
  });

  test('should sort correctly (a !b)', () => {
    expect(list.compareNumbers(1 as any, null)).toBe(1);
  });

  test('should sort correctly (!a b)', () => {
    expect(list.compareNumbers(null, 1 as any)).toBe(-1);
  });

  test('should sort correctly (a > b)', () => {
    expect(
      list.compareNumbers(
        { entryNumber: 12, name: 0 },
        { entryNumber: 14, name: 0 }
      )
    ).toBe(-2);
  });

  test('should sort by regions correctly', () => {
    const reversed = list.filteredPokemon.reverse()[0];
    list.sortFilterByRegions([Region.National, Region.Kalos]);
    expect(list.filteredPokemon[0]).not.toEqual(reversed);
  });
});
