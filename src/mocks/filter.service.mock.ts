export default {
  checkingCoverage: false,
  filterDB: null,
  createDatabase: jest.fn(() => Promise.resolve()),
  resetFilters: jest.fn(() => Promise.resolve()),
  getAllFilters: jest.fn(() => Promise.resolve([])),
  getFilters: jest.fn(() => Promise.resolve([])),
  getSearchFilter: jest.fn(() => Promise.resolve(null)),
  addSearchFilter: jest.fn(() => Promise.resolve()),
  getCoverageFilter: jest.fn(() => Promise.resolve(null)),
  changeCoverageDocument: jest.fn(() => Promise.resolve()),
  checkCoverage: jest.fn(),
  updateFilter: jest.fn(() => Promise.resolve()),
  updateFilters: jest.fn(() => Promise.resolve([]))
};
