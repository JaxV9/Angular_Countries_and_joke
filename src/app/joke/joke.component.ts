import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../../model/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  //@ts-ignore
  @Input() joke: Joke;

  constructor() { }

  ngOnInit(): void {
    console.log('Init joke ${this.joke.id}')
  }

}
