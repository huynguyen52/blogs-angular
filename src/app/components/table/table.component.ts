import { NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  Input,
  Output,
  TemplateRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Columns } from '../../models/table';
import { BehaviorSubject } from 'rxjs';
import { PaginationComponent } from '../pagination/pagination.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgIf,
    PaginationComponent,
    TextFieldComponent,
    FormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T extends { id: string }> {
  userService = inject(UserService);

  @Input({ required: true }) columns: Columns<T>[] = [];
  @Input({ required: true }) data: T[] = [];
  @Input({ required: true }) actionsTemplate!: TemplateRef<T>;

  @Output() onRowSelectionChange = new BehaviorSubject<T[]>([]);

  selectedRows = signal<T[]>([]);
  searchTerm = '';

  isAllRowsSelected = computed(() => {
    return this.selectedRows().length === this.data.length;
  });

  toggleSelectAll(event: Event) {
    const isSelected = (event.target as HTMLInputElement).checked;
    if (isSelected) {
      // Select all rows
      this.selectedRows.set([...this.data]);
    } else {
      // Clear all selections
      this.selectedRows.set([]);
    }
    this.onRowSelectionChange.next(this.selectedRows());
  }

  toggleRowSelection(row: T, event: Event) {
    const isSelected = (event.target as HTMLInputElement).checked;
    const currentSelection = this.selectedRows();
    if (isSelected) {
      // Add row to selected rows
      this.selectedRows.set([...currentSelection, row]);
    } else {
      // Remove row from selected rows
      this.selectedRows.set(currentSelection.filter((r) => r.id !== row.id));
    }
    this.onRowSelectionChange.next(this.selectedRows());
  }

  // Method to check if a row is selected
  isRowSelected(row: T): boolean {
    return this.selectedRows().some((selectedRow) => selectedRow.id === row.id);
  }

  getTemplate(templateName: string): TemplateRef<any> | null {
    // Return the correct template based on the provided template name
    switch (templateName) {
      case 'actionsTemplate':
        return this[templateName];
      default:
        return null;
    }
  }

  handleDelete(_t182: any) {
    throw new Error('Method not implemented.');
  }
  handleEdit(_t182: any) {
    throw new Error('Method not implemented.');
  }

  onSearchChange(term: string) {
    this.userService.searchUser(term).subscribe((data) => {
      this.userService.setUsers(data);
    });
  }
}
