import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { HarcamaDetayPage } from '../harcama-detay/harcama-detay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private app: App) {
    app._setDisableScroll;
  }

  click() {
    this.navCtrl.push(HarcamaDetayPage);
  }
}
