import { SearchComponent } from './search.component';

describe('Search Component', () => {
  let component: SearchComponent;

  beforeEach(() => {
    component = new SearchComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should subscribe in on init', async () => {
    jest.useFakeTimers();
    const spy = spyOn(component.search, 'emit');

    component.ngOnInit();

    component.searchSubject.next('test');

    await new Promise(res => {
      setTimeout(res, 500);
      jest.advanceTimersByTime(500);
    });

    expect(spy).toHaveBeenCalledWith('test');
  });

  test('should send the search text on key up', () => {
    component.searchSubject.next = jest.fn();

    component.onKeyUp({ target: { value: 'asd' } } as any);

    expect(component.searchSubject.next).toHaveBeenCalledWith('asd');
  });

  test('should send the search text on key up if truthy', () => {
    component.searchSubject.next = jest.fn();

    component.onKeyUp({ target: null } as any);

    expect(component.searchSubject.next).not.toHaveBeenCalled();
  });
});
