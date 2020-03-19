import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Link } from '@models/link.model';
import links from '@resources/links';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  open = false;
  links: Link[] = links.map(this.formatLink);

  private currentRoute: string;
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
        this.currentRoute = route.urlAfterRedirects;
        this.route.next(this.currentRoute.slice(1));
      });
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }

  changeRoute(route: string): void {
    if (!this.isCurrentRoute(route)) {
      this.router.navigateByUrl(route);
    }
  }

  clickMenu(): void {
    this.open = !this.open;
    this.menuClick.next(this.open);
  }

  formatLink(path: string): Link {
    return {
      label: path.replace('-', ' '),
      path
    };
  }
}
