import { routerServiceMock } from '@mock/router.service.mock';
import { FooterComponent } from './footer.component';

describe('Footer Component', () => {
  let component: FooterComponent;

  beforeEach(() => {
    component = new FooterComponent(routerServiceMock as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set route on init', () => {
    component.ngOnInit();
    routerServiceMock.route$.next('abc');
    expect(component.route).toBeTruthy();
  });

  it('should call change tab when you navigate by a path', () => {
    component.navigate('a');
    expect(routerServiceMock.changeTab).toHaveBeenCalledWith('a');
  });

  it('should tell you if the path is active', () => {
    routerServiceMock.isCurrentRoute = jest.fn(() => true);
    expect(component.isActive('as')).toBe(true);
  });

  it('should get disabled tabs value from router service', () => {
    routerServiceMock.open = false;
    expect(component.areTabsDisabled).toBe(false);
  });
});
