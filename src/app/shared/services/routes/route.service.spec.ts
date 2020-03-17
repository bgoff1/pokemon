import routerMock from '@mocks/router.mock';
import { RouteService } from './route.service';

describe('Route Service', () => {
  let service: RouteService;
  beforeEach(() => {
    service = new RouteService(routerMock);
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

  test('should return if the route is the current one', () => {
    expect(service.isCurrentRoute('nuzlocke')).toBe(false);
  });

  test('should change route if not current route', () => {
    const subSpy = jest.fn();
    service.route$.subscribe(subSpy);
    service.isCurrentRoute = jest.fn(() => false);
    service.changeRoute('team-builder');
    expect(subSpy).toHaveBeenCalledWith('team-builder');
  });

  test('should not change route if current route', () => {
    const subSpy = jest.fn();
    service.route$.subscribe(subSpy);
    service.isCurrentRoute = jest.fn(() => true);
    service.changeRoute('team-builder');
    expect(subSpy).not.toHaveBeenCalled();
  });
});
