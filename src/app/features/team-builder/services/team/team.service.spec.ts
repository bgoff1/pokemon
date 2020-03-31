import { TeamService } from './team.service';
jest.mock('@models/pokemon');
jest.mock('../../models/list/pokemon-list.model');
import pokemon from '../../mocks/pokemon.mock';
import filterServiceMock from '../../mocks/filter.service.mock';
import { Pokemon } from '@models/pokemon';

describe('Team Service', () => {
  let service: TeamService;
  let newPokemon: Pokemon;
  beforeEach(() => {
    service = new TeamService(filterServiceMock);
    newPokemon = new Pokemon(pokemon[0]);
    service.team = [];
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get team changes', () => {
    service.teamChange$.subscribe(team => {
      expect(team.length).toBe(6);
    });
  });

  test('should do nothing if the team is full', () => {
    service.team = [
      newPokemon,
      newPokemon,
      newPokemon,
      newPokemon,
      newPokemon,
      newPokemon
    ];

    const pokemon2 = new Pokemon(pokemon[1]);

    service.addToTeam(pokemon2);

    expect(service.team).not.toContain(pokemon2);
  });

  test('should remove a member', () => {
    service.addToTeam(newPokemon);
    expect(service.team.length).toBe(6);
    service.removeFromTeam(newPokemon);
    expect(service.team.length).toBe(6);
    expect(service.team).not.toContain(newPokemon);
  });

  test('should call check coverage if checking coverage', () => {
    filterServiceMock.checkingCoverage = true;
    service.addToTeam(newPokemon);
    expect(filterServiceMock.checkCoverage).toBeCalled();
  });

  test('should get filters', () => {
    service.pokemonChange$.subscribe(val => {
      expect(val).toEqual([]);
    });
    service.fetchFilters();
  });
});
