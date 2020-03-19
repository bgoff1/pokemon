export default jest.fn(() => ({
  createIndex: jest.fn(),
  allDocs: jest.fn(() => Promise.resolve({ total_rows: 0 })),
  bulkDocs: jest.fn(() => Promise.resolve()),
  destroy: jest.fn(() => Promise.resolve()),
  find: jest.fn(() => Promise.resolve()),
  get: jest.fn(() => Promise.resolve())
}));
