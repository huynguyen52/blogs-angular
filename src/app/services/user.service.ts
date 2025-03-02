import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

const mockData: User[] = [
  {
    id: '3',
    email: 'Apple MacBook Pro 17"',
    firstName: 'Silver',
    lastName: 'Laptop',
    company: 'true',
    phone: '123-45607890',
  },
  {
    id: '1',
    email: 'Apple MacBook Pro"',
    firstName: 'Gold',
    lastName: 'Laptop',
    company: 'true',
    phone: '123-45607890',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$ = new BehaviorSubject<User[]>(mockData);

  public getUsers(): Observable<User[]> {
    return this.user$.asObservable();
  }

  public addUser(user: Partial<User>): void {
    let currentUsers: User[] = [];
    this.getUsers().subscribe((data) => (currentUsers = data));
    this.user$.next([...currentUsers, user as User]);
  }

  public setUsers(users: Partial<User>[]): void {
    this.user$.next(users as User[]);
  }

  public searchUser(searchTerm: string): Observable<User[]> {
    return new Observable((observer) => {
      let filterUsers: User[] = [];
      if (!searchTerm) {
        observer.next(mockData);
        return;
      }
      this.getUsers().subscribe((users) => {
        filterUsers = users.filter((user) => {
          return (
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
      });
      observer.next(filterUsers);
    });
  }
}
