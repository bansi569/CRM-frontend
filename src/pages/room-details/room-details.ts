import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {Router} from '@angular/router';
/**
 * Generated class for the RoomDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-details',
  templateUrl: 'room-details.html',
})
export class RoomDetailsPage {
  public totalrooms;
  public count;
  public msg=[];
  public flag=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  /*  this.count=+this.totalrooms;
  for(let i=0;i<this.count;i++)
   this.msg.push(this.roomobject); */
//   this.msg.push(this.roomobject);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailsPage');
  }
onSubmit(){
  //this.router.navigate(['initroomdetails',{id:this.totalrooms}],{relativeTo:this.route});
  this.count=+this.totalrooms;
  console.log(this.count);
 for(let i=0;i<this.count;i++){
   let room= {roomname: '', switch: 1};
   this.msg.push(room);
  }
  console.log(this.msg);
  this.flag=1;
  //this.flag=0;
}
onSubmitDetails(){
  console.log('onsubmitdetails');
  console.log(this.msg);
  this.navCtrl.push('EachRoomDetailsPage',{
    message:this.msg
  });
}
}
