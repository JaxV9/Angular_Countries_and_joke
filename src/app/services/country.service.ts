import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../model/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public getCountries() {
    return this.httpClient.get<Country[]>('https://restcountries.com/v3.1/all');
  }
}
