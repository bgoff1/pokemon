import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from '@features/nuzlocke/services/badge/badge.service';
import { Badge } from '@nuzlocke/models/badge.model';
import { Group } from '@nuzlocke/models/group.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { RouteData } from '@nuzlocke/models/route-data.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { PokemonImageService } from '@services/pokemon-image/pokemon-image.service';
import { RouterService } from '@shared/services/router/router.service';
import { TeamService } from '@team/services/team/team.service';
import { enumValues } from '@util/enum/enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuzlocke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  badges: Badge[] = [];
  nuzlocke!: Nuzlocke;
  groups: Group[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: RouterService,
    private readonly pokemonImageService: PokemonImageService,
    private readonly badgeService: BadgeService,
    private readonly nuzlockeService: NuzlockeService,
    private readonly teamService: TeamService
  ) {}

  ngOnInit(): void {
    (this.route.data as Observable<RouteData>).subscribe(
      ({ nuzlocke }: RouteData) => {
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
      }
    );
  }

  dragDropChange(event: Pokemon): void {
    this.nuzlockeService.updateEncounter(event, { status: event.status });
  }

  earnBadge(badge: Badge, badgeNumber: number, secondRow: boolean): void {
    badge.earned = !badge.earned;
    this.nuzlockeService.earnBadge(secondRow ? badgeNumber + 8 : badgeNumber);
  }

  async exportToTeamBuilder(): Promise<void> {
    const members = this.party.map((mon) =>
      this.pokemonImageService.transform(mon.name)
    );

    await this.teamService.exportToTeamBuilder(members);
    this.router.redirect('/team-builder');
  }

  get rows(): Badge[][] {
    return this.badges.length === 8
      ? [this.badges.slice(0, 8)]
      : [this.badges.slice(0, 8), this.badges.slice(8)];
  }

  get groupData(): Pokemon[] {
    const result = [];
    for (const group of this.groups) {
      for (const data of group.data) {
        result.push(data);
      }
    }
    return result;
  }

  private count(status: Status | null, notList?: Status[]): number {
    let i = 0;
    if (status !== null) {
      for (const item of this.groupData) {
        if (item.status === status) {
          ++i;
        }
      }
    } else {
      for (const item of this.groupData) {
        if (notList?.every((notItem) => notItem !== item.status)) {
          ++i;
        }
      }
    }
    return i;
  }

  get party(): Pokemon[] {
    return (
      this.groups.find((group) => group?.title === Status[Status.Party])
        ?.data || []
    );
  }

  get alive(): number {
    return this.count(null, [Status.Heaven, Status.Missed]);
  }

  get dead(): number {
    return this.count(Status.Heaven);
  }

  get boxed(): number {
    return this.count(Status.Boxed);
  }

  get missed(): number {
    return this.count(Status.Missed);
  }
}
