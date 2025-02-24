import { Component, ViewChild, computed, effect, signal } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Columns } from '../../models/table';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { DropdownOption, MenuItem } from '../../models/components';
import { PopoverComponent } from '../../components/popover/popover.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { DropdownInputComponent } from '../../components/dropdown-input/dropdown-input.component';
import { MenuComponent } from '../../components/menu/menu.component';

type Product = {
  id: string;
  name: string;
  color: string;
  category: string;
  accessories: boolean;
  available: boolean;
  price: number;
  weight: number;
};

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
    DropdownInputComponent,
    MenuComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  selectedMenuItem = signal<DropdownOption[]>([]);
  selectedRows = signal<Product[]>([]);

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

  columns: Columns<Product>[] = [
    {
      accessorKey: 'name',
      key: 'product-name',
      header: 'Product name',
      isHeading: true,
    },
    {
      accessorKey: 'color',
      key: 'color',
      header: 'Color',
    },
    {
      accessorKey: 'category',
      key: 'Category',
      header: 'Category',
    },
    {
      accessorKey: 'accessories',
      key: 'accessories',
      header: 'Accessories',
    },
    {
      accessorKey: 'available',
      key: 'available',
      header: 'Available',
    },
    {
      accessorKey: 'price',
      key: 'price',
      header: 'Price',
    },
    {
      accessorKey: 'weight',
      key: 'weight',
      header: 'Weight',
    },
    {
      accessorKey: 'weight',
      key: 'actions',
      header: 'Actions',
      templateName: 'actionsTemplate',
    },
  ];

  data: Product[] = [
    {
      id: '1',
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      accessories: true,
      available: true,
      price: 2999,
      weight: 3,
    },
    {
      id: '2',
      name: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      accessories: false,
      available: true,
      price: 1999,
      weight: 1,
    },
  ];

  onRowSelectionChange(rows: Product[]) {
    this.selectedRows.set(rows);
  }
}
