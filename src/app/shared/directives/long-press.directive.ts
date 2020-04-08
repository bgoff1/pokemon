import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  Input
} from '@angular/core';

@Directive({
  selector: '[longPress]'
})
export class LongPressDirective {
  @Input() longPress = 500;
  timeout: any;

  @Output()
  release = new EventEmitter();

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  startPress() {
    this.timeout = setTimeout(() => {
      this.release.emit();
    }, this.longPress);
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  @HostListener('mouseleave')
  endPress() {
    clearTimeout(this.timeout);
  }
}
