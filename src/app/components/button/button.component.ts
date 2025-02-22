import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() endIcon: TemplateRef<any> | null = null;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
}
