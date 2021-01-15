import { PokemonService } from './pokemon.service';
import databaseServiceMock from '@mocks/database.service.mock';
import pokemonImageServiceMock from '@mocks/pokemon-image.service.mock';

jest.mock('@models/pokemon');
jest.mock('@util/name', () => ({
  __esModule: true,
  titlecase: jest.fn(a => a)
}));
jest.mock('@resources/pokemon', () => ({
  __esModule: true,
  default: [{ name: 'item' }]
}));

describe('Pokemon Service', () => {
  let service: PokemonService;

  beforeEach(() => {
    service = new PokemonService(databaseServiceMock, pokemonImageServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should not create db if there are items in there', async () => {
    databaseServiceMock.pokemon.count = jest.fn(() => Promise.resolve(3));
    databaseServiceMock.pokemon.bulkAdd = jest.fn();
    await service.createDatabase();
    expect(databaseServiceMock.pokemon.bulkAdd).not.toBeCalled();
  });

  test('should create db if it is empty or does not exist', async () => {
    databaseServiceMock.pokemon.count = jest.fn(() => Promise.resolve(0));
    databaseServiceMock.pokemon.bulkAdd = jest.fn(() => Promise.resolve());
    await service.createDatabase();
    expect(databaseServiceMock.pokemon.bulkAdd).toBeCalled();
  });

  test('should get pokemon', async () => {
    databaseServiceMock.pokemon.toArray = jest.fn(() => Promise.resolve(['']));
    await service.getPokemon();
    expect(databaseServiceMock.pokemon.toArray).toBeCalled();
  });

  test('should get all pokemon names', async () => {
    databaseServiceMock.pokemon.toArray = jest.fn(() => [
      { name: 'a' },
      { name: 'b' }
    ]);
    expect(await service.getPokemonNames()).toEqual(['a', 'b']);
  });

  test('should find by name', async () => {
    service.getPokemon = jest.fn(() =>
      Promise.resolve([{ name: 'abc' }, { name: 'ABC' }])
    ) as any;
    expect((await service.find(['ABc'])).length).toBe(2);
  });

  test("should find a pokemon's evolutions", async () => {
    const arrayMock = jest.fn(() => Promise.resolve([null]));
    databaseServiceMock.pokemon.where = jest.fn(() => ({
      toArray: arrayMock
    }));
    expect(await service.findEvolutionNames('me')).toEqual([]);
  });

  test("should find a pokemon's evolutions", async () => {
    const arrayMock = jest.fn(() =>
      Promise.resolve([{ name: 'me', evolutionChain: 4 }, null])
    );
    databaseServiceMock.pokemon.where = jest.fn(() => ({
      toArray: arrayMock
    }));
    expect(await service.findEvolutionNames('me')).toEqual([]);
  });
});
