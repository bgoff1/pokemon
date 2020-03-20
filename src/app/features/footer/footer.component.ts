import { Component } from '@angular/core';
import { RouteService } from '@services/routes/route.service';
import { Link } from '@models/link.model';

@Component({
  selector: 'nav-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navLinks: Link[] = [
    { label: 'Team Builder', path: '/team-builder' },
    {
      label: 'Options',
      path: '/options'
    }
  ];
  constructor(private readonly routeService: RouteService) {}

  navigate(path: string) {
    this.routeService.changeRoute(path);
  }

  isActive(path: string) {
    return this.routeService.isCurrentRoute(path);
  }
}
