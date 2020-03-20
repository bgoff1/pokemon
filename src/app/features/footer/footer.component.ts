import { Component, OnInit } from '@angular/core';
import { RouteService } from '@services/routes/route.service';

@Component({
  selector: 'nav-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tabs: string[] = [];
  constructor(private readonly routeService: RouteService) {}

  ngOnInit() {
    this.routeService.route$.subscribe(route => {
      this.tabs = this.routeService.getTabs(route);
      console.log(this.tabs, route);
    });
  }

  navigate(path: string) {
    this.routeService.changeRoute(path);
  }

  isActive(path: string) {
    return this.routeService.isCurrentRoute(path);
  }
}
