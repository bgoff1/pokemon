export const nuzlockeServiceMock = {
  gameNames: [{ game: 'a' }],
  createNuzlocke: jest.fn(() => Promise.resolve({ id: 1 })),
  updateEncounter: jest.fn(),
  earnBadge: jest.fn(),
  currentRun: null
};
