import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from '@features/nuzlocke/services/badge/badge.service';
import { Badge } from '@features/nuzlocke/models/badge.model';
import { firstNum } from '@util/select';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke/nuzlocke.service';
import { RouteData } from '@features/nuzlocke/models/route-data.model';
import {
  NuzlockePokemon,
  PokemonStatus
} from '@features/nuzlocke/models/nuzlocke-pokemon.model';
import { enumValues } from '@util/enum';

@Component({
  selector: 'nuzlocke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  badges: Badge[] = [];

  groups: { title: string; data: NuzlockePokemon[] }[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly badgeService: BadgeService,
    private readonly nuzlockeService: NuzlockeService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(({ nuzlocke }: RouteData) => {
      this.badges = this.badgeService.getBadges(nuzlocke);
      this.groups = [];
      for (const value of enumValues(PokemonStatus)) {
        this.groups.push({
          title: value,
          data: nuzlocke.pokemon.filter(
            ({ status }) => status === PokemonStatus[value]
          )
        });
      }
    });
  }

  change(event: NuzlockePokemon) {
    this.nuzlockeService.updateEncounter(event);
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

  get alive() {
    let i = 0;
    for (const group of this.groups) {
      for (const item of group.data) {
        if (
          item.status !== PokemonStatus.Heaven &&
          item.status !== PokemonStatus.Missed
        ) {
          i++;
        }
      }
    }
    return i;
  }

  get dead() {
    let i = 0;
    for (const item of [].concat(
      this.groups.map(group => group.data)
    ) as NuzlockePokemon[]) {
      // for (const item of group.data) {
      if (item.status === PokemonStatus.Heaven) {
        i++;
      }
      // }
    }
    return i;
  }
}
