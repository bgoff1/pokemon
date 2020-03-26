import { RoutesService } from './routes.service';

describe('RoutesService', () => {
  let service: RoutesService;

  beforeEach(() => {
    service = new RoutesService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
