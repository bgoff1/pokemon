import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RouterService } from '@services/router/router.service';
import { Nuzlocke } from '../models/nuzlocke.model';
import { NuzlockeService } from '../services/nuzlocke/nuzlocke.service';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeResolverService implements Resolve<Nuzlocke> {
  previous: { id: number; nuzlocke: Nuzlocke };
  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routerService: RouterService
  ) {
    this.nuzlockeService.update$.subscribe(updates => {
      this.previous.nuzlocke = updates;
    });
  }

  resolve(route: ActivatedRouteSnapshot): Promise<Nuzlocke> | Nuzlocke {
    const id = +route.paramMap.get('id');

    if (id === this.previous?.id) {
      this.routerService.id = this.previous.id;
      return this.previous.nuzlocke;
    }
    return this.nuzlockeService.getSaves().then(saves => {
      const currentSave = saves.find(save => save.id === id);
      if (!!currentSave) {
        this.previous = { id, nuzlocke: currentSave };
        this.routerService.id = this.previous.id;
        return currentSave;
      } else {
        this.routerService.redirect('nuzlocke/saves');
        return null;
      }
    });
  }
}
