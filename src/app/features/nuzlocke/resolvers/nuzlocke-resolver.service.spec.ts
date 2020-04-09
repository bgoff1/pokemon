jest.mock('@util/enum');
import { NuzlockeResolverService } from './nuzlocke-resolver.service';
import routerServiceMock from '@mocks/router.service.mock';
import nuzlockeServiceMock from '../mocks/nuzlocke.service.mock';

describe('Nuzlocke Resolver Service', () => {
  let service: NuzlockeResolverService;

  beforeEach(() => {
    service = new NuzlockeResolverService(
      nuzlockeServiceMock,
      routerServiceMock
    );
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should resolve the information', async () => {
    nuzlockeServiceMock.getSaves = jest.fn(() =>
      Promise.resolve([{ id: 1 }, { id: 2 }])
    );
    routerServiceMock.redirect = jest.fn();
    const result = await service.resolve({
      paramMap: { get: jest.fn(() => '0') }
    } as any);
    expect(routerServiceMock.redirect).toBeCalled();
    expect(result).toBe(null);
  });

  test('should cache and return the data resolved', async () => {
    nuzlockeServiceMock.getSaves = jest.fn(() =>
      Promise.resolve([{ id: 1 }, { id: 2 }])
    );
    const route: any = {
      paramMap: { get: jest.fn(() => '1') }
    };
    const result = await service.resolve(route);
    await Promise.all([
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route),
      service.resolve(route)
    ]);
    expect(nuzlockeServiceMock.getSaves).toBeCalledTimes(1);
    expect(result).toEqual({ id: 1 });
  });
});
