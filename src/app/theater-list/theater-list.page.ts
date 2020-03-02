import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { InfoModalPage } from '../info-modal/info-modal.page';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { SeatTypeModalPage } from '../seat-type-modal/seat-type-modal.page';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.page.html',
  styleUrls: ['./theater-list.page.scss'],
})
export class TheaterListPage implements OnInit {
  dataSeat: any;
  lang: any;
  type: any;
  day: any;
  mon: any;
  today: string;
  movie: any;
  movieData: any;
  previousSelected: any;
  listItems: any;
  lists: any[];
  i: any;
  j: any;
  showTiming: any[];
  selectedTime: any;
  time: any;
  disabled: any;
  cssClass: any;

  ionViewWillEnter() {
    this.lists[this.i].showTiming[this.j].cssClass = this.selectedTime;
  }
  constructor(private loadingController: LoadingController,private service: DataServiceService, private modalCtrl: ModalController, private route: ActivatedRoute,
    public navCtrl: NavController) {
      
    this.route.queryParams.subscribe(data => {
      console.log('New data => ', data);
      this.movieData = data.data;

    })
   
    this.service.getShowData().subscribe(resultData => {
      this.listItems = resultData;
      this.lists = [];
      this.showTiming = [];
      for (var i = 0; i < this.listItems.data.length; i++) {

        this.lists.push({
          name: this.listItems.data[i].theaterName,
          location: this.listItems.data[i].location,
          distance: this.listItems.data[i].distance,
          address: this.listItems.data[i].address,
          city: this.listItems.data[i].location,
          showTiming: []

        })
        for (var j = 0; j < this.listItems.data[i].showTiming.length; j++) {
          this.lists[i].showTiming.push({
            time: this.listItems.data[i].showTiming[j].time,
            disabled: this.listItems.data[i].showTiming[j].disabled,
            cssClass: this.listItems.data[i].showTiming[j].cssClass,
            active: this.listItems.data[i].showTiming[j].active
          })
        }
      }
    })
  }

  ngOnInit() {
    this.movie = this.movieData;
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const thisMonth = monthNames[(new Date()).getMonth()];
    const nextMonth = monthNames[(new Date()).getMonth() + 1];
    if (localStorage.toggleClass != undefined || localStorage.toggleClass != "") {
      this.day = localStorage.getItem('toggleClass');
      this.mon = thisMonth;

    }
    else { this.today = new Date().toString(); }
    if (this.lang == undefined || this.lang == "") {

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
    modal1.onDidDismiss().then((data) => {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const thisMonth = monthNames[(new Date()).getMonth()];
      const nextMonth = monthNames[(new Date()).getMonth() + 1];
      console.log(data['data']);
      // this.today = data['data'];

      console.log(thisMonth);

      if (data['data'] == undefined || data['data'] == "" || localStorage.toggleClass != undefined) {
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
      else if (data !== undefined || data !== "") {
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
        if (this.lang == undefined || this.lang == "") {

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

  async navigate(index: any, j: any) {
    console.log(index, j);
    var listData = this.lists[index];
    var today = this.today;
    var mon = this.mon;
    var day = this.day;
    var movie = this.movie;
    this.selectedTime = this.lists[index].showTiming[j].cssClass;
    console.log(this.selectedTime);
    var selectedTimeClass = this.selectedTime;
    this.i = index;
    this.j = j;
    console.log(this.lists[index].showTiming[j].cssClass);
    var timeSelect = this.lists[index].showTiming[j].time;
    var timeSelected = this.lists[index].showTiming[j].cssClass = 'selected';
    // timeSelected.cssClass = 'active';

    console.log(timeSelected);
    // if (this.lists[index].data[j].cssClass == 'buttonStyle' || this.lists[index].data[j].cssClass  == 'buttonActive') 
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
   
    setTimeout(() => {
      this.navCtrl.navigateForward(
        '/seat-selection',
        {
          queryParams: {
            data: listData, today, mon, day, timeSelected, movie, selectedTimeClass, timeSelect
          }
        });

    }, 2000);

  }
}
