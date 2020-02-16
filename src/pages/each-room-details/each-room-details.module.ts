import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EachRoomDetailsPage } from './each-room-details';

@NgModule({
  declarations: [
    EachRoomDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EachRoomDetailsPage),
  ],
})
export class EachRoomDetailsPageModule {}
