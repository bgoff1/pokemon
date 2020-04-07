import { SelectRouteDialogComponent } from './select-route-dialog.component';
jest.mock('@util/name', () => ({
  __esModule: true,
  titlecase: jest.fn(arg => (arg ? arg : ''))
}));
import dialogRefMock from '@mocks/dialog-ref.mock';
import pokemonServiceMock from '@mocks/pokemon.service.mock';

describe('SelectRouteDialogComponent', () => {
  let component: SelectRouteDialogComponent;

  beforeEach(() => {
    component = new SelectRouteDialogComponent(
      dialogRefMock,
      {
        pokemon: ['bulbasaur', 'squirtle', 'charmander']
      } as any,
      pokemonServiceMock
    );
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

  test('should filter properly', () => {
    component.autocompleteOptions = ['abc', 'bcd', 'acd', 'eee'];
    component.allNames = [...component.autocompleteOptions, 'fff'];
    expect(component.filterOptions('ab')).toEqual(['abc']);
    expect(component.filterOptions('a')).toEqual(['abc', 'acd']);
    expect(component.filterOptions('b')).toEqual(['abc', 'bcd']);
    expect(component.filterOptions('cd')).toEqual(['bcd', 'acd']);
    expect(component.filterOptions('e')).toEqual(['eee']);
    expect(component.filterOptions('f')).toEqual(['fff']);
  });

  test('should subscribe in on init', async () => {
    pokemonServiceMock.getPokemonNames = jest.fn(() =>
      Promise.resolve(['a', 'a-b'])
    );
    component.filterOptions = jest.fn();
    await component.ngOnInit();
    component.routeFormControl.patchValue({
      pokemon: 'squirt'
    });
    component.filteredOptions.subscribe(options => {
      expect(options.length).toBe(1);
    });
  });

  test('should set alternate values from input', async () => {
    component = new SelectRouteDialogComponent(
      dialogRefMock,
      {
        visited: true,
        capturedPokemon: { name: 'pidgey', nickName: 'Johnny' },
        random: true
      } as any,
      pokemonServiceMock
    );

    pokemonServiceMock.getPokemonNames = jest.fn(() => Promise.resolve(['a']));
    component.filterOptions = jest.fn();
    await component.ngOnInit();

    expect(component.page).toBe(2);
    expect(component.pokemonControl.value).toBe('pidgey');
    expect(component.nickname.value).toBe('Johnny');
  });

  test('should be able to go back', () => {
    component.routeFormControl.patchValue({ page: 2 });
    component.routeFormControl.reset = jest.fn();

    component.goBack();

    expect(component.page).toBe(1);
  });
});
