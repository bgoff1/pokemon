jest.mock('@util/enum');
import { CreateComponent } from './create.component';
import nuzlockeServiceMock from '@nuzlocke/mocks/nuzlocke.service.mock';
import routerServiceMock from '@mocks/router.service.mock';

describe('Create Component', () => {
  let component: CreateComponent;

  beforeEach(() => {
    component = new CreateComponent(nuzlockeServiceMock, routerServiceMock);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get run name', () => {
    expect(component.runName).toBe('');
  });

  test('should get game', () => {
    expect(component.game).toBe(1);
  });

  test('should get random', () => {
    expect(component.random).toBe(false);
  });

  test('should submit', async () => {
    component.formGroup.patchValue({
      runName: 'a'
    });
    await component.submit();
    expect(routerServiceMock.changeTab).toBeCalledWith('overview', 1);
  });

  test('should not submit on invalid form', async () => {
    await component.submit();
    expect(routerServiceMock.changeTab).not.toBeCalled();
  });
});
