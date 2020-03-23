import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Nuzlocke } from '../models/nuzlocke.model';
import { NuzlockeService } from '../services/nuzlocke.service';
import { RouteService } from '@services/routes/route.service';

@Injectable({
  providedIn: 'root'
})
export class NuzlockeResolverService implements Resolve<Nuzlocke> {
  previous: { id: string; nuzlocke: Nuzlocke };
  constructor(
    private readonly nuzlockeService: NuzlockeService,
    private readonly routeService: RouteService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Nuzlocke> | Nuzlocke {
    const id = route.paramMap.get('id');

    if (id === this.previous?.id) {
      return this.previous.nuzlocke;
    }
    return this.nuzlockeService.getSaves().then(saves => {
      const currentSave = saves.find(save => save._id === id);
      if (!!currentSave) {
        this.previous = { id, nuzlocke: currentSave };
        return currentSave;
      } else {
        this.routeService.redirect('nuzlocke/saves');
        return null;
      }
    });
  }
}
