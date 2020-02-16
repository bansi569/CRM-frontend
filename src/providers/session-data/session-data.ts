import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/*
  Generated class for the SessionDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionDataProvider {
public username:BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(public http: HttpClient) {
    console.log('Hello SessionDataProvider Provider');
  }
  setSessionData(data){
    this.username.next(data.username);

  }
  getUsername(){
    return this.username.value;
  }
}
