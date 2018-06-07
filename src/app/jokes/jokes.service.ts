import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class JokesService {

  constructor(private http: Http) { }

  getRandomObservable(): Observable<string>{
    console.log("in getRandomObservable()");
    return this.http.get('http://api.icndb.com/jokes/random')
    .map((res:Response)=>res.json())
    .map((res) => res.value.joke);
  }

  getRandomPromise(): Promise<string> {
    console.log("in getRandomPromise");
    return this.http.get('http://api.icndb.com/jokes/random')
      .toPromise()
      .then((res: Response) => res.json())
      .then((res) => res.value.joke);
  }


}
