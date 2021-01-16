import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DeleteRouteDialog } from '@features/nuzlocke/models/delete-route-dialog.model';
import { CreateRouteDialog } from '@nuzlocke/models/create-route-dialog.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { RouteData } from '@nuzlocke/models/route-data.model';
import { DisplayRoute, Route } from '@nuzlocke/models/route.model';
import { SelectRouteDialog } from '@nuzlocke/models/select-route-dialog.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { RoutesService } from '@nuzlocke/services/routes/routes.service';
import { Observable } from 'rxjs';
import { CreateRouteDialogComponent } from './create-route-dialog/create-route-dialog.component';
import { DeleteRouteDialogComponent } from './delete-route-dialog/delete-route-dialog.component';
import { SelectRouteDialogComponent } from './select-route-dialog/select-route-dialog.component';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  routes: DisplayRoute[] = [];
  nuzlocke!: Nuzlocke;
  loaded = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly routesService: RoutesService,
    private readonly nuzlockeService: NuzlockeService,
    private readonly dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    await this.routesService.createDatabase();
    (this.activatedRoute.data as Observable<RouteData>).subscribe(
      ({ nuzlocke }: RouteData) => {
        this.nuzlocke = nuzlocke;
        const filter = localStorage.getItem('route filter');
        this.updateAvailableRoutes(filter ? filter === 'true' : true);
      }
    );
  }

  async updateAvailableRoutes(filter = true): Promise<void> {
    const routes = await this.routesService.getRoutes(this.nuzlocke);

    this.routes = [...routes, ...this.nuzlocke.extraRoutes]
      .filter(
        (route) =>
          !this.nuzlocke.ignoreRoutes.map((r) => r.id).includes(route.id)
      )
      .map((route) => {
        return {
          ...route,
          visited: this.nuzlocke.pokemon.some(
            (pokemon) => pokemon.routeName === route.location
          ),
          capturedPokemon: this.nuzlocke.pokemon.find(
            (mon) => mon.routeName === route.location
          ),
          random: this.nuzlocke.random
        };
      });

    localStorage.setItem('route filter', filter ? 'true' : 'false');
    if (filter) {
      this.routes = this.routes.filter((route) => !route.visited);
    }

    this.setUpSorting();
  }

  setUpSorting(): void {
    if (localStorage.getItem('route sorting') === null) {
      localStorage.setItem('route sorting', 'true');
    }
    this.updateSortingMethod();
  }

  toggleSortingMethod(): void {
    localStorage.setItem('route sorting', this.sortByOrder ? 'false' : 'true');
    this.updateSortingMethod();
  }

  updateSortingMethod(): void {
    if (this.sortByOrder) {
      this.routes = this.routes.sort((a, b) => a.order - b.order);
    } else {
      const giftOrStaticRegex = /(Gift|Static) - /;

      this.routes = this.routes.sort((a, b) => {
        const locationA = a.location.replace(giftOrStaticRegex, '').trim();
        const locationB = b.location.replace(giftOrStaticRegex, '').trim();

        return locationA.localeCompare(locationB);
      });
    }

    this.loaded = true;
  }

  addRoute(): void {
    const dialog: CreateRouteDialog = this.dialog.open(
      CreateRouteDialogComponent,
      { width: '80%' }
    );
    dialog.afterClosed().subscribe(async (res) => {
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

  async addEncounter(pokemon: Pokemon, route: Route): Promise<void> {
    pokemon.routeId = route.id;
    await this.nuzlockeService.addEncounter(pokemon);
    this.routes = this.routes.filter(
      ({ location }) => location !== route.location
    );
  }

  selectRoute(route: DisplayRoute): void {
    const dialog: SelectRouteDialog = this.dialog.open(
      SelectRouteDialogComponent,
      {
        data: {
          ...route,
          random: this.nuzlocke.random,
          ownedPokemon: this.nuzlocke.pokemon.map((mon) =>
            mon.name.toLowerCase()
          )
        },
        width: '80%'
      }
    );
    dialog.afterClosed().subscribe((res) => {
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

  showDelete(route: DisplayRoute): void {
    const dialog: DeleteRouteDialog = this.dialog.open(
      DeleteRouteDialogComponent,
      { data: { name: route.location }, width: '80%' }
    );
    dialog.afterClosed().subscribe(async (res) => {
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

  private get sortByOrder(): boolean {
    const sorting = localStorage.getItem('route sorting');
    return sorting ? sorting === 'true' : true;
  }

  get opposingSortingMethod(): 'Sort By Name' | 'Sort By Order' {
    if (this.sortByOrder) {
      return 'Sort By Name';
    } else {
      return 'Sort By Order';
    }
  }
}
