export interface NuzlockePokemon {
  name: string;
  nickName?: string;
  routeName: string;
  status: PokemonStatus;
}

export enum PokemonStatus {
  Party,
  Boxed,
  Heaven,
  Missed
}
