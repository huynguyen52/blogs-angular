import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { DropdownOption } from '../../models/components';

@Component({
  selector: 'app-chips-list',
  standalone: true,
  imports: [ChipComponent],
  templateUrl: './chips-list.component.html',
  styleUrl: './chips-list.component.scss',
})
export class ChipsListComponent {
  @Input() items: DropdownOption[] = [];
  @Output() onClearChip = new EventEmitter();

  handleClearChip(value: string) {
    this.onClearChip.emit(value);
  }
}
