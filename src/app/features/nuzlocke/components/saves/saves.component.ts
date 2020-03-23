import { Component, OnInit } from '@angular/core';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke.service';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';

@Component({
  selector: 'saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.scss']
})
export class SavesComponent implements OnInit {
  saves: Nuzlocke[] = [];

  constructor(private readonly nuzlockeService: NuzlockeService) {}

  ngOnInit() {
    this.nuzlockeService.getSaves().then(saves => {
      // this.saves = [...saves, ...saves, ...saves, ...saves];
      this.saves = saves;
      console.log(this.saves);
    });
  }
}
