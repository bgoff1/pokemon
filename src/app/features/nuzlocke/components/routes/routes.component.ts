import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nuzlocke } from '@features/nuzlocke/models/nuzlocke.model';

@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { nuzlocke: Nuzlocke }) => {
      console.log(data);
    });
  }
}
