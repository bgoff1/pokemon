import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NuzlockeService } from '../services/nuzlocke.service';
import { RouteService } from '@services/routes/route.service';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanActivate {
  private hasNuzlockes: boolean;
  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routeService: RouteService
  ) {}

  canActivate(): Promise<boolean> | boolean {
    return (
      this.hasNuzlockes ||
      this.nuzlockeService.hasNuzlockeSaved().then(canActivate => {
        console.log('calling');
        if (!canActivate) {
          this.routeService.redirect('nuzlocke/create');
        }
        this.hasNuzlockes = canActivate;
        return canActivate;
      })
    );
  }
}
