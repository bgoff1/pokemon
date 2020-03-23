import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';

@Component({
  selector: 'encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { nuzlocke: Nuzlocke }) => {
      console.log(data.nuzlocke);
    });
  }
}
