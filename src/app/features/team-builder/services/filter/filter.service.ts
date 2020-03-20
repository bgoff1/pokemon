import { Injectable } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { Region } from '@models/pokemon/region';
import PouchDB from '@models/pouchdb.model';
import defaultFilters from '@resources/default-filters';
import { UpdateFilter } from '../../models/filter/update.model';
import { Filter, FilterProperties } from '../../models/filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  checkingCoverage: boolean;
  filterDB: PouchDB.Database<Filter> = new PouchDB<Filter>('filters');

  async createDatabase(): Promise<void> {
    this.filterDB.createIndex({
      index: { fields: ['enabled', 'filter'] }
    });
    const docs = await this.filterDB.allDocs();
    if (!docs.total_rows) {
      await this.filterDB.bulkDocs(defaultFilters);
    }
    this.getCoverageFilter().then(doc => {
      this.checkingCoverage = doc.enabled;
    });
  }

  async resetFilters(): Promise<void> {
    await this.filterDB.destroy();
    return this.createDatabase();
  }

  async getAllFilters(): Promise<Filter[]> {
    try {
      const docs = await this.filterDB.allDocs({ include_docs: true });
      return docs.rows
        .map(document => document.doc)
        .filter(
          doc =>
            !isNaN(Number(doc._id)) &&
            doc.filter !== FilterProperties.Coverage &&
            doc.filter !== FilterProperties.Search &&
            !(
              doc.filter === FilterProperties.Regions &&
              doc.value === Region[Region.National]
            )
        )
        .sort((a, b) => Number(a._id) - Number(b._id))
        .sort((a, b) => a.filter - b.filter);
    } catch {
      return [];
    }
  }

  async getFilters(): Promise<Filter[]> {
    try {
      const enabledDocs = await this.filterDB.find({
        selector: { enabled: true }
      });
      return enabledDocs.docs;
    } catch {
      return [];
    }
  }

  async getSearchFilter(): Promise<Filter | null> {
    try {
      const searchDocs = await this.filterDB.find({
        selector: { filter: FilterProperties.Search },
        limit: 1
      });
      return searchDocs.docs[0];
    } catch {
      return null;
    }
  }

  async addSearchFilter(searchQuery: string): Promise<void> {
    const doc = await this.getSearchFilter();
    if (doc) {
      this.filterDB.put({
        _id: doc._id,
        _rev: doc._rev,
        filter: FilterProperties.Search,
        value: searchQuery,
        enabled: searchQuery.trim().length > 0
      });
    }
  }

  async getCoverageFilter(): Promise<Filter | null> {
    try {
      const searchDocs = await this.filterDB.find({
        selector: { filter: FilterProperties.Coverage },
        limit: 1
      });
      return searchDocs.docs[0];
    } catch {
      return null;
    }
  }

  async changeCoverageDocument(value: string): Promise<void> {
    const doc = await this.getCoverageFilter();
    this.filterDB.put({
      _id: FilterProperties.Coverage.toString(),
      _rev: doc._rev,
      filter: doc.filter,
      value,
      enabled: value ? true : false
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
    const doc = await this.filterDB.get(filter._id);
    this.filterDB.put({ ...doc, enabled: !doc.enabled });
  }

  async updateFilters(filters: UpdateFilter[]): Promise<Filter[]> {
    await this.filterDB.bulkDocs(filters);
    return filters;
  }
}
