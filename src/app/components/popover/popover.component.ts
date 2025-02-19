import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
})
export class PopoverComponent {
  protected isOpen = false;

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }
}
