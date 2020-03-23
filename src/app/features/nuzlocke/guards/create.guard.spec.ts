import { CreateGuard } from './create.guard';
import routeServiceMock from '@mocks/route.service.mock';

describe('CreateGuard', () => {
  let guard: CreateGuard;

  beforeEach(() => {
    guard = new CreateGuard({} as any, routeServiceMock);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
