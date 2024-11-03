import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent implements OnInit {
  title = 'Lista de Compras $$$ ';

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigate(['/lista-compras']);
      }
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }
}


