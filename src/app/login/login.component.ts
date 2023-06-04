import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // call the login method from the auth service, if successful, redirect to the channel list page, otherwise display an error message
      this.authService.login(email, password).subscribe({
        next: () => {
          alert('Login successful.');
          this.router.navigate(['']);
        },
        error: (error) => {
          this.error = error.message;
        },
      });
    }
  }
}
