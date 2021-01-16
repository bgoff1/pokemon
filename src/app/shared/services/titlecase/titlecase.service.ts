import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleCaseService {
  private readonly regionalForms = ['galar', 'alola'];
  titlecase(name: string): string {
    if (name) {
      if (name.includes('-')) {
        const [main, ...rest] = name.split('-');
        const form = rest.join('-');
        return [this.titlecase(main), this.titlecase(form)].join('-');
      } else {
        const split = name.split(' ');
        const spaces = split.length;
        return split
          .map((word) => {
            if (word && word.length > 1) {
              if (!this.regionalForms.includes(word.toLowerCase())) {
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
              }
              return word;
            }
            return spaces >= 2 ? word[0]?.toUpperCase() : word[0];
          })
          .join(' ');
      }
    }
    return '';
  }
}
