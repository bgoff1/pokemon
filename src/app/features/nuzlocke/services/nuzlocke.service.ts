import { Injectable } from '@angular/core';
import PouchDB from '@pouchdb';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeService {
  nuzlockeDB: PouchDB.Database = new PouchDB('nuzlockes');

  async hasNuzlockeSaved(): Promise<boolean> {
    return this.nuzlockeDB.allDocs().then(docs => docs.total_rows > 0);
  }
}
