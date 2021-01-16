import { Location } from '@models/game-location.model';
import { Game } from '@models/pokemon/game.model';
import { Pokemon } from './pokemon.model';

export interface Route extends Location {
  id?: number;
  location: string;
  pokemon: string[];
  type: EncounterType;
  game: Game;
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
  ownedPokemon?: string[];
}
