import { Injectable } from '@angular/core';
import { CreateRouteDialogResult } from '@features/nuzlocke/models/create-route-dialog.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { Route } from '@nuzlocke/models/route.model';
import { allRoutes } from '@resources/game-locations';
import { DatabaseService } from '@services/database/database.service';
import { NuzlockeService } from '../nuzlocke/nuzlocke.service';

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
    const res = await this.databaseService.routes
      .where({ game: run.game })
      .toArray();
    return res.sort((a, b) => Number(a.order) - Number(b.order));
  }

  async addRouteToGame(input: CreateRouteDialogResult) {
    const route = await this.nuzlockeService.convertDialogToRoute(input);
    this.databaseService.routes.add(route);
  }

  async removeRouteFromGame(route: Route) {
    await this.databaseService.routes.delete(route.id);
  }
}
