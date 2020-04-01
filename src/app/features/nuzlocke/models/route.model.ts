import { Location } from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';

export interface Route extends Location {
  id?: number;
  location: string;
  pokemon: string[];
  type: EncounterType;
  game: GameGroup;
}

export enum EncounterType {
  Gift,
  Static,
  Encounter
}
