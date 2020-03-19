import { SidebarComponent } from './sidebar.component';
import routeServiceMock from '@mocks/route.service.mock';
import elementRefMock from '@mocks/element-ref.mock';
import { Link } from '@models/link.model';
describe('Sidebar Component', () => {
  let component: SidebarComponent;

  beforeEach(() => {
    component = new SidebarComponent(routeServiceMock, elementRefMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should trigger open on menu click', () => {
    component.ngOnInit();
    expect(component.links).toBeTruthy();
  });

  test('should open sidebar on panright', () => {
    component.hammer.emit('panright', {
      pointerType: 'cursor',
      center: { x: 2 }
    });
    expect(component.opened).toBe(true);
  });

  test('should close sidebar if not passed anything', () => {
    component.opened = true;
    component.closeSidebar();
    expect(component.opened).toBe(false);
  });

  test('should close sidebar', () => {
    component.opened = true;
    component.closeSidebar();
    expect(component.opened).toBe(false);
  });

  test('should return if it is the current route', () => {
    routeServiceMock.isCurrentRoute = jest.fn(() => true);
    const route: Link = { label: '', path: '/nuzlocke' };
    expect(component.isCurrentRoute(route)).toBe(true);
  });

  test('should return if it is the current route', () => {
    routeServiceMock.changeRoute = jest.fn();
    const route: Link = { label: '', path: '/nuzlocke' };
    component.navigate(route);
    expect(routeServiceMock.changeRoute).toHaveBeenCalledWith('/nuzlocke');
  });
});
