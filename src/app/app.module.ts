import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { RouterModule, Routes } from '@angular/router';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpProvider } from '../providers/http/http';
import{HttpClientModule}from '@angular/common/http';
import { SessionDataProvider } from '../providers/session-data/session-data';
//import { RoomDetailsPage } from '../pages/room-details/room-details';
//import {InitroomdetailsPage} from '../pages/initroomdetails/initroomdetails';
/*const appRoutes: Routes = [
  {
     path: 'roomdetails', component: RoomDetailsPage,children:[
    {
      path:'initroom/:roomcount',component:InitroomdetailsPage
    }
  ]
},

  { path: '**', component: PageNotFoundComponent }
];*/

@NgModule({
  declarations: [
    MyApp,
    HomePage

  ],
  imports: [
    BrowserModule,
  /*  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),*/
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    SessionDataProvider
  ]
})
export class AppModule {}
