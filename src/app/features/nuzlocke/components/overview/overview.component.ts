import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from '@features/nuzlocke/services/badge/badge.service';
import { Badge } from '@nuzlocke/models/badge.model';
import { Group } from '@nuzlocke/models/group.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { RouteData } from '@nuzlocke/models/route-data.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { enumValues } from '@util/enum';

@Component({
  selector: 'nuzlocke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  badges: Badge[] = [];
  nuzlocke: Nuzlocke;
  groups: Group[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly badgeService: BadgeService,
    private readonly nuzlockeService: NuzlockeService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(({ nuzlocke }: RouteData) => {
      this.nuzlocke = nuzlocke;
      this.badges = this.badgeService.getBadges(nuzlocke);
      this.groups = [];
      for (const value of enumValues(Status)) {
        this.groups.push({
          title: value,
          data: nuzlocke.pokemon.filter(
            ({ status }) => status === Status[value]
          )
        });
      }
    });
  }

  dragDropChange(event: Pokemon) {
    this.nuzlockeService.updateEncounter(event, { status: event.status });
  }

  earnBadge(badge: Badge, badgeNumber: number, secondRow: boolean) {
    badge.earned = !badge.earned;
    this.nuzlockeService.earnBadge(secondRow ? badgeNumber + 8 : badgeNumber);
  }

  get rows(): Badge[][] {
    return this.badges.length === 8
      ? [this.badges.slice(0, 8)]
      : [this.badges.slice(0, 8), this.badges.slice(8)];
  }

  get groupData(): Pokemon[] {
    return [].concat(...this.groups.map(group => group.data));
  }

  private count(status: Status | null, notList?: Status[]) {
    let i = 0;
    if (status !== null) {
      for (const item of this.groupData) {
        if (item.status === status) {
          ++i;
        }
      }
    } else {
      for (const item of this.groupData) {
        if (notList.every(notItem => notItem !== item.status)) {
          ++i;
        }
      }
    }
    return i;
  }

  get alive() {
    return this.count(null, [Status.Heaven, Status.Missed]);
  }

  get dead() {
    return this.count(Status.Heaven);
  }

  get boxed() {
    return this.count(Status.Boxed);
  }

  get missed() {
    return this.count(Status.Missed);
  }
}
