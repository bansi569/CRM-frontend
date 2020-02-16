import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import {SessionDataProvider} from '../../providers/session-data/session-data';
import {HttpProvider} from '../../providers/http/http';
/**
 * Generated class for the EachRoomDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-each-room-details',
  templateUrl: 'each-room-details.html',
})
export class EachRoomDetailsPage {
//public totalrooms;
public roomdetails;
public username;
  constructor(public navCtrl: NavController, public navParams: NavParams,public session:SessionDataProvider,public toastCtrl:ToastController,public http:HttpProvider) {
    this.roomdetails=this.navParams.data.message;
    console.log(this.roomdetails);
    for(let j=0;j<this.roomdetails.length;j++){
      this.roomdetails[j].switches = [];
      for(let i=1;i<=this.roomdetails[j].switch; i++){
        this.roomdetails[j].switches.push(
          {
            switch_id: i,
            no_devices: 1
          }
        );
      }
    }
  }

onSubmitEnquiry(){
  let icount='';
  let count=0;
  console.log(this.roomdetails);
  this.username=this.session.getUsername();
  console.log('from on submit enquiry');
  console.log(this.username);
  for(let i=0;i<this.roomdetails.length;i++){
    for(let j=0;j<this.roomdetails[i].switches.length;j++){
      icount=+this.roomdetails[i].switches[j].no_devices;
      count=count+icount;
    }
  }
  this.http.SubmitEnquiry(this.session.getUsername(),this.roomdetails).subscribe(
    (res)=>{
            let result=res.status;
            let msg=res.message;
            if(result=='SUCCESS'){
              let toast=this.toastCtrl.create({
                message:msg,
                duration:3000
              });
              toast.present();
              this.navCtrl.push('InitroomdetailsPage',{message:count})
            }
    }
  )
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EachRoomDetailsPage');
  }

}
