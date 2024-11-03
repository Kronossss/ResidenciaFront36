import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { AuthGuard } from './auth/auth.guard';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lista-compras', component: ListaComprasComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent }
];








