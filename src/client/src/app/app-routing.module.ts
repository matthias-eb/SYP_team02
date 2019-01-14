import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { AnmeldenComponent } from './pages/anmelden/anmelden.component';
import { RegistrierenComponent } from './pages/registrieren/registrieren.component';
import { AutosComponent } from './pages/autos/autos.component';
import { ErweitertesucheComponent } from './pages/erweitertesuche/erweitertesuche.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import {DetailsansichtComponent} from './pages/detailsansicht/detailsansicht.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'index', component: MainComponent },
  { path: 'anmelden', component: AnmeldenComponent },
  { path: 'registrieren', component: RegistrierenComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'erweitertesuche', component: ErweitertesucheComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'detailsansicht', component: DetailsansichtComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
