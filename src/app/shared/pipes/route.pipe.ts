import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'route'
})
export class RoutePipe extends TitleCasePipe implements PipeTransform {
  constructor() {
    super();
  }

  transform(value: string, ...args: any[]): string {
    return super.transform(value.replace('-', ' '));
  }
}
