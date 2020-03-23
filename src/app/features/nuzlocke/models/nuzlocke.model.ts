import { NuzlockeStatus } from './status.model';

export interface Nuzlocke {
  _id?: string;
  runName: string;
  game: string;
  random: boolean;
  startDate: Date;
  status: NuzlockeStatus;
}
