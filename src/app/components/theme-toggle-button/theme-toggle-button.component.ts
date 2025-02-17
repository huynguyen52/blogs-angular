import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle-button.component.html',
  styleUrl: './theme-toggle-button.component.scss',
})
export class ThemeToggleButtonComponent {
  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }
}
