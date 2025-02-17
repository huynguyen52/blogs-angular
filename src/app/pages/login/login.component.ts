import { Component } from '@angular/core';
import { ThemeToggleButtonComponent } from '../../components/theme-toggle-button/theme-toggle-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ThemeToggleButtonComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
