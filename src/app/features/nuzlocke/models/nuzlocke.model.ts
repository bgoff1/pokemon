import { Game } from '@models/pokemon/game';
import { NuzlockeStatus } from './status.model';
import { Route } from './route.model';
import { Pokemon } from './pokemon.model';

export interface Nuzlocke {
  id?: number;
  runName: string;
  game: Game;
  random: boolean;
  startDate: Date;
  badgesEarned: number[];
  extraRoutes: Route[];
  ignoreRoutes: Route[];
  pokemon: Pokemon[];
  status: NuzlockeStatus;
}

export interface CreateNuzlocke {
  runName: string;
  game: Game;
  random: boolean;
}
