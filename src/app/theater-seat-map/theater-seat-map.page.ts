import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';

@Component({
  selector: 'app-theater-seat-map',
  templateUrl: './theater-seat-map.page.html',
  styleUrls: ['./theater-seat-map.page.scss'],
})
export class TheaterSeatMapPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }
  // Show modal
  async openModel() {

    const modal = await this.modalCtrl.create({
      component: PaymentModalPage,
      cssClass: 'payment-modal-css'
      


    });

    return await modal.present();
}
}
