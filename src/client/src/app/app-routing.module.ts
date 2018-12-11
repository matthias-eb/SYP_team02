import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { AnmeldenComponent } from './pages/anmelden/anmelden.component';
import { RegistrierenComponent } from './pages/registrieren/registrieren.component';
import { AutosComponent } from './pages/autos/autos.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'index', component: MainComponent },
  { path: 'anmelden', component: AnmeldenComponent },
  { path: 'registrieren', component: RegistrierenComponent },
  { path: 'autos', component: AutosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
