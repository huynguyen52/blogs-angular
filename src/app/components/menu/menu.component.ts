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
  selectedMenuItems: MenuItem[] = [];

  @Input() options: MenuItem[] = [];
  @Input() multiple = false;

  // Function to call when the value changes
  onChange: (values: MenuItem[]) => void = () => {};
  // Function to call when the component is touched
  onTouched: () => void = () => {};

  writeValue(values: MenuItem[]): void {
    this.selectedMenuItems = values;
  }
  registerOnChange(fn: (values: MenuItem[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Method to update the value and propagate the change
  selectMenuItem(menuItem: MenuItem): void {
    let newValues: MenuItem[] = [];
    if (!this.multiple) {
      newValues = [menuItem];
    } else {
      const isExist = this.selectedMenuItems.some(
        (item) => item.value === menuItem.value
      );
      newValues = isExist
        ? this.selectedMenuItems.filter((item) => item !== menuItem)
        : [...this.selectedMenuItems, menuItem];
    }
    this.selectedMenuItems = newValues;
    this.onChange(newValues); // Notify form control
    this.onTouched(); // Mark as touched
  }

  isActive = (menuItem: MenuItem): boolean => {
    return this.selectedMenuItems?.some(
      (item) => item.value === menuItem.value
    );
  };
}
