import { FooterComponent } from './footer.component';
import routeServiceMock from '@mocks/route.service.mock';

describe('Footer Component', () => {
  let component: FooterComponent;

  beforeEach(() => {
    component = new FooterComponent(routeServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should navigate on navigate', () => {
    component.navigate('nuzlocke');
    expect(routeServiceMock.changeRoute).toHaveBeenCalledWith('nuzlocke');
  });

  test('should tell if it is the current route', () => {
    routeServiceMock.isCurrentRoute = jest.fn(() => true);
    expect(component.isActive('nuzlocke')).toBe(true);
  });
});
