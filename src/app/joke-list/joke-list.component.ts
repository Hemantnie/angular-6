import { Joke } from './../joke';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes:Joke[];
  snake:string;
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?","Hello-Me (Halloumi)"),
      new Joke('What kind of cheese do you use to disguise a small horse?','Mask-a-pony (Mascarpone)'),
      new Joke("A kid threw a lump of cheddar at me","I thought ‘That’s not very mature"),
    ];
  }

  ngOnInit() {
  }
  addJoke(joke){
    this.jokes.unshift(joke);
  }
  toggle(joke){
    joke.hide=!joke.hide;
  }
}
