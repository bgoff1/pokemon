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
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';

@Component({
  selector: 'nuzlocke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  badges: Badge[] = [];
  nuzlocke: Nuzlocke;
  groups: { title: string; data: NuzlockePokemon[] }[];

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

  get groupData(): NuzlockePokemon[] {
    return [].concat(...this.groups.map(group => group.data));
  }

  private count(status: PokemonStatus | null, notList?: PokemonStatus[]) {
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
    return this.count(null, [PokemonStatus.Heaven, PokemonStatus.Missed]);
  }

  get dead() {
    return this.count(PokemonStatus.Heaven);
  }

  get boxed() {
    return this.count(PokemonStatus.Boxed);
  }

  get missed() {
    return this.count(PokemonStatus.Missed);
  }
}
