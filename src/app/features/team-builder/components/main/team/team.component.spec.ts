import { TeamComponent } from './team.component';

describe('TeamComponent', () => {
  let component: TeamComponent;

  beforeEach(() => {
    component = new TeamComponent({} as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
