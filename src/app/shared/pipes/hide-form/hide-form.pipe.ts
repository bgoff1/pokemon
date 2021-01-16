import { Pipe, PipeTransform } from '@angular/core';
import { NameService } from '@services/name/name.service';

@Pipe({
  name: 'hideForm'
})
export class HideFormPipe implements PipeTransform {
  constructor(private readonly nameService: NameService) {}

  transform(value: string): string {
    return value === 'Empty Team Member'
      ? ''
      : this.nameService.transform(value);
  }
}
