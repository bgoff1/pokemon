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
  ]
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
    service.changeTab('home');
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
});
