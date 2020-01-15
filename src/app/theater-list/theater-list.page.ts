import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { InfoModalPage } from '../info-modal/info-modal.page';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { SeatTypeModalPage } from '../seat-type-modal/seat-type-modal.page';


@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.page.html',
  styleUrls: ['./theater-list.page.scss'],
})
export class TheaterListPage implements OnInit {
  dataSeat: any;
  lang: any ;
  type: any ;
  day : any;
  mon : any;
  today: string;
  movie: any;
  previousSelected: any;

  i : any;
  j : any;

  selectedTime : any;

  lists: any[] = [{
    name: " Arasan Cinemas A/C 2K Dolby",
    city: "Narobi",
    distance: "2.4 km away",
    address: "SP Towers, 343, Sathy Rd, Nairobi, 00100",
    data: [{
      time: "11:00 AM",
      cssClass: 'buttonStyle',
      disabled: false,
      active : false
    },
    {
      time: "12:00 PM",
      cssClass: 'buttonActive',
      disabled: false,
      active: false
    },
    {
      time: "12:30 PM",
      cssClass: 'buttonStyle',
      disabled: false,
      active: false
    },
    {
      time: "01:00 PM",
      cssClass: 'buttonActive',
      disabled: false,
      active: false
    }]

  },
  {
    name: " INOX - Prozone mall",
    city: "Coimbatore",
    distance: "3.2 km away ",
    address: "INOX mall ,508, Sathy Rd, Nairobi, 00100",
    data: [{
      time: "11:00 AM",
      cssClass: 'buttonInactive',
      disabled: true,
      active: false
      
    },
    {
      time: "12:00 PM",
      cssClass: 'buttonActive',
      disabled: false,
      active: false
    }]

  },
  {
    name: " Karpagam theatres - 4K Dolby Atoms",
    city: "Narobi",
    distance: "4 km away",
    address: "I-Max Mall,10-b, Sathy Rd, Nairobi, 00100",
    data: [{
      time: "09:00 AM",
      cssClass: 'buttonStyle',
      disabled: false,
      active: false
    },
    {
      time: "10:00 PM",
      cssClass: 'buttonStyle',
      disabled: false,
      active: false
    },
    {
      time: "10:30 PM",
      cssClass: 'buttonInactive',
      disabled: true,
      active: false
    }]

  },
  {
    name: "KG theatres - 4K",
    city: "Coimbatore",
    distance: "4.4 km away",
    address: "KG Heights, 225, Sathy Rd, Coimbatore, 00100",
    data: [{
      time: "10:00 AM",
      cssClass: 'buttonInactive',
      disabled : true,
      active: false
    },
    {
      time: "10:30 PM",
      cssClass: 'buttonActive',
      disabled: false,
      active: false
    },
    {
      time: "11:30 PM",
      cssClass: 'buttonStyle',
      disabled: false,
      active: false
    }]

  }]

  ionViewWillEnter()
  {
      
    this.lists[this.i].data[this.j].cssClass = this.selectedTime;
      

    
  }
  constructor(private modalCtrl: ModalController, private route: ActivatedRoute,
    public navCtrl: NavController) {
  
    this.route.queryParams.subscribe(data =>{
      console.log(data);
      this.movie = data.data;
      
    })
     }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.movie = data.data;

    })
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const thisMonth = monthNames[(new Date()).getMonth()];
    const nextMonth = monthNames[(new Date()).getMonth() + 1];
    if (localStorage.toggleClass != undefined || localStorage.toggleClass != "") {
      this.day = localStorage.getItem('toggleClass');
      this.mon = thisMonth;
     
    }
    else{this.today = new Date().toString();}
    if (this.lang == undefined || this.lang == "" ) {

      this.lang = "Select type";
    } 
     
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
    console.log(this.day);
    const modal1 = await this.modalCtrl.create({
      component: CalendarModalPage,
      cssClass: 'calendar-modal-css',
      componentProps: { day: this.day }
    
      

    });
    modal1.onDidDismiss().then((data) =>{
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const thisMonth = monthNames[(new Date()).getMonth()];
      const nextMonth = monthNames[(new Date()).getMonth() + 1];
      console.log(data['data']);
      // this.today = data['data'];
     
      console.log(thisMonth);
     
      if (data['data'] == undefined || data['data'] == "" || localStorage.toggleClass != undefined ) {
        this.day = "";
        this.mon = "";
        this.today = "";
        // this.today = new Date().toString();
        this.previousSelected = localStorage.getItem('toggleClass');
        console.log(this.previousSelected);

        this.day = this.previousSelected;
        this.mon = thisMonth;
        console.log(this.today);
      }
      else if(data !== undefined || data !== ""){
        console.log(data['data'], thisMonth);
        this.today = "";
        this.day = data['data'];
        this.mon = thisMonth;
      }
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
        if (this.lang == undefined || this.lang == "" ) {

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

  navigate(index: any,j : any) {
    var listData = this.lists[index];
    var today = this.today;
    var mon = this.mon;
    var day = this.day;
    var movie = this.movie;
    this.selectedTime = this.lists[index].data[j].cssClass;
    this.i = index;
     this.j = j;
    console.log(this.lists[index].data[j].cssClass);
    var timeSelected = this.lists[index].data[j].cssClass = 'selected';
    // timeSelected.cssClass = 'active';
    
    console.log(this.selectedTime);
    // if (this.lists[index].data[j].cssClass == 'buttonStyle' || this.lists[index].data[j].cssClass  == 'buttonActive') 
      
      this.navCtrl.navigateForward(
        '/seat-selection',
        {
          queryParams: {
            data: listData, today, mon, day , timeSelected, movie
          }
        })
   
   
  }
}
