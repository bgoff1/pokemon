import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';
import { RoutesService } from '@features/nuzlocke/services/routes/routes.service';
import {
  Route,
  RouteEncounterType
} from '@features/nuzlocke/models/route.model';
import { MatDialog } from '@angular/material/dialog';
import { RouteDialogComponent } from './route-dialog/route-dialog.component';

@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  routes: Route[] = [];
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly routesService: RoutesService,
    private readonly dialog: MatDialog
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

  addRoute() {
    const dialog = this.dialog.open(RouteDialogComponent);
    dialog.afterClosed().subscribe(res => {
      // if (res) {
      console.log(res);
      // }
    });
  }
}
