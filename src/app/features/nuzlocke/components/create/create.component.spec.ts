import { nuzlockeServiceMock } from '@mock/nuzlocke.service.mock';
import { routerServiceMock } from '@mock/router.service.mock';
import { CreateComponent } from './create.component';

describe('Nuzlocke: Create Component', () => {
  let component: CreateComponent;

  beforeEach(() => {
    component = new CreateComponent(
      nuzlockeServiceMock as any,
      routerServiceMock as any
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to create a nuzlocke', async () => {
    component.formGroup.controls.runName.setValue('name');
    await component.submit();
    expect(nuzlockeServiceMock.createNuzlocke).toHaveBeenCalled();
    expect(routerServiceMock.changeTab).toHaveBeenCalled();
  });

  it('should not create a nuzlocke if there is no name', async () => {
    component.formGroup.controls.runName.reset();
    await component.submit();
    expect(nuzlockeServiceMock.createNuzlocke).not.toHaveBeenCalled();
    expect(routerServiceMock.changeTab).not.toHaveBeenCalled();
  });
});
