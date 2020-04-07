import { Location } from '@models/game-location.model';
import { GameGroup } from '@models/pokemon/game-groups';
import { Pokemon } from './pokemon.model';

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

export interface DisplayRoute extends Route {
  visited: boolean;
  capturedPokemon?: Pokemon;
  random: boolean;
}
