import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
  inject,
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
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { ModalService } from '../../../../services/modal.service';

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
  private userService = inject(UserService);
  private modalService = inject(ModalService);

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
      phone: new FormControl<string>(''),
      company: new FormControl<string>(''),
    },
    [confirmPasswordValidator('password', 'confirmPassword')]
  );

  @ViewChild('form') protected form!: FormGroupDirective;

  constructor() {}

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    this.onPressEsc.emit();
  }

  resetForm() {
    this.form.resetForm();
  }
  onSubmit() {
    if (this.createUserForm.valid) {
      const user = {
        ...this.createUserForm.value,
        id: Math.random().toString(),
      } as User;
      this.userService.addUser(user);
      this.modalService.closeModal();
    } else {
      console.log('Form is invalid');
    }
  }
}
