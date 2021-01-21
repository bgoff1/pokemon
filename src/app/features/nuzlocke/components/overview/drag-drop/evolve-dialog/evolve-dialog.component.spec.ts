import { dialogRefMock } from '@mock/dialog-ref.mock';
import { pokemon } from '@mock/data/nuzlocke/pokemon.mock';
import { EvolveDialogComponent } from './evolve-dialog.component';
import { titleCaseServiceMock } from '@mock/title-case.service.mock';

describe('Nuzlocke: Overview > Drag Drop > Evolve Dialog Component', () => {
  let component: EvolveDialogComponent;

  beforeEach(() => {
    component = new EvolveDialogComponent(
      dialogRefMock as any,
      { pokemon },
      titleCaseServiceMock as any
    );
    component.pickerComponent = { formValue: 2 } as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close with a value on ok', () => {
    component.onClose('ok');
    expect(dialogRefMock.close).toHaveBeenCalledWith(2);
  });

  it('should close with no value on cancel', () => {
    component.onClose('cancel');
    expect(dialogRefMock.close).not.toHaveBeenCalledWith(2);
  });

  it('should get evolution name', () => {
    expect(component.evolutionName).toEqual(pokemon.nickname);
    component.pokemon.nickname = '';
    expect(component.evolutionName).toEqual(pokemon.name);
  });
});
