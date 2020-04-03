import { enumKeys, enumValues } from '@util/enum';

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

export type RegionDisplayName =
  | 'Kanto'
  | 'Hoenn'
  | 'Kalos'
  | 'Alola'
  | 'Galar'
  | 'National'
  | 'Johto (Gold, Silver, Crystal)'
  | 'Johto (HeartGold and SoulSilver)'
  | 'Sinnoh (Diamond and Pearl)'
  | 'Sinnoh (Platinum)'
  | 'Unova (Black 2 and White 2)'
  | 'Unova (Black and White)'
  | 'Hoenn (Omega Ruby and Alpha Sapphire)'
  | 'Alola (Ultra Sun and Ultra Moon)';

export const getRegionName = (
  regionName: keyof typeof Region
): RegionDisplayName => {
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

export const getRegion = (region: RegionDisplayName): Region => {
  switch (region) {
    case 'Alola (Ultra Sun and Ultra Moon)':
      return Region.UpdatedAlola;
    case 'Hoenn (Omega Ruby and Alpha Sapphire)':
      return Region.UpdatedHoenn;
    case 'Johto (Gold, Silver, Crystal)':
      return Region.Johto;
    case 'Johto (HeartGold and SoulSilver)':
      return Region.UpdatedJohto;
    case 'Sinnoh (Diamond and Pearl)':
      return Region.Sinnoh;
    case 'Sinnoh (Platinum)':
      return Region.ExtendedSinnoh;
    case 'Unova (Black 2 and White 2)':
      return Region.UpdatedUnova;
    case 'Unova (Black and White)':
      return Region.Unova;
    default:
      return Region[region];
  }
};
