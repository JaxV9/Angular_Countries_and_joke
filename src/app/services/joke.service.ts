import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../../model/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  public getjokes() {
    return this.httpClient.get<Joke>('https://v2.jokeapi.dev/joke/Any?lang=fr');
  }
}
