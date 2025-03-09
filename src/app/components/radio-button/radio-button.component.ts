import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent implements ControlValueAccessor {
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  @Input() label: string = '';

  public internalValue: string = '';
  public checked: boolean = false;

  public onChange: Function = () => {};
  public onTouched: Function = () => {};

  writeValue(value: string): void {
    this.checked = value === this.value;
    this.internalValue = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
  }

  onModelChange(value: string) {
    this.onTouched(value);
    this.onChange(value);
  }
}
