import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { InfoModalPageModule } from '../info-modal/info-modal.module';
import { InfoModalPage } from '../info-modal/info-modal.page';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { SeatTypeModalPage } from '../seat-type-modal/seat-type-modal.page';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.page.html',
  styleUrls: ['./theater-list.page.scss'],
})
export class TheaterListPage implements OnInit {
  dataSeat: any;
  lang: any ;
  type: any ;
  today: string;
  lists: any[] = [{
    name: " Arasan Cinemas A/C 2K Dolby",
    city: "Narobi",
    distance: "2.4 km away",
    address: "SP Towers, 343, Sathy Rd, Nairobi, 00100",
    data: [{
      time: "11:00 AM"
    },
    {
      time: "12:00 PM"
    },
    {
      time: "12:30 PM"
    },
    {
      time: "01:00 PM"
    }]

  },
  {
    name: " INOX - Prozone mall",
    city: "Coimbatore",
    distance: "3.2 km away ",
    address: "INOX mall ,508, Sathy Rd, Nairobi, 00100",
    data: [{
      time: "11:00 AM"
    },
    {
      time: "12:00 PM"
    }]

  },
  {
    name: " Karpagam theatres - 4K Dolby Atoms",
    city: "Narobi",
    distance: "4 km away",
    address: "I-Max Mall,10-b, Sathy Rd, Nairobi, 00100",
    data: [{
      time: "09:00 AM"
    },
    {
      time: "10:00 PM"
    },
    {
      time: "10:30 PM"
    }]

  },
  {
    name: "KG theatres - 4K",
    city: "Coimbatore",
    distance: "4.4 km away",
    address: "KG Heights, 225, Sathy Rd, Coimbatore, 00100",
    data: [{
      time: "10:00 AM"
    },
    {
      time: "10:30 PM"
    },
    {
      time: "11:30 PM"
    }]

  }]

  constructor(private modalCtrl: ModalController, private router: Router,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.today = new Date().toString();
    if (this.lang == undefined) {

      this.lang = "Select type";
    }
  }
  navigate(index: any) {
    var listData = this.lists[index];
    console.log(index);
    console.log((listData));
    // this.navCtrl('', { queryParams: { data: data } });


    // this.router.navigate(['/home'])
    this.navCtrl.navigateForward(
      '/seat-selection',
      {
        queryParams: {
          data: listData
        }
      })
  }
  // Show modal
  async openModal(index) {

    const modal = await this.modalCtrl.create({
      component: InfoModalPage,
      cssClass: 'theater-info-modal-css',
      componentProps: { info: this.lists[index] }


    });
    return await modal.present();
  }

  //calendar
  async openCal() {

    const modal1 = await this.modalCtrl.create({
      component: CalendarModalPage,
      cssClass: 'calendar-modal-css'
      // componentProps: { info: this.lists[index] }


    });
    return await modal1.present();
  }

  //seat
  async seat() {

    const modal2 = await this.modalCtrl.create({
      component: SeatTypeModalPage,
      cssClass: 'seat-modal-css',
      componentProps: { lang: this.lang, type: this.type }
      
    });

    // // Get returned data
    modal2.onDidDismiss()
      .then(data => {
        this.type = '';
        this.lang = '';
        if (this.lang == undefined) {

          this.lang = "Select type";
        }
        if (localStorage.selectedT != undefined) {

          this.type = localStorage.getItem('selectedT');

          localStorage.removeItem('selectedT');
        }
        

        if (localStorage.selectedL != undefined) {

          this.lang = localStorage.getItem('selectedL');
          localStorage.removeItem('selectedL');
        }
      });

    return await modal2.present();
  }
}
