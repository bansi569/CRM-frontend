import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
public apiURL='http://localhost:3000/';
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  Welcome(username:string,phonenum:number,email:string,address:string,city:string,state:string):any{
    return this.http.post(this.apiURL+'userwelcome', {
      username:username,
      phonenum:phonenum,
      email:email,
      address:address,
      city:city,
      state:state
    });
  }

  SubmitEnquiry(usr:string,result:any):any{
    return this.http.post(this.apiURL+'enquirysubmit',{
      roomdetails:result,
      username:usr
    });
  }

}
