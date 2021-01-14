export class NameUtility {
  private static formRegex = /(\w{2,}) (\w{3,})$/;
  static replaceImageCharacters(pokemon: string) {
    return this.imageReplace(this.characterReplace(pokemon));
  }

  static characterReplace(name: string): string {
    return name
      .replace(/é/g, 'e')
      .replace(/♂/, 'm')
      .replace(/♀/, 'f');
  }

  static imageReplace(name: string): string {
    name = this.reverseImageReplace(name);
    return name
      .replace(' ', '-')
      .replace(':', '')
      .replace('.', '')
      .replace("'", '')
      .trim();
  }

  static formReverse(name: string): string {
    if (name.match(this.formRegex)?.length) {
      return name.replace(this.formRegex, '$2-$1');
    }
    return name;
  }

  static reverseImageReplace(name: string): string {
    if (name.match(/Mega (\w+) (\w)$/)?.length) {
      console.log(name, 'here');
      const result = name.replace(/(Mega) (\w+) (\w)$/, '$2-$1-$3');
      return (
        result.slice(0, result.length - 1) +
        result[result.length - 1].toLowerCase()
      );
    } else if (name.match(/(\w+) (\w)-(mega)/)?.length) {
      console.log(name, 'here2');
      return name.replace(/(\w+) (\w)-(mega)/, '$1-$3-$2');
    }
    return this.formReverse(
      this.reverseMegaReplace(
        this.reverseAlolaReplace(this.reverseGalarReplace(name))
      )
    );
  }

  static reverseAlolaReplace(name: string): string {
    if (name.match(/(A|a)lolan(- |\s)/)?.length) {
      return name.replace(/(A|a)lolan(- |\s)/, '') + '-alola';
    }
    return name;
  }

  static reverseGalarReplace(name: string): string {
    if (name.match(/(g|G)alarian(- |\s)/)?.length) {
      return name.replace(/(g|G)alarian(- |\s)/, '') + '-galar';
    }
    return name;
  }

  static reverseMegaReplace(name: string): string {
    if (name.match(/(m|M)ega(- |\s)/)?.length) {
      return name.replace(/(m|M)ega(- |\s)/, '') + '-mega';
    }
    return name;
  }

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

  static stripExtras(name: string): string {
    let result = name.toLowerCase();
    for (const extra of [
      'mega',
      'alola',
      'galar',
      '-sandy',
      '-plant',
      '-trash'
    ]) {
      result = result.replace(extra, '');
    }
    return result.trim();
  }

  /**
   *
   * @param name name of pokemon
   * @returns a TitleCase version of the pokemon's name
   */
  static stripFormNames(name: string): string {
    let result = name.toLowerCase();
    for (const extra of ['-sandy', '-plant', '-trash', '-standard', '-zen']) {
      result = result.replace(extra, '');
    }

    return titlecase(result.trim());
  }

  static getDisplayName(name: string): string {
    return name === 'Empty Team Member' ? ' ' : name;
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
