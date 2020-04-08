import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[longPress]'
})
export class LongPressDirective implements OnDestroy {
  @Input() public longPress = 500;
  @Output() public release: EventEmitter<any> = new EventEmitter();

  start: number;
  timeoutRef: any;

  public ngOnDestroy(): void {
    this.clearTimer();
  }

  clearTimer() {
    if (Date.now() - this.start < this.longPress) {
      clearTimeout(this.timeoutRef);
    }
  }

  @HostListener('pointerup')
  public onMouseUp(): void {
    this.clearTimer();
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.clearTimer();
  }

  @HostListener('pointerdown')
  public onMouseDown(): void {
    this.start = Date.now();
    this.timeoutRef = setTimeout(() => {
      this.release.next();
    }, this.longPress);
  }
}
