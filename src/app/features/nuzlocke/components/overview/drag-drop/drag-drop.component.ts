import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { DraggingService } from '@services/dragging/dragging.service';
import { NameUtility } from '@util/name';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { MatDialog } from '@angular/material/dialog';
import { EvolveDialogComponent } from './evolve-dialog/evolve-dialog.component';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke/nuzlocke.service';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  @Input() title: keyof typeof Status;
  @Input() data: Pokemon[];
  @Input() random: boolean;
  @Output() update: EventEmitter<Pokemon> = new EventEmitter();

  constructor(
    private readonly dialog: MatDialog,
    private readonly draggingService: DraggingService,
    private readonly nuzlockeService: NuzlockeService
  ) {}

  drop(event: CdkDragDrop<Pokemon[]>) {
    if (event.previousContainer !== event.container) {
      if (
        event.container.data[0] &&
        event.container.data[0].status === Status.Party &&
        event.container.data.length === 6
      ) {
        return;
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.update.next({
        ...event.container.data[event.currentIndex],
        status: Status[this.title]
      });
    }
  }

  getPokemonImage(pokemonName: string): string {
    const imageName = NameUtility.replaceImageCharacters(pokemonName);
    return `assets/pokemon/${imageName}.png`;
  }

  startDragging() {
    this.draggingService.isDragging = true;
  }

  stopDragging() {
    this.draggingService.isDragging = false;
  }

  selectPokemon(pokemon: Pokemon) {
    const dialog = this.dialog.open(EvolveDialogComponent, {
      data: { pokemon }
    });
    dialog
      .afterClosed()
      .subscribe((res: { pokemon: string; nickname: string }) => {
        if (res) {
          this.nuzlockeService.updateEncounter(pokemon, {
            name: res.pokemon.toLowerCase(),
            nickname: res.nickname
          });
        }
      });
  }
}
