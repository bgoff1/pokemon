export const Pokemon = jest.fn((name?: string) => {
  return name ? { name } : { name: 'Empty Team Member' };
});
