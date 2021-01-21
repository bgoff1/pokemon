import { Component, OnInit } from '@angular/core';
import { RouterService } from '@services/router/router.service';
import { TabLink } from '@models/tab.model';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tabs: TabLink[] = [];
  route = '';
  constructor(private readonly routerService: RouterService) {}

  ngOnInit(): void {
    this.routerService.route$.subscribe((route) => {
      this.tabs = this.routerService.getTabs(route);
      this.route = route;
    });
  }

  navigate(path: string): void {
    this.routerService.changeTab(path);
  }

  isActive(path: string): boolean {
    return this.routerService.isCurrentRoute(path);
  }

  get areTabsDisabled(): boolean {
    return this.routerService.open;
  }
}
