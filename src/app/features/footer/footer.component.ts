import { Component, OnInit } from '@angular/core';
import { RouteService } from '@services/routes/route.service';
import { TabLink } from '@models/tab.model';

@Component({
  selector: 'nav-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tabs: TabLink[] = [];
  route: string;
  constructor(private readonly routeService: RouteService) {}

  ngOnInit() {
    this.routeService.route$.subscribe(route => {
      this.tabs = this.routeService.getTabs(route);
      this.route = route;
    });
  }

  navigate(path: string) {
    this.routeService.changeTab(path);
  }

  isActive(path: string) {
    return this.routeService.isCurrentRoute(this.route + '/' + path);
  }

  isSidebarOpen() {
    return this.routeService.sidebarOpen;
  }
}
