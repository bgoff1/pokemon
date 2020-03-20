jest.mock('../type-coverage/coverage.model');
jest.mock('@models/pokemon');
import pokemonMocks from '../../mocks/pokemon.mock';
jest.mock('@resources/pokemon', () => ({
  __esModule: true,
  default: pokemonMocks
}));
jest.mock('@models/util/name/name-util.model', () => ({
  __esModule: true,
  NameUtility: {
    characterReplace: jest.fn(arg => arg),
    trimRegionName: jest.fn(arg => arg)
  }
}));
import { PokemonList } from './pokemon-list.model';
import { Pokemon } from '@models/pokemon';
import { Region } from '@models/pokemon/region';
import { FilterProperties } from '../filter';

describe('Pokemon List', () => {
  let list: PokemonList;
  const pokemon = pokemonMocks.map(mon => new Pokemon(mon));

  beforeAll(() => {
    list = new PokemonList();
  });
  beforeEach(() => {
    list.filteredPokemon = pokemon;
  });

  test('should create', () => {
    expect(list).toBeTruthy();
  });

  test('should do nothing by calling call filters with no filters', () => {
    const results = list.callFilters([], []);
    expect(results.length).toBe(pokemon.length);
    for (let i = 0; i < pokemon.length; ++i) {
      expect(pokemon[i].imageName).toEqual(results[i].imageName);
    }
  });

  test('should filter search', () => {
    list.filterSearch([
      { filter: FilterProperties.Search, value: 'bulb', _id: '' }
    ]);
    expect(list.filteredPokemon.length).toBe(1);
    expect(list.filteredPokemon[0].imageName).toEqual(pokemon[0].imageName);
  });

  test('should filter types', () => {
    list.filterTypes([
      { filter: FilterProperties.Types, value: 'Fire', _id: '' }
    ]);

    expect(list.filteredPokemon.length).toBe(1);
    expect(list.filteredPokemon[0].imageName).toEqual(pokemon[1].imageName);
  });

  test('should filter regions', () => {
    list.filterRegions([
      { filter: FilterProperties.Regions, value: 'Kanto', _id: '' }
    ]);

    expect(list.filteredPokemon.length).toBe(2);
    expect(list.filteredPokemon[0].imageName).toEqual(pokemon[0].imageName);
    expect(list.filteredPokemon[1].imageName).toEqual(pokemon[1].imageName);
  });

  test('should filter generations', () => {
    list.filterGenerations([
      { filter: FilterProperties.Generations, value: 'Generation IV', _id: '' }
    ]);
    expect(list.filteredPokemon.length).toBe(1);
    expect(list.filteredPokemon[0].imageName).toEqual(pokemon[2].imageName);
  });

  test('should filter extras', () => {
    list.filterExtras([
      { filter: FilterProperties.Extras, value: 'mega', _id: '' }
    ]);

    expect(list.filteredPokemon.length).toBe(3);
    expect(list.filteredPokemon[0].imageName).toEqual(pokemon[0].imageName);
    expect(list.filteredPokemon[1].imageName).toEqual(pokemon[1].imageName);
    expect(list.filteredPokemon[2].imageName).toEqual(pokemon[2].imageName);
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
});
