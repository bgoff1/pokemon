import { Component, OnInit } from '@angular/core';
import { Link } from '@models/link.model';
import { RouterService } from '@services/router/router.service';
import { SwipeService } from '../../shared/services/swipe/swipe.service';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = false;
  links: Link[] = [];

  constructor(
    private readonly routerService: RouterService,
    private readonly swipeService: SwipeService
  ) {}

  setOpen(opened: boolean): void {
    this.opened = this.routerService.open = opened;
  }

  ngOnInit(): void {
    this.links = this.routerService.links;
    this.routerService.menuClick$.subscribe((open) => {
      this.setOpen(open);
    });
  }

  isActive(link: string): boolean {
    return this.routerService.isViewMode(link);
  }

  hideOverflow(): boolean {
    return this.routerService.isCurrentRoute('/team-builder/home');
  }

  swipe(e: TouchEvent, direction: string): void {
    if (!this.opened && this.swipeService.swipe(e, direction)) {
      this.setOpen(true);
    }
  }
}
