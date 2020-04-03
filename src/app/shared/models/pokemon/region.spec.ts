jest.mock('@util/enum', () => ({
  __esModule: true,
  enumValues: (myEnum: any) => ['Kanto'],
  enumKeys: (myEnum: any) => ['1']
}));
import { getRegionName, Region, getRegion } from './region';

describe('Region', () => {
  test('should get name gsc', () => {
    expect(getRegionName(Region[Region.Johto] as keyof typeof Region)).toEqual(
      'Johto (Gold, Silver, Crystal)'
    );
  });
  test('should get name hg ss', () => {
    expect(
      getRegionName(Region[Region.UpdatedJohto] as keyof typeof Region)
    ).toEqual('Johto (HeartGold and SoulSilver)');
  });
  test('should get name dp', () => {
    expect(getRegionName(Region[Region.Sinnoh] as keyof typeof Region)).toEqual(
      'Sinnoh (Diamond and Pearl)'
    );
  });
  test('should get name plat', () => {
    expect(
      getRegionName(Region[Region.ExtendedSinnoh] as keyof typeof Region)
    ).toEqual('Sinnoh (Platinum)');
  });

  test('should get name bw2', () => {
    expect(
      getRegionName(Region[Region.UpdatedUnova] as keyof typeof Region)
    ).toEqual('Unova (Black 2 and White 2)');
  });

  test('should get name bw', () => {
    expect(getRegionName(Region[Region.Unova] as keyof typeof Region)).toEqual(
      'Unova (Black and White)'
    );
  });

  test('should get name oras', () => {
    expect(
      getRegionName(Region[Region.UpdatedHoenn] as keyof typeof Region)
    ).toEqual('Hoenn (Omega Ruby and Alpha Sapphire)');
  });

  test('should get name alola', () => {
    expect(
      getRegionName(Region[Region.UpdatedAlola] as keyof typeof Region)
    ).toEqual('Alola (Ultra Sun and Ultra Moon)');
  });

  test('should get name default', () => {
    expect(getRegionName(Region[Region.Kalos] as keyof typeof Region)).toEqual(
      'Kalos'
    );
  });

  test('should get region gsc', () => {
    expect(getRegion('Johto (Gold, Silver, Crystal)')).toBe(Region.Johto);
  });
  test('should get region hg ss', () => {
    expect(getRegion('Johto (HeartGold and SoulSilver)')).toBe(
      Region.UpdatedJohto
    );
  });
  test('should get region dp', () => {
    expect(getRegion('Sinnoh (Diamond and Pearl)')).toBe(Region.Sinnoh);
  });
  test('should get region plat', () => {
    expect(getRegion('Sinnoh (Platinum)')).toBe(Region.ExtendedSinnoh);
  });

  test('should get region bw2', () => {
    expect(getRegion('Unova (Black 2 and White 2)')).toBe(Region.UpdatedUnova);
  });

  test('should get region bw', () => {
    expect(getRegion('Unova (Black and White)')).toBe(Region.Unova);
  });

  test('should get region oras', () => {
    expect(getRegion('Hoenn (Omega Ruby and Alpha Sapphire)')).toBe(
      Region.UpdatedHoenn
    );
  });

  test('should get region alola', () => {
    expect(getRegion('Alola (Ultra Sun and Ultra Moon)')).toBe(
      Region.UpdatedAlola
    );
  });

  test('should get region default', () => {
    expect(getRegion('Kalos')).toBe(Region.Kalos);
  });
});
