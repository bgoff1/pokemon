import { SaveDialogComponent } from './save-dialog.component';
import dialogRefMock from '@mocks/dialog-ref.mock';

describe('Save Dialog Component', () => {
  let component: SaveDialogComponent;
  const dataMock = { name: '', random: true };

  beforeEach(() => {
    component = new SaveDialogComponent(dialogRefMock, dataMock);
    dialogRefMock.close = jest.fn();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should not delete on first delete call', () => {
    component.delete();
    expect(dialogRefMock.close).not.toBeCalled();
  });

  test('should close on second delete call', () => {
    component.delete();
    component.delete();
    expect(dialogRefMock.close).toBeCalledTimes(1);
  });

  test('should close on cancel', () => {
    component.onClose('cancel');
    expect(dialogRefMock.close).toBeCalledWith();
  });

  test('should close if form is valid', () => {
    component.saveFormControl.patchValue({ runName: 'a' });
    component.onClose('ok');
    expect(dialogRefMock.close).toBeCalled();
  });

  test('should not close if form is invalid', () => {
    component.onClose('ok');
    expect(dialogRefMock.close).not.toBeCalled();
  });
});
