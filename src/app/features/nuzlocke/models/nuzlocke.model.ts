import { GameGroup } from '@models/pokemon/game-groups';
import { NuzlockeStatus } from './status.model';
import { Route } from './route.model';
import { Pokemon } from './pokemon.model';

export interface Nuzlocke {
  id?: number;
  runName: string;
  game: GameGroup;
  random: boolean;
  startDate: Date;
  badgesEarned: number[];
  extraRoutes: Route[];
  pokemon: Pokemon[];
  status: NuzlockeStatus;
}

export interface CreateNuzlocke {
  runName: string;
  game: GameGroup;
  random: boolean;
}
