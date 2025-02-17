import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Columns } from '../../models/table';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../components/button/button.component';

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
  imports: [TableComponent, BreadcrumbComponent, ButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
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
    console.log(rows);
  }
}
