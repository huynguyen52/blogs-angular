import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from '../models/user';
import { take } from 'rxjs/operators';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial mock data', (done) => {
    service
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => {
        expect(users.length).toBe(2);
        expect(users[0].email).toBe('Apple MacBook Pro 17"');
        done();
      });
  });

  it('should add a new user', (done) => {
    const newUser: Partial<User> = {
      id: '4',
      email: 'newuser@example.com',
      firstName: 'New',
      lastName: 'User',
      company: 'New Company',
      phone: '987-6543210',
    };

    service.addUser(newUser);

    service
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => {
        expect(users.length).toBe(3);
        expect(users[2].email).toBe('newuser@example.com');
        done();
      });
  });

  it('should set users', (done) => {
    const newUsers: Partial<User>[] = [
      {
        id: '5',
        email: 'setuser1@example.com',
        firstName: 'Set',
        lastName: 'User1',
        company: 'Set Company1',
        phone: '111-1111111',
      },
      {
        id: '6',
        email: 'setuser2@example.com',
        firstName: 'Set',
        lastName: 'User2',
        company: 'Set Company2',
        phone: '222-2222222',
      },
    ];

    service.setUsers(newUsers);

    service
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => {
        expect(users.length).toBe(2);
        expect(users[0].email).toBe('setuser1@example.com');
        done();
      });
  });

  it('should search users', (done) => {
    service
      .searchUser('Silver')
      .pipe(take(1))
      .subscribe((users) => {
        expect(users.length).toBe(1);
        expect(users[0].firstName).toBe('Silver');
        done();
      });
  });

  it('should return all users if search term is empty', (done) => {
    service
      .searchUser('')
      .pipe(take(1))
      .subscribe((users) => {
        expect(users.length).toBe(2);
        done();
      });
  });
});
