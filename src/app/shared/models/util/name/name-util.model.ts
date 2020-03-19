export class NameUtility {
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
    for (const extra of ['mega', 'alola', 'galar']) {
      result = result.replace(extra, '');
    }
    return result.trim();
  }

  static getDisplayName(name: string): string {
    return name === 'Empty Team Member' ? ' ' : NameUtility.stripExtras(name);
  }
}
