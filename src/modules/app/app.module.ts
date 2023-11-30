import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NavigationComponent} from './components/navigation/navigation.component';
import {EdcDemoModule} from '../edc-demo/edc-demo.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {API_KEY, BACKEND_URL} from "../edc-dmgmt-client";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {RegistrationComponent} from "./components/registration/registration.component";
import {StartpageComponent} from "./components/startpage/startpage.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {environment} from 'src/environments/environment';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatExpansionModule} from "@angular/material/expansion";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloakUrl,
        realm: environment.realm,
        clientId: environment.clientId
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
    });
}

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        EdcDemoModule,
        MatSnackBarModule,
        KeycloakAngularModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatTooltipModule,
        MatExpansionModule,
    ],
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistrationComponent,
    StartpageComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {provide: BACKEND_URL, useValue: environment.backendUrl},
    {provide: API_KEY, useValue: environment.apiKey},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
