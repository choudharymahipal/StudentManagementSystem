import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal(false);

  constructor() { 
    
    this.isLoggedIn.set(false);
  }

  isloggedInStatus() {
    let loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      this.isLoggedIn.set(true);
    } else {
      this.isLoggedIn.set(false);
    }
    return this.isLoggedIn();
  }

  logout() {
    this.isLoggedIn.set(false);
    localStorage.removeItem('isLoggedIn');
  }
}
