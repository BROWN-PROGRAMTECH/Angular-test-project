import {User} from '../models/user.model';
import {Subject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      firstName: 'Djomo',
      lastName: 'Brown',
      email: '@gmail.com',
      drinkPreference: 'nothing',
      hobbies: ['Programming',
                 'learn new things',
                 'playing football'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
