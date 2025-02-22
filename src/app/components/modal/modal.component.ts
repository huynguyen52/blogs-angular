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
  private overlayRef: OverlayRef | undefined;
  constructor(private overlay: Overlay) {}

  @ViewChild(CdkPortal) cdkPortal!: CdkPortal;

  @Output() modalChanged = new EventEmitter<boolean>();

  public openModal() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
    this.overlayRef.attach(this.cdkPortal);
    this.modalChanged.emit(true);
    this.overlayRef.backdropClick().subscribe(() => this.closeModal());
  }

  public closeModal() {
    this.overlayRef?.detach();
    this.modalChanged.emit(false);
  }
}
