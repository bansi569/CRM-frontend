import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { SessionDataProvider } from '../../providers/session-data/session-data';
//import {Router} from '@angular/router';
//import {RoomDetailsPage}from './pages/room-details/room-details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public username;
 public phone;
 public address;
 public city;
 public state;
 public email;

  constructor(public navCtrl: NavController,public http:HttpProvider,public toastCtrl:ToastController,public session:SessionDataProvider) {

  }

onWelcome(){
  //this.router.navigate(['roomdetails']);
  this.http.Welcome(this.username,this.phone,this.email,this.address,this.city,this.state).subscribe(
    (res)=>{
      let result=res.status;
      let msg=res.message;
      if(result=='SUCCESS'){
          this.session.setSessionData(res.data);
          console.log(res.data);
        let toast=this.toastCtrl.create({
          message:msg,
          duration:3000
        });
        toast.present();
          //this.session.setSessionData(res.data);
        this.navCtrl.push('RoomDetailsPage');
      }
    }
  )
//  this.navCtrl.push('RoomDetailsPage');
}
}
