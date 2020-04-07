jest.mock('@util/enum');
import { RoutesService } from './routes.service';
import nuzlockeServiceMock from '@features/nuzlocke/mocks/nuzlocke.service.mock';
import databaseServiceMock from '@mocks/database.service.mock';

describe('RoutesService', () => {
  let service: RoutesService;

  beforeEach(() => {
    service = new RoutesService(nuzlockeServiceMock, databaseServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should create the database', async () => {
    databaseServiceMock.routes.count = jest.fn(() => 0);
    databaseServiceMock.routes.bulkAdd = jest.fn(() => Promise.resolve());
    await service.createDatabase();
    expect(databaseServiceMock.routes.bulkAdd).toBeCalled();
  });

  test('should not add entries if there are entries', async () => {
    databaseServiceMock.routes.count = jest.fn(() => 1);
    databaseServiceMock.routes.bulkAdd = jest.fn(() => Promise.resolve());
    await service.createDatabase();
    expect(databaseServiceMock.routes.bulkAdd).not.toBeCalled();
  });

  test('should get all routes', async () => {
    databaseServiceMock.routes.where = jest.fn(() => ({
      toArray: () => Promise.resolve([{ order: 2 }, { order: 1 }])
    }));
    const routes = await service.getRoutes({ a: 1 } as any);
    expect(nuzlockeServiceMock.currentRun).toEqual({ a: 1 });
    expect(routes).toEqual([{ order: 1 }, { order: 2 }]);
  });

  test('should be able to add a route to a game', async () => {
    databaseServiceMock.routes.add = jest.fn();
    nuzlockeServiceMock.convertDialogToRoute = jest.fn(() => Promise.resolve());
    await service.addRouteToGame({} as any);
    expect(databaseServiceMock.routes.add).toBeCalled();
  });
});
