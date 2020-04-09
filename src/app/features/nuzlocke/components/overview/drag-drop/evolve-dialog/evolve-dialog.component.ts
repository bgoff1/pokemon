import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EvolveDialogRef } from '@features/nuzlocke/models/evolve-dialog.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Pokemon } from '@nuzlocke/models/pokemon.model';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { titlecase } from '@util/name';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'evolve-dialog',
  templateUrl: './evolve-dialog.component.html',
  styleUrls: ['./evolve-dialog.component.scss']
})
export class EvolveDialogComponent implements OnInit {
  evolveFormGroup: FormGroup;
  pokemon: Pokemon;

  autocompleteOptions: string[];
  allNames: string[];
  filteredOptions: Observable<string[]>;

  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: EvolveDialogRef,
    @Inject(MAT_DIALOG_DATA) data: { pokemon: Pokemon },
    private readonly pokemonService: PokemonService
  ) {
    this.evolveFormGroup = new FormGroup({
      pokemon: new FormControl(''),
      nickname: new FormControl(data.pokemon.nickname || '')
    });
    this.pokemon = data.pokemon;
  }

  async ngOnInit() {
    this.allNames = (await this.pokemonService.getPokemonNames()).map(mon =>
      titlecase(mon.replace('-', ' ').trim())
    );
    this.autocompleteOptions = (
      await this.pokemonService.findEvolution(this.pokemon.name)
    ).map(mon => mon.name);
    this.filteredOptions = this.pokemonControl.valueChanges.pipe(
      startWith(this.pokemonControl.value),
      map((input: string) => this.filterOptions(input))
    );
  }

  filterOptions(input: string) {
    const defaultFilters = this.autocompleteOptions.filter(option =>
      option.toLowerCase().includes(input.toLowerCase())
    );
    return defaultFilters.length === 0
      ? this.allNames.filter(option =>
          option.toLowerCase().includes(input.toLowerCase())
        )
      : defaultFilters;
  }

  onClose(button: 'cancel' | 'ok') {
    if (button === 'ok') {
      this.dialogRef.close(this.evolveFormGroup.value);
    } else {
      this.dialogRef.close();
    }
  }

  selectPokemon() {
    this.pokemonControl.setValue(titlecase(this.pokemonControl.value));
  }

  get pokemonControl() {
    return this.evolveFormGroup.controls.pokemon;
  }

  get evolutionName() {
    return this.pokemon.nickname || titlecase(this.pokemon.name);
  }
}
