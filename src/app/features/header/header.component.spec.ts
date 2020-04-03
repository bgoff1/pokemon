import { HeaderComponent } from './header.component';
import routerServiceMock from '@mocks/router.service.mock';

describe('Header Component', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(routerServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call click menu on toggle menu', () => {
    component.toggleMenu();
    expect(routerServiceMock.clickMenu).toHaveBeenCalled();
  });

  test('should subscribe on ng on init', () => {
    component.ngOnInit();
    expect(component.title).not.toEqual('Pokemon');
  });
});
