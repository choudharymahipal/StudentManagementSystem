import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SMSApp';
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isloggedInStatus();
  }

  ngdocheckout() {
    this.isLoggedIn = this.authService.isloggedInStatus();
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
