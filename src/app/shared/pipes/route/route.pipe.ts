import { Pipe, PipeTransform } from '@angular/core';
import { TitleCaseService } from '../../services/titlecase/titlecase.service';

@Pipe({
  name: 'route'
})
export class RoutePipe implements PipeTransform {
  constructor(private readonly titleCaseService: TitleCaseService) {}

  transform(value: string): string {
    return this.titleCaseService.titlecase(value.replace('-', ' '));
  }
}
