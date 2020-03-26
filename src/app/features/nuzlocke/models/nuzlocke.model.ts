import { NuzlockeStatus } from './status.model';
import { GameGroup } from '@models/pokemon/game-groups';

export interface Nuzlocke {
  _id?: string;
  runName: string;
  game: GameGroup;
  random: boolean;
  startDate: Date;
  badgesEarned: number[];
  status: NuzlockeStatus;
}
