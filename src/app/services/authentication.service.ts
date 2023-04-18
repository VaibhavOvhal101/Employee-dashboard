import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == 'admin' && pwd == 'admin') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('admin');

    localStorage.removeItem('username');
  }
}
