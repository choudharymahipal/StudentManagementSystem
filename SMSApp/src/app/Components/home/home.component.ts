import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
isloggedIn = false;
  constructor(private authService: AuthService) {
    // Initialize any properties or services needed for the component
    this.isloggedIn = this.authService.isloggedInStatus();
  }

  ngOnInit(): void {
    // Perform any initialization logic here
  }

  // Add any methods or properties needed for the component
}
