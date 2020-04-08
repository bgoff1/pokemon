import { DeleteRouteDialogComponent } from './delete-route-dialog.component';
import dialogRefMock from '@mocks/dialog-ref.mock';

describe('Delete Route Dialog Component', () => {
  let component: DeleteRouteDialogComponent;
  beforeEach(() => {
    component = new DeleteRouteDialogComponent(dialogRefMock, { name: 'john' });
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should handle close', () => {
    dialogRefMock.close = jest.fn();
    component.routeFormControl.patchValue({ current: true });
    component.onClose('ok');
    expect(dialogRefMock.close).toBeCalledWith({ onlyFromCurrent: true });
  });

  test('should handle cancel', () => {
    dialogRefMock.close = jest.fn();
    component.onClose('cancel');
    expect(dialogRefMock.close).toBeCalledWith();
  });
});
