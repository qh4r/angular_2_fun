import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {User} from './user'
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('https://ng2-fun.firebaseio.com/test.json')
      .map((response: Response) => response.json());
  }

  sendUserData(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    // headers.append(...) // tez wchodzi w gre
    return this.http.post('https://ng2-fun.firebaseio.com/data.json', body, {
      headers: headers
    }).map((data: Response) => {
      return data.json();
    })
      /// tak mozna handlowac bledy
      .catch(x => {
        console.error('oj oj blad: ', x);
        return Observable.throw(x); // przerzucenie
      });
  }

  getUserData() {
    // .json mowi firebasowi ze ma zwrocic json i snapshota!!
    return this.http.get('https://ng2-fun.firebaseio.com/data.json')
      .map((response: Response) => ((data) =>
        Object.keys(data).map(x => data[x])
      )(response.json()));
  }
}
