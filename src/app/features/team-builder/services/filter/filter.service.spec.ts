jest.mock('@models/pokemon');
jest.mock('@util/enum');
jest.mock('@resources/default-filters', () => ({
  __esModule: true,
  default: [{ a: 'a' }]
}));
import databaseServiceMock from '@mocks/database.service.mock';
import { FilterService } from './filter.service';

describe('Filter Service', () => {
  let service: FilterService;

  beforeEach(() => {
    service = new FilterService(databaseServiceMock);
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should not set default filters if there are filters', async () => {
    databaseServiceMock.filters.count = jest.fn(() => 3);
    databaseServiceMock.filters.bulkAdd = jest.fn();
    await service.setDefaultFilters();
    expect(databaseServiceMock.filters.bulkAdd).not.toBeCalled();
  });

  test('should set default filters', async () => {
    databaseServiceMock.filters.count = jest.fn(() => 0);
    databaseServiceMock.filters.bulkAdd = jest.fn(() => Promise.resolve());
    await service.setDefaultFilters();
    expect(databaseServiceMock.filters.bulkAdd).toBeCalled();
  });

  test('should set coverage and setup db', async () => {
    service.getCoverageFilter = jest.fn(() =>
      Promise.resolve({ enabled: 1 })
    ) as any;
    await service.createDatabase();
    expect(service.checkingCoverage).toBe(true);
  });

  test('should reset filters', async () => {
    databaseServiceMock.filters.clear = jest.fn(() => Promise.resolve());
    await service.resetFilters();
    expect(databaseServiceMock.filters.clear).toBeCalled();
  });

  test('should get all filters and sort them', async () => {
    databaseServiceMock.filters.filter = jest.fn(filterFn => ({
      toArray: () =>
        Promise.resolve(
          [
            { id: 0, filter: 0 },
            { id: 1, filter: 1 },
            { id: 2, filter: 3, value: 'National' },
            { id: 3, filter: 3, value: 'abc' },
            { id: 4, filter: 3, value: 'abcd' },
            { id: 5, filter: 4, value: 'abcd' }
          ].filter(filterFn)
        )
    }));
    const filters = await service.getAllFilters();
    expect(filters).toEqual([
      { id: 3, filter: 3, value: 'abc' },
      { id: 4, filter: 3, value: 'abcd' },
      { id: 5, filter: 4, value: 'abcd' }
    ]);
  });

  test('should get all filters and remove national region', () => {
    databaseServiceMock.filters.where = jest.fn(() => ({
      toArray: () => Promise.resolve([])
    }));
    service.getFilters().then(filters => {
      expect(filters).toEqual([]);
    });
  });

  test('should get search filter', async () => {
    databaseServiceMock.filters.get = jest.fn(() => Promise.resolve({}));
    const filter = await service.getSearchFilter();
    expect(filter).toEqual({});
  });

  test('should add search filter', async () => {
    service.getSearchFilter = jest.fn(() => Promise.resolve({ id: 1 })) as any;
    databaseServiceMock.filters.update = jest.fn();
    await service.addSearchFilter('query');
    expect(databaseServiceMock.filters.update).toBeCalledWith(1, {
      value: 'query',
      enabled: 1
    });
  });

  test('should remove search filter', async () => {
    service.getSearchFilter = jest.fn(() => Promise.resolve({ id: 1 })) as any;
    databaseServiceMock.filters.update = jest.fn();
    await service.addSearchFilter('');
    expect(databaseServiceMock.filters.update).toBeCalledWith(1, {
      value: '',
      enabled: 0
    });
  });

  test('should get coverage filter', async () => {
    databaseServiceMock.filters.get = jest.fn(() => Promise.resolve({}));
    const filter = await service.getCoverageFilter();
    expect(filter).toEqual({});
  });

  test('should enable coverage value', async () => {
    service.getCoverageFilter = jest.fn(() =>
      Promise.resolve({ id: 1 })
    ) as any;
    databaseServiceMock.filters.update = jest.fn();
    await service.changeCoverageDocument('a');
    expect(databaseServiceMock.filters.update).toBeCalledWith(1, {
      value: 'a',
      enabled: 1
    });
  });

  test('should disable coverage value', async () => {
    service.getCoverageFilter = jest.fn(() =>
      Promise.resolve({ id: 1 })
    ) as any;
    databaseServiceMock.filters.update = jest.fn();
    await service.changeCoverageDocument('');
    expect(databaseServiceMock.filters.update).toBeCalledWith(1, {
      value: '',
      enabled: 0
    });
  });

  test('should remove checking coverage', () => {
    service.checkingCoverage = true;
    service.changeCoverageDocument = jest.fn();
    service.checkCoverage([]);
    expect(service.checkingCoverage).toBe(false);
    expect(service.changeCoverageDocument).toBeCalledWith('');
  });

  test('should remove checking coverage if there are no team members', () => {
    service.checkingCoverage = true;
    service.changeCoverageDocument = jest.fn();
    service.checkCoverage([]);
    expect(service.checkingCoverage).toBe(false);
    expect(service.changeCoverageDocument).toBeCalledWith('');
  });

  test('should check coverage', () => {
    service.checkingCoverage = false;
    service.changeCoverageDocument = jest.fn();
    service.checkCoverage([{}] as any);
    expect(service.checkingCoverage).toBe(true);
    expect(service.changeCoverageDocument).toBeCalledWith(JSON.stringify([{}]));
  });

  test('should update filter', () => {
    databaseServiceMock.filters.update = jest.fn();
    service.updateFilter({ id: 1, enabled: 1, filter: 1, value: '' });
    expect(databaseServiceMock.filters.update).toBeCalledWith(1, {
      enabled: 1
    });
  });

  test('should update many filters', async () => {
    databaseServiceMock.filters.bulkPut = jest.fn();
    await service.updateFilters([{ id: 1, enabled: 1, filter: 1, value: '' }]);
    expect(databaseServiceMock.filters.bulkPut).toBeCalledWith([
      { id: 1, enabled: 1, filter: 1, value: '' }
    ]);
  });

  // test('should return [] if allDocs throws', () => {
  //   service.getAllFilters().then(filters => expect(filters).toEqual([]));
  // });

  // test('should get filters', () => {
  //   service.getFilters().then(filters => expect(filters).toBe(null));
  // });

  // test('should return [] if find throws for active filters', () => {
  //   service.getFilters().then(filters => expect(filters).toEqual([]));
  // });

  // test('should get search filter', () => {
  //   service.getSearchFilter().then(search => expect(search).toBe(null));
  // });

  // test('should return [] if find throws for search filter', () => {
  //   service.getSearchFilter().then(search => expect(search).toBe(null));
  // });

  // test('should add search filter', async () => {
  //   service.getSearchFilter = jest.fn(() =>
  //     Promise.resolve({ _id: 1, _rev: 1 })
  //   ) as any;
  //   await service.addSearchFilter('');
  //   await service.addSearchFilter('a');
  //   service.getSearchFilter = jest.fn(() => Promise.resolve()) as any;
  //   await service.addSearchFilter('a');
  // });

  // test('should get coverage filter', () => {
  //   service.getCoverageFilter().then(coverage => expect(coverage).toBe(null));
  // });

  // test('should return [] if find throws for coverage filter', () => {
  //   service.getCoverageFilter().then(coverage => expect(coverage).toBe(null));
  // });

  // test('should update coverage document', async () => {
  //   service.getCoverageFilter = jest.fn(() =>
  //     Promise.resolve({ filter: 1 })
  //   ) as any;
  //   let error = false;
  //   try {
  //     await service.changeCoverageDocument('');
  //     await service.changeCoverageDocument('a');
  //   } catch {
  //     error = true;
  //   }
  //   expect(error).toBe(false);
  // });

  // test('should check coverage properly', () => {
  //   service.checkingCoverage = false;
  //   service.changeCoverageDocument = jest.fn();
  //   service.checkCoverage([]);
  //   expect(service.changeCoverageDocument).toBeCalledWith('');

  //   service.checkingCoverage = false;
  //   service.checkCoverage(['a'] as any);
  //   expect(service.changeCoverageDocument).toBeCalledWith(
  //     JSON.stringify(['a'])
  //   );

  //   service.checkingCoverage = true;
  //   service.checkCoverage(['a'] as any);
  //   expect(service.changeCoverageDocument).toBeCalledWith('');
  // });

  // test('should update filter', async () => {
  //   await service.updateFilter({ id: 1 } as any);

  //   await service.updateFilter({ id: 1 } as any);
  // });

  // test('should update docs', () => {
  //   service.updateFilters([]);
  // });
});
