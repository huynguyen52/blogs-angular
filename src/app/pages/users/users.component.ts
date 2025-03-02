import { Component, ViewChild, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TableComponent } from '../../components/table/table.component';
import { Columns } from '../../models/table';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { DropdownOption, MenuItem } from '../../models/components';
import { PopoverComponent } from '../../components/popover/popover.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    TableComponent,
    BreadcrumbComponent,
    ButtonComponent,
    FormsModule,
    PopoverComponent,
    ModalComponent,
    CreateUserFormComponent,
    MenuComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  userService = inject(UserService);

  selectedMenuItem = signal<DropdownOption[]>([]);
  selectedRows = signal<User[]>([]);

  addAction = computed<MenuItem>(() => ({
    label: 'Add',
    value: 'add',
  }));

  deleteAction = computed<MenuItem>(() => ({
    label: 'Delete',
    value: 'delete',
    disabled: !this.selectedRows().length,
  }));

  editAction = computed<MenuItem>(() => ({
    label: 'Edit',
    value: 'edit',
    disabled: !this.selectedRows().length,
  }));

  actionLists = computed<MenuItem[]>(() => [
    this.addAction(),
    this.editAction(),
    this.deleteAction(),
  ]);
  users = toSignal(this.userService.getUsers());

  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild(PopoverComponent) popover!: PopoverComponent;
  @ViewChild(CreateUserFormComponent) createUserForm!: CreateUserFormComponent;

  onCreateUserFormPressEsc() {
    this.modal.closeModal();
  }

  onActionsChange(value: DropdownOption[]) {
    console.log('selectedRows', this.selectedRows());
    this.modal.openModal();
    this.popover.close();
  }

  onModalChanged(state: boolean) {
    if (!state) {
      this.createUserForm.resetForm();
      this.selectedMenuItem.set([]);
    }
  }

  columns: Columns<User>[] = [
    {
      accessorKey: 'email',
      key: 'email',
      header: 'Name',
      isHeading: true,
    },
    {
      accessorKey: 'firstName',
      key: 'firstName',
      header: 'FirstName',
    },
    {
      accessorKey: 'lastName',
      key: 'lastName',
      header: 'LastName',
    },
    {
      accessorKey: 'phone',
      key: 'phone',
      header: 'Phone',
    },
    {
      accessorKey: 'company',
      key: 'company',
      header: 'Company',
    },
    {
      accessorKey: 'company',
      key: 'actions',
      header: 'Actions',
      templateName: 'actionsTemplate',
    },
  ];

  onRowSelectionChange(rows: User[]) {
    this.selectedRows.set(rows);
  }
}
