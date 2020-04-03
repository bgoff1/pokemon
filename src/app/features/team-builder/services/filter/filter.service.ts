import { Injectable } from '@angular/core';
import { DatabaseService } from '@services/database/database.service';
import { Pokemon } from '@models/pokemon';
import { Region } from '@models/pokemon/region';
import defaultFilters from '@resources/default-filters';
import { UpdateFilter } from '@team/models/filter/update.model';
import { Filter, FilterProperties } from '@team/models/filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  checkingCoverage: boolean;

  constructor(private readonly databaseService: DatabaseService) {}

  async setDefaultFilters() {
    const count = await this.databaseService.filters.count();
    if (count === 0) {
      await this.databaseService.filters.bulkAdd(defaultFilters);
    }
  }

  async createDatabase(): Promise<void> {
    await this.setDefaultFilters();
    this.getCoverageFilter().then(doc => {
      this.checkingCoverage = doc.enabled === 1;
    });
  }

  async resetFilters(): Promise<void> {
    await this.databaseService.filters.clear();
  }

  async getAllFilters(): Promise<Filter[]> {
    const filters = await this.databaseService.filters
      .filter(
        ({ filter, value }) =>
          filter !== FilterProperties.Coverage &&
          filter !== FilterProperties.Search &&
          !(
            filter === FilterProperties.Regions &&
            value === Region[Region.National]
          )
      )
      .toArray();
    return filters.sort((a, b) => a.filter - b.filter);
  }

  async getFilters(): Promise<Filter[]> {
    await this.setDefaultFilters();
    return this.databaseService.filters.where({ enabled: 1 }).toArray();
  }

  async getSearchFilter(): Promise<Filter> {
    return this.databaseService.filters.get(FilterProperties.Search);
  }

  async addSearchFilter(searchQuery: string): Promise<void> {
    const doc = await this.getSearchFilter();
    this.databaseService.filters.update(doc.id, {
      value: searchQuery.trim(),
      enabled: searchQuery.trim().length > 0 ? 1 : 0
    });
  }

  async getCoverageFilter(): Promise<Filter | null> {
    return this.databaseService.filters.get(FilterProperties.Coverage);
  }

  async changeCoverageDocument(value: string): Promise<void> {
    const doc = await this.getCoverageFilter();
    this.databaseService.filters.update(doc.id, {
      value,
      enabled: value ? 1 : 0
    });
  }

  checkCoverage(team: Pokemon[]): void {
    this.checkingCoverage = !this.checkingCoverage;
    if (this.checkingCoverage && team.length) {
      this.changeCoverageDocument(JSON.stringify(team));
    } else {
      this.changeCoverageDocument('');
    }
  }

  async updateFilter(filter: Filter): Promise<void> {
    this.databaseService.filters.update(filter.id, {
      enabled: filter.enabled
    });
  }

  async updateFilters(filters: UpdateFilter[]): Promise<Filter[]> {
    await this.databaseService.filters.bulkPut(filters);
    return filters;
  }
}
