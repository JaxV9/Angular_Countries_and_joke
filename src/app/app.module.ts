import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesDisplayComponent } from './countries-display/countries-display.component';
import { CountryComponent } from './country/country.component';
import { JokeComponent } from './joke/joke.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeDisplayComponent } from './joke-display/joke-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    JokeComponent,
    CountriesDisplayComponent,
    JokeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
