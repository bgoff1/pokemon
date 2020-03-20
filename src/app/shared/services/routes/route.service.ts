import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { tabs, sidebarLinks } from '@resources/links';
import { TabLink } from '@models/tab.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  open = false;
  links: string[] = sidebarLinks;

  private menuClick: Subject<boolean> = new Subject();
  private route: Subject<string> = new Subject();

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

  changeRoute(route: string): void {
    if (!this.isCurrentRoute(route)) {
      this.router.navigateByUrl('/' + route);
    }
  }

  changeTab(route: string): void {
    if (!this.isCurrentRoute(route)) {
      this.router.navigateByUrl(
        this.router.url.substring(0, this.router.url.lastIndexOf('/')) +
          '/' +
          route
      );
    }
  }

  clickMenu(): void {
    this.open = !this.open;
    this.menuClick.next(this.open);
  }

  getTabs(path: string): TabLink[] {
    return tabs.find(tab => tab.path === path)?.links;
  }

  isViewMode(parent: string) {
    return tabs
      .find(tab => tab.path === parent)
      ?.links.some(link => this.isCurrentRoute(parent + '/' + link.route));
  }
}
