import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MenuItem } from '../../models/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CdkMenu, CdkMenuItem, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MenuComponent),
      multi: true,
    },
  ],
})
export class MenuComponent implements ControlValueAccessor {
  // Property to hold the value of the menu
  selectedMenuItem: MenuItem | null = null;

  @Input() menuItems: MenuItem[] = [];
  @Output() itemSelected = new EventEmitter<MenuItem>();

  // Function to call when the value changes
  onChange: (value: MenuItem) => void = () => {};
  // Function to call when the component is touched
  onTouched: () => void = () => {};

  writeValue(value: MenuItem | null): void {
    this.selectedMenuItem = value;
  }
  registerOnChange(fn: (value: MenuItem) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Method to update the value and propagate the change
  selectMenuItem(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
    this.onChange(menuItem); // Notify form control
    this.onTouched(); // Mark as touched

    this.itemSelected.emit(menuItem);
  }
}
