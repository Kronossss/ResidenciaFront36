import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule]
})


export class LoginComponent {
  constructor(public auth: AuthService, private router: Router) {}

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/lista-compras' }
    });
  }
}





