import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

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

  @Output() modalChanged = new EventEmitter<boolean>();

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
    this.modalChanged.emit(true);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
      this.modalChanged.emit(false);
    });
  }
}
