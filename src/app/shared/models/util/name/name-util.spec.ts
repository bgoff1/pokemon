import { NameReplacementUtility } from './name-util.model';

describe('Name Replacement Utility', () => {
  test('should replace characters in an image', () => {
    expect(NameReplacementUtility.replaceImageCharacters('nidoran ♂')).toEqual(
      'nidoran-m'
    );
  });

  test('should remove extras', () => {
    expect(
      NameReplacementUtility.trimRegionName('hide galarian meowth')
    ).toEqual('galar meowth');
  });

  test('should parse the region name (original-sinnoh)', () => {
    expect(NameReplacementUtility.parseRegionName('(diamond')).toEqual(
      'original-sinnoh'
    );
  });

  test('should parse region name (extended-sinnoh)', () => {
    expect(NameReplacementUtility.parseRegionName('(platinum')).toEqual(
      'extended-sinnoh'
    );
  });

  test('should parse region name (original-johto)', () => {
    expect(NameReplacementUtility.parseRegionName('johto')).toEqual(
      'original-johto'
    );
  });

  test('should replace spaces with -', () => {
    expect(NameReplacementUtility.parseRegionName('long name')).toEqual(
      'long-name'
    );
  });

  test('should strip extras', () => {
    expect(NameReplacementUtility.stripExtras('mega meowth')).toEqual('meowth');
  });

  test('should remove hide', () => {
    expect(NameReplacementUtility.removeHide('hide me')).toEqual('me');
  });

  test('should remove forms', () => {
    expect(NameReplacementUtility.removeForms('forms 222')).toEqual('222');
  });
});
