import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { titlecase } from '@util/name';
import { DisplayRoute } from '@nuzlocke/models/route.model';
import { SelectRouteDialogRef } from '@nuzlocke/models/select-route-dialog.model';
import { PokemonService } from '@services/pokemon/pokemon.service';

@Component({
  selector: 'select-route-dialog',
  templateUrl: './select-route-dialog.component.html',
  styleUrls: ['./select-route-dialog.component.scss']
})
export class SelectRouteDialogComponent implements OnInit {
  routeFormControl: FormGroup;
  caught: boolean;
  autocompleteOptions: string[];
  allNames: string[];
  filteredOptions: Observable<string[]>;

  constructor(
    @Inject(MatDialogRef) private readonly dialogRef: SelectRouteDialogRef,
    @Inject(MAT_DIALOG_DATA) private readonly data: DisplayRoute,
    private readonly pokemonService: PokemonService
  ) {
    this.routeFormControl = new FormGroup({
      page: new FormControl(data.visited ? 2 : 1),
      pokemon: new FormControl(titlecase(data.capturedPokemon?.name)),
      nickname: new FormControl(data.capturedPokemon?.nickname || '')
    });
    this.caught = !!data.capturedPokemon;
  }

  async ngOnInit() {
    this.allNames = (await this.pokemonService.getPokemonNames()).map(mon =>
      titlecase(mon.replace('-', ' ').trim())
    );
    if (this.data.random) {
      this.autocompleteOptions = this.allNames;
    } else {
      this.autocompleteOptions = this.data.pokemon.map(mon =>
        titlecase(mon.replace('-', ' ').trim())
      );
    }
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
      this.dialogRef.close(this.formResult);
    } else {
      this.dialogRef.close();
    }
  }

  goBack() {
    this.routeFormControl.patchValue({ page: 1 });
    this.routeFormControl.markAsPristine();
  }

  obtained(result: 'yes' | 'no') {
    this.routeFormControl.patchValue({ page: 2 });
    this.caught = result === 'yes';
  }

  get formResult() {
    return {
      pokemon: this.pokemonControl.value,
      nickname: this.nickname.value,
      caught: this.caught
    };
  }

  get page(): number {
    return this.routeFormControl.controls.page.value;
  }

  get nickname() {
    return this.routeFormControl.controls.nickname;
  }

  get pokemonControl() {
    return this.routeFormControl.controls.pokemon;
  }
}
