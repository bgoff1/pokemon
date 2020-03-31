import { Injectable } from '@angular/core';
import { allRoutes } from '@resources/game-locations';
import { Route } from '@features/nuzlocke/models/route.model';
import { NuzlockeService } from '../nuzlocke/nuzlocke.service';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';
import { DatabaseService } from '@services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly databaseService: DatabaseService
  ) {}

  async createDatabase() {
    const count = await this.databaseService.routes.count();
    if (count === 0) {
      await this.databaseService.routes.bulkAdd(allRoutes);
    }
  }

  async getRoutes(run: Nuzlocke): Promise<Route[]> {
    this.nuzlockeService.currentRun = run;
    try {
      const res = await this.databaseService.routes
        .where({ game: run.game })
        .toArray();
      return res.sort((a, b) => Number(a.order) - Number(b.order));
    } catch {
      return [];
    }
  }
}
