import { Injectable } from '@angular/core';
import PouchDB from '@pouchdb';
import { Nuzlocke } from '../../models/nuzlocke.model';
import { games, GameGroup } from '@models/pokemon/game-groups';
import { NuzlockeStatus } from '@features/nuzlocke/models/status.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeService {
  nuzlockeDB: PouchDB.Database<Nuzlocke> = new PouchDB<Nuzlocke>('nuzlockes', {
    auto_compaction: true
  });
  currentRunID: string;

  private update = new Subject<Nuzlocke>();
  get update$() {
    return this.update.asObservable();
  }

  async hasNuzlockeSaved(): Promise<boolean> {
    const docs = await this.nuzlockeDB.allDocs();
    return docs.total_rows > 0;
  }

  async getSaves(): Promise<Nuzlocke[]> {
    return this.nuzlockeDB
      .allDocs({ include_docs: true })
      .then(docs => docs.rows.map(row => row.doc));
  }

  async createNuzlocke(run: {
    runName: string;
    game: GameGroup;
    random: boolean;
  }): Promise<Nuzlocke> {
    const game: Nuzlocke = {
      ...run,
      badgesEarned: [],
      startDate: new Date(),
      status: NuzlockeStatus.Started
    };
    await this.nuzlockeDB.post(game);
    return game;
  }

  async earnBadge(badgeNumber: number) {
    const run = await this.nuzlockeDB.get(this.currentRunID);
    if (run.badgesEarned.includes(badgeNumber)) {
      run.badgesEarned = run.badgesEarned.filter(num => badgeNumber !== num);
    } else {
      run.badgesEarned.push(badgeNumber);
    }
    this.nuzlockeDB.put(run).then(() => {
      this.update.next(run);
    });
  }

  get gameNames() {
    return games;
  }
}
