import { Injectable } from '@angular/core';
import { getRegionFromGame } from '@models/pokemon/game-groups';
import { Region } from '@models/pokemon/region';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';
import { Badge } from '@features/nuzlocke/models/badge.model';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  getBadges(run: Nuzlocke): Badge[] {
    const region = Region[getRegionFromGame(run.game)].toLowerCase();
    return [...Array(region === 'johto' ? 16 : 8).keys()].map(item => ({
      url: `assets/badges/${this.getUrl(item, region)}.png`,
      earned: !!run.badgesEarned?.includes(item)
    }));
  }

  getUrl(item: number, region: string): string {
    return item >= 8 ? `kanto/${item - 8}` : `${region}/${item}`;
  }
}
