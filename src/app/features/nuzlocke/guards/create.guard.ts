import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NuzlockeService } from '../services/nuzlocke.service';
import { RouteService } from '@services/routes/route.service';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanActivate {
  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routeService: RouteService
  ) {}

  canActivate(): Promise<boolean> | boolean {
    return this.nuzlockeService.hasNuzlockeSaved().then(canActivate => {
      if (!canActivate) {
        this.routeService.redirect('nuzlocke/create');
      }
      return canActivate;
    });
  }
}
