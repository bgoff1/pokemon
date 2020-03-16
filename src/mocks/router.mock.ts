import { Subject } from 'rxjs';
import { NavigationEnd } from '@angular/router';

const sub = new Subject<NavigationEnd>();
export default {
  events: sub,
  navigateByUrl: jest.fn(url => {
    sub.next(new NavigationEnd(1, url, url));
  })
} as any;
