import { Pokemon } from '@models/pokemon';
import { Pokedex } from '@models/pokemon/pokedex';
import { Region } from '@models/pokemon/region';
import { Type } from '@models/pokemon/type';
import { Filter, FilterProperties } from '../filter';
import { Coverage } from '../type-coverage/coverage.model';
import { NameUtility } from '@util/name';

export class PokemonList {
  pokemon: Pokemon[];
  filteredPokemon: Pokemon[];
  coverage: Coverage;

  constructor(allPokemon: Pokemon[]) {
    this.pokemon = allPokemon;
    this.coverage = new Coverage();
  }

  callFilters(filters: Filter[], team: Pokemon[]) {
    filters = filters.filter(filter => filter.enabled);
    this.filteredPokemon = this.pokemon.filter(mon =>
      team.every(teamMember => !teamMember.equals(mon))
    );

    this.filterSearch(filters);
    this.filterTypes(filters);
    this.filterRegions(filters);
    this.filterGenerations(filters);
    this.filterExtras(filters);
    this.filterCoverage(filters);

    this.sortFilterByRegions([Region.Alola, Region.ExtendedSinnoh]);

    return this.filteredPokemon;
  }

  filterSearch(filters: Filter[]) {
    const search = filters.filter(
      filter => filter.filter === FilterProperties.Search
    );
    if (search.length) {
      this.filteredPokemon = this.filteredPokemon.filter(mon =>
        search.some(({ value }) =>
          NameUtility.characterReplace(mon.name)
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        )
      );
    }
  }

  filterRegions(filters: Filter[]) {
    const regionFilters = filters.filter(
      filter => filter.filter === FilterProperties.Regions
    );
    if (regionFilters.length) {
      const regions = regionFilters.map(
        filter => Region[filter.value as keyof typeof Region]
      );
      this.filteredPokemon = this.filteredPokemon.filter(mon => {
        return mon.pokedexNumbers.some(({ name }) => regions.includes(name));
      });
      this.sortFilterByRegions(regions);
    }
  }

  filterTypes(filters: Filter[]) {
    const typeFilters = filters.filter(
      filter => filter.filter === FilterProperties.Types
    );
    if (typeFilters.length) {
      const types = typeFilters.map(
        type => Type[type.value as keyof typeof Type]
      );

      this.filteredPokemon = this.filteredPokemon.filter(mon => {
        return types.some(type => mon.types.includes(type));
      });
    }
  }

  filterGenerations(filters: Filter[]) {
    const generationFilters = filters.filter(
      filter => filter.filter === FilterProperties.Generations
    );
    if (generationFilters.length) {
      this.filterByGeneration(generationFilters.map(filter => filter.value));
    }
  }

  filterExtras(filters: Filter[]) {
    const extraFilters = filters.filter(
      filter => filter.filter === FilterProperties.Extras
    );

    if (extraFilters.length) {
      this.filteredPokemon = this.filteredPokemon.filter(({ name }) => {
        return extraFilters
          .map(filter => NameUtility.trimRegionName(filter.value))
          .every(filter => !name.includes(filter.toLowerCase()));
      });
    }
  }

  filterCoverage(filters: Filter[]) {
    const coverage = filters.find(
      filter => filter.filter === FilterProperties.Coverage
    );
    if (coverage) {
      const team = JSON.parse(coverage.value) as Pokemon[];
      const teamMembers = team.filter(
        ({ name }) => name !== 'Empty Team Member'
      );
      const teamTypes: Type[] = Array.from(
        new Set([].concat(...teamMembers.map(member => member.types)))
      );

      this.filteredPokemon = this.filteredPokemon.filter(
        ({ types }) => !this.coverage.isCovered(teamTypes, types)
      );
    }
  }

  sortFilterByRegions(regionNames: Region[]) {
    this.filteredPokemon = this.filteredPokemon.sort((a, b) => {
      if (regionNames.length > 1) {
        const first = a.getNationalPokedex();
        const second = b.getNationalPokedex();
        return this.compareNumbers(first, second);
      } else {
        const first = a.pokedexNumbers.find(({ name }) =>
          regionNames.includes(name)
        );
        const second = b.pokedexNumbers.find(({ name }) =>
          regionNames.includes(name)
        );
        return this.compareNumbers(first, second);
      }
    });
  }

  compareNumbers(a: Pokedex, b: Pokedex): number {
    return a && !b ? 1 : !a && b ? -1 : a.entryNumber - b.entryNumber;
  }

  filterByGeneration(gameNames: string[]) {
    this.filteredPokemon = this.filteredPokemon.filter(({ generation }) => {
      return gameNames.some(name => generation === name);
    });
  }
}
