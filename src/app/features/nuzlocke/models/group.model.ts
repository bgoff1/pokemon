import { Pokemon, Status } from './pokemon.model';

export interface Group {
  title: keyof typeof Status;
  data: Pokemon[];
}
