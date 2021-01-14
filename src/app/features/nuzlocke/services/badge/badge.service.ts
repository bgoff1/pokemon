import { Injectable } from '@angular/core';
import { Region } from '@models/pokemon/region';
import { Badge } from '@nuzlocke/models/badge.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { Game, getRegionFromGame } from '@shared/models/pokemon/game';
import { NuzlockeService } from '../nuzlocke/nuzlocke.service';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  constructor(private readonly nuzlockeService: NuzlockeService) {}

  getBadges(run: Nuzlocke): Badge[] {
    this.nuzlockeService.currentRun = run;
    const region = Region[getRegionFromGame(run.game)].toLowerCase();
    return this.getUpdatedBadges(
      run,
      [...Array(region === 'johto' ? 16 : 8).keys()].map(item => ({
        url: `assets/badges/${this.getUrl(item, region)}.png`,
        earned: !!run.badgesEarned?.includes(item)
      }))
    );
  }

  private getUpdatedBadges(run: Nuzlocke, badges: Badge[]) {
    switch (run.game) {
      case Game.Platinum:
        [badges[2], badges[3], badges[4]] = [badges[4], badges[2], badges[3]];
        break;
      case Game.Sun:
      case Game.Moon:
        badges.pop();
        break;
      case Game.Sword:
      case Game.Shield:
        this.updateURL(3, badges, run.game);
        this.updateURL(5, badges, run.game);
        break;
    }
    return badges;
  }

  updateURL(index: number, result: Badge[], game: Game) {
    result[index].url = result[index].url.replace(
      '.png',
      this.getImageCodeFromGame(game) + '.png'
    );
  }

  getImageCodeFromGame(game: Game) {
    if (game === Game.Sword) {
      return 'a';
    } else if (game === Game.Shield) {
      return 'b';
    }
    return '';
  }

  getUrl(item: number, region: string): string {
    return item >= 8 ? `kanto/${item - 8}` : `${region}/${item}`;
  }
}
