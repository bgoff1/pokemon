import { NuzlockeResolverService } from './nuzlocke-resolver.service';
import routerServiceMock from '@mocks/router.service.mock';

describe('NuzlockeResolverService', () => {
  let service: NuzlockeResolverService;

  beforeEach(() => {
    service = new NuzlockeResolverService({} as any, routerServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
