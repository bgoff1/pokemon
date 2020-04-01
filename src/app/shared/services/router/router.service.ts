import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { TabLink, Tab } from '@models/tab.model';
import { Link } from '@models/link.model';
import { tabs, sidebarLinks, idTabs } from '@resources/links';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  open = false;
  links: Link[] = sidebarLinks;
  sidebarOpen = false;
  canChangeTabs = true;
  tabs: Tab[] = tabs;
  id: number;

  private menuClick: Subject<boolean> = new Subject();
  private route: Subject<string> = new Subject();

  private get parentRoute(): string {
    return this.router.url.substring(1, this.router.url.indexOf('/', 2));
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
    return this.router.url.includes('/' + route);
  }

  isExactRoute(route: string): boolean {
    return this.router.url === route;
  }

  changeTab(route: string, id?: number): void {
    if (idTabs.some(tab => tab === route)) {
      if (id) {
        this.id = id;
      }
      if (this.id) {
        const futureRoute = this.parentRoute + '/' + route + '/' + this.id;
        if (!this.isExactRoute(futureRoute)) {
          this.router.navigateByUrl(futureRoute);
        }
      }
    } else {
      const futureRoute = `${this.parentRoute}/${route}`;
      if (!this.isExactRoute(futureRoute)) {
        this.router.navigateByUrl(futureRoute);
      }
    }
  }

  clickMenu(): void {
    this.open = !this.open;
    this.menuClick.next(this.open);
  }

  getTabs(path: string): TabLink[] {
    path = path.split('/')[0];
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
    if (!this.isExactRoute(path)) {
      this.router.navigateByUrl(path);
    }
  }
}
