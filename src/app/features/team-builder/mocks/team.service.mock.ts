import { of } from 'rxjs/internal/observable/of';

export default {
  team: [],
  pokemon: [],
  addToTeam: jest.fn(),
  addEmptyMembers: jest.fn(),
  removeFromTeam: jest.fn(),
  teamChange$: of([{ name: 'Empty Team Member' }]),
  pokemonChange$: of([]),
  nonEmptyMembers: []
} as any;
