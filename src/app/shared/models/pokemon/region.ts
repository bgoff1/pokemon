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

export const getRegionName = (regionName: keyof typeof Region) => {
  switch (regionName) {
    case 'OriginalJohto':
      return 'Johto (Gold, Silver, Crystal)';
    case 'OriginalSinnoh':
      return 'Sinnoh (Diamond and Pearl)';
    case 'ExtendedSinnoh':
      return 'Sinnoh (Platinum)';
    case 'UpdatedJohto':
      return 'Johto (HeartGold and SoulSilver)';
    case 'UpdatedUnova':
      return 'Unova (Black 2 and White 2)';
    case 'OriginalUnova':
      return 'Unova (Black and White)';
    case 'UpdatedHoenn':
      return 'Hoenn (Omega Ruby and Alpha Sapphire)';
    case 'UpdatedAlola':
      return 'Alola (Ultra Sun and Ultra Moon)';
    default:
      return regionName;
  }
};
