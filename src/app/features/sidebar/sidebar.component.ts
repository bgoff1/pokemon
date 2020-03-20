import { Component, OnInit, ElementRef } from '@angular/core';
import Hammer from 'hammerjs';
import { RouteService } from '@services/routes/route.service';

@Component({
  selector: 'nav-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = false;
  links: string[];
  hammer: HammerManager;

  constructor(
    private readonly routeService: RouteService,
    elementRef: ElementRef
  ) {
    this.hammer = new Hammer(elementRef.nativeElement, {});
    this.hammer.on('panright', event => {
      if (
        event.pointerType !== 'mouse' &&
        event.center.x >= 1 &&
        event.center.x <= 50
      ) {
        this.opened = true;
      }
    });
  }

  ngOnInit(): void {
    this.links = this.routeService.links;
    this.routeService.menuClick$.subscribe(open => {
      this.opened = open;
    });
  }

  closeSidebar() {
    this.opened = false;
  }

  isActive(link: string) {
    return this.routeService.isViewMode(link);
  }
}
