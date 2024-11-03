import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  loginWithOAuth(provider: string) {
    // Exemplo de implementação com redirecionamento para um provedor OAuth
    window.location.href = `https://oauth.provider.com/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email`;
  }

  handleAuthCallback() {
    const token = this.getTokenFromUrl();
    if (token) {
      this.token = token;
      this.isAuthenticated.next(true);
      this.router.navigate(['/']);
    }
  }

  getTokenFromUrl() {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get('access_token');
    return token;
  }

  isAuthenticated$() {
    return this.isAuthenticated.asObservable();
  }

  logout() {
    this.token = null;
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }
}