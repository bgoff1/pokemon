import pokemon from '@mocks/pokemon.mock';
jest.mock('@models/pokemon');
jest.mock('@resources/pokemon', () => ({
  __esModule: true,
  default: pokemon
}));
jest.mock('@shared/models/list/pokemon-list.model', () => ({
  __esModule: true,
  PokemonList: jest.fn(() => ({
    callFilters: jest.fn(() => [{ name: 'a' }])
  }))
}));
jest.mock('@models/filter/filter.model');
import { FilterService } from './filter.service';
import { Subject } from 'rxjs/internal/Subject';
import { FilterProperties } from '@models/filter/filter.model';

describe('Filter Service', () => {
  const customTeamService = {
    teamChange$: new Subject()
  } as any;
  let service: FilterService;

  beforeEach(() => {
    service = new FilterService(customTeamService);
    // customTeamService.teamChange$.next([]);
  });

  test('should not set filters if they are already set', () => {
    expect(service.filterChange$).toBeTruthy();
  });

  test('should get pokemon based on filters', () => {
    expect(service.pokemon).toEqual([{ name: 'a' }]);
  });

  test('should not add coverage filter if checkingCoverage is off', () => {
    service.checkingCoverage = false;
    service.filters = [];
    customTeamService.teamChange$.next([]);
    service.checkCoverage();
    expect(service.filters).toEqual([]);
  });

  test('should not set filters if they are already set', () => {
    localStorage.getItem = jest.fn(() => '[]');
    expect(service.filters).toEqual([]);
  });

  test('should call check filter on team change if filtering', () => {
    service.checkCoverage = jest.fn();
    service.checkingCoverage = true;
    customTeamService.teamChange$.next([]);
    expect(service.checkCoverage).toHaveBeenCalled();
  });

  test('should reset coverage value after all members have been removed', () => {
    service.checkCoverage = jest.fn();
    service.checkingCoverage = true;
    customTeamService.teamChange$.next([{ name: 'Empty Team Member' }]);
    expect(service.checkingCoverage).toBe(false);
  });

  test('should not reset coverage value if there are team members', () => {
    service.checkCoverage = jest.fn();
    service.checkingCoverage = true;
    customTeamService.teamChange$.next([{ name: 'r' }]);
    expect(service.checkingCoverage).toBe(true);
  });

  test('should remove previous coverage filter', () => {
    customTeamService.teamChange$.next([]);
    service.filters = [{ property: FilterProperties.Coverage, value: '' }];
    service.checkCoverage();
    expect(service.filters.length).toBe(0);
  });

  test('should add new coverage if filtering by coverage', () => {
    customTeamService.teamChange$.next([
      { name: 'Empty Team Member' },
      { name: 'Meowth' }
    ]);
    service.filters = [{ property: FilterProperties.Coverage, value: '' }];
    service.checkingCoverage = true;
    service.checkCoverage();
    expect(service.filters.length).toBe(1);
  });

  test('should tell if there are team members', () => {
    customTeamService.teamChange$.next([
      { name: 'Empty Team Member' },
      { name: 'Meowth' }
    ]);
    expect(service.isTeamMembers).toBe(true);
  });

  test('should filter pokemon not in team', () => {
    customTeamService.teamChange$.next([{ name: 'a' }]);
    expect(service.pokemonNotInTeam.length).toBe(0);
  });
});
