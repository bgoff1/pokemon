jest.mock('@util/enum');
import { CreateGuard } from './create.guard';
import routerServiceMock from '@mocks/router.service.mock';
import nuzlockeServiceMock from '../mocks/nuzlocke.service.mock';

describe('CreateGuard', () => {
  let guard: CreateGuard;

  beforeEach(() => {
    guard = new CreateGuard(nuzlockeServiceMock, routerServiceMock);
  });

  test('should be created', () => {
    expect(guard).toBeTruthy();
  });

  test('should ask service if you need to create', async () => {
    nuzlockeServiceMock.hasNuzlockeSaved = jest.fn(() => Promise.resolve(true));
    expect(await guard.canActivate()).toBe(true);
  });

  test('should cache the result', async () => {
    nuzlockeServiceMock.hasNuzlockeSaved = jest.fn(() => Promise.resolve(true));
    await guard.canActivate();

    await Promise.all([
      guard.canActivate(),
      guard.canActivate(),
      guard.canActivate(),
      guard.canActivate(),
      guard.canActivate(),
      guard.canActivate(),
      guard.canActivate(),
      guard.canActivate()
    ]);
    expect(nuzlockeServiceMock.hasNuzlockeSaved).toBeCalledTimes(1);
  });

  test('should redirect if you cannot access', async () => {
    routerServiceMock.canChangeTabs = true;
    routerServiceMock.redirect = jest.fn();
    nuzlockeServiceMock.hasNuzlockeSaved = jest.fn(() =>
      Promise.resolve(false)
    );
    await guard.canActivate();
    expect(routerServiceMock.canChangeTabs).toBe(false);
    expect(routerServiceMock.redirect).toBeCalled();
  });
});
