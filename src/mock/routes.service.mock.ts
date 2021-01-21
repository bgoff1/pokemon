export const routesServiceMock = {
  createDatabase: jest.fn(() => Promise.resolve()),
  getRoutes: jest.fn(() => Promise.resolve([])),
  addRouteToGame: jest.fn(() => Promise.resolve()),
  removeRouteFromGame: jest.fn(() => Promise.resolve())
};
