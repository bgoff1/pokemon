import { activatedRouteMock } from '@mock/activated-route.mock';
import { badgeServiceMock } from '@mock/badge.service.mock';
import { nuzlockeServiceMock } from '@mock/nuzlocke.service.mock';
import { pokemonImageServiceMock } from '@mock/pokemon-image.service.mock';
import { routerServiceMock } from '@mock/router.service.mock';
import { teamServiceMock } from '@mock/team.service.mock';
import { Status } from '../../models/pokemon.model';
import { OverviewComponent } from './overview.component';

describe('Nuzlocke: Overview Component', () => {
  let component: OverviewComponent;

  beforeEach(() => {
    component = new OverviewComponent(
      activatedRouteMock as any,
      routerServiceMock as any,
      pokemonImageServiceMock as any,
      badgeServiceMock as any,
      nuzlockeServiceMock as any,
      teamServiceMock as any
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set groups on init', () => {
    component.ngOnInit();
    expect(component.groups.length).toBeGreaterThan(0);
  });

  it('should update encounter on drag drop', () => {
    component.dragDropChange({ status: 0 } as any);
    expect(nuzlockeServiceMock.updateEncounter).toHaveBeenCalled();
  });

  it('should earn badge', () => {
    const badge = { earned: false, url: '' };
    component.earnBadge(badge, 0, false);
    expect(badge.earned).toBe(true);
    expect(nuzlockeServiceMock.earnBadge).toHaveBeenCalledWith(0);
  });

  it('should earn badge on second row', () => {
    const badge = { earned: false, url: '' };
    component.earnBadge(badge, 0, true);
    expect(nuzlockeServiceMock.earnBadge).toHaveBeenCalledWith(8);
  });

  it('should export to team builder', async () => {
    component.groups = [
      { title: 'Party', data: [{ name: 'a', status: 0, routeName: 'a' }] }
    ];
    await component.exportToTeamBuilder();
    expect(teamServiceMock.exportToTeamBuilder).toHaveBeenCalledWith(['a']);
    expect(routerServiceMock.redirect).toHaveBeenCalledWith('/team-builder');
  });

  it('should get the rows for the badges', () => {
    component.badges = [1, 2, 3, 4, 5, 6, 7, 8] as any;
    expect(component.rows.length).toBe(1);
    component.badges = [1, 2, 3, 4, 5, 6, 7, 8, 9] as any;
    expect(component.rows.length).toBe(2);
  });

  it('should combine the group data', () => {
    component.groups = [{ data: ['a'] }] as any;
    expect(component.groupData.length).toBe(1);
  });

  it('should get an empty array if there is no party', () => {
    component.groups = [, {}] as any;
    expect(component.party).toEqual([]);
  });

  it('should count and distribute', () => {
    component.groups = [
      {
        title: 'Party',
        data: [
          { status: Status.Boxed },
          { status: Status.Party },
          { status: Status.Heaven }
        ]
      }
    ] as any;
    expect(component.alive).toBe(2);
    expect(component.dead).toBe(1);
    expect(component.boxed).toBe(1);
    expect(component.missed).toBe(0);
  });
});
