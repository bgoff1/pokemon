import { Component, OnInit } from '@angular/core';
import { RouterService } from '@services/router/router.service';

@Component({
  selector: 'nav-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title = 'Pokemon';
  constructor(private readonly routerService: RouterService) {}

  ngOnInit() {
    this.routerService.route$.subscribe(route => {
      this.title = route.substring(route.lastIndexOf('/') + 1);
    });
  }

  toggleMenu() {
    this.routerService.clickMenu();
  }
}
