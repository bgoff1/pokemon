import { Injectable } from '@angular/core';
import { TitleCaseService } from '../titlecase/titlecase.service';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private readonly isMegaRegex = /(\s|\-)(M|m)ega/;
  private readonly isAlolaRegex = /-?(A|a)lola(n)?/;
  private readonly isGalarRegex = /-?(G|g)alar(ian)?/;
  private readonly megaReplaceRegex = /-?(m|M)ega-?(\w+)?/;
  private readonly formRegex = /(\w{3,})-(\w{2,})(-\w{2,})?/;

  constructor(private readonly titleCaseService: TitleCaseService) {}

  transform(value: string): string {
    if (this.isMega(value)) {
      return this.titleCaseService.titlecase(
        'mega ' +
          value
            .replace(this.megaReplaceRegex, ' $2')
            .replace(this.isAlolaRegex, '')
            .replace(this.isGalarRegex, '')
            .trim()
      );
    }
    if (this.isGalar(value)) {
      return this.titleCaseService.titlecase(
        'Galarian ' + value.replace(this.isGalarRegex, '')
      );
    }
    if (this.isAlola(value)) {
      return this.titleCaseService.titlecase(
        'Alolan ' + value.replace(this.isAlolaRegex, '')
      );
    }
    if (this.isFormed(value) && !value.toLowerCase().includes('tapu')) {
      return this.titleCaseService.titlecase(this.formatForm(value));
    }
    if (value.toLowerCase().includes('tapu')) {
      return this.titleCaseService.titlecase(value.replace('-', ' '));
    }
    return this.titleCaseService.titlecase(value.replace(':-', ': '));
  }

  private formatForm(value: string): string {
    return value.replace(this.formRegex, '$2$3 $1');
  }

  private isFormed(value: string): boolean {
    return this.matchesRegex(value, this.formRegex);
  }

  private isMega(value: string): boolean {
    return this.matchesRegex(value, this.isMegaRegex);
  }

  private matchesRegex(value: string, regex: RegExp): boolean {
    return !!value.match(regex)?.length ?? false;
  }

  private isGalar(value: string): boolean {
    return this.matchesRegex(value, this.isGalarRegex);
  }

  private isAlola(value: string): boolean {
    return this.matchesRegex(value, this.isAlolaRegex);
  }
}
