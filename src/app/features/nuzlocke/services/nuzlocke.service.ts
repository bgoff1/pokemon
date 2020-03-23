import { Injectable } from '@angular/core';
import PouchDB from '@pouchdb';
import { Nuzlocke } from '../models/nuzlocke.model';
import { games } from '@models/pokemon/game-groups';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeService {
  nuzlockeDB: PouchDB.Database<Nuzlocke> = new PouchDB<Nuzlocke>('nuzlockes');

  async hasNuzlockeSaved(): Promise<boolean> {
    const docs = await this.nuzlockeDB.allDocs();
    return docs.total_rows > 0;
  }

  async getSaves(): Promise<Nuzlocke[]> {
    return this.nuzlockeDB
      .allDocs({ include_docs: true })
      .then(docs => docs.rows.map(row => row.doc));
  }

  async createNuzlocke(run: Nuzlocke): Promise<Nuzlocke> {
    await this.nuzlockeDB.post(run);
    return run;
  }

  get gameNames() {
    return games;
  }
}
