import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';
import { RoutesService } from '@features/nuzlocke/services/routes/routes.service';
import {
  Route,
  RouteEncounterType
} from '@features/nuzlocke/models/route.model';

@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  routes: Route[] = [];
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly routesService: RoutesService
  ) {}

  ngOnInit() {
    this.routesService.createDatabase().then(() => {
      this.activatedRoute.data.subscribe((data: { nuzlocke: Nuzlocke }) => {
        this.routesService.getRoutes(data.nuzlocke.game).then(routes => {
          this.routes = routes;
        });
      });
    });
  }

  isGift(route: Route) {
    return route.type === RouteEncounterType.Gift;
  }

  isStatic(route: Route) {
    return route.type === RouteEncounterType.Static;
  }
}
