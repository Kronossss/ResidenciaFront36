import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {

 providers: [

 provideRouter(routes),

 provideHttpClient(),

 provideAuth0({

 domain: 'dev-f6acbvohpox2pddj.us.auth0.com',

 clientId: 'pGlGaHc4O7P04WyMPZYUYaahiS924Mlh',

 authorizationParams: {

 redirect_uri: window.location.origin,

 },

 }),

 ],

};

