import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';

@Component({
  selector: 'nuzlocke-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { nuzlocke: Nuzlocke }) => {
      console.log(data);
    });
  }
}
