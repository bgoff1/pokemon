import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaveRouteDialog } from '@features/nuzlocke/models/save-dialog.model';
import { Nuzlocke } from '@nuzlocke/models/nuzlocke.model';
import { NuzlockeStatus } from '@nuzlocke/models/status.model';
import { NuzlockeService } from '@nuzlocke/services/nuzlocke/nuzlocke.service';
import { RouterService } from '@services/router/router.service';
import { formatGameName, Game } from '@models/pokemon/game.model';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.scss']
})
export class SavesComponent implements OnInit {
  saves: Nuzlocke[] = [];

  constructor(
    private readonly dialog: MatDialog,
    private readonly nuzlockeService: NuzlockeService,
    private readonly routerService: RouterService
  ) {}

  ngOnInit(): void {
    this.loadSaves();
  }

  async loadSaves(): Promise<void> {
    this.saves = await this.nuzlockeService.getSaves();
    if (this.saves.length === 1 && this.saves[0].id) {
      this.routerService.id = this.saves[0].id;
    }
  }

  selectSave(save: Nuzlocke): void {
    this.routerService.changeTab(`overview`, save.id);
  }

  getStatus(status: NuzlockeStatus): string {
    return NuzlockeStatus[status];
  }

  getGame(game: Game): string {
    return formatGameName(game);
  }

  navigateToCreate(): void {
    this.routerService.changeTab('create');
  }

  onLongPress(save: Nuzlocke): void {
    const dialog: SaveRouteDialog = this.dialog.open(SaveDialogComponent, {
      data: { name: save.runName, random: save.random },
      width: '80%'
    });
    dialog.afterClosed().subscribe(async (res) => {
      if (res) {
        if (res.delete) {
          this.nuzlockeService.deleteNuzlocke(save);
        } else {
          this.nuzlockeService.updateNuzlocke(save, res);
        }
        this.loadSaves();
      }
    });
  }
}
