import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AnmeldenComponent } from './pages/anmelden/anmelden.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'anmelden', component: AnmeldenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
