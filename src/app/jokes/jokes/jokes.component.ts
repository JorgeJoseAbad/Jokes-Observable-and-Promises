import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/throttleTime';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  providers: [JokesService]
})
export class JokesComponent implements OnInit {

  joke: Promise<string>;
  //joke$: string;
  joke$: Observable<string>;
  constructor(private jokes: JokesService) { }

  ngOnInit() {
    this.joke$ = Observable
      .fromEvent<MouseEvent>(document.getElementById('joke-btn'), 'click')
      .throttleTime(1000)
      .switchMap(
        (e: MouseEvent) => this.jokes.getRandomObservable());

  }


  getRandomJokeObservable(){
    //this.jokes.getRandomObservable()
  //    .subscribe(joke$=>this.joke$=joke$) //subscribe return the string
    this.joke$ = this.jokes.getRandomObservable();

  }

  getRandomJoke() {
      this.joke = this.jokes.getRandomPromise();
    }

}
