import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';  // Para o roteamento
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importando os módulos de formulários
import { routes } from './app.routes';  // Importando as rotas
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),  // Registrando as rotas da aplicação
    provideClientHydration(),
    FormsModule,  // Registrando o FormsModule
    ReactiveFormsModule  // Registrando o ReactiveFormsModule
  ]
};