import { getRegionName, Region } from './region';

describe('Region', () => {
  test('should get gsc', () => {
    expect(
      getRegionName(Region[Region.OriginalJohto] as keyof typeof Region)
    ).toEqual('Johto (Gold, Silver, Crystal)');
  });
  test('should get hg ss', () => {
    expect(
      getRegionName(Region[Region.UpdatedJohto] as keyof typeof Region)
    ).toEqual('Johto (HeartGold and SoulSilver)');
  });
  test('should get dp', () => {
    expect(
      getRegionName(Region[Region.OriginalSinnoh] as keyof typeof Region)
    ).toEqual('Sinnoh (Diamond and Pearl)');
  });
  test('should get plat', () => {
    expect(
      getRegionName(Region[Region.ExtendedSinnoh] as keyof typeof Region)
    ).toEqual('Sinnoh (Platinum)');
  });

  test('should get bw2', () => {
    expect(
      getRegionName(Region[Region.UpdatedUnova] as keyof typeof Region)
    ).toEqual('Unova (Black 2 and White 2)');
  });

  test('should get bw', () => {
    expect(
      getRegionName(Region[Region.OriginalUnova] as keyof typeof Region)
    ).toEqual('Unova (Black and White)');
  });

  test('should get oras', () => {
    expect(
      getRegionName(Region[Region.UpdatedHoenn] as keyof typeof Region)
    ).toEqual('Hoenn (Omega Ruby and Alpha Sapphire)');
  });

  test('should get alola', () => {
    expect(
      getRegionName(Region[Region.UpdatedAlola] as keyof typeof Region)
    ).toEqual('Alola (Ultra Sun and Ultra Moon)');
  });

  test('should get default', () => {
    expect(getRegionName(Region[Region.Kalos] as keyof typeof Region)).toEqual(
      'Kalos'
    );
  });
});
