export default {
  getFilters: jest.fn(() => Promise.resolve([])),
  createDatabase: jest.fn(() => Promise.resolve()),
  checkCoverage: jest.fn(),
  checkingCoverage: false
} as any;
