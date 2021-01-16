import { enumValues } from '@util/enum/enum';
import { Region } from './region.model';

export enum Game {
  Red,
  Blue,
  Yellow,
  Gold,
  Silver,
  Crystal,
  Ruby,
  Sapphire,
  Emerald,
  FireRed,
  LeafGreen,
  Diamond,
  Pearl,
  Platinum,
  HeartGold,
  SoulSilver,
  Black,
  White,
  Black2,
  White2,
  X,
  Y,
  OmegaRuby,
  AlphaSapphire,
  Sun,
  Moon,
  UltraSun,
  UltraMoon,
  Sword,
  Shield
}

export function formatGameName(game: string | Game): string {
  if (typeof game !== 'string') {
    game = Game[game] as keyof typeof Game;
  }

  return game
    .split(/(Ultra|Alpha|Omega|\d)/)
    .join(' ')
    .trim();
}

export const games = enumValues<keyof typeof Game, Game>(Game).map(
  (game: keyof typeof Game) => ({
    game: Game[game],
    displayName: formatGameName(game)
  })
);

export function getRegionFromGame(game: Game): Region {
  switch (game) {
    case Game.Red:
    case Game.Blue:
    case Game.Yellow:
    case Game.FireRed:
    case Game.LeafGreen:
      return Region.Kanto;
    case Game.Crystal:
    case Game.Gold:
    case Game.Silver:
    case Game.HeartGold:
    case Game.SoulSilver:
      return Region.Johto;
    case Game.Ruby:
    case Game.Sapphire:
    case Game.OmegaRuby:
    case Game.AlphaSapphire:
    case Game.Emerald:
      return Region.Hoenn;
    case Game.Diamond:
    case Game.Pearl:
    case Game.Platinum:
      return Region.Sinnoh;
    case Game.Black:
    case Game.White:
      return Region.Unova;
    case Game.Black2:
    case Game.White2:
      return Region.UpdatedUnova;
    case Game.X:
    case Game.Y:
      return Region.Kalos;
    case Game.Sun:
    case Game.Moon:
    case Game.UltraSun:
    case Game.UltraMoon:
      return Region.Alola;
    case Game.Sword:
    case Game.Shield:
      return Region.Galar;
  }
}
