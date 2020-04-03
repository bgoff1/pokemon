import { Component, OnInit } from '@angular/core';
import { RouterService } from '@services/router/router.service';
import { GameGroup, formatGameName } from '@models/pokemon/game-groups';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { NuzlockeStatus } from '@nuzlocke/models/status.model';

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

  async ngOnInit() {
    const saves = await this.nuzlockeService.getSaves();
    this.saves = saves;
    if (this.saves.length === 1) {
      this.routerService.id = this.saves[0].id;
    }
  }

  selectSave(save: Nuzlocke) {
    this.routerService.changeTab(`overview`, save.id);
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
