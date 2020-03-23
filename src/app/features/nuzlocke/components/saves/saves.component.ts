import { Component, OnInit } from '@angular/core';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke.service';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';
import { RouteService } from '@services/routes/route.service';
import { NuzlockeStatus } from '@features/nuzlocke/models/status.model';

@Component({
  selector: 'saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.scss']
})
export class SavesComponent implements OnInit {
  saves: Nuzlocke[] = [];

  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routeService: RouteService
  ) {}

  ngOnInit() {
    this.nuzlockeService.getSaves().then(saves => {
      this.saves = saves;
      console.log(this.saves);
    });
  }

  selectSave(save: Nuzlocke) {
    this.routeService.changeTab(`overview/${save._id}`);
  }

  getStatus(status: NuzlockeStatus): string {
    return NuzlockeStatus[status];
  }

  navigateToCreate() {
    this.routeService.changeTab('create');
  }
}
