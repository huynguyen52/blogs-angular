import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { take } from 'rxjs';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open the modal', (done) => {
    service.openModal();
    service
      .getState()
      .pipe(take(1))
      .subscribe((state) => {
        expect(state).toBe(true);
        done();
      });
  });

  it('should close the modal', (done) => {
    service.closeModal();
    service
      .getState()
      .pipe(take(1))
      .subscribe((state) => {
        expect(state).toBe(false);
        done();
      });
  });
});
