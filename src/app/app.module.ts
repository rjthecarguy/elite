import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUs } from '../pages/about-us/about-us';
import { ContactUs } from '../pages/contact-us/contact-us';
import { Quote } from '../pages/quote/quote';
import { ListPage } from '../pages/list/list';
import { Services } from '../pages/services/services';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Notify } from '../pages/notify/notify';
import { Loyalty } from '../pages/loyalty/loyalty';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Loyalty,
    Notify,
    ListPage,
    AboutUs,
    ContactUs,
    Quote,
    Services
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Notify,
    Loyalty,
    AboutUs,
    ContactUs,
    Quote,
    Services
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
