import { CreateGuard } from './create.guard';
import routerServiceMock from '@mocks/router.service.mock';

describe('CreateGuard', () => {
  let guard: CreateGuard;

  beforeEach(() => {
    guard = new CreateGuard({} as any, routerServiceMock);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
