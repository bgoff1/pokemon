import { Injectable } from '@angular/core';
import { titlecase } from '../../util/name';

@Injectable({
  providedIn: 'root'
})
export class HideFormService {
  private readonly isMegaRegex = /(\s|\-)(M|m)ega/;
  private readonly isAlolaRegex = /-?(A|a)lola(n)?/;
  private readonly isGalarRegex = /-?(G|g)alar(ian)?/;
  private readonly megaReplaceRegex = /-?(m|M)ega-?(\w+)?/;
  private readonly formRegex = /(\w{3,})-(\w{2,})(-\w{2,})?/;

  transform(value: string): string {
    if (this.isMega(value)) {
      return titlecase(
        'mega ' +
          value
            .replace(this.megaReplaceRegex, ' $2')
            .replace(this.isAlolaRegex, '')
            .replace(this.isGalarRegex, '')
            .trim()
      );
    }
    if (this.isGalar(value)) {
      return 'Galarian ' + value.replace(this.isGalarRegex, '');
    }
    if (this.isAlola(value)) {
      return 'Alolan ' + value.replace(this.isAlolaRegex, '');
    }
    if (this.isFormed(value) && !value.toLowerCase().includes('tapu')) {
      return this.formatForm(value);
    }
    if (value.toLowerCase().includes('tapu')) {
      return value.replace('-', ' ');
    }
    return value.replace(':-', ': ');
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
