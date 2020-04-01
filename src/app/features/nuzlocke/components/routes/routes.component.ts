import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RouteData } from '@nuzlocke/models/route-data.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { Route } from '@nuzlocke/models/route.model';
import { RoutesService } from '@nuzlocke/services/routes/routes.service';
import { CreateRouteDialogComponent } from './create-route-dialog/create-route-dialog.component';
import { CreateRouteDialog } from './models/create-route-dialog.model';
import { SelectRouteDialog } from './models/select-route-dialog.model';
import { SelectRouteDialogComponent } from './select-route-dialog/select-route-dialog.component';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';

interface DisplayRoute extends Route {
  visited: boolean;
  capturedPokemon?: string;
}

@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  routes: DisplayRoute[] = [];
  nuzlocke: Nuzlocke;

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
      this.updateAvailableRoutes();
    });
  }

  async updateAvailableRoutes(filter = true) {
    const routes = await this.routesService.getRoutes(this.nuzlocke);
    this.routes = [...routes, ...this.nuzlocke.extraRoutes].map(route => {
      return {
        ...route,
        visited: this.nuzlocke.pokemon.some(
          pokemon => pokemon.routeName === route.location
        ),
        capturedPokemon: this.nuzlocke.pokemon.find(
          mon => mon.routeName === route.location
        )?.name
      };
    });
    if (filter) {
      this.routes = this.routes.filter(route => !route.visited);
    }
  }

  addRoute() {
    const dialog: CreateRouteDialog = this.dialog.open(
      CreateRouteDialogComponent
    );
    dialog.afterClosed().subscribe(res => {
      if (res) {
        const route = this.nuzlockeService.convertRouteDialogToRoute(res);
        if (res.current) {
          this.nuzlockeService.addRouteToCurrentGame(route);
          this.routes.push({ ...route, visited: false });
        } else {
          this.routesService.addRouteToGame(route);
          this.routes.push({ ...route, visited: false });
        }
      }
    });
  }

  async addEncounter(pokemon: Pokemon, route: Route) {
    await this.nuzlockeService.addEncounter(pokemon);
    this.routes = this.routes.filter(
      ({ location }) => location !== route.location
    );
  }

  openFilters() {
    console.log('opening filters');
  }

  selectRoute(route: Route) {
    const dialog: SelectRouteDialog = this.dialog.open(
      SelectRouteDialogComponent,
      { data: route }
    );
    dialog.afterClosed().subscribe(res => {
      if (res) {
        const pokemon: Pokemon = {
          routeName: route.location,
          name: res.pokemon,
          nickName: res.nickname,
          status: res.caught ? Status.Boxed : Status.Missed
        };
        this.addEncounter(pokemon, route);
      }
    });
  }
}
