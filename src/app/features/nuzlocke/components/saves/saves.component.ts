import { Component, OnInit } from '@angular/core';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke/nuzlocke.service';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';
import { RouterService } from '@services/router/router.service';
import { NuzlockeStatus } from '@features/nuzlocke/models/status.model';
import { GameGroup, formatGameName } from '@models/pokemon/game-groups';

@Component({
  selector: 'saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.scss']
})
export class SavesComponent implements OnInit {
  saves: Nuzlocke[] = [];

  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routerService: RouterService
  ) {}

  ngOnInit() {
    this.nuzlockeService.getSaves().then(saves => {
      this.saves = saves;
      if (this.saves.length === 1) {
        this.routerService.id = this.saves[0]._id;
      }
    });
  }

  selectSave(save: Nuzlocke) {
    this.routerService.changeTab(`overview`, save._id);
  }

  getStatus(status: NuzlockeStatus): string {
    return NuzlockeStatus[status];
  }

  getGame(game: GameGroup): string {
    return formatGameName(game);
  }

  navigateToCreate() {
    this.routerService.changeTab('create');
  }
}
