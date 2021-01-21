import { PickerValidationService } from './picker-validation.service';
import { pokemonImageServiceMock } from '@mock/pokemon-image.service.mock';

describe('Nuzlocke: Picker > Picker Validation Service', () => {
  let service: PickerValidationService;
  beforeEach(() => {
    service = new PickerValidationService(pokemonImageServiceMock as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should validate', () => {
    expect(service.validate({ value: 'ab' } as any, ['ab'])).toBeNull();
    expect(service.validate({ value: 'ab' } as any, ['abc'])).toBeTruthy();
  });
});
