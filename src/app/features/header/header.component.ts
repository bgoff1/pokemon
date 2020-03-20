import { Component, OnInit } from '@angular/core';
import { RouteService } from '@services/routes/route.service';

@Component({
  selector: 'nav-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title = 'Pokemon';
  constructor(private readonly routeService: RouteService) {}

  ngOnInit() {
    this.routeService.route$.subscribe(route => {
      this.title = route.replace('-', ' ');
    });
  }

  toggleMenu() {
    this.routeService.clickMenu();
  }
}
