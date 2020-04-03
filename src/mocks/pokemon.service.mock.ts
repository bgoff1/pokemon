export default {
  createDatabase: jest.fn(() => Promise.resolve()),
  getPokemon: jest.fn(() => Promise.resolve([]))
} as any;
