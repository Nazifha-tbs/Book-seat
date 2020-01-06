import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, IonBackdrop } from '@ionic/angular';
import { BACKDROP } from '@ionic/core/dist/types/utils/overlays';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-seat-type-modal',
  templateUrl: './seat-type-modal.page.html',
  styleUrls: ['./seat-type-modal.page.scss'],
})
export class SeatTypeModalPage implements OnInit {
  langS: any;
  typeS: any;
  seat: any[] = [{
    language: "English",
    active: false
  },
  {
    language: "Tamil",
    active: false
  }]
  seats: any[] = [{
    D: "3D",
    active: false
  },
  {
    D: "2D",
    active: false
  }]
  constructor( private navParams: NavParams) { 
    console.log(navParams);
    this.langS = this.navParams.data.lang;
    this.typeS = this.navParams.data.type;
    for (var i = 0; i < this.seat.length; i++) {
      this.seat[i].active = false;
      if (this.seat[i].language == this.langS) {
        this.seat[i].active = true;
        console.log(this.seat[i].language);
        localStorage.setItem('selectedL', this.seat[i].language);
      }

    }
    for (var i = 0; i < this.seats.length; i++) {
      this.seats[i].active = false;
      if (this.seats[i].D == this.typeS) {
        this.seats[i].active = true;
        console.log(this.seats[i].D);
        localStorage.setItem('selectedT', this.seats[i].D);
      }

    }

  
  }
  

  ngOnInit() {
   
    // console.log(this.navParams.data.lang);
    // console.log(this.navParams.data.type);
    
  
   
  }
  
  selectedT(type){
    for(var i = 0 ; i < this.seats.length; i ++)
    { 
      this.seats[i].active = false;

    }
    type.active = !type.active;
    this.typeS = type;
    // environment.selectedT = this.typeS.D;
    localStorage.setItem('selectedT', this.typeS.D);
  }

  selectedL(lang) {
    for (var i = 0; i < this.seat.length; i++) {
      this.seat[i].active = false;
      this.langS = lang;
    }
    lang.active = !lang.active;
    localStorage.setItem('selectedL', this.langS.language);
    // environment.selectedL = this.langS.language;
  }
 


 


}
