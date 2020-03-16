import { HeaderComponent } from './header.component';
import routeServiceMock from '@mocks/route.service.mock';

describe('Header Component', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(routeServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call click menu on toggle menu', () => {
    component.toggleMenu();
    expect(routeServiceMock.clickMenu).toHaveBeenCalled();
  });

  test('should subscribe on ng on init', () => {
    component.ngOnInit();
    expect(component.title).not.toEqual('Pokemon');
  });
});
