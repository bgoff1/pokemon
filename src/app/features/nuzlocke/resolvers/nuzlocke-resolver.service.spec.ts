import { NuzlockeResolverService } from './nuzlocke-resolver.service';
import routeServiceMock from '@mocks/route.service.mock';

describe('NuzlockeResolverService', () => {
  let service: NuzlockeResolverService;

  beforeEach(() => {
    service = new NuzlockeResolverService({} as any, routeServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
