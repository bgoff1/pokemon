import { Game } from './game';

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

export function getGamesFromGameGroup(
  gameGroup: GameGroup
): [Game, Game] | [Game] {
  switch (gameGroup) {
    case GameGroup.RedBlue:
      return [Game.Red, Game.Blue];
    case GameGroup.Yellow:
      return [Game.Yellow];
    case GameGroup.GoldSilver:
      return [Game.Gold, Game.Silver];
    case GameGroup.Crystal:
      return [Game.Crystal];
    case GameGroup.RubySapphire:
      return [Game.Ruby, Game.Sapphire];
    case GameGroup.Emerald:
      return [Game.Emerald];
    case GameGroup.FireRedLeafGreen:
      return [Game.FireRed, Game.LeafGreen];
    case GameGroup.DiamondPearl:
      return [Game.Diamond, Game.Pearl];
    case GameGroup.Platinum:
      return [Game.Platinum];
    case GameGroup.HeartGoldSoulSilver:
      return [Game.HeartGold, Game.SoulSilver];
    case GameGroup.BlackWhite:
      return [Game.Black, Game.White];
    case GameGroup.Black2White2:
      return [Game.Black2, Game.White2];
    case GameGroup.XY:
      return [Game.X, Game.Y];
    case GameGroup.OmegaRubyAlphaSapphire:
      return [Game.OmegaRuby, Game.AlphaSapphire];
    case GameGroup.SunMoon:
      return [Game.Sun, Game.Moon];
    case GameGroup.UltraSunUltraMoon:
      return [Game.UltraSun, Game.UltraMoon];
    case GameGroup.SwordShield:
      return [Game.Sword, Game.Shield];
    case GameGroup.Custom:
      return [Game.Red];
  }
}
