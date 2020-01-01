import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {
  name : string ;
  city: string;
  address : string;
  constructor(private modalCtrl: ModalController, private navParams: NavParams) { 
   
    this.name = this.navParams.data.info.name;
    this.city = this.navParams.data.info.city;
    this.address = this.navParams.data.info.address;
  }

  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }
  navigate() {
    // this.router.navigate(['/tabs/tab1'])

  }


}
