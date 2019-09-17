import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1-detail',
  templateUrl: 'tab1-detail.page.html',
  styleUrls: ['tab1-detail.page.scss']
})
export class Tab1DetailPage {

  constructor(public navCtrl: NavController) {}

  back(){
    this.navCtrl.navigateBack('/tabs/tab1');
  }

}
