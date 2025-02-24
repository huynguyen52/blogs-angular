import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
})
export class ChipComponent {
  @Output() onClear = new EventEmitter();

  onRemove(event: Event) {
    event.stopPropagation();
    this.onClear.emit();
  }
}
