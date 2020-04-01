import { SelectRouteDialogComponent } from './select-route-dialog.component';
import dialogRefMock from '@mocks/dialog-ref.mock';

describe('SelectRouteDialogComponent', () => {
  let component: SelectRouteDialogComponent;

  beforeEach(() => {
    component = new SelectRouteDialogComponent(dialogRefMock, {
      pokemon: ['bulbasaur', 'squirtle', 'charmander']
    } as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should pass value on ok', () => {
    component.caught = true;
    component.routeFormControl.patchValue({ pokemon: 'a' });
    dialogRefMock.close = jest.fn();
    component.onClose('ok');
    expect(dialogRefMock.close).toBeCalledWith({
      pokemon: 'a',
      nickname: '',
      caught: true
    });
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

  test('should move pages on obtain', () => {
    component.obtained('yes');
    expect(component.page).toBe(2);
    expect(component.caught).toBe(true);
  });

  test('should set caught to false on fail to obtain', () => {
    component.obtained('no');
    expect(component.page).toBe(2);
    expect(component.caught).toBe(false);
  });

  test('should get pokemon control', () => {
    expect(component.pokemonControl.value).toEqual('');
  });

  test('should subscribe in on init', () => {
    component.ngOnInit();
    component.routeFormControl.patchValue({
      pokemon: 'squirt'
    });
    component.filteredOptions.subscribe(options => {
      expect(options.length).toBe(1);
    });
  });

  test('should be able to go back', () => {
    component.page = 2;
    component.routeFormControl.reset = jest.fn();

    component.goBack();

    expect(component.page).toBe(1);
    expect(component.routeFormControl.reset).toBeCalled();
  });
});
