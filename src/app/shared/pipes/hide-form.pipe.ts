import { Pipe, PipeTransform } from '@angular/core';
import { HideFormService } from '@services/hide-form/hide-form.service';

@Pipe({
  name: 'hideForm'
})
export class HideFormPipe implements PipeTransform {
  constructor(private readonly hideFormService: HideFormService) {}
  transform(value: string) {
    return this.hideFormService.transform(value);
  }
}
