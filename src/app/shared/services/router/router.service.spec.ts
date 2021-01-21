import { of } from 'rxjs';
import { RouterService } from './router.service';

describe('RouterService', () => {
  let service: RouterService;

  beforeEach(() => {
    service = new RouterService({ events: of([]) } as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
