import { EvolveDialogComponent } from './evolve-dialog.component';
jest.mock('@util/name', () => ({
  __esModule: true,
  titlecase: jest.fn(arg => arg)
}));
import dialogRefMock from '@mocks/dialog-ref.mock';
import pokemonServiceMock from '@mocks/pokemon.service.mock';
import { titlecase } from '@util/name';

describe('Evolve Dialog Component', () => {
  let component: EvolveDialogComponent;
  const dataMock: any = { pokemon: {} };

  beforeEach(() => {
    component = new EvolveDialogComponent(
      dialogRefMock,
      dataMock,
      pokemonServiceMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
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
    pokemonServiceMock.findEvolution = jest.fn(() =>
      Promise.resolve([{ name: 'a' }])
    );
    await component.ngOnInit();
    component.evolveFormGroup.patchValue({
      pokemon: 'squirt'
    });
    component.filteredOptions.subscribe(options => {
      expect(options.length).toBe(1);
    });
  });

  test('should set alternate values from input', async () => {
    component = new EvolveDialogComponent(
      dialogRefMock,
      {
        pokemon: { name: 'pidgey', nickname: 'Johnny' } as any
      },
      pokemonServiceMock
    );

    pokemonServiceMock.getPokemonNames = jest.fn(() => Promise.resolve(['a']));
    pokemonServiceMock.findEvolution = jest.fn(() =>
      Promise.resolve([{ name: 'a' }])
    );
    component.filterOptions = jest.fn();
    await component.ngOnInit();

    expect(component.pokemonControl.value).toBe('pidgey');
  });

  test('should titlecase on select', () => {
    component.pokemonControl.setValue('abc');

    component.selectPokemon();

    expect(titlecase).toBeCalled();
    expect(component.pokemonControl.value).toEqual('abc');
  });

  test('should handle ok buttons', () => {
    component.evolveFormGroup.patchValue({ pokemon: 'abc', nickname: 'qwe' });
    dialogRefMock.close = jest.fn();
    component.onClose('ok');
    expect(dialogRefMock.close).toBeCalledWith({
      pokemon: 'abc',
      nickname: 'qwe'
    });
  });

  test('should not close on invalid form', () => {
    dialogRefMock.close = jest.fn();
    component.onClose('ok');
    expect(dialogRefMock.close).not.toBeCalled();
  });

  test('should handle cancel', () => {
    dialogRefMock.close = jest.fn();
    component.onClose('cancel');
    expect(dialogRefMock.close).toBeCalledWith();
  });
});
