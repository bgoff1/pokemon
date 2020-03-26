import { FooterComponent } from './footer.component';
import routerServiceMock from '@mocks/router.service.mock';
import { of } from 'rxjs/internal/observable/of';

describe('Footer Component', () => {
  let component: FooterComponent;

  beforeEach(() => {
    component = new FooterComponent(routerServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should navigate on navigate', () => {
    component.route = '';
    component.navigate('/nuzlocke');
    expect(routerServiceMock.changeTab).toHaveBeenCalledWith('/nuzlocke');
  });

  test('should tell if it is the current route', () => {
    routerServiceMock.isCurrentRoute = jest.fn(() => true);
    expect(component.isActive('/nuzlocke')).toBe(true);
  });

  test('should get values in on init', () => {
    routerServiceMock.route$ = of('abc');
    routerServiceMock.getTabs = jest.fn(() => []);
    component.ngOnInit();
    expect(component.route).toEqual('abc');
    expect(component.tabs).toEqual([]);
  });
});
