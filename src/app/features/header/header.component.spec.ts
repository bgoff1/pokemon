import { routerServiceMock } from '@mock/router.service.mock';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(routerServiceMock as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update title on route change', () => {
    component.ngOnInit();
    routerServiceMock.route$.next('team-builder/options');
    expect(component.title).toEqual('options');
  });

  it('should call click menu on toggle menu', () => {
    component.toggleMenu();
    expect(routerServiceMock.clickMenu).toHaveBeenCalled();
  });
});
