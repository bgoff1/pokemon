export default {
  createDatabase: jest.fn(() => Promise.resolve()),
  getRoutes: jest.fn(() =>
    Promise.resolve([{ location: 'a' }, { location: 'b' }])
  )
} as any;
