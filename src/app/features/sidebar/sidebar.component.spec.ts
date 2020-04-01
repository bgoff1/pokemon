import { SidebarComponent } from './sidebar.component';
import routerServiceMock from '@mocks/router.service.mock';
import elementRefMock from '@mocks/element-ref.mock';
import draggingServiceMock from '@mocks/dragging.service.mock';
import 'hammerjs';

describe('Sidebar Component', () => {
  let component: SidebarComponent;

  beforeEach(() => {
    component = new SidebarComponent(
      routerServiceMock,
      draggingServiceMock,
      elementRefMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should trigger open on menu click', () => {
    component.ngOnInit();
    expect(component.links).toBeTruthy();
  });

  test('should open sidebar on panright', () => {
    draggingServiceMock.isDragging = false;
    component.hammer.emit('panright', {
      pointerType: 'cursor',
      center: { x: 2 }
    });
    expect(component.opened).toBe(true);
  });

  test('should not open if dragging sidebar on panright', () => {
    draggingServiceMock.isDragging = true;
    component.hammer.emit('panright', {
      pointerType: 'cursor',
      center: { x: 2 }
    });
    expect(component.opened).toBe(false);
  });

  test('should open sidebar on panright', () => {
    component.opened = false;
    component.hammer.emit('panright', {
      pointerType: 'mouse',
      center: { x: 2 }
    });
    component.hammer.emit('panright', {
      pointerType: 'cursor',
      center: { x: 0 }
    });

    component.hammer.emit('panright', {
      pointerType: 'cursor',
      center: { x: 500 }
    });
    expect(component.opened).toBe(false);
  });

  test('should tell if active', () => {
    routerServiceMock.isViewMode = jest.fn(() => true);
    expect(component.isActive('a')).toBe(true);
  });

  test('should close sidebar', () => {
    component.opened = true;
    component.setOpen(false);
    expect(component.opened).toBe(false);
  });
});
