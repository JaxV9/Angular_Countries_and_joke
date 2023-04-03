import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDisplayComponent } from './countries-display/countries-display.component';
import { JokeDisplayComponent } from './joke-display/joke-display.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesDisplayComponent
  },
  {
    path: 'jokes',
    component: JokeDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
