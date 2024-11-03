import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthModule, AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';


const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  responseType: 'id_token token',
  scope: 'openid profile email',
  showDebugInformation: true,
  redirectUri: window.location.origin,
  clientId: '824415633329-uf74bb6vr3h4muh6svok1ilhdd5iqk5g.apps.googleusercontent.com',
  strictDiscoveryDocumentValidation: false
};



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [OAuthService]
})


export class AuthModule {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.initImplicitFlow();
      }
    });
  }
}





