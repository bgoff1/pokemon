import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RoutesService } from '../../services/routes/routes.service';
import { Route, RouteEncounterType } from '../../models/route.model';
import { CreateRouteDialogComponent } from './create-route-dialog/create-route-dialog.component';
import { CreateRouteDialog } from './models/create-route-dialog.model';
import { RouteData } from '@features/nuzlocke/models/route-data.model';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke/nuzlocke.service';
import { SelectRouteDialog } from './models/select-route-dialog.model';
import { SelectRouteDialogComponent } from './select-route-dialog/select-route-dialog.component';
import {
  NuzlockePokemon,
  PokemonStatus
} from '@features/nuzlocke/models/nuzlocke-pokemon.model';

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
    private readonly nuzlockeService: NuzlockeService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit() {
    this.routesService.createDatabase().then(() => {
      this.activatedRoute.data.subscribe(({ nuzlocke }: RouteData) => {
        this.routesService.getRoutes(nuzlocke).then(routes => {
          this.routes = [
            ...routes,
            ...nuzlocke.extraRoutes
          ].filter(({ location }) =>
            nuzlocke.pokemon.every(({ routeName }) => routeName !== location)
          );
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
    const dialog: CreateRouteDialog = this.dialog.open(
      CreateRouteDialogComponent
    );
    dialog.afterClosed().subscribe(res => {
      if (res) {
        if (res.current) {
          const route = this.nuzlockeService.convertRouteDialogToRoute(res);
          this.nuzlockeService.addRouteToCurrentGame(route);
          this.routes.push(route);
        } else {
          console.log('should add to all game runs');
        }
      }
    });
  }

  selectRoute(route: Route) {
    const dialog: SelectRouteDialog = this.dialog.open(
      SelectRouteDialogComponent,
      { data: route }
    );
    dialog.afterClosed().subscribe(res => {
      if (res) {
        const pokemon: NuzlockePokemon = {
          routeName: route.location,
          name: res.pokemon,
          nickName: res.nickname,
          status: res.caught ? PokemonStatus.Boxed : PokemonStatus.Missed
        };
        this.nuzlockeService.addEncounter(pokemon).then(() => {
          this.routes = this.routes.filter(
            ({ location }) => location !== route.location
          );
        });
      }
    });
  }
}
