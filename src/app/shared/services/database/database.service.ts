import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { PokemonInterface } from '@models/pokemon';
import { Filter } from '@team/models/filter';
import { Route } from '@nuzlocke/models/route.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';

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
