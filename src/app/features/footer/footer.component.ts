import { Component, OnInit } from '@angular/core';
import { RouterService } from '@services/router/router.service';
import { TabLink } from '@models/tab.model';

@Component({
  selector: 'nav-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tabs: TabLink[] = [];
  route: string;
  constructor(private readonly routerService: RouterService) {}

  ngOnInit() {
    this.routerService.route$.subscribe(route => {
      this.tabs = this.routerService.getTabs(route);
      this.route = route;
    });
  }

  navigate(path: string) {
    this.routerService.changeTab(path);
  }

  isActive(path: string) {
    return this.routerService.isCurrentRoute(path);
  }

  get disabledTabs() {
    return this.routerService.sidebarOpen || !this.routerService.canChangeTabs;
  }
}
