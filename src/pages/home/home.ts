import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quote } from '../quote/quote';
import { MyApp } from '../../app/app.component';
import { Loyalty } from '../loyalty/loyalty';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {



  }


quotePage() {
	console.log("set Root");
	this.navCtrl.setRoot(Quote);

	
}

loyaltyPage () {

	console.log("set Root");
	this.navCtrl.setRoot(Loyalty);

}

}