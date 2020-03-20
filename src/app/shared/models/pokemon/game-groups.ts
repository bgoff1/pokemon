import { enumValues } from '@models/util/enum';

export enum GameGroup {
  RedBlue,
  Yellow,
  GoldSilver,
  Crystal,
  RubySapphire,
  Emerald,
  FireRedLeafGreen,
  DiamondPearl,
  Platinum,
  HeartGoldSoulSilver,
  BlackWhite,
  Black2White2,
  XY,
  OmegaRubyAlphaSapphire,
  SunMoon,
  UltraSunUltraMoon,
  Custom
}

export function formatGameName(game: keyof typeof GameGroup): string {
  switch (game) {
    case 'Black2White2':
      return 'Black 2 / White 2';
    case 'FireRedLeafGreen':
      return 'FireRed / LeafGreen';
    case 'HeartGoldSoulSilver':
      return 'HeartGold / SoulSilver';
    case 'OmegaRubyAlphaSapphire':
      return 'Omega Ruby / Alpha Sapphire';
    case 'UltraSunUltraMoon':
      return 'Ultra Sun / Ultra Moon';
    default:
      return game
        .replace(/([A-Z])/g, ' / $1')
        .trim()
        .slice(1);
  }
}
export const games = enumValues(GameGroup).map(formatGameName);
