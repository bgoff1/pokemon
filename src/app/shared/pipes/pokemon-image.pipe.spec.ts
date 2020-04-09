jest.mock('@util/name');
import { PokemonImagePipe } from './pokemon-image.pipe';

describe('Pokemon Image Pipe', () => {
  let pipe: PokemonImagePipe;
  beforeEach(() => {
    pipe = new PokemonImagePipe();
  });

  test('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  test('should return empty if falsy', () => {
    expect(pipe.transform('')).toBe('');
  });

  test('should return asset location for pokemon name', () => {
    expect(pipe.transform('me')).toEqual('assets/pokemon/me.png');
  });
});
