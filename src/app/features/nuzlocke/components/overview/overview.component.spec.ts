jest.mock('@util/select');
jest.mock('@util/enum', () => ({
  __esModule: true,
  enumKeys: jest.fn(),
  enumValues: jest.fn(() => [1])
}));
import { OverviewComponent } from './overview.component';
import activatedRouteMock from '@mocks/activated-route.mock';
import badgeServiceMock from '@nuzlocke/mocks/badge.service.mock';
import nuzlockeServiceMock from '@nuzlocke/mocks/nuzlocke.service.mock';
import { Status } from '@features/nuzlocke/models/pokemon.model';
import { of } from 'rxjs';

describe('Nuzlocke Overview Component', () => {
  let component: OverviewComponent;

  beforeEach(() => {
    component = new OverviewComponent(
      activatedRouteMock,
      badgeServiceMock,
      nuzlockeServiceMock
    );
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should update encounter on drag drop', () => {
    nuzlockeServiceMock.updateEncounter = jest.fn();
    component.dragDropChange({} as any);
    expect(nuzlockeServiceMock.updateEncounter).toBeCalledWith({});
  });

  test('should update on earning a badge', () => {
    nuzlockeServiceMock.earnBadge = jest.fn();
    component.earnBadge({ earned: false, url: '' }, 1, false);
    expect(nuzlockeServiceMock.earnBadge).toBeCalledWith(1);
  });

  test('should update on earning a badge', () => {
    nuzlockeServiceMock.earnBadge = jest.fn();
    component.earnBadge({ earned: false, url: '' }, 1, true);
    expect(nuzlockeServiceMock.earnBadge).toBeCalledWith(1 + 8);
  });

  test('should get rows', () => {
    expect(component.rows).toEqual([[], []]);
  });

  test('should get rows for 8 badges', () => {
    component.badges = [1, 2, 3, 4, 5, 6, 7, 8] as any;
    expect(component.rows).toEqual([[1, 2, 3, 4, 5, 6, 7, 8]]);
  });

  test('should get group data', () => {
    component.groups = [{ title: 'a', data: [1, 2, 3] }] as any;
    expect(component.groupData).toEqual([1, 2, 3]);
  });

  test('should get alive count', () => {
    component.groups = [
      {
        title: '',
        data: [
          { status: Status.Boxed },
          { status: Status.Heaven },
          { status: Status.Missed },
          { status: Status.Party }
        ]
      }
    ] as any;
    expect(component.alive).toBe(2);
  });

  test('should get dead count', () => {
    component.groups = [
      {
        title: '',
        data: [
          { status: Status.Boxed },
          { status: Status.Heaven },
          { status: Status.Missed },
          { status: Status.Party }
        ]
      }
    ] as any;
    expect(component.dead).toBe(1);
  });

  test('should get boxed count', () => {
    component.groups = [
      {
        title: '',
        data: [
          { status: Status.Boxed },
          { status: Status.Heaven },
          { status: Status.Missed },
          { status: Status.Party }
        ]
      }
    ] as any;
    expect(component.boxed).toBe(1);
  });

  test('should get missed count', () => {
    component.groups = [
      {
        title: '',
        data: [
          { status: Status.Boxed },
          { status: Status.Heaven },
          { status: Status.Missed },
          { status: Status.Party }
        ]
      }
    ] as any;
    expect(component.missed).toBe(1);
  });

  test('should set things in on init', () => {
    activatedRouteMock.data = of({ nuzlocke: { pokemon: [{ status: 1 }] } });
    badgeServiceMock.getBadges = jest.fn();
    component.ngOnInit();
    expect(component.groups.length).toBe(1);
  });
});
