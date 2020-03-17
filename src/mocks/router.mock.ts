import { NavigationEnd } from '@angular/router';

import { Subject } from 'rxjs/internal/Subject';

const sub = new Subject<NavigationEnd>();
export default {
  events: sub,
  navigateByUrl: jest.fn(url => {
    sub.next(new NavigationEnd(1, url, url));
  })
} as any;
