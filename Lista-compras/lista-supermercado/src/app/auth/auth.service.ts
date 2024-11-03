import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth(initializeApp(environment.firebaseConfig));
  public isAuthenticated = false;
  public user: any = null;

  constructor(private router: Router) {
    // Verificar o status de autenticação do usuário
    onAuthStateChanged(this.auth, (user) => {
      this.isAuthenticated = !!user;
      this.user = user;
    });
  }

  login() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then(result => {
        this.isAuthenticated = true;
        this.user = result.user;
        this.router.navigate(['/']); // Redirecionar após login
      })
      .catch(error => console.error('Erro de login:', error));
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.isAuthenticated = false;
      this.user = null;
      this.router.navigate(['/login']); // Redirecionar após logout
    });
  }

  getToken(): string | null {
    return this.user?.accessToken || null;
  }
}
