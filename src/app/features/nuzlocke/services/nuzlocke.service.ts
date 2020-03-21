import { Injectable } from '@angular/core';
import PouchDB from '@pouchdb';
import { Nuzlocke } from '../models/nuzlocke.model';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeService {
  nuzlockeDB: PouchDB.Database<Nuzlocke> = new PouchDB<Nuzlocke>('nuzlockes');

  async hasNuzlockeSaved(): Promise<boolean> {
    return this.nuzlockeDB.allDocs().then(docs => docs.total_rows > 0);
  }

  // async createNuzlocke()
}
