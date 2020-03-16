import { Route } from '@models/view-mode.model';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import links from '@shared/resources/links';
import { Link } from '@models/link.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  open = false;
  links: Link[] = links.map(this.formatLink);

  private currentRoute: Route;
  private menuClick: Subject<boolean> = new Subject();
  private route: Subject<Route> = new Subject();

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
        this.currentRoute = this.formatRoute(route.urlAfterRedirects);
        this.route.next(this.currentRoute);
      });
  }

  formatRoute(routeURL: string): Route {
    return routeURL.slice(1) as Route;
  }

  isCurrentRoute(route: Route): boolean {
    return this.currentRoute === route;
  }

  changeRoute(route: Route): void {
    if (!this.isCurrentRoute(route)) {
      this.router.navigateByUrl('/' + route);
    }
  }

  clickMenu() {
    this.open = !this.open;
    this.menuClick.next(this.open);
  }

  formatLink(path: Route): Link {
    return {
      label: path.replace('-', ' '),
      path
    };
  }
}
