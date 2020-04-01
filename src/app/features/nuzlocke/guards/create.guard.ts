import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterService } from '@services/router/router.service';
import { NuzlockeService } from '../services/nuzlocke/nuzlocke.service';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanActivate {
  private hasNuzlockes: boolean;
  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routerService: RouterService
  ) {}

  canActivate(): Promise<boolean> | boolean {
    return (
      this.hasNuzlockes ||
      this.nuzlockeService.hasNuzlockeSaved().then(canActivate => {
        if (!canActivate) {
          this.routerService.canChangeTabs = false;
          this.routerService.redirect('nuzlocke/create');
        } else {
          this.routerService.canChangeTabs = true;
        }
        this.hasNuzlockes = canActivate;
        return canActivate;
      })
    );
  }
}
