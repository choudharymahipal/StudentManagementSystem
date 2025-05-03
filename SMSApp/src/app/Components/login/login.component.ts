import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginValid = true;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: [null,{ validators: [Validators.required, Validators.email] }],
      password: [null,{ validators: [Validators.required] }],
    });
  }

  public onSubmit(): void {
    //Authentication process...
    this.authService.isLoggedIn.set(true);
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/home']);
  }
}
