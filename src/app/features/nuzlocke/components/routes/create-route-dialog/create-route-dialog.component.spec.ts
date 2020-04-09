import { CreateRouteDialogComponent } from './create-route-dialog.component';
import dialogRefMock from '@mocks/dialog-ref.mock';

describe('Create Route Dialog Component', () => {
  let component: CreateRouteDialogComponent;

  beforeEach(() => {
    component = new CreateRouteDialogComponent(dialogRefMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should pass value on ok', () => {
    component.routeFormControl.patchValue({ route: 'a' });
    dialogRefMock.close = jest.fn();
    component.onClose('ok');
    expect(dialogRefMock.close).toBeCalledWith({ route: 'a', current: false });
  });

  test('should not pass value on ok if form is invalid', () => {
    dialogRefMock.close = jest.fn();
    component.onClose('ok');
    expect(dialogRefMock.close).not.toBeCalled();
  });

  test('should not pass on close', () => {
    dialogRefMock.close = jest.fn();
    component.onClose('cancel');
    expect(dialogRefMock.close).toBeCalled();
  });
});
