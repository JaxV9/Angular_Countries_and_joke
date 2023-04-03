import { Component, OnInit } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-countries-display',
  templateUrl: './countries-display.component.html',
  styleUrls: ['./countries-display.component.css']
})
export class CountriesDisplayComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private countryService: CountryService) {
    this.fetchCountries();
   }

   private fetchCountries() {
    this.countryService.getCountries().subscribe((countries: Country[]) => {
      this.countries = countries;

      console.log(this.countries);
    });
  }

  ngOnInit(): void {
  }

}
