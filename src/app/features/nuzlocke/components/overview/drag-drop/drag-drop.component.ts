import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NameUtility } from '@util/name';
import {
  NuzlockePokemon,
  PokemonStatus
} from '@features/nuzlocke/models/nuzlocke-pokemon.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { DraggingService } from '@services/dragging/dragging.service';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  @Input() title: keyof typeof PokemonStatus;
  @Input() data: NuzlockePokemon[];
  @Output() update: EventEmitter<NuzlockePokemon> = new EventEmitter();

  constructor(private readonly draggingService: DraggingService) {}

  drop(event: CdkDragDrop<NuzlockePokemon[]>, title: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.update.next({
        ...event.container.data[event.currentIndex],
        status: PokemonStatus[this.title]
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
}
