import routerMock from '@mocks/router.mock';
jest.mock('@resources/links', () => ({
  __esModule: true,
  tabs: [
    {
      path: 'a',
      links: [{ name: 'a', route: 'a' }]
    },
    {
      path: 'b',
      links: [
        { name: 'b', route: 'b' },
        { name: 'c', route: 'c' }
      ]
    }
  ],
  idTabs: ['b', 'c']
}));
import { RouterService } from './router.service';

describe('Route Service', () => {
  let service: RouterService;

  beforeEach(() => {
    service = new RouterService(routerMock);
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should tell if is exact route', () => {
    routerMock.url = '/home';
    expect(service.isExactRoute('/home')).toBe(true);
  });

  test('should toggle menu open on click on menu', () => {
    service.menuClick$.subscribe(val => {
      expect(val).toBe(true);
    });
    service.open = false;
    service.clickMenu();
  });

  test('should get route changes', () => {
    service.route$.subscribe(route => {
      expect(route).toEqual('abc');
    });
    routerMock.navigateByUrl('/abc/123');
  });

  test('should change tabs', () => {
    service.route$.subscribe(route => {
      expect(route).toEqual('/team-builder/options');
    });
    routerMock.url = '/team-builder/home';
    service.changeTab('options');
  });

  test('should not change tabs if on the route', () => {
    routerMock.url = '/team-builder/home';
    service.isExactRoute = jest.fn(() => true);
    service.changeTab('home');
    expect(routerMock.navigateByUrl).not.toBeCalled();
  });

  test('should not change tabs if on the route', () => {
    routerMock.url = '/team-builder/b';
    service.isExactRoute = jest.fn(() => false);
    service.changeTab('b', 1);
    expect(service.id).toBe(1);
    expect(routerMock.navigateByUrl).toBeCalledWith('team-builder/b/1');
  });

  test('should not change tabs if on the route', () => {
    routerMock.url = '/team-builder/b';
    service.isExactRoute = jest.fn(() => true);
    service.changeTab('b', 1);
    expect(routerMock.navigateByUrl).not.toBeCalled();
  });

  test('should not change tabs if on the route', () => {
    routerMock.url = '/team-builder/b';
    service.isExactRoute = jest.fn(() => true);
    service.changeTab('b');
    expect(service.id).toBeUndefined();
    expect(routerMock.navigateByUrl).not.toBeCalled();
  });

  test('should return if the route is the current one', () => {
    routerMock.url = '/nuzlocke';
    expect(service.isCurrentRoute('nuzlocke')).toBe(true);
  });

  test('should get tabs', () => {
    expect(service.getTabs('a')).toEqual([{ name: 'a', route: 'a' }]);
  });

  test('should get empty tab list if route is not found', () => {
    expect(service.getTabs('c')).toEqual([]);
  });

  test('should tell if the sidebar panel is in the current view', () => {
    service.isCurrentRoute = jest.fn(() => true);
    expect(service.isViewMode('b')).toBe(true);
  });

  test('should not tell the sidebar panel is in the current view if route is missing', () => {
    service.isCurrentRoute = jest.fn(() => true);
    expect(service.isViewMode('c')).toBe(false);
  });

  test('should directly redirect if needed', () => {
    service.isExactRoute = jest.fn(() => false);
    service.redirect('/my-route');
    expect(routerMock.navigateByUrl).toBeCalledWith('/my-route');
  });

  test('should not redirect if on that route', () => {
    service.isExactRoute = jest.fn(() => true);
    service.redirect('/my-route');
    expect(routerMock.navigateByUrl).not.toBeCalled();
  });
});
