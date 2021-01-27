import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Pokemon } from '@nuzlocke/models/pokemon.model';
import { NameService } from '@services/name/name.service';
import { PokemonImageService } from '@services/pokemon-image/pokemon-image.service';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { TitleCaseService } from '@services/titlecase/titlecase.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NuzlockeService } from '../../services/nuzlocke/nuzlocke.service';
import { PickerOutput } from './model/picker-output.model';
import { PickerValidationService } from './service/picker-validation.service';

@Component({
  selector: 'app-picker-dialog',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  formGroup: FormGroup;
  @ViewChild('pokemon') pokemonInputElement!: ElementRef;
  filteredOptions!: Observable<string[]>;
  allNames: string[] = [];
  previouslyFocusedElement: Element | null = null;
  autoCompleteOptions!: string[];

  @Input() nickname?: string;
  @Input() random!: boolean;
  @Input() limitOptionsByEvolution!: boolean;
  @Input() pokemon?: Pokemon;
  @Input() pokemonOptions?: string[];
  @Input() hideNickname!: boolean;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly nameService: NameService,
    private readonly nuzlockeService: NuzlockeService,
    private readonly pokemonImageService: PokemonImageService,
    private readonly titleCaseService: TitleCaseService,
    private readonly pickerValidationService: PickerValidationService
  ) {
    this.formGroup = new FormGroup({
      pokemon: new FormControl('', [
        Validators.required,
        (control: AbstractControl) =>
          this.pickerValidationService.validate(control, this.allNames)
      ]),
      nickname: new FormControl('')
    });
  }

  async ngOnInit(): Promise<void> {
    this.allNames = await this.pokemonService.getPokemonNames();
    if (this.nickname) {
      this.formGroup.controls.nickname.setValue(this.nickname);
    }

    await this.setAutoCompleteOptions();

    this.filteredOptions = this.pokemonControl.valueChanges.pipe(
      startWith(this.pokemonControl.value),
      map((input: string) => this.filterOptions(input))
    );
  }

  async setAutoCompleteOptions(): Promise<void> {
    if (this.limitOptionsByEvolution && this.pokemon?.name) {
      this.autoCompleteOptions = await this.pokemonService.findEvolutionNames(
        this.pokemon.name
      );
    } else {
      if (this.pokemonOptions?.length && !this.random) {
        const filteredByOwned = this.pokemonOptions.filter(
          (mon) =>
            !this.nuzlockeService.currentRun?.pokemon
              .map((pokemon) => pokemon.name)
              .includes(mon)
        );
        if (filteredByOwned.length === 0) {
          this.autoCompleteOptions = this.pokemonOptions.map((mon) =>
            this.titleCaseService.titlecase(mon)
          );
        } else {
          this.autoCompleteOptions = filteredByOwned.map((mon) =>
            this.titleCaseService.titlecase(mon)
          );
        }
      } else {
        this.autoCompleteOptions = this.allNames;
      }
    }
  }

  private filterOptions(input: string): string[] {
    const defaultFilters = this.autoCompleteOptions.filter((option) =>
      option.toLowerCase().includes(input.toLowerCase())
    );

    return defaultFilters.length === 0
      ? this.allNames
          .filter((option) =>
            this.pokemonImageService.handleSearch(option, input)
          )
          .slice(0, 15)
      : defaultFilters;
  }

  onInputClick(): void {
    if (
      this.pokemonControl.value &&
      this.pokemonInputElement.nativeElement !== this.previouslyFocusedElement
    ) {
      this.pokemonControl.setValue('');
    }
  }

  selectPokemon(): void {
    this.pokemonControl.setValue(
      this.nameService.transform(this.pokemonControl.value)
    );
  }

  @HostListener('document:click')
  click(): void {
    this.previouslyFocusedElement = document.activeElement;
  }

  get pokemonControl(): FormControl {
    return this.formGroup.controls.pokemon as FormControl;
  }

  get formValue(): PickerOutput {
    return this.formGroup.value;
  }

  get showImage(): boolean {
    return this.pokemonControl.valid || !!(this.pokemon?.name ?? '');
  }

  get imageValue(): string {
    return this.pokemonImageService.reverseImageReplace(
      this.pokemonControl.valid
        ? this.pokemonControl.value.toLowerCase()
        : this.pokemon?.name.toLowerCase() ?? ''
    );
  }
}
