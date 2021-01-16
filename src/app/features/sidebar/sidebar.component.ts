import { Component, OnInit, ElementRef } from '@angular/core';
import Hammer from 'hammerjs';
import { RouterService } from '@services/router/router.service';
import { DraggingService } from '@services/dragging/dragging.service';
import { Link } from '@models/link.model';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = false;
  links: Link[] = [];
  hammer: HammerManager;

  constructor(
    private readonly routerService: RouterService,
    draggingService: DraggingService,
    elementRef: ElementRef
  ) {
    this.hammer = new Hammer(elementRef.nativeElement, {});
    this.hammer.on('panright', (event) => {
      if (
        !draggingService.isDragging &&
        event.pointerType !== 'mouse' &&
        event.center.x >= 1 &&
        event.center.x <= 50
      ) {
        this.setOpen(true);
      }
    });
  }

  setOpen(opened: boolean): void {
    this.opened = this.routerService.sidebarOpen = opened;
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
}
