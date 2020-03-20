import { FooterComponent } from './footer.component';
import routeServiceMock from '@mocks/route.service.mock';
import { of } from 'rxjs/internal/observable/of';

describe('Footer Component', () => {
  let component: FooterComponent;

  beforeEach(() => {
    component = new FooterComponent(routeServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should navigate on navigate', () => {
    component.route = '';
    component.navigate('/nuzlocke');
    expect(routeServiceMock.changeTab).toHaveBeenCalledWith('/nuzlocke');
  });

  test('should tell if it is the current route', () => {
    routeServiceMock.isCurrentRoute = jest.fn(() => true);
    expect(component.isActive('/nuzlocke')).toBe(true);
  });

  test('should get values in on init', () => {
    routeServiceMock.route$ = of('abc');
    routeServiceMock.getTabs = jest.fn(() => []);
    component.ngOnInit();
    expect(component.route).toEqual('abc');
    expect(component.tabs).toEqual([]);
  });

  test('should tell if sidebar is open', () => {
    routeServiceMock.sidebarOpen = true;
    expect(component.isSidebarOpen()).toBe(true);
    routeServiceMock.sidebarOpen = false;
    expect(component.isSidebarOpen()).toBe(false);
  });
});
