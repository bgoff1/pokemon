export class NameReplacementUtility {
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
    return name
      .replace(' ', '-')
      .replace(':', '')
      .replace('.', '')
      .replace("'", '')
      .trim();
  }

  static removeHide(text: string): string {
    return text.replace('hide', '').trim();
  }

  static removeForms(text: string): string {
    return text.replace('forms', '').trim();
  }

  static trimRegionName(text: string): string {
    return this.removeHide(this.removeForms(text))
      .replace(/(mega)s/, '$1')
      .replace(/(alola)n/, '$1')
      .replace(/(galar)ian/, '$1')
      .trim();
  }

  static parseRegionName(regionName: string) {
    if (regionName.includes('(')) {
      return regionName.includes('diamond')
        ? 'original-sinnoh'
        : 'extended-sinnoh';
    }
    return regionName
      .replace(/^(johto|unova)$/, 'original-$1')
      .replace(/\s+/g, '-')
      .trim();
  }

  static stripExtras(name: string): string {
    let result = name.toLowerCase();
    for (const extra of ['mega', 'alola', 'galar']) {
      result = result.replace(extra, '');
    }
    return result.trim();
  }

  static getDisplayName(name: string): string {
    return name === 'Empty Team Member'
      ? ' '
      : NameReplacementUtility.stripExtras(name);
  }
}
