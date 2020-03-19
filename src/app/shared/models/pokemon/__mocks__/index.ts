let i = 1;
export const Pokemon = jest.fn((name?: any) => {
  if (name && typeof name === 'string') {
    return { name, getNationalPokedex: jest.fn() };
  } else if (name) {
    return {
      ...name,
      getNationalPokedex: jest.fn(() => ({ entryNumber: i++ })),
      equals: jest.fn(() => true)
    };
  } else {
    return { name: 'Empty Team Member', getNationalPokedex: jest.fn() };
  }
});
