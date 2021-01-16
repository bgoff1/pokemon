import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NuzlockeService } from '@features/nuzlocke/services/nuzlocke/nuzlocke.service';
import { Pokemon, Status } from '@nuzlocke/models/pokemon.model';
import { DraggingService } from '@services/dragging/dragging.service';
import { PickerOutput } from '../../picker/model/picker-output.model';
import { EvolveDialogComponent } from './evolve-dialog/evolve-dialog.component';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  @Input() title!: keyof typeof Status;
  @Input() data!: Pokemon[];
  @Output() update: EventEmitter<Pokemon> = new EventEmitter();

  constructor(
    private readonly dialog: MatDialog,
    private readonly draggingService: DraggingService,
    private readonly nuzlockeService: NuzlockeService
  ) {}

  drop(event: CdkDragDrop<Pokemon[]>): void {
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

  startDragging(): void {
    this.draggingService.isDragging = true;
  }

  stopDragging(): void {
    this.draggingService.isDragging = false;
  }

  selectPokemon(pokemon: Pokemon): void {
    const dialog = this.dialog.open(EvolveDialogComponent, {
      data: { pokemon },
      width: '80%'
    });
    dialog.afterClosed().subscribe((res: PickerOutput) => {
      if (res) {
        this.nuzlockeService.updateEncounter(pokemon, {
          name: res.pokemon.toLowerCase(),
          nickname: res.nickname
        });
      }
    });
  }
}
