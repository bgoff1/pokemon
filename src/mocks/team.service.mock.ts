import { of } from 'rxjs/internal/observable/of';

export default {
  teamChange$: of([]),
  removeFromTeam: jest.fn(),
  addToTeam: jest.fn()
} as any;
