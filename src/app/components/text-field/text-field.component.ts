import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Input,
  TemplateRef,
  contentChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  standalone: true,
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
  ],
})
export class TextFieldComponent implements ControlValueAccessor {
  value: string = '';
  isDisabled: boolean = false;
  randomId = uuidv4();

  @Input() label: string = '';
  @Input() placeholder: string = '';

  protected readonly descriptionTemplate =
    contentChild<TemplateRef<unknown> | null>('description');

  /**
   * the TailwindCSS group class for styling purpose when the input is in error state
   */
  @HostBinding('class') protected readonly group = 'group';

  // Method to call when the value changes
  private onChange: (value: string) => void = () => {};

  // Method to call when the component is touched (blurred)
  private onTouched: () => void = () => {};

  // Write value to the input when the form model is updated
  writeValue(value: string): void {
    this.value = value;
  }

  // Register the change function
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Register the touched function
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Set whether the component is disabled
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // Handle value changes in the input
  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }

  handleTouched() {
    this.onTouched();
  }
}
