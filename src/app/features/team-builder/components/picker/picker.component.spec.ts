import { of } from 'rxjs/internal/observable/of';
import { PickerComponent } from './picker.component';
import pokemonServiceMock from '../../mocks/pokemon.service.mock';

describe('Picker Component', () => {
  let component: PickerComponent;

  beforeEach(() => {
    component = new PickerComponent(pokemonServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add pokemon to the team', () => {
    const mon = {};
    component.addPokemon(mon as any);
    expect(pokemonServiceMock.addToTeam).toHaveBeenCalledWith(mon);
  });

  test('should fetch filters', () => {
    pokemonServiceMock.fetchFilters = jest.fn(() => Promise.resolve());
    pokemonServiceMock.pokemonChange$ = of([]);
    component.ngOnInit();
    expect(component.pokemon).toEqual([]);
  });
});
