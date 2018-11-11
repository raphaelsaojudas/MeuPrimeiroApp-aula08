import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FilmesalvoPage } from '../filmesalvo/filmesalvo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Inserindo filme...',
      duration: 1500,
      dismissOnPageChange: true
    }).present();

    this.navCtrl.push(FilmesalvoPage);
  }

}
