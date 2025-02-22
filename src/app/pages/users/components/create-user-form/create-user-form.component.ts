import { Component } from '@angular/core';
import { TextFieldComponent } from '../../../../components/text-field/text-field.component';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [TextFieldComponent],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {}
