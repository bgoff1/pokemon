import { enumKeys, enumValues } from '@models/util/enum';

export enum Type {
  Normal,
  Fire,
  Fighting,
  Water,
  Flying,
  Grass,
  Poison,
  Electric,
  Ground,
  Psychic,
  Rock,
  Ice,
  Bug,
  Dragon,
  Ghost,
  Dark,
  Steel,
  Fairy,
  Unknown
}

export const types = enumKeys(Type);
export const typeNames = enumValues(Type).filter(name => name !== 'Unknown');
