import { TeamService } from './team.service';
jest.mock('@models/pokemon');
jest.mock('../../models/list/pokemon-list.model');
import { Pokemon } from '@models/pokemon';
import pokemonServiceMock from '@mocks/pokemon.service.mock';
import pokemon from '../../mocks/pokemon.mock';
import filterServiceMock from '../../mocks/filter.service.mock';

describe('Team Service', () => {
  let service: TeamService;
  let newPokemon: Pokemon;
  beforeEach(() => {
    service = new TeamService(filterServiceMock, pokemonServiceMock);
    newPokemon = new Pokemon(pokemon[0]);
    service.team = [];
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get team changes', () => {
    service.teamChange$.subscribe(team => {
      expect(team.length).toBe(0);
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
    service.team = [];
    service.addToTeam(newPokemon);
    expect(service.team.length).toBe(1);
    service.removeFromTeam(newPokemon);
    expect(service.team.length).toBe(0);
    expect(service.team).not.toContain(newPokemon);
  });

  test('should do nothing if the team is empty', () => {
    service.team = [];
    service.removeFromTeam(newPokemon);
    expect(service.team.length).toBe(0);
  });

  test('should call check coverage if checking coverage', () => {
    filterServiceMock.checkingCoverage = true;
    service.addToTeam(newPokemon);
    expect(filterServiceMock.checkCoverage).toBeCalled();
  });

  test('should get filters', async () => {
    service.pokemonChange$.subscribe(val => {
      expect(val).toEqual([]);
    });
    service.fetchFilters();
  });
});
