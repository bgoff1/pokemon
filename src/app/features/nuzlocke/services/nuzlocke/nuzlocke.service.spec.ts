jest.mock('@util/enum');
jest.mock('@models/pokemon/game-groups', () => ({
  __esModule: true,
  games: []
}));
import { NuzlockeService } from './nuzlocke.service';
import databaseServiceMock from '@mocks/database.service.mock';

describe('NuzlockeService', () => {
  let service: NuzlockeService;

  beforeEach(() => {
    service = new NuzlockeService(databaseServiceMock);
    service.currentRun = {} as any;
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get updates', () => {
    service.update$.subscribe(val => expect(val).toBeTruthy());
  });

  test('should get if there are any runs saved', async () => {
    databaseServiceMock.nuzlockes.count = jest.fn(() => Promise.resolve(0));
    expect(await service.hasNuzlockeSaved()).toBe(false);
  });

  test('should get saves', async () => {
    databaseServiceMock.nuzlockes.toArray = jest.fn(() => Promise.resolve([]));
    expect(await service.getSaves()).toEqual([]);
  });

  test('should create a game', () => {
    expect(
      service.startGame({ runName: 'a', game: 1, random: false }).status
    ).toEqual(0);
  });

  test('should create a game to the db', async () => {
    service.startGame = jest.fn(() => ({})) as any;
    databaseServiceMock.nuzlockes.add = jest.fn(() => Promise.resolve(1));
    expect(await service.createNuzlocke({} as any)).toEqual({ id: 1 });
  });

  test('should convert route dialog to route', () => {
    service.currentRun.game = 4;
    expect(
      service.convertRouteDialogToRoute({ route: '', current: false })
    ).toEqual({
      type: 2,
      order: -1,
      pokemon: [],
      game: 4,
      location: ''
    });
  });

  test('should add route to current game', async () => {
    service.currentRun.extraRoutes = [];
    databaseServiceMock.nuzlockes.put = jest.fn(() => Promise.resolve());
    await service.addRouteToCurrentGame({ location: 'a' } as any);
    expect(databaseServiceMock.nuzlockes.put).toBeCalled();
  });

  test('should add encounter', async () => {
    service.currentRun.pokemon = [];
    databaseServiceMock.nuzlockes.put = jest.fn(() => Promise.resolve());
    await service.addEncounter({ status: 1 } as any);
    expect(service.currentRun.pokemon.length).toBe(1);
  });

  test('should add encounter to box if party is full', async () => {
    service.currentRun.pokemon = [
      { status: 0 },
      { status: 0 },
      { status: 0 },
      { status: 0 },
      { status: 0 },
      { status: 0 }
    ] as any;
    databaseServiceMock.nuzlockes.put = jest.fn(() => Promise.resolve());
    await service.addEncounter({ status: 1 } as any);
    expect(service.currentRun.pokemon.length).toBe(7);
  });

  test('should update an encounter', async () => {
    service.currentRun.pokemon = [
      { name: 'a', routeName: 'a', nickName: '', status: 1 }
    ];
    databaseServiceMock.nuzlockes.put = jest.fn(() => Promise.resolve());
    await service.updateEncounter({
      name: 'a',
      routeName: 'a',
      nickName: '',
      status: 2
    });
    expect(databaseServiceMock.nuzlockes.put).toBeCalled();
  });

  test('should be able to earn a badge', async () => {
    service.currentRun.badgesEarned = [];
    service.update$.subscribe(val => expect(val).toBeTruthy());
    await service.earnBadge(1);
    expect(service.currentRun.badgesEarned).toEqual([1]);
    await service.earnBadge(1);
    expect(service.currentRun.badgesEarned).toEqual([]);
  });

  test('should get games', () => {
    expect(service.gameNames).toEqual([]);
  });
});
