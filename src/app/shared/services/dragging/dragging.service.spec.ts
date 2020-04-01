import { DraggingService } from './dragging.service';

describe('DraggingService', () => {
  let service: DraggingService;

  beforeEach(() => {
    service = new DraggingService();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should change is dragging', () => {
    service.isDragging = true;
    expect(service.isDragging).toBe(true);
  });
});
