import { Injectable } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { Filter, FilterProperties } from '@models/filter';
import PouchDB from '@models/pouchdb.model';
import defaultFilters from '@resources/default-filters';
import { Observable } from 'rxjs/internal/Observable';
import { from, of } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  checkingCoverage: boolean;
  private filterDB: PouchDB.Database<Filter>;

  constructor() {}

  createDatabase() {
    this.filterDB = new PouchDB<Filter>('filters');
    this.filterDB.createIndex({
      index: { fields: ['enabled', 'filter'] }
    });
    return from(
      this.filterDB.allDocs().then(docs => {
        if (!docs.total_rows) {
          return this.filterDB.bulkDocs(defaultFilters);
        }
        return null;
      })
    );
  }

  resetFilters() {
    return from(this.filterDB.destroy().then(() => this.createDatabase()));
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
            doc.filter !== FilterProperties.Search
        )
        .sort((a, b) => Number(a._id) - Number(b._id))
        .sort((a, b) => a.filter - b.filter);
    } catch {
      return [];
    }
  }

  getFilters(): Promise<Filter[]> {
    try {
      return this.filterDB
        .find({
          selector: { enabled: true }
        })
        .then(result => result.docs);
    } catch {
      return Promise.resolve([]);
    }
  }

  getSearchFilter() {
    return from(
      this.filterDB
        .find({
          selector: { filter: FilterProperties.Search },
          limit: 1
        })
        .then(result => result.docs[0])
    );
  }

  addSearchFilter(searchQuery: string) {
    console.log('in add search', searchQuery);
    this.getSearchFilter()
      .pipe(take(1))
      .subscribe(doc => {
        if (doc) {
          this.filterDB.put({
            _id: doc._id,
            _rev: doc._rev,
            filter: FilterProperties.Search,
            value: searchQuery,
            enabled: searchQuery.trim().length > 0
          });
        }
      });
  }

  private changeCoverageDocument(value: string) {
    this.filterDB.get('coverage').then(doc => {
      return this.filterDB.put({
        _id: 'coverage',
        _rev: doc._rev,
        filter: doc.filter,
        value
      });
    });
  }

  checkCoverage(team: Pokemon[]) {
    if (this.checkingCoverage && team.length) {
      this.changeCoverageDocument(JSON.stringify(team));
    } else {
      this.changeCoverageDocument('');
    }
    this.checkingCoverage = !this.checkingCoverage;
  }
}
