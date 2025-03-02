import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  open$ = new BehaviorSubject<boolean>(false);

  openModal() {
    this.open$.next(true);
  }

  closeModal() {
    this.open$.next(false);
  }

  getState() {
    return this.open$.asObservable();
  }
}
