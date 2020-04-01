jest.mock('@util/enum', () => ({
  __esModule: true,
  enumValues: (myEnum: any) => ['RedBlue'],
  enumKeys: jest.fn()
}));
import { formatGameName, GameGroup, getRegionFromGame } from './game-groups';
import { Region } from './region';

describe('Game Groups', () => {
  test('should format game name bw2', () => {
    expect(formatGameName(GameGroup.Black2White2)).toEqual('Black 2 / White 2');
  });

  test('should format game name frlg', () => {
    expect(formatGameName(GameGroup.FireRedLeafGreen)).toEqual(
      'FireRed / LeafGreen'
    );
  });

  test('should format game name hgss', () => {
    expect(formatGameName(GameGroup.HeartGoldSoulSilver)).toEqual(
      'HeartGold / SoulSilver'
    );
  });

  test('should format game name oras', () => {
    expect(formatGameName(GameGroup.OmegaRubyAlphaSapphire)).toEqual(
      'Omega Ruby / Alpha Sapphire'
    );
  });

  test('should format game name usum', () => {
    expect(formatGameName(GameGroup.UltraSunUltraMoon)).toEqual(
      'Ultra Sun / Ultra Moon'
    );
  });

  test('should format game name default', () => {
    expect(formatGameName(GameGroup.GoldSilver)).toEqual('Gold / Silver');
  });

  test('should convert to enum first', () => {
    expect(formatGameName('DiamondPearl')).toEqual('Diamond / Pearl');
  });

  test('should get region from game (kanto)', () => {
    expect(getRegionFromGame(GameGroup.RedBlue)).toBe(Region.Kanto);
  });

  test('should get region from game (johto)', () => {
    expect(getRegionFromGame(GameGroup.Crystal)).toBe(Region.Johto);
  });

  test('should get region from game (hoenn)', () => {
    expect(getRegionFromGame(GameGroup.RubySapphire)).toBe(Region.Hoenn);
  });

  test('should get region from game (sinnoh)', () => {
    expect(getRegionFromGame(GameGroup.DiamondPearl)).toBe(Region.Sinnoh);
  });

  test('should get region from game (unova)', () => {
    expect(getRegionFromGame(GameGroup.BlackWhite)).toBe(Region.Unova);
  });

  test('should get region from game (kalos)', () => {
    expect(getRegionFromGame(GameGroup.XY)).toBe(Region.Kalos);
  });

  test('should get region from game (alola)', () => {
    expect(getRegionFromGame(GameGroup.SunMoon)).toBe(Region.Alola);
  });

  test('should get region from game (galar)', () => {
    expect(getRegionFromGame(GameGroup.SwordShield)).toBe(Region.Galar);
  });
});
