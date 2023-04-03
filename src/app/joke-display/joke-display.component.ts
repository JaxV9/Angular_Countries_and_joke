import { Component, OnInit } from '@angular/core';
import { Joke } from '../../model/joke';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke-display',
  templateUrl: './joke-display.component.html',
  styleUrls: ['./joke-display.component.css']
})
export class JokeDisplayComponent implements OnInit {

  //@ts-ignore
  public jokes: Joke;

  constructor(private jokeService : JokeService) {
    this.fetchJokes();
   }

  private fetchJokes() {
    this.jokeService.getjokes().subscribe((jokes: Joke) => {
      this.jokes = jokes;
    });
  }

  ngOnInit(): void {
  }

}
