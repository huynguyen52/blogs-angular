import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../components/button/button.component';
import { TextFieldComponent } from '../../../../components/text-field/text-field.component';
import { confirmPasswordValidator } from '../../../../common/validator/confirm-password-validator.directive';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [
    TextFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {
  @Output() onPressEsc = new EventEmitter();

  createUserForm = new FormGroup(
    {
      email: new FormControl<string>('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
      firstName: new FormControl<string>(''),
      lastName: new FormControl<string>(''),
      phoneNumber: new FormControl<string>(''),
      company: new FormControl<string>(''),
    },
    [confirmPasswordValidator('password', 'confirmPassword')]
  );

  @ViewChild('form') private form!: FormGroupDirective;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    this.onPressEsc.emit();
  }

  resetForm() {
    this.form.resetForm();
  }
}
