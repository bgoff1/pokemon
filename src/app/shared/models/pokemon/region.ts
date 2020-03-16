import { enumKeys, enumValues } from '@models/util/enum';

export enum Region {
  // 1
  Kanto,
  // 2
  OriginalJohto,
  // 3
  Hoenn,
  // 4
  OriginalSinnoh,
  UpdatedJohto,
  ExtendedSinnoh,
  // 5
  OriginalUnova,
  UpdatedUnova,
  // 6
  Kalos,
  UpdatedHoenn,
  // 7
  Alola,
  UpdatedAlola,
  // 8
  Galar,
  // Everything
  National
}

export const regions = enumKeys(Region);
export const regionNames = enumValues(Region);
