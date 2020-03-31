import { Injectable } from '@angular/core';
import {
  Nuzlocke,
  CreateNuzlocke,
  startGame
} from '../../models/nuzlocke.model';
import { games } from '@models/pokemon/game-groups';
import { Subject } from 'rxjs';
import { CreateRouteDialogResult } from '@features/nuzlocke/components/routes/models/create-route-dialog.model';
import {
  Route,
  RouteEncounterType
} from '@features/nuzlocke/models/route.model';
import {
  NuzlockePokemon,
  PokemonStatus
} from '@features/nuzlocke/models/nuzlocke-pokemon.model';
import { DatabaseService } from '@services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeService {
  constructor(private readonly databaseService: DatabaseService) {}

  currentRun: Nuzlocke;

  private update = new Subject<Nuzlocke>();
  get update$() {
    return this.update.asObservable();
  }

  async hasNuzlockeSaved(): Promise<boolean> {
    return (await this.databaseService.nuzlockes.count()) > 0;
  }

  async getSaves(): Promise<Nuzlocke[]> {
    return this.databaseService.nuzlockes.toArray();
  }

  async createNuzlocke(run: CreateNuzlocke): Promise<Nuzlocke> {
    const game: Nuzlocke = startGame(run);
    await this.databaseService.nuzlockes.add(game).then(res => {
      game.id = res;
    });
    return game;
  }

  convertRouteDialogToRoute(routeDialog: CreateRouteDialogResult): Route {
    return {
      type: RouteEncounterType.Encounter,
      order: -1,
      pokemon: [],
      game: this.currentRun.game,
      location: routeDialog.route
    };
  }

  async addRouteToCurrentGame(extraRoute: Route) {
    this.currentRun.extraRoutes.push(extraRoute);
    await this.databaseService.nuzlockes.put(this.currentRun);
  }

  async addEncounter(pokemon: NuzlockePokemon) {
    if (this.currentRun.pokemon.length === 0) {
      pokemon.status = PokemonStatus.Party;
    }
    this.currentRun.pokemon.push(pokemon);
    await this.databaseService.nuzlockes.put(this.currentRun);
  }

  async updateEncounter(pokemon: NuzlockePokemon) {
    const pokemonEntry = this.currentRun.pokemon.find(
      mon =>
        mon.name === pokemon.name &&
        mon.nickName === pokemon.nickName &&
        mon.routeName === pokemon.routeName
    );
    pokemonEntry.status = pokemon.status;
    await this.databaseService.nuzlockes.put(this.currentRun);
  }

  async earnBadge(badgeNumber: number) {
    if (this.currentRun.badgesEarned.includes(badgeNumber)) {
      this.currentRun.badgesEarned = this.currentRun.badgesEarned.filter(
        num => badgeNumber !== num
      );
    } else {
      this.currentRun.badgesEarned.push(badgeNumber);
    }
    this.databaseService.nuzlockes.put(this.currentRun).then(() => {
      this.update.next(this.currentRun);
    });
  }

  get gameNames() {
    return games;
  }
}
