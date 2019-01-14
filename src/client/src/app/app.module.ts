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
import { ErweitertesucheComponent } from './pages/erweitertesuche/erweitertesuche.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { CheckboxComponent } from './pages/filterkomponenten/checkbox/checkbox.component';
import { DropdownComponent } from './pages/filterkomponenten/dropdown/dropdown.component';
import { SchiebereglerComponent } from './pages/filterkomponenten/schieberegler/schieberegler.component';
import { ZahleingabeComponent } from './pages/filterkomponenten/zahleingabe/zahleingabe.component';
import { DetailsansichtComponent } from './pages/detailsansicht/detailsansicht.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootbarComponent,
    MainComponent,
    AnmeldenComponent,
    RegistrierenComponent,
    AutosComponent,
    ErweitertesucheComponent,
    ImpressumComponent,
    KontaktComponent,
    CheckboxComponent,
    DropdownComponent,
    SchiebereglerComponent,
    ZahleingabeComponent,
    DetailsansichtComponent
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
