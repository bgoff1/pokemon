import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  Input
} from '@angular/core';

@Directive({
  selector: '[appLongPress]'
})
export class LongPressDirective {
  @Input() longPress = 500;
  timeout: any;

  @Output()
  release = new EventEmitter();

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  startPress(): void {
    this.timeout = setTimeout(() => {
      this.release.emit();
    }, this.longPress);
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  @HostListener('mouseleave')
  endPress(): void {
    clearTimeout(this.timeout);
  }
}
