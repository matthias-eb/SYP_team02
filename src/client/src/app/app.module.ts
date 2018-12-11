import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Bootstrap
// https://ng-bootstrap.github.io/#/home
// https://ng-bootstrap.github.io/#/components/accordion/examples
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FootbarComponent } from './footbar/footbar.component';
import { MainComponent } from './pages/main/main.component';
import { AnmeldenComponent } from './pages/anmelden/anmelden.component';
import { RegistrierenComponent } from './pages/registrieren/registrieren.component';
import { AutosComponent } from './pages/autos/autos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootbarComponent,
    MainComponent,
    AnmeldenComponent,
    RegistrierenComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppModule { }
