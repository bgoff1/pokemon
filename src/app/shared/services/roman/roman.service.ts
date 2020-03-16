import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanService {
  romanize(num: number): string {
    const decimals = [10, 9, 5, 4, 1];
    const roman = ['X', 'IX', 'V', 'IV', 'I'];

    for (let i = 0; i < decimals.length; i++) {
      if (num >= decimals[i]) {
        return roman[i] + this.romanize(num - decimals[i]);
      }
    }
    return '';
  }
}
