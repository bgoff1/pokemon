export class NameUtility {
  static removeHide(text: string): string {
    return text.replace(/(hide|Hide)/, '').trim();
  }

  static removeForms(text: string): string {
    return text.replace(/(forms|Forms)/, '').trim();
  }

  static trimRegionName(text: string): string {
    return this.removeHide(this.removeForms(text))
      .replace(/(mega|Mega)s/, '$1')
      .replace(/(alola|Alola)n/, '$1')
      .replace(/(galar|Galar)ian/, '$1')
      .trim();
  }
}

const regionalForms = ['galar', 'alola'];
export const titlecase = (name: string): string => {
  if (name) {
    if (name.includes('-')) {
      const [main, ...rest] = name.split('-');
      const form = rest.join('-');
      return [titlecase(main), titlecase(form)].join('-');
    } else {
      const split = name.split(' ');
      const spaces = split.length;
      return split
        .map(word => {
          if (word && word.length > 1) {
            if (!regionalForms.includes(word.toLowerCase())) {
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
};
