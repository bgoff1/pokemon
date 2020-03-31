import { GameGroup } from '@models/pokemon/game-groups';
import { Location } from '@models/game-location.model';

export interface Route extends Location {
  id?: number;
  location: string;
  pokemon: string[];
  type: RouteEncounterType;
  game: GameGroup;
}

export enum RouteEncounterType {
  Gift,
  Static,
  Encounter
}
