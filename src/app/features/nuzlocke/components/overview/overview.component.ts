import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from '@features/nuzlocke/services/badge/badge.service';
import { Badge } from '@nuzlocke/models/badge.model';
import { Group } from '@nuzlocke/models/group.model';
import { Nuzlocke, NuzlockeStatus } from '@nuzlocke/models/nuzlocke.model';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { RouteData } from '@nuzlocke/models/route-data.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { PokemonImageService } from '@services/pokemon-image/pokemon-image.service';
import { RouterService } from '@shared/services/router/router.service';
import { TeamService } from '@team/services/team/team.service';
import { enumValues } from '@util/enum/enum';
import { Observable } from 'rxjs';
import { CompleteDialogComponent } from './complete-dialog/complete-dialog.component';

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
    private readonly teamService: TeamService,
    private readonly dialog: MatDialog
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
    if (this.active) {
      badge.earned = !badge.earned;
      this.nuzlockeService.earnBadge(secondRow ? badgeNumber + 8 : badgeNumber);
    }
  }

  async exportToTeamBuilder(): Promise<void> {
    const members = this.party.map((mon) =>
      this.pokemonImageService.transform(mon.name)
    );

    await this.teamService.exportToTeamBuilder(members);
    this.router.redirect('/team-builder');
  }

  completeRun(): void {
    const dialog = this.dialog.open(CompleteDialogComponent, {
      width: '80%',
      data: {
        finished: this.hasAllBadges() && this.alive > 0,
        name: this.nuzlocke.runName,
        alreadyFinished: this.finished
      }
    });
    dialog.afterClosed().subscribe((val: 'ok' | 'finish-only') => {
      if (val) {
        const finished = this.hasAllBadges() && this.alive > 0;
        if (finished) {
          this.nuzlockeService.completeNuzlocke(
            this.nuzlocke,
            finished,
            val === 'ok' ? this.nuzlocke.pokemon : []
          );
        } else {
          this.nuzlockeService.completeNuzlocke(this.nuzlocke);
        }
        if (val === 'ok') {
          this.router.redirect('/nuzlocke/create');
        } else {
          this.router.redirect('/nuzlocke/saves');
        }
      }
    });
  }

  get active(): boolean {
    return this.nuzlocke.status === NuzlockeStatus.Started;
  }

  get finished(): boolean {
    return this.nuzlocke.status === NuzlockeStatus.Success;
  }

  hasAllBadges(): boolean {
    return this.earnedBadges === this.badges.length;
  }

  get canComplete(): boolean {
    return (
      this.groupData.length > 0 && (this.hasAllBadges() || this.alive === 0)
    );
  }

  get earnedBadges(): number {
    return this.badges.filter((badge) => badge.earned).length;
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

  private count(status: Status): number {
    let i = 0;
    for (const item of this.groupData) {
      if (item.status === status) {
        ++i;
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
    return this.count(Status.Boxed) + this.count(Status.Party);
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
