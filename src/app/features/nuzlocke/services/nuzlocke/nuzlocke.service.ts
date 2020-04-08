import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DatabaseService } from '@services/database/database.service';
import { games } from '@models/pokemon/game-groups';
import { CreateRouteDialogResult } from '@nuzlocke/models/create-route-dialog.model';
import { Route, EncounterType } from '@nuzlocke/models/route.model';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { NuzlockeStatus } from '@nuzlocke/models/status.model';
import { Nuzlocke, CreateNuzlocke } from '@nuzlocke/models/nuzlocke.model';

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
    const game: Nuzlocke = this.startGame(run);
    await this.databaseService.nuzlockes.add(game).then(res => {
      game.id = res;
    });
    return game;
  }

  async deleteNuzlocke(run: Nuzlocke) {
    await this.databaseService.nuzlockes.delete(run.id);
  }

  async updateNuzlocke(run: Nuzlocke, res: { name: string; random: boolean }) {
    await this.databaseService.nuzlockes.update(run.id, {
      runName: res.name,
      random: res.random
    });
  }

  startGame(run: CreateNuzlocke): Nuzlocke {
    return {
      runName: run.runName,
      game: run.game,
      random: run.random,
      badgesEarned: [],
      extraRoutes: [],
      ignoreRoutes: [],
      pokemon: [],
      startDate: new Date(),
      status: NuzlockeStatus.Started
    };
  }

  async convertDialogToRoute(input: CreateRouteDialogResult): Promise<Route> {
    return {
      type: EncounterType.Encounter,
      order: await this.databaseService.countRoutesInGame(this.currentRun.game),
      pokemon: [],
      game: this.currentRun.game,
      location: input.route
    };
  }

  async addRouteToCurrentGame(input: CreateRouteDialogResult) {
    const route = await this.convertDialogToRoute(input);
    this.currentRun.extraRoutes.push(route);
    await this.databaseService.nuzlockes.put(this.currentRun);
  }

  async removeRouteFromRun(route: Route) {
    this.currentRun.ignoreRoutes.push(route);
    await this.databaseService.nuzlockes.put(this.currentRun);
  }

  async addEncounter(pokemon: Pokemon) {
    const partyCount = this.currentRun.pokemon.filter(
      mon => mon.status === Status.Party
    ).length;
    if (partyCount < 6 && pokemon.status !== Status.Missed) {
      pokemon.status = Status.Party;
    }
    this.currentRun.pokemon = [
      ...this.currentRun.pokemon.filter(mon => mon.routeId !== pokemon.routeId),
      pokemon
    ];
    await this.databaseService.nuzlockes.put(this.currentRun);
  }

  async updateEncounter(pokemon: Pokemon) {
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
    await this.databaseService.nuzlockes.put(this.currentRun);
    this.update.next(this.currentRun);
  }

  get gameNames() {
    return games;
  }
}
