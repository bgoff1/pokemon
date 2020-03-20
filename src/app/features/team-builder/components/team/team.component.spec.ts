import pokemonServiceMock from '../../mocks/pokemon.service.mock';
import pokemon from '../../mocks/pokemon.mock';
import { TeamComponent } from './team.component';
import { Pokemon } from '@models/pokemon';

describe('Team Component', () => {
  let component: TeamComponent;

  beforeEach(() => {
    component = new TeamComponent(pokemonServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should set team in ng on init', () => {
    component.ngOnInit();
    expect(component.team.length).toBe(0);
  });

  test('should call remove from team in remove from team', () => {
    component.removeFromTeam(pokemon[0] as Pokemon);
    expect(pokemonServiceMock.removeFromTeam).toHaveBeenCalled();
  });

  test('should get row correctly (row 1)', () => {
    expect(component.getRow(pokemon[0] as Pokemon)).toBe(1);
  });

  test('should get row correctly (row 1)', () => {
    component.team.indexOf = jest.fn(() => 4);
    expect(component.getRow(pokemon[0] as Pokemon)).toBe(2);
  });

  test('should get the first three items', () => {
    component.team = [...pokemon, ...pokemon] as Pokemon[];
    expect(component.firstThree.length).toBe(3);
  });

  test('should get the last three items', () => {
    component.team = [...pokemon, ...pokemon] as Pokemon[];
    expect(component.lastThree.length).toBe(3);
  });
});
