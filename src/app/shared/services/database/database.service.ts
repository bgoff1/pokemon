import Dexie from 'dexie';
import { Filter } from '@features/team-builder/models/filter';
import { Injectable } from '@angular/core';
import { PokemonInterface } from '@models/pokemon';
import { Route } from '@features/nuzlocke/models/route.model';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';

@Injectable({ providedIn: 'root' })
export class DatabaseService extends Dexie {
  filters: Dexie.Table<Filter, number>;
  pokemon: Dexie.Table<PokemonInterface, number>;
  routes: Dexie.Table<Route, number>;
  nuzlockes: Dexie.Table<Nuzlocke, number>;

  constructor() {
    super('PokemonDatabase');
    this.version(1).stores({
      filters: '++id, filter, enabled, value',
      pokemon: '++id, name, generation',
      routes: '++id, location, type, game',
      nuzlockes: '++id, runName, game, random, status'
    });
  }
}
