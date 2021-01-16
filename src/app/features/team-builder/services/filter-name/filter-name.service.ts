import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterNameService {
  removeHide(text: string): string {
    return text.replace(/(hide|Hide)/, '').trim();
  }

  removeForms(text: string): string {
    return text.replace(/(forms|Forms)/, '').trim();
  }

  trimRegionName(text: string): string {
    return this.removeHide(this.removeForms(text))
      .replace(/(mega|Mega)s/, '$1')
      .replace(/(alola|Alola)n/, '$1')
      .replace(/(galar|Galar)ian/, '$1')
      .trim();
  }
}
