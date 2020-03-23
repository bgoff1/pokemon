import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { tabs, sidebarLinks } from '@resources/links';
import { TabLink, Tab } from '@models/tab.model';
import { Link } from '@models/link.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  open = false;
  links: Link[] = sidebarLinks;
  sidebarOpen = false;
  tabs: Tab[] = tabs;

  private menuClick: Subject<boolean> = new Subject();
  private route: Subject<string> = new Subject();

  private get parentRoute(): string {
    return this.router.url.substring(1, this.router.url.lastIndexOf('/'));
  }

  get menuClick$() {
    return this.menuClick.asObservable();
  }

  get route$() {
    return this.route.asObservable();
  }

  constructor(private readonly router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        this.route.next(
          route.urlAfterRedirects.substring(
            1,
            route.urlAfterRedirects.lastIndexOf('/')
          )
        );
      });
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === '/' + route;
  }

  changeTab(route: string, state?: any): void {
    const futureRoute = this.parentRoute + '/' + route;
    if (!this.isCurrentRoute(futureRoute)) {
      this.router.navigateByUrl(futureRoute, { state });
    }
  }

  clickMenu(): void {
    this.open = !this.open;
    this.menuClick.next(this.open);
  }

  getTabs(path: string): TabLink[] {
    return this.tabs.find(tab => tab.path === path)?.links || [];
  }

  isViewMode(parent: string): boolean {
    return (
      this.tabs
        .find(tab => tab.path === parent)
        ?.links.some(link => this.isCurrentRoute(`${parent}/${link.route}`)) ||
      false
    );
  }

  redirect(path: string) {
    this.router.navigateByUrl(path);
  }
}
