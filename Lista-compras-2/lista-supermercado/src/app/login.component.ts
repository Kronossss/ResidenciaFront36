import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(provider: string) {
    this.authService.loginWithOAuth(provider);
  }
}