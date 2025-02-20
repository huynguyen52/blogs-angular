import { Overlay } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [PortalModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(private overlay: Overlay) {}

  @ViewChild(CdkPortal) cdkPortal!: CdkPortal;

  openModal() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
    overlayRef.attach(this.cdkPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}
