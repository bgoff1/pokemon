import { PickerComponent } from './picker.component';
import filterServiceMock from '@mocks/filter.service.mock';
import teamServiceMock from '@mocks/team.service.mock';

describe('Picker Component', () => {
  let component: PickerComponent;

  beforeEach(() => {
    component = new PickerComponent(filterServiceMock, teamServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add pokemon to the team', () => {
    const mon = {};
    component.addPokemon(mon as any);
    expect(teamServiceMock.addToTeam).toHaveBeenCalledWith(mon);
  });

  test('should set team on ng on init', () => {
    component.team = ['me'] as any;
    component.ngOnInit();
    expect(component.team.length).toBe(0);
  });
});
