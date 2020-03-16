import { Component, OnInit, ElementRef } from '@angular/core';
import { RouteService } from '@shared/services/routes/route.service';
import Hammer from 'hammerjs';
import { Link } from '@models/link.model';

@Component({
  selector: 'nav-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = false;
  links: Link[];
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

  isCurrentRoute(link: Link): boolean {
    return this.routeService.isCurrentRoute(link.path);
  }

  navigate(link: Link): void {
    this.routeService.changeRoute(link.path);
  }
}
