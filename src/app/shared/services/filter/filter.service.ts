import { Injectable } from '@angular/core';
import { Pokemon } from '@models/pokemon';
import { Filter, FilterProperties } from '@models/filter';
import PouchDB from '@models/pouchdb.model';
import defaultFilters from '@resources/default-filters';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  checkingCoverage: boolean;
  filters: Filter[];
  private filterDB: PouchDB.Database<Filter>;

  constructor() {
    this.createDatabase();
  }

  createDatabase() {
    this.filterDB = new PouchDB<Filter>('filters');
    this.filterDB.createIndex({
      index: { fields: ['enabled', 'filter'] }
    });
    this.filterDB.allDocs().then(docs => {
      if (!docs.total_rows) {
        this.filterDB.bulkDocs(defaultFilters).then(() => {
          this.filters = defaultFilters.filter(filter => filter.enabled);
        });
      } else {
        this.filters = docs.rows
          .map(doc => doc.doc)
          .filter(filter => filter && filter.enabled);
      }
    });
  }

  resetFilters() {
    this.filterDB.destroy().then(() => {
      this.createDatabase();
    });
  }

  getAllFilters(): Promise<Filter[]> {
    return this.filterDB.allDocs({ include_docs: true }).then(docs => {
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
    });
  }

  getSearchFilter(): Observable<Filter> {
    return from(
      this.filterDB
        .find({
          selector: { filter: 'search' },
          limit: 1
        })
        .then(result => result.docs[0])
    );
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
