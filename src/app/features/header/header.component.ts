import { Component, OnInit } from '@angular/core';
import { RouterService } from '@services/router/router.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title = 'Pokemon';
  constructor(private readonly routerService: RouterService) {}

  ngOnInit(): void {
    this.routerService.route$.subscribe((route: string) => {
      this.title = route.substring(route.lastIndexOf('/') + 1);
    });
  }

  toggleMenu(): void {
    this.routerService.clickMenu();
  }
}
