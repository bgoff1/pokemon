import { Injectable } from '@angular/core';
import { formatGameName, Game, games } from '@models/pokemon/game.model';
import { CreateRouteDialogResult } from '@nuzlocke/models/create-route-dialog.model';
import { CreateNuzlocke, Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { EncounterType, Route } from '@nuzlocke/models/route.model';
import { NuzlockeStatus } from '@nuzlocke/models/status.model';
import { DatabaseService } from '@services/database/database.service';
import { enumValues } from '@util/enum/enum';
import { Observable, Subject } from 'rxjs';
import { DisplayGame } from '../../models/display-game.model';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeService {
  constructor(private readonly databaseService: DatabaseService) {}

  currentRun?: Nuzlocke;
  dataForNextRun?: { pokemon: Pokemon[]; previousRun: Game };

  private update = new Subject<Nuzlocke>();
  get update$(): Observable<Nuzlocke> {
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
    await this.databaseService.nuzlockes.add(game).then((res) => {
      game.id = res;
    });
    if (this.dataForNextRun) {
      this.currentRun = game;
      for (const pokemon of this.dataForNextRun.pokemon) {
        const route = `Import from ${Game[this.dataForNextRun.previousRun]} - ${
          pokemon.routeName
        }`;
        await this.addRouteToCurrentGame({
          route,
          current: true
        });
        pokemon.routeName = route;
        await this.addEncounter(pokemon, true);
      }
      this.dataForNextRun = undefined;
    }
    return game;
  }

  async deleteNuzlocke(run: Nuzlocke): Promise<void> {
    if (run.id) {
      await this.databaseService.nuzlockes.delete(run.id);
    }
  }

  async updateNuzlocke(
    run: Nuzlocke,
    res: { name: string; random: boolean }
  ): Promise<void> {
    if (run.id) {
      await this.databaseService.nuzlockes.update(run.id, {
        runName: res.name,
        random: res.random
      });
    }
  }

  async completeNuzlocke(
    run: Nuzlocke,
    finished = false,
    pokemonForNextRun: Pokemon[] = []
  ): Promise<void> {
    if (run.id) {
      await this.databaseService.nuzlockes.update(run.id, {
        status: finished ? NuzlockeStatus.Success : NuzlockeStatus.Failed
      });
      this.dataForNextRun = {
        pokemon: pokemonForNextRun,
        previousRun: run.game
      };
    }
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

  async generateTestSaves(): Promise<void> {
    for (const game of enumValues(Game)) {
      await this.createNuzlocke({
        runName: formatGameName(game),
        game: Game[game],
        random: false
      });
    }
  }

  async convertDialogToRoute(input: CreateRouteDialogResult): Promise<Route> {
    if (this.currentRun) {
      return {
        type: EncounterType.Encounter,
        order: await this.databaseService.countRoutesInGame(
          this.currentRun?.game
        ),
        pokemon: [],
        game: this.currentRun.game,
        location: input.route
      };
    } else {
      throw new Error();
    }
  }

  async addRouteToCurrentGame(input: CreateRouteDialogResult): Promise<Route> {
    const route = await this.convertDialogToRoute(input);
    if (this.currentRun) {
      this.currentRun.extraRoutes.push(route);
      await this.databaseService.nuzlockes.put(this.currentRun);
    }
    return route;
  }

  async removeRouteFromRun(route: Route): Promise<void> {
    if (this.currentRun) {
      this.currentRun.ignoreRoutes.push(route);
      await this.databaseService.nuzlockes.put(this.currentRun);
    }
  }

  async addEncounter(pokemon: Pokemon, retainStatus = false): Promise<void> {
    if (this.currentRun) {
      if (!retainStatus) {
        const partyCount = this.currentRun.pokemon.filter(
          (mon) => mon.status === Status.Party
        ).length;
        if (partyCount < 6 && pokemon.status !== Status.Missed) {
          pokemon.status = Status.Party;
        }
      }
      this.currentRun.pokemon = [
        ...this.currentRun.pokemon.filter(
          (mon) => mon.routeName !== pokemon.routeName
        ),
        pokemon
      ];
      await this.databaseService.nuzlockes.put(this.currentRun);
    }
  }

  async updateEncounter(
    pokemon: Pokemon,
    updatedData: { name?: string; nickname?: string; status?: Status }
  ): Promise<void> {
    if (this.currentRun) {
      const pokemonEntry = this.currentRun.pokemon.find(
        (mon) =>
          mon.name === pokemon.name &&
          mon.nickname === pokemon.nickname &&
          mon.routeName === pokemon.routeName
      );
      if (pokemonEntry) {
        let changed = false;
        if (
          updatedData.status !== undefined &&
          updatedData.status !== pokemonEntry?.status
        ) {
          changed = true;
          pokemonEntry.status = pokemon.status;
        }
        if (
          updatedData.name !== undefined &&
          updatedData.name !== pokemonEntry?.name
        ) {
          changed = true;
          pokemonEntry.name = updatedData.name;
        }
        if (
          updatedData.nickname &&
          updatedData.nickname !== pokemonEntry?.nickname
        ) {
          changed = true;
          pokemonEntry.nickname = updatedData.nickname;
        }
        if (changed) {
          await this.databaseService.nuzlockes.put(this.currentRun);
        }
      }
    }
  }

  async earnBadge(badgeNumber: number): Promise<void> {
    if (this.currentRun) {
      if (this.currentRun.badgesEarned.includes(badgeNumber)) {
        this.currentRun.badgesEarned = this.currentRun.badgesEarned.filter(
          (num) => badgeNumber !== num
        );
      } else {
        this.currentRun.badgesEarned.push(badgeNumber);
      }
      await this.databaseService.nuzlockes.put(this.currentRun);
      this.update.next(this.currentRun);
    }
  }

  get gameNames(): DisplayGame[] {
    return games;
  }
}
