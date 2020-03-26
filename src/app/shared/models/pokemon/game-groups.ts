import { enumValues } from '@models/util/enum';
import { Region } from './region';

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
  SwordShield,
  Custom
}

export function formatGameName(game: string | GameGroup): string {
  if (typeof game !== 'string') {
    game = GameGroup[game];
  }
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
        .slice(1)
        .trim();
  }
}

export const games = enumValues(GameGroup).map(game => ({
  game: GameGroup[game],
  displayName: formatGameName(game)
}));

export function getRegionFromGame(game: GameGroup): Region {
  switch (game) {
    case GameGroup.RedBlue:
    case GameGroup.Yellow:
    case GameGroup.FireRedLeafGreen:
      return Region.Kanto;
    case GameGroup.Crystal:
    case GameGroup.GoldSilver:
    case GameGroup.HeartGoldSoulSilver:
      return Region.Johto;
    case GameGroup.RubySapphire:
    case GameGroup.OmegaRubyAlphaSapphire:
    case GameGroup.Emerald:
      return Region.Hoenn;
    case GameGroup.DiamondPearl:
    case GameGroup.Platinum:
      return Region.Sinnoh;
    case GameGroup.BlackWhite:
    case GameGroup.Black2White2:
      return Region.Unova;
    case GameGroup.XY:
      return Region.Kalos;
    case GameGroup.SunMoon:
    case GameGroup.UltraSunUltraMoon:
      return Region.Alola;
    case GameGroup.SwordShield:
      return Region.Galar;
    default:
      return Region.Kanto;
  }
}
