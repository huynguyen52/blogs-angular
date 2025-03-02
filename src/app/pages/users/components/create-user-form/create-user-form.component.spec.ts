import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { CreateUserFormComponent } from './create-user-form.component';
import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../../../../components/button/button.component';
import { TextFieldComponent } from '../../../../components/text-field/text-field.component';
import { ModalService } from '../../../../services/modal.service';
import { UserService } from '../../../../services/user.service';

class TestCreateUserFormComponent extends CreateUserFormComponent {
  get _form() {
    return this.form;
  }
}

describe('CreateUserFormComponent', () => {
  let fixture: MockedComponentFixture<TestCreateUserFormComponent>;
  let component: TestCreateUserFormComponent;
  let userService: UserService;
  let modalService: ModalService;

  beforeEach(async () => {
    await MockBuilder(TestCreateUserFormComponent)
      .keep(CommonModule)
      .keep(FormsModule)
      .keep(ReactiveFormsModule)
      .mock(UserService)
      .mock(ModalService)
      .keep(ButtonComponent)
      .keep(TextFieldComponent);
  });

  beforeEach(() => {
    fixture = MockRender(TestCreateUserFormComponent);
    component = fixture.point.componentInstance;
    userService = fixture.point.injector.get(UserService);
    modalService = fixture.point.injector.get(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(TestCreateUserFormComponent).toBeTruthy();
  });

  it('should emit onPressEsc event on escape key press', () => {
    jest.spyOn(component.onPressEsc, 'emit');
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
    expect(component.onPressEsc.emit).toHaveBeenCalled();
  });

  it('should reset the form', () => {
    jest.spyOn(component._form, 'resetForm');
    component.resetForm();
    expect(component._form.resetForm).toHaveBeenCalled();
  });

  it('should call userService.addUser and modalService.closeModal on valid form submission', () => {
    jest.spyOn(userService, 'addUser');
    jest.spyOn(modalService, 'closeModal');

    component.createUserForm.setValue({
      email: 'test@example.com',
      password: 'password',
      confirmPassword: 'password',
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      company: 'Company',
    });

    component.onSubmit();

    expect(userService.addUser).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'test@example.com',
        password: 'password',
        confirmPassword: 'password',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        company: 'Company',
        id: expect.any(String),
      })
    );
    expect(modalService.closeModal).toHaveBeenCalled();
  });

  it('should log "Form is invalid" on invalid form submission', () => {
    console.log = jest.fn();
    component.createUserForm.setValue({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      company: '',
    });

    component.onSubmit();

    expect(console.log).toHaveBeenCalledWith('Form is invalid');
  });
});
