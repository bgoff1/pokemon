jest.mock('@models/type-coverage/coverage.model');
import { PokemonList } from './pokemon-list.model';
import pokemonMocks from '@mocks/pokemon.mock';
import { Pokemon } from '@models/pokemon';
import { FilterProperties } from '@models/filter';
import { Region } from '@models/pokemon/region';

describe('Pokemon List', () => {
  let list: PokemonList;
  const pokemon = pokemonMocks.map(mon => new Pokemon(mon));

  beforeEach(() => {
    list = new PokemonList(pokemon);
    list.filteredPokemon = list.pokemon;
  });

  test('should create', () => {
    expect(list).toBeTruthy();
  });

  test('should do nothing by calling call filters with no filters', () => {
    expect(pokemon).toEqual(list.callFilters([], []));
  });

  test('should filter search', () => {
    list.filterSearch([{ filter: FilterProperties.Search, value: 'bulb' }]);
    expect(list.filteredPokemon).toContain(pokemon[0]);
  });

  test('should filter types', () => {
    list.filterTypes([{ filter: FilterProperties.Types, value: 'Fire' }]);
    expect(list.filteredPokemon).toContain(pokemon[1]);
  });

  test('should filter regions', () => {
    list.filterRegions([{ filter: FilterProperties.Regions, value: 'Kanto' }]);
    expect(list.filteredPokemon).toContain(pokemon[1]);
  });

  test('should filter generations', () => {
    list.filterGenerations([
      { filter: FilterProperties.Generations, value: 'Generation IV' }
    ]);
    expect(list.filteredPokemon).toContain(pokemon[2]);
  });

  test('should filter extras', () => {
    list.filterExtras([{ filter: FilterProperties.Extras, value: 'mega' }]);
    expect(list.filteredPokemon).toContain(pokemon[1]);
  });

  test('should filter by coverage', () => {
    list.filterCoverage([
      {
        filter: FilterProperties.Coverage,
        value: JSON.stringify(pokemon)
      }
    ]);
    expect(list.filteredPokemon).not.toContain(pokemon[2]);
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
