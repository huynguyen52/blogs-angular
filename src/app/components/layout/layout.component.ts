import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle-button.component';
import { MenuComponent } from '../menu/menu.component';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ThemeToggleButtonComponent,
    MenuComponent,
    PopoverComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
