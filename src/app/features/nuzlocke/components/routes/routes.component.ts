import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RouteData } from '@nuzlocke/models/route-data.model';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { Route, DisplayRoute } from '@nuzlocke/models/route.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { CreateRouteDialog } from '@nuzlocke/models/create-route-dialog.model';
import { SelectRouteDialog } from '@nuzlocke/models/select-route-dialog.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { RoutesService } from '@nuzlocke/services/routes/routes.service';
import { CreateRouteDialogComponent } from './create-route-dialog/create-route-dialog.component';
import { SelectRouteDialogComponent } from './select-route-dialog/select-route-dialog.component';
import { DeleteRouteDialog } from '@features/nuzlocke/models/delete-route-dialog.model';
import { DeleteRouteDialogComponent } from './delete-route-dialog/delete-route-dialog.component';

@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  routes: DisplayRoute[] = [];
  nuzlocke: Nuzlocke;
  shouldFilter: boolean;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly routesService: RoutesService,
    private readonly nuzlockeService: NuzlockeService,
    private readonly dialog: MatDialog
  ) {}

  async ngOnInit() {
    await this.routesService.createDatabase();
    this.activatedRoute.data.subscribe(({ nuzlocke }: RouteData) => {
      this.nuzlocke = nuzlocke;
      const filter = localStorage.getItem('route filter');
      this.updateAvailableRoutes(filter ? filter === 'true' : true);
    });
  }

  async updateAvailableRoutes(filter = true) {
    const routes = await this.routesService.getRoutes(this.nuzlocke);

    this.routes = [...routes, ...this.nuzlocke.extraRoutes]
      .filter(
        route => !this.nuzlocke.ignoreRoutes.map(r => r.id).includes(route.id)
      )
      .map(route => {
        return {
          ...route,
          visited: this.nuzlocke.pokemon.some(
            pokemon => pokemon.routeName === route.location
          ),
          capturedPokemon: this.nuzlocke.pokemon.find(
            mon => mon.routeName === route.location
          ),
          random: this.nuzlocke.random
        };
      });

    localStorage.setItem('route filter', filter ? 'true' : 'false');
    if (filter) {
      this.routes = this.routes.filter(route => !route.visited);
    }
  }

  addRoute() {
    const dialog: CreateRouteDialog = this.dialog.open(
      CreateRouteDialogComponent
    );
    dialog.afterClosed().subscribe(async res => {
      if (res) {
        if (res.current) {
          this.nuzlockeService.addRouteToCurrentGame(res);
        } else {
          this.routesService.addRouteToGame(res);
        }
        this.updateAvailableRoutes();
      }
    });
  }

  async addEncounter(pokemon: Pokemon, route: Route) {
    pokemon.routeId = route.id;
    await this.nuzlockeService.addEncounter(pokemon);
    this.routes = this.routes.filter(
      ({ location }) => location !== route.location
    );
  }

  selectRoute(route: DisplayRoute) {
    const dialog: SelectRouteDialog = this.dialog.open(
      SelectRouteDialogComponent,
      { data: { ...route, random: this.nuzlocke.random } }
    );
    dialog.afterClosed().subscribe(res => {
      if (res) {
        const pokemon: Pokemon = {
          routeName: route.location,
          name: res.pokemon,
          nickname: res.nickname,
          status: res.caught ? Status.Boxed : Status.Missed
        };
        this.addEncounter(pokemon, route);
      }
    });
  }

  showDelete(route: DisplayRoute) {
    const dialog: DeleteRouteDialog = this.dialog.open(
      DeleteRouteDialogComponent,
      { data: { name: route.location } }
    );
    dialog.afterClosed().subscribe(async res => {
      if (res) {
        if (res.onlyFromCurrent) {
          this.nuzlockeService.removeRouteFromRun(route);
        } else {
          this.routesService.removeRouteFromGame(route);
        }
        this.updateAvailableRoutes();
      }
    });
  }
}
