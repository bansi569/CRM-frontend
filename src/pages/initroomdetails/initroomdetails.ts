import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ActivatedRoute } from '@angular/router';
/**
 * Generated class for the InitroomdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initroomdetails',
  templateUrl: 'initroomdetails.html',
})
export class InitroomdetailsPage {

public result;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*this.route.paramMap.subscribe(
      (params)=>{
        this.roomcount= params.get('id');
      }
    )*/
  /*  this.roomdetails=this.navParams.data.message;
    console.log(this.roomdetails);
    for(let j=0;j<this.roomdetails.length;j++){
      this.roomdetails[j].switches = [];
      for(let i=0;i<this.roomdetails[j].switch; i++){
        this.roomdetails[j].switches.push(
          {
            switch_id: i,
            no_devices: 1,
            devices: [
              { device_name: '', type: 'LIGHT', two_way: false, inverter_conn: false, neutral_check: false, power: 0.2 }
            ]
          }
        );
      }
    }
  /*/ /*  this.roomcount=this.roomdetails.switch;
    console.log('roomcount from initroom');
    console.log(this.roomcount);
    for(let i=0;i<this.roomcount.length;i++){
      //this.switch_board.id=this.roomcount[i];
    //  this.switch_boards.push(this.switch_board);
      for(let j=0;j<this.roomcount[i];j++){
        let eachSwitchBoard = {
          roomid: i,
          switchid: j
        };
        this.switch_boards.push(eachSwitchBoard);
      }
    }
    //  this.switch_boards.push(this.switch_board);
    console.log('switch_boards array');
    console.log(this.switch_boards);*/
    this.result=this.navParams.data.message;
    console.log('price');
    console.log(this.result);
    this.result=this.result*2000;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitroomdetailsPage');
  }

}
