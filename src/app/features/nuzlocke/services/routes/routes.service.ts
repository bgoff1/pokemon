import { Injectable } from '@angular/core';
import { allRoutes } from '@resources/game-locations';
import { GameGroup } from '@models/pokemon/game-groups';
import { DefaultValueService } from '@services/default-pouchdb/default-value.service';
import { Route } from '@features/nuzlocke/models/route.model';

@Injectable({
  providedIn: 'root'
})
export class RoutesService extends DefaultValueService {
  routeDB: PouchDB.Database<Route>;

  async createDatabase() {
    await super
      .createAndFill<Route>('routes', allRoutes, ['game'])
      .then(db => {
        this.routeDB = db;
      });
  }

  async getRoutes(region: GameGroup): Promise<Route[]> {
    try {
      const res = await this.routeDB.find({ selector: { game: region } });
      return res.docs.sort((a, b) => Number(a.order) - Number(b.order));
    } catch {
      return [];
    }
  }

  async addRoute(route: Route): Promise<boolean> {
    try {
      await this.routeDB.put(route);
      return true;
    } catch {
      return false;
    }
  }
}
