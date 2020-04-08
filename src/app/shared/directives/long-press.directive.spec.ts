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
    directive.startPress();
    directive.release.emit = jest.fn();
    jest.advanceTimersByTime(500);
    expect(directive.release.emit).toBeCalled();
    jest.useRealTimers();
  });

  test('should call clear timer on destroy and mouse up', () => {
    jest.spyOn(window, 'clearTimeout');
    directive.endPress();
    expect(clearTimeout).toBeCalled();
  });
});
