import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'ravi', password: 'ravi123', role: 'employee' },
    { username: 'sita', password: 'sita123', role: 'employee' }
  ];

  private loggedIn = false;

  constructor() { }

  // Method to validate login
  validateUser(username: string, password: string): User | null {
    const foundUser = this.users.find(
      u => u.username === username && u.password === password
    );
    return foundUser || null;
  }

  // Manage login state
  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
