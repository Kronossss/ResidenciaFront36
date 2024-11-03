import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  // Componente de Login
import { AuthGuard } from './auth.guard';  // Guard de Autenticação

export const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },  // Protegendo a rota raiz
  { path: 'login', component: LoginComponent },  // Rota de login
  { path: '**', redirectTo: '/login' }  // Redirecionamento para rotas não existentes
];