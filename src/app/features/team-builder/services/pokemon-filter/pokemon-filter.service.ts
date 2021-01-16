import { Injectable } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { Pokedex } from '@models/pokemon/pokedex.model';
import { getRegion, Region, RegionName } from '@models/pokemon/region.model';
import { Type } from '@models/pokemon/type.model';
import { PokemonImageService } from '@services/pokemon-image/pokemon-image.service';
import { Filter, FilterProperties } from '../../models/filter/filter.model';
import { CoverageService } from '../coverage-service/coverage.service';
import { FilterNameService } from '../filter-name/filter-name.service';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonFilterService {
  pokemon: Pokemon[] = [];
  filteredPokemon: Pokemon[] = [];
  alive = false;

  constructor(
    private readonly pokemonImageService: PokemonImageService,
    private readonly coverageService: CoverageService,
    private readonly filterNameService: FilterNameService,
    private readonly filterService: FilterService
  ) {}

  callFilters(
    filters: Filter[],
    team: Pokemon[],
    removeSearchFilter: boolean
  ): Pokemon[] {
    filters = this.updateFilters(removeSearchFilter, filters);

    this.filteredPokemon = this.pokemon.filter((mon) =>
      team.every((teamMember) => !teamMember.equals(mon))
    );

    this.filterSearch(filters);
    this.filterTypes(filters);
    this.filterRegions(filters);
    this.filterGenerations(filters);
    this.filterExtras(filters);
    this.filterCoverage(filters);

    return this.filteredPokemon;
  }

  setPokemon(allPokemon: Pokemon[]): void {
    this.pokemon = allPokemon;
    this.alive = true;
  }

  private updateFilters(
    removeSearchFilter: boolean,
    filters: Filter[]
  ): Filter[] {
    if (removeSearchFilter) {
      this.filterService.addSearchFilter('');
    }
    return filters.filter((filter) =>
      removeSearchFilter
        ? filter.filter !== FilterProperties.Search && filter.enabled
        : filter.enabled
    );
  }

  private getTypes(pokemon: Pokemon[]): Type[] {
    const result = [];
    for (const typePair of pokemon.map((mon) => mon.types)) {
      for (const singleType of typePair) {
        result.push(singleType);
      }
    }
    return result;
  }

  private filterSearch(filters: Filter[]): void {
    const search = filters.filter(
      (filter) => filter.filter === FilterProperties.Search
    );
    if (search.length) {
      this.filteredPokemon = this.filteredPokemon.filter((mon) =>
        search.some(({ value }) =>
          this.pokemonImageService
            .characterReplace(mon.name)
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        )
      );
    }
  }

  private filterRegions(filters: Filter[]): void {
    const regionFilters = filters.filter(
      (filter) => filter.filter === FilterProperties.Regions
    );
    if (regionFilters.length) {
      const regions = regionFilters.map((filter) =>
        getRegion(filter.value as RegionName)
      );
      this.filteredPokemon = this.filteredPokemon.filter((mon) => {
        return mon.pokedexNumbers.some(({ name }) => regions.includes(name));
      });
      this.sortFilterByRegions(regions);
    }
  }

  private filterTypes(filters: Filter[]): void {
    const typeFilters = filters.filter(
      (filter) => filter.filter === FilterProperties.Types
    );
    if (typeFilters.length) {
      const types = typeFilters.map(
        (type) => Type[type.value as keyof typeof Type]
      );

      this.filteredPokemon = this.filteredPokemon.filter((mon) => {
        return types.some((type) => mon.types.includes(type));
      });
    }
  }

  private filterGenerations(filters: Filter[]): void {
    const generationFilters = filters.filter(
      (filter) => filter.filter === FilterProperties.Generations
    );
    if (generationFilters.length) {
      this.filterByGeneration(generationFilters.map((filter) => filter.value));
    }
  }

  private filterExtras(filters: Filter[]): void {
    const extraFilters = filters.filter(
      (filter) => filter.filter === FilterProperties.Extras
    );

    if (extraFilters.length) {
      this.filteredPokemon = this.filteredPokemon.filter(({ name }) => {
        return extraFilters
          .map((filter) => this.filterNameService.trimRegionName(filter.value))
          .every((filter) => !name.includes(filter.toLowerCase()));
      });
    }
  }

  private filterCoverage(filters: Filter[]): void {
    const coverage = filters.find(
      (filter) => filter.filter === FilterProperties.Coverage
    );
    if (coverage) {
      const team = JSON.parse(coverage.value) as Pokemon[];
      const teamMembers = team.filter(
        ({ name }) => name !== 'Empty Team Member'
      );
      const teamTypes: Type[] = Array.from(new Set(this.getTypes(teamMembers)));

      this.filteredPokemon = this.filteredPokemon.filter(
        ({ types }) => !this.coverageService.isCovered(teamTypes, types)
      );
    }
  }

  private sortFilterByRegions(regionNames: Region[]): void {
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

  private compareNumbers(a?: Pokedex, b?: Pokedex): number {
    return a && !b
      ? 1
      : !a && b
      ? -1
      : (a?.entryNumber ?? -1) - (b?.entryNumber ?? -1);
  }

  private filterByGeneration(gameNames: string[]): void {
    this.filteredPokemon = this.filteredPokemon.filter(({ generation }) => {
      return gameNames.some((name) => generation === name);
    });
  }
}
