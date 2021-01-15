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
import { HideFormService } from '@services/hide-form/hide-form.service';
import { PokemonImageService } from '@services/pokemon-image/pokemon-image.service';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { titlecase } from '@util/name';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NuzlockeService } from '../../services/nuzlocke/nuzlocke.service';

@Component({
  selector: 'picker-dialog',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  formGroup: FormGroup;
  @ViewChild('pokemon') pokemonInputElement: ElementRef;
  filteredOptions: Observable<string[]>;
  allNames: string[] = [];
  previouslyFocusedElement: Element;
  autoCompleteOptions: string[];

  @Input() nickname: string;
  @Input() random: boolean;
  @Input() limitOptionsByEvolution: boolean;
  @Input() pokemon: Pokemon;
  @Input() pokemonOptions: string[];
  @Input() hideNickname: boolean;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly hideFormService: HideFormService,
    private readonly nuzlockeService: NuzlockeService,
    private readonly pokemonImageService: PokemonImageService
  ) {
    this.formGroup = new FormGroup({
      pokemon: new FormControl('', [
        Validators.required,
        (control: AbstractControl) => {
          return this.allNames
            .map(name => name.toLowerCase())
            .includes(
              this.pokemonImageService
                .reverseImageReplace(control.value)
                .toLowerCase()
            )
            ? null
            : { invalidPokemon: true };
        }
      ]),
      nickname: new FormControl(this.nickname || '')
    });
  }

  async ngOnInit() {
    this.allNames = await this.pokemonService.getPokemonNames();

    if (this.limitOptionsByEvolution) {
      this.autoCompleteOptions = await this.pokemonService.findEvolutionNames(
        this.pokemon.name
      );
    } else {
      if (this.random) {
        this.autoCompleteOptions = this.allNames;
      } else {
        const filteredByOwned = this.pokemonOptions.filter(
          mon =>
            !this.nuzlockeService.currentRun.pokemon
              .map(pokemon => pokemon.name)
              .includes(mon)
        );
        if (filteredByOwned.length === 0 && this.pokemonOptions.length !== 0) {
          this.autoCompleteOptions = this.pokemonOptions.map(mon =>
            titlecase(mon)
          );
        } else {
          this.autoCompleteOptions = filteredByOwned.map(mon => titlecase(mon));
        }
      }
    }
    this.filteredOptions = this.pokemonControl.valueChanges.pipe(
      startWith(this.pokemonControl.value),
      map((input: string) => this.filterOptions(input))
    );
  }

  private filterOptions(input: string) {
    const defaultFilters = this.autoCompleteOptions.filter(option =>
      option.toLowerCase().includes(input.toLowerCase())
    );

    return defaultFilters.length === 0
      ? this.allNames
          .filter(option =>
            this.pokemonImageService.handleSearch(option, input)
          )
          .slice(0, 15)
      : defaultFilters;
  }

  onInputClick() {
    if (
      this.pokemonControl.value &&
      this.pokemonInputElement.nativeElement !== this.previouslyFocusedElement
    ) {
      this.pokemonControl.setValue('');
    }
  }

  selectPokemon() {
    this.pokemonControl.setValue(
      this.hideFormService.transform(this.pokemonControl.value)
    );
  }

  @HostListener('document:click')
  click() {
    this.previouslyFocusedElement = document.activeElement;
  }

  get pokemonControl(): FormControl {
    return this.formGroup.controls.pokemon as FormControl;
  }

  get formValue() {
    return this.formGroup.value;
  }

  get showImage() {
    return this.pokemonControl.valid || this.pokemon?.name;
  }

  get imageValue() {
    return this.pokemonImageService.reverseImageReplace(
      this.pokemonControl.valid
        ? this.pokemonControl.value.toLowerCase()
        : this.pokemon?.name.toLowerCase()
    );
  }
}
