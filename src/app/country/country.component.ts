import { Component, OnInit, Input, Output } from '@angular/core';
import { Country } from '../../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  //@ts-ignore
  @Input() country: Country;

  constructor() { }

  ngOnInit(): void {
    console.log('Init country ${this.beer.id}')
  }

}
