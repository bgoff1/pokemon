import { enumKeys, enumValues } from '@models/util/enum';

export enum Region {
  // 1
  Kanto,
  // 2
  Johto,
  // 3
  Hoenn,
  // 4
  Sinnoh,
  UpdatedJohto,
  ExtendedSinnoh,
  // 5
  Unova,
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
    case 'Johto':
      return 'Johto (Gold, Silver, Crystal)';
    case 'Sinnoh':
      return 'Sinnoh (Diamond and Pearl)';
    case 'ExtendedSinnoh':
      return 'Sinnoh (Platinum)';
    case 'UpdatedJohto':
      return 'Johto (HeartGold and SoulSilver)';
    case 'UpdatedUnova':
      return 'Unova (Black 2 and White 2)';
    case 'Unova':
      return 'Unova (Black and White)';
    case 'UpdatedHoenn':
      return 'Hoenn (Omega Ruby and Alpha Sapphire)';
    case 'UpdatedAlola':
      return 'Alola (Ultra Sun and Ultra Moon)';
    default:
      return regionName;
  }
};
