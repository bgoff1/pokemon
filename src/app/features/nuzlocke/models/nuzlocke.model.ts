import { NuzlockeStatus } from './status.model';
import { GameGroup } from '@models/pokemon/game-groups';
import { Route } from './route.model';
import { NuzlockePokemon } from './nuzlocke-pokemon.model';

export interface Nuzlocke {
  id?: number;
  runName: string;
  game: GameGroup;
  random: boolean;
  startDate: Date;
  badgesEarned: number[];
  extraRoutes: Route[];
  pokemon: NuzlockePokemon[];
  status: NuzlockeStatus;
}

export interface CreateNuzlocke {
  runName: string;
  game: GameGroup;
  random: boolean;
}

export function startGame(run: CreateNuzlocke): Nuzlocke {
  return {
    runName: run.runName,
    game: run.game,
    random: run.random,
    badgesEarned: [],
    extraRoutes: [],
    pokemon: [],
    startDate: new Date(),
    status: NuzlockeStatus.Started
  };
}
