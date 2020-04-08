import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[longPress]'
})
export class LongPressDirective {
  timeout: any;

  @Output()
  release = new EventEmitter();

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  startPress() {
    this.timeout = setTimeout(() => {
      this.release.emit();
    }, 500);
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  @HostListener('mouseleave')
  endPress() {
    clearTimeout(this.timeout);
  }
}
