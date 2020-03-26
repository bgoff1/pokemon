import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';
import { BadgeService } from '@features/nuzlocke/services/badge/badge.service';
import { Badge } from '@features/nuzlocke/models/badge.model';
import { firstNum } from '@models/util/select';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke/nuzlocke.service';

@Component({
  selector: 'nuzlocke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  badges: Badge[];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly badgeService: BadgeService,
    private readonly nuzlockeService: NuzlockeService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { nuzlocke: Nuzlocke }) => {
      this.badges = this.badgeService.getBadges(data.nuzlocke);
      this.nuzlockeService.currentRunID = data.nuzlocke._id;
    });
  }

  earnBadge(badge: Badge, badgeNumber: any, firstRow: boolean) {
    badge.earned = !badge.earned;
    this.nuzlockeService.earnBadge(firstRow ? badgeNumber + 8 : badgeNumber);
  }

  get rows(): Badge[][] {
    return this.badges.length === 8
      ? [firstNum(this.badges, 8)]
      : [firstNum(this.badges, 8), firstNum(this.badges, 8, 8)];
  }
}
