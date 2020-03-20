jest.mock('@models/pokemon');
jest.mock('@resources/default-filters', () => ({
  __esModule: true,
  default: [{ a: 'a' }]
}));
jest.mock('@models/pouchdb.model');
import { FilterService } from './filter.service';

describe('Filter Service', () => {
  let service: FilterService;

  beforeEach(() => {
    service = new FilterService();
  });

  test('should set coverage and setup db', async () => {
    service.getCoverageFilter = jest.fn(() =>
      Promise.resolve({ enabled: true })
    ) as any;
    await service.createDatabase();
    expect(service.checkingCoverage).toBe(true);
  });

  test('should not set docs if there are docs existing', async () => {
    service.filterDB.allDocs = jest.fn(() =>
      Promise.resolve({ total_rows: 1 })
    ) as any;
    service.getCoverageFilter = jest.fn(() =>
      Promise.resolve({ enabled: true })
    ) as any;
    await service.createDatabase();
    expect(service.filterDB.bulkDocs).not.toBeCalled();
  });

  test('should destroy db and rebuild on reset', async () => {
    service.createDatabase = jest.fn(() => 1) as any;
    let error = false;
    try {
      await service.resetFilters();
    } catch {
      error = true;
    }
    expect(error).toBe(false);
  });

  test('should get all filters and sort them', () => {
    service.filterDB.allDocs = jest.fn(() =>
      Promise.resolve({
        rows: [
          { doc: { _id: 1 } },
          { doc: { _id: 2, filter: 1 } },
          { doc: { _id: 2, filter: 2 } },
          { doc: { _id: 'qwe' } }
        ]
      })
    ) as any;
    service.getAllFilters().then(filters => {
      expect(filters).toEqual([{ _id: 1 }, { _id: 2, filter: 2 }]);
    });
  });

  test('should return [] if allDocs throws', () => {
    service.filterDB.allDocs = jest.fn(() => {
      throw new Error();
    });
    service.getAllFilters().then(filters => expect(filters).toEqual([]));
  });

  test('should get filters', () => {
    service.filterDB.find = jest.fn(() => ({ docs: null })) as any;
    service.getFilters().then(filters => expect(filters).toBe(null));
  });

  test('should return [] if find throws for active filters', () => {
    service.filterDB.find = jest.fn(() => {
      throw new Error();
    });
    service.getFilters().then(filters => expect(filters).toEqual([]));
  });

  test('should get search filter', () => {
    service.filterDB.find = jest.fn(() => ({ docs: [null] })) as any;
    service.getSearchFilter().then(search => expect(search).toBe(null));
  });

  test('should return [] if find throws for search filter', () => {
    service.filterDB.find = jest.fn(() => {
      throw new Error();
    });
    service.getSearchFilter().then(search => expect(search).toBe(null));
  });

  test('should add search filter', async () => {
    service.getSearchFilter = jest.fn(() =>
      Promise.resolve({ _id: 1, _rev: 1 })
    ) as any;
    service.filterDB.put = jest.fn();
    await service.addSearchFilter('');
    await service.addSearchFilter('a');
    service.getSearchFilter = jest.fn(() => Promise.resolve()) as any;
    await service.addSearchFilter('a');
    expect(service.filterDB.put).toBeCalledTimes(2);
  });

  test('should get coverage filter', () => {
    service.filterDB.find = jest.fn(() => ({ docs: [null] })) as any;
    service.getCoverageFilter().then(coverage => expect(coverage).toBe(null));
  });

  test('should return [] if find throws for coverage filter', () => {
    service.filterDB.find = jest.fn(() => {
      throw new Error();
    });
    service.getCoverageFilter().then(coverage => expect(coverage).toBe(null));
  });

  test('should update coverage document', async () => {
    service.getCoverageFilter = jest.fn(() =>
      Promise.resolve({ _rev: 1, filter: 1 })
    ) as any;
    service.filterDB.put = jest.fn(
      (arg: { enabled: boolean }) => arg.enabled
    ) as any;
    let error = false;
    try {
      await service.changeCoverageDocument('');
      await service.changeCoverageDocument('a');
    } catch {
      error = true;
    }
    expect(error).toBe(false);
  });

  test('should check coverage properly', () => {
    service.checkingCoverage = false;
    service.changeCoverageDocument = jest.fn();
    service.checkCoverage([]);
    expect(service.changeCoverageDocument).toBeCalledWith('');

    service.checkingCoverage = false;
    service.checkCoverage(['a'] as any);
    expect(service.changeCoverageDocument).toBeCalledWith(
      JSON.stringify(['a'])
    );

    service.checkingCoverage = true;
    service.checkCoverage(['a'] as any);
    expect(service.changeCoverageDocument).toBeCalledWith('');
  });

  test('should update filter', async () => {
    service.filterDB.get = jest.fn(id =>
      Promise.resolve({ id, enabled: true })
    ) as any;
    service.filterDB.put = jest.fn();
    await service.updateFilter({ _id: 1 } as any);
    expect(service.filterDB.put).toBeCalledWith({ id: 1, enabled: false });

    service.filterDB.get = jest.fn(id =>
      Promise.resolve({ id, enabled: false })
    ) as any;
    service.filterDB.put = jest.fn();
    await service.updateFilter({ _id: 1 } as any);
    expect(service.filterDB.put).toBeCalledWith({ id: 1, enabled: true });
  });

  test('should update docs', () => {
    service.filterDB.bulkDocs = jest.fn();
    service.updateFilters([]);
    expect(service.filterDB.bulkDocs).toBeCalledWith([]);
  });
});
