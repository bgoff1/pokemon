import { TeamService } from './team.service';
jest.mock('@models/pokemon');
import pokemon from '@mocks/pokemon.mock';
import { Pokemon } from '@models/pokemon';

describe('Team Service', () => {
  let service: TeamService;
  let newPokemon: Pokemon;
  beforeEach(() => {
    service = new TeamService();
    newPokemon = new Pokemon(pokemon[0]);
    service.team = [];
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should add and remove empty members', () => {
    service.addEmptyMembers();
    expect(service.team.length).toBe(6);
    service.removeEmptyMembers();
    expect(service.team.length).toBe(0);
  });

  test('should get team changes', () => {
    service.teamChange$.subscribe(team => {
      expect(team.length).toBe(6);
    });
  });

  test('should add a member to the team', () => {
    service.removeEmptyMembers = jest.fn();
    service.addEmptyMembers = jest.fn();

    expect(service.team.length).toBe(0);

    service.addToTeam(newPokemon);

    expect(service.team.length).toBeGreaterThan(0);

    expect(service.removeEmptyMembers).toHaveBeenCalled();
    expect(service.addEmptyMembers).toHaveBeenCalled();
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

    expect(service.team.length).toBeGreaterThan(0);
  });

  test('should remove a member', () => {
    service.addToTeam(newPokemon);
    expect(service.team.length).toBe(6);
    service.removeFromTeam(newPokemon);
    expect(service.team.length).toBe(6);
    expect(service.team).not.toContain(newPokemon);
  });

  test('should not remove if its all empty', () => {
    service.addEmptyMembers();
    service.removeFromTeam(newPokemon);
    service.removeEmptyMembers();
    expect(service.team.length).toBe(0);
  });
});
