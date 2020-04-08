import { LongPressDirective } from './long-press.directive';

describe('Long Press Directive', () => {
  let directive: LongPressDirective;
  beforeEach(() => {
    directive = new LongPressDirective();
  });

  test('should create', () => {
    expect(directive).toBeTruthy();
  });

  test('should set start on mousedown', () => {
    jest.useFakeTimers();
    directive.onMouseDown();
    directive.release.next = jest.fn();
    expect(directive.start).toBeDefined();
    jest.advanceTimersByTime(500);
    expect(directive.release.next).toBeCalled();
    jest.useRealTimers();
  });

  test('should not clear timer if time has not passed', () => {
    directive.longPress = 1000;
    directive.start = 1;
    Date.now = jest.fn(() => 50000);

    window.clearTimeout = jest.fn();
    directive.clearTimer();

    expect(window.clearTimeout).not.toBeCalled();
  });

  test('should clear timer', () => {
    directive.longPress = 1000;
    directive.start = 1;
    Date.now = jest.fn(() => 500);
    window.clearTimeout = jest.fn();

    directive.clearTimer();
    expect(window.clearTimeout).toBeCalled();
  });

  test('should call clear timer on destroy and mouse up', () => {
    directive.clearTimer = jest.fn();
    directive.ngOnDestroy();
    directive.onMouseLeave();
    directive.onMouseUp();
    expect(directive.clearTimer).toBeCalledTimes(3);
  });
});
