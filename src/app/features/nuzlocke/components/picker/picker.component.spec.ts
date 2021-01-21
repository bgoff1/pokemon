import { PickerComponent } from './picker.component';
import { pokemonServiceMock } from '@mock/pokemon.service.mock';
import { nameServiceMock } from '@mock/name.service.mock';
import { nuzlockeServiceMock } from '@mock/nuzlocke.service.mock';
import { pokemonImageServiceMock } from '@mock/pokemon-image.service.mock';
import { titleCaseServiceMock } from '@mock/title-case.service.mock';
import { pickerValidationServiceMock } from '@mock/picker-validation.service.mock';
import { Validators } from '@angular/forms';

describe('Nuzlocke: Picker Component', () => {
  let component: PickerComponent;

  beforeEach(() => {
    component = new PickerComponent(
      pokemonServiceMock as any,
      nameServiceMock as any,
      nuzlockeServiceMock as any,
      pokemonImageServiceMock as any,
      titleCaseServiceMock as any,
      pickerValidationServiceMock as any
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set allNames, autocomplete options, filteredOptions on init', async () => {
    component.setAutoCompleteOptions = jest.fn();
    component.pokemonControl.setValue('abc');
    component.autoCompleteOptions = ['a', 'bc'];

    await component.ngOnInit();
    component.allNames = ['a'];

    component.filteredOptions.subscribe();
    component.pokemonControl.setValue('bc');
  });

  it('should set autocomplete for evolutions', async () => {
    component.autoCompleteOptions = [];
    component.pokemon = { name: 'a', routeName: 'a', status: 0 };
    component.limitOptionsByEvolution = true;
    pokemonServiceMock.findEvolutionNames = jest.fn(() =>
      Promise.resolve(['a'])
    );

    await component.setAutoCompleteOptions();

    expect(component.autoCompleteOptions.length).toBe(1);

    component.autoCompleteOptions = [];
    component.pokemon = undefined;
    component.allNames = ['a'];

    await component.setAutoCompleteOptions();

    expect(component.autoCompleteOptions.length).toBe(1);
  });

  it('should set autocomplete for random route selection', async () => {
    component.autoCompleteOptions = [];
    component.limitOptionsByEvolution = false;
    component.random = true;
    component.allNames = ['a'];

    await component.setAutoCompleteOptions();

    expect(component.autoCompleteOptions.length).toBe(1);
  });

  it('should set autocomplete for non-random route selection', async () => {
    component.autoCompleteOptions = [];
    component.limitOptionsByEvolution = false;
    component.random = false;
    nuzlockeServiceMock.currentRun = { pokemon: [{ name: 'abc' }] } as any;
    component.pokemonOptions = ['abc'];
    component.allNames = ['a'];

    await component.setAutoCompleteOptions();

    expect(component.autoCompleteOptions.length).toBe(1);

    nuzlockeServiceMock.currentRun = null;

    await component.setAutoCompleteOptions();
  });

  it('should reset control', () => {
    component.pokemonControl.setValue('a');
    component.pokemonInputElement = { nativeElement: null };
    component.previouslyFocusedElement = 'abc' as any;
    component.pokemonControl.setValue = jest.fn();

    component.onInputClick();

    component.previouslyFocusedElement = null;
    component.onInputClick();

    component.previouslyFocusedElement = 'abc' as any;
    component.pokemonControl.setValue('');

    expect(component.pokemonControl.setValue).toHaveBeenCalledTimes(2);
  });

  it('should change text box on select pokemon', () => {
    component.pokemonControl.setValue = jest.fn();
    component.selectPokemon();
    expect(component.pokemonControl.setValue).toHaveBeenCalledTimes(1);
  });

  it('should change previously selected element on click', () => {
    component.previouslyFocusedElement = null;
    document = { activeElement: 'a' } as any;
    component.click();
    expect(component.previouslyFocusedElement).toBeTruthy();
  });

  it('should get form value', () => {
    expect(component.formValue).toEqual(component.formGroup.value);
  });

  it('should get if it should show image', () => {
    component.pokemonControl.setValidators([Validators.required]);

    component.pokemonControl.setValue('');
    component.pokemon = {} as any;

    expect(component.showImage).toBe(false);

    component.pokemon = null as any;

    expect(component.showImage).toBe(false);

    component.pokemon = { name: 'abc' } as any;

    expect(component.showImage).toBe(true);
  });

  it('should get the image URL', () => {
    component.pokemonControl.setValidators([Validators.required]);
    component.pokemonControl.setValue('');
    component.pokemon = { name: 'A' } as any;

    expect(component.imageValue).toEqual('a');

    component.pokemon = null as any;

    expect(component.imageValue).toEqual('');

    component.pokemonControl.setValue('b');

    expect(component.imageValue).toEqual('b');
  });
});
