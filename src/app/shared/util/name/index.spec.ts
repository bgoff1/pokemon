import { NameUtility } from './index';

describe('Name Replacement Utility', () => {
  test('should replace characters in an image', () => {
    expect(NameUtility.replaceImageCharacters('nidoran ♂')).toEqual(
      'nidoran-m'
    );
  });

  test('should remove extras', () => {
    expect(NameUtility.trimRegionName('hide galarian meowth')).toEqual(
      'galar meowth'
    );
  });

  test('should strip extras', () => {
    expect(NameUtility.stripExtras('mega meowth')).toEqual('meowth');
  });

  test('should remove hide', () => {
    expect(NameUtility.removeHide('hide me')).toEqual('me');
  });

  test('should remove forms', () => {
    expect(NameUtility.removeForms('forms 222')).toEqual('222');
  });

  test('should get display name', () => {
    NameUtility.stripExtras = jest.fn(arg => arg);
    expect(NameUtility.getDisplayName('Empty Team Member')).toEqual(' ');
    expect(NameUtility.getDisplayName('Empty Team aMember')).toEqual(
      'Empty Team aMember'
    );
  });
});
