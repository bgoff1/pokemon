import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwipeService {
  private swipeCoord: [number, number] = [0, 0];
  private swipeTime = 0;

  swipe(e: TouchEvent, when: string): boolean {
    const coord: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    ];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
      return false;
    } else if (when === 'end') {
      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1]
      ];
      const duration = time - this.swipeTime;

      if (
        duration < 1000 && //
        Math.abs(direction[0]) > 50 && // Long enough
        Math.abs(direction[0]) > Math.abs(direction[1] * 3)
      ) {
        // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        return swipe === 'previous';
      }
    }
    return false;
  }
}
