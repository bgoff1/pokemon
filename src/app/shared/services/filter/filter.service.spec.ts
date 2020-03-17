import pokemon from '@mocks/pokemon.mock';
jest.mock('@models/pokemon');
jest.mock('@resources/pokemon', () => ({
  __esModule: true,
  default: pokemon
}));
jest.mock('@models/list/pokemon-list.model', () => ({
  __esModule: true,
  PokemonList: jest.fn(() => ({
    callFilters: jest.fn(() => [{ name: 'a' }])
  }))
}));
jest.mock('@models/filter');
jest.mock('@resources/default-filters', () => ({
  __esModule: true,
  default: [{ a: 'a' }]
}));
import { FilterService } from './filter.service';
import { Subject } from 'rxjs/internal/Subject';

describe('Filter Service', () => {
  let customTeamService: any;
  let service: FilterService;

  beforeEach(() => {
    customTeamService = {
      teamChange$: new Subject()
    };
    service = new FilterService(customTeamService, {} as any);
  });

  test('should get observable from subject', () => {
    expect(service.filterChange$).toBeTruthy();
  });

  test('should get pokemon based on filters', () => {
    expect(service.pokemon).toEqual([{ name: 'a' }]);
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

  // test('should remove previous coverage filter', () => {
  //   customTeamService.teamChange$.next([]);
  //   service.filters = [{ filter: FilterProperties.Coverage, value: '' }];
  //   service.checkCoverage();
  //   expect(service.filters.length).toBe(0);
  // });

  // test('should add new coverage if filtering by coverage', () => {
  //   customTeamService.teamChange$.next([
  //     { name: 'Empty Team Member' },
  //     { name: 'Meowth' }
  //   ]);
  //   service.filters = [{ filter: FilterProperties.Coverage, value: '' }];
  //   service.checkingCoverage = true;
  //   service.checkCoverage();
  //   expect(service.filters.length).toBe(1);
  //   console.log(localStorage.getItem('filters'));
  // });

  test('should tell if there are team members', () => {
    customTeamService.teamChange$.next([
      { name: 'Empty Team Member' },
      { name: 'Meowth' }
    ]);
    expect(service.isTeamMembers).toBe(true);
  });
});
