import { of } from 'rxjs/internal/observable/of';
import { PickerComponent } from './picker.component';
import teamServiceMock from '../../mocks/team.service.mock';

describe('Picker Component', () => {
  let component: PickerComponent;

  beforeEach(() => {
    component = new PickerComponent(teamServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add pokemon to the team', () => {
    const mon = {};
    component.addPokemon(mon as any);
    expect(teamServiceMock.addToTeam).toHaveBeenCalledWith(mon);
  });

  test('should fetch filters', () => {
    teamServiceMock.fetchFilters = jest.fn(() => Promise.resolve());
    teamServiceMock.pokemonChange$ = of([]);
    component.ngOnInit();
    expect(component.pokemon).toEqual([]);
  });
});
