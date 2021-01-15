import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonImageService {
  private formRegex = /(\w{2,}) (\w{3,})$/;

  transform(value: string): string {
    return this.imageReplace(this.characterReplace(value.toLowerCase()));
  }

  handleSearch(option: string, input: string) {
    const optionName = this.characterReplace(option.toLowerCase());
    if (input.toLowerCase().includes('mega ')) {
      return (
        optionName.includes(input.toLowerCase().replace('mega ', '')) &&
        optionName.includes('-mega')
      );
    } else if (input.toLowerCase().match(/alola(n)?/)) {
      return (
        optionName.includes(
          input
            .toLowerCase()
            .replace(/alola(n)?/, '')
            .trim()
        ) && optionName.includes('-alola')
      );
    } else if (input.toLowerCase().match(/galar(i|ia|ian)?/)?.length) {
      return (
        optionName.includes(
          input
            .toLowerCase()
            .replace(/galar(ian|ia|i)?/, '')
            .trim()
        ) && optionName.includes('-galar')
      );
    }
    return optionName.includes(input.toLowerCase());
  }

  characterReplace(name: string): string {
    return name
      .replace(/é/g, 'e')
      .replace(/♂/, 'm')
      .replace(/♀/, 'f');
  }

  private imageReplace(name: string): string {
    name = this.reverseImageReplace(name);
    return name
      .replace(' ', '-')
      .replace(':', '')
      .replace('.', '')
      .replace("'", '')
      .trim();
  }

  private formReverse(name: string): string {
    if (name.match(this.formRegex)?.length) {
      return name.replace(this.formRegex, '$2-$1');
    }
    return name;
  }

  private reverseAlolaReplace(name: string): string {
    if (name.match(/(A|a)lolan(- |\s)/)?.length) {
      return name.replace(/(A|a)lolan(- |\s)/, '') + '-alola';
    }
    return name;
  }

  private reverseGalarReplace(name: string): string {
    if (name.match(/(g|G)alarian(- |\s)/)?.length) {
      return name.replace(/(g|G)alarian(- |\s)/, '') + '-galar';
    }
    return name;
  }

  private reverseMegaReplace(name: string): string {
    if (name.match(/(m|M)ega(- |\s)/)?.length) {
      return name.replace(/(m|M)ega(- |\s)/, '') + '-mega';
    }
    return name;
  }

  reverseImageReplace(name: string): string {
    if (name.match(/(m|M)ega (\w+) (\w)$/)?.length) {
      const result = name.replace(/(Mega|mega) (\w+) (\w)$/, '$2-$1-$3');
      return (
        result.slice(0, result.length - 1) +
        result[result.length - 1].toLowerCase()
      );
    } else if (name.match(/(\w+) (\w)-(mega)/)?.length) {
      return name.replace(/(\w+) (\w)-(mega)/, '$1-$3-$2');
    }
    return this.formReverse(
      this.reverseMegaReplace(
        this.reverseAlolaReplace(this.reverseGalarReplace(name))
      )
    );
  }
}
