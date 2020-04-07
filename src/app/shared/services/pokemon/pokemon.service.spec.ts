import { PokemonService } from './pokemon.service';
import databaseServiceMock from '@mocks/database.service.mock';
jest.mock('@models/pokemon');
jest.mock('@util/name', () => ({
  __esModule: true,
  NameUtility: {
    replaceImageCharacters: (arg: string) => arg
  }
}));
jest.mock('@resources/pokemon', () => ({
  __esModule: true,
  default: [{ name: 'item' }]
}));

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    service = new PokemonService(databaseServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should create db', async () => {
    databaseServiceMock.pokemon.count = jest.fn(() => Promise.resolve(3));
    databaseServiceMock.pokemon.bulkAdd = jest.fn();
    await service.createDatabase();
    expect(databaseServiceMock.pokemon.bulkAdd).not.toBeCalled();
  });

  test('should create db and add', async () => {
    databaseServiceMock.pokemon.count = jest.fn(() => Promise.resolve(0));
    databaseServiceMock.pokemon.bulkAdd = jest.fn(() => Promise.resolve());
    await service.createDatabase();
    expect(databaseServiceMock.pokemon.bulkAdd).toBeCalled();
  });

  test('should get pokemon', async () => {
    databaseServiceMock.pokemon.toArray = jest.fn(() => Promise.resolve(['']));
    expect(
      (await service.getPokemon()).find(mon => mon.name === 'Empty Team Member')
    ).toBeTruthy();
  });

  test('should find by name', async () => {
    service.getPokemon = jest.fn(() =>
      Promise.resolve([{ name: 'abc' }, { name: 'ABC' }])
    ) as any;
    expect((await service.find(['ABc'])).length).toBe(2);
  });

  test('should get all pokemon names', async () => {
    databaseServiceMock.pokemon.toArray = jest.fn(() => [
      { name: 'a' },
      { name: 'b' }
    ]);
    expect(await service.getPokemonNames()).toEqual(['a', 'b']);
  });
});
