import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { defaultFilter, Filter } from '@team/models/filter/filter.model';
import { PokemonInterface } from '@models/pokemon/pokemon.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { Route } from '@nuzlocke/models/route.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
  filters!: Dexie.Table<Filter, number>;
  pokemon!: Dexie.Table<PokemonInterface, number>;
  routes!: Dexie.Table<Route, number>;
  nuzlockes!: Dexie.Table<Nuzlocke, number>;

  constructor() {
    super('PokemonDatabase');
    this.version(1).stores({
      filters: '++id, filter, enabled, value',
      pokemon: '++id, name, generation',
      routes: '++id, location, type, game',
      nuzlockes: '++id, runName, game, random, status'
    });
    this.version(2).stores({
      filters: '++id, filter, enabled, value',
      pokemon: '++id, name, generation, evolutionChain',
      routes: '++id, location, type, game',
      nuzlockes: '++id, runName, game, random, status'
    });
  }

  async getFilter(key: number): Promise<Filter> {
    const value = await this.filters.get(key);
    return value ?? defaultFilter;
  }

  countRoutesInGame(game: any): Promise<number> {
    return this.routes.where({ game }).count();
  }
}
