import { Component, Input, ViewChild } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { MenuComponent } from '../menu/menu.component';
import { DropdownOption } from '../../models/components';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { TextFieldComponent } from '../text-field/text-field.component';

@Component({
  selector: 'app-dropdown-input',
  standalone: true,
  imports: [PopoverComponent, MenuComponent, FormsModule, TextFieldComponent],
  templateUrl: './dropdown-input.component.html',
  styleUrl: './dropdown-input.component.scss',
})
export class DropdownInputComponent implements ControlValueAccessor {
  selectedMenuItem: DropdownOption | null = null;

  @Input() options: DropdownOption[] = [];

  @ViewChild(PopoverComponent) popover!: PopoverComponent;

  // Function to call when the value changes
  onChange: (value: DropdownOption) => void = () => {};

  // Function to call when the component is touched
  onTouched: () => void = () => {};

  writeValue(value: DropdownOption | null): void {
    this.selectedMenuItem = value;
  }
  registerOnChange(fn: (value: DropdownOption) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Method to update the value and propagate the change
  selectMenuItem(menuItem: DropdownOption): void {
    this.selectedMenuItem = menuItem;
    this.onChange(menuItem); // Notify form control
    this.onTouched(); // Mark as touched
    this.popover.close();
  }
}
