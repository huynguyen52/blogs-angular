import { Component, Input, ViewChild } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { MenuComponent } from '../menu/menu.component';
import { DropdownOption } from '../../models/components';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { TextFieldComponent } from '../text-field/text-field.component';
import { ChipsListComponent } from '../chips-list/chips-list.component';

@Component({
  selector: 'app-dropdown-input',
  standalone: true,
  imports: [
    PopoverComponent,
    MenuComponent,
    FormsModule,
    TextFieldComponent,
    ChipsListComponent,
  ],
  templateUrl: './dropdown-input.component.html',
  styleUrl: './dropdown-input.component.scss',
})
export class DropdownInputComponent implements ControlValueAccessor {
  selectedMenuItems: DropdownOption[] = [];

  @Input() options: DropdownOption[] = [];
  @Input() multiple = false;

  @ViewChild(PopoverComponent) popover!: PopoverComponent;

  // Function to call when the value changes
  onChange: (values: DropdownOption[]) => void = () => {};

  // Function to call when the component is touched
  onTouched: () => void = () => {};

  writeValue(values: DropdownOption[]): void {
    this.selectedMenuItems = values;
  }
  registerOnChange(fn: (values: DropdownOption[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Method to update the value and propagate the change
  selectMenuItem(menuItems: DropdownOption[]): void {
    this.onChange(menuItems); // Notify form control
    this.onTouched(); // Mark as touched
    this.popover.close();
  }
}
