import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.page.html',
  styleUrls: ['./seat-selection.page.scss'],
})
export class SeatSelectionPage implements OnInit {
  // activated : boolean;
  time: string;
  name: string;
  city: string;
  distance: string;
  dataTime: any;
  seatSelected: string;
  timeSelectedPrevious : any;

  today: any;
  day: any;
  mon: any;
  year: any;
  selected: any;
  timeSelected: any;
  movie: any;
  seatData: any[];
  seatDetails: any;
  selectedTimeClass : any;
  constructor(private loadingController: LoadingController,private route: ActivatedRoute, public navCtrl: NavController, private service: DataServiceService) {
    this.service.getSeatData().subscribe(dataResult => {
      this.seatDetails = dataResult;
      this.seatData = [];
    
      for (var i = 0; i < this.seatDetails.data.length; i++)
        {
        console.log(this.seatDetails.data[i].type);
          this.seatData.push({
            type: this.seatDetails.data[i].type,
            price: this.seatDetails.data[i].price,
            availability: this.seatDetails.data[i].availability
          })
        }
    })

    this.route.queryParams.subscribe(data => {
      console.log('New data => ', data);
      this.name = data.data.name;
      this.city = data.data.city;
      this.distance = data.data.distance;
      this.timeSelected = data.timeSelected;
      this.selectedTimeClass = data.selectedTimeClass;
      this.timeSelectedPrevious = data.timeSelect;
      // this.timeSelected.active = true;
      this.movie = data.movie;

      if (data.day == "") {
        this.mon = "";
        this.year = "";
        this.today = new Date().toString();
      }
      else {
        this.today = data.today;
        this.day = data.day;
        this.mon = data.mon;
        this.year = data.year;
      }

      this.dataTime = data.data.showTiming;
      for (var i = 0; i < this.dataTime.length; i++) {
        this.time = this.dataTime[i].time;
        if (this.timeSelected == this.dataTime[i].cssClass) {
          console.log(this.time);
          this.dataTime[i].active = true;

        }

      }


    })

  
   
  }
  timeSelect(data)
  {
    
    for (var i = 0; i < this.dataTime.length; i++) {
      this.dataTime[i].active = false;
      if (this.timeSelectedPrevious == this.dataTime[i].time )
      {
        this.dataTime[i].cssClass = this.selectedTimeClass;
      }
      if(data == this.dataTime[i].time)
      {
        this.dataTime[i].active = true;
      }
    }
  }
  ngOnInit() {
    for (var i = 0; i < this.dataTime.length; i++) {
      this.dataTime[i].active = false;
      if (this.timeSelected == this.dataTime[i].cssClass) {
        console.log(this.time);
        this.dataTime[i].active = true;

      }
    }
    this.year = new Date().getFullYear();
    this.seat[0].active = true;
    this.selected = this.seat[0].url;
    // console.log(this.route.queryParams.subscribe(this.listData));
  }

  seat: any[] = [
    {

      no: 1,
      active: false,
      url: "../../../assets/icon/1seat.svg"
    },
    {
      no: 2,
      active: false,
      url: "../../../assets/icon/2seat.svg"

    },
    {
      no: 3,
      active: false,
      url: "../../../assets/icon/3seat.svg"

    },
    {
      no: 4,
      active: false,
      url: "../../../assets/icon/4seat.svg"

    },
    {
      no: 5,
      active: false,
      url: "../../../assets/icon/5seat.svg"

    },
    {
      no: 6,
      active: false,
      url: "../../../assets/icon/6seat.svg"

    },
    {
      no: 7,
      active: false,
      url: "../../../assets/icon/7seat.svg"

    },
    {
      no: 8,
      active: false,
      url: "../../../assets/icon/8seat.svg"

    },
    {
      no: 9,
      active: false,
      url: "../../../assets/icon/9seat.svg"

    },
    {
      no: 10,
      active: false,
      url: "../../../assets/icon/10seat.svg"

    },
  ]
  // seats: any[] = [{
  //   type: "King",
  //   value: "$ 120.00",
  //   availability: "Filling fast",
  //   activated: false

  // },
  // {
  //   type: "Queen",
  //   value: "$ 100.00",
  //   availability: "Available",
  //   activated: false

  // },
  // {
  //   type: "Jack",
  //   value: "$ 80.00",
  //   availability: "Available",
  //   activated: false
  // }]

  toggleClass(number) {
    for (var i = 0; i < this.seat.length; i++) {
      this.seat[i].active = false;
    }
    number.img
    number.active = !number.active;
    this.selected = number.url;
    console.log(number);

  }
  selectedRate(i) {
    console.log(i);
    if (i == 0) {
      console.log(i);
      this.seatData[i].activated = true;
      this.seatData[1].activated = false;
      this.seatData[2].activated = false;
      console.log(this.seatData[i].activated);
    }
    else if (i == 1) {
      console.log(i);
      this.seatData[i].activated = !this.seatData[i].activated;
      this.seatData[0].activated = false;
      this.seatData[2].activated = false;
      console.log(this.seatData[i].activated);
    }
    else if (i == 2) {
      console.log(i);
      this.seatData[i].activated = !this.seatData[i].activated;
      this.seatData[0].activated = false;
      this.seatData[1].activated = false;
      console.log(this.seatData[i].activated);
    } else {
      this.seatData[2].activated = !this.seatData[i].activated;
      this.seatData[0].activated = false;
      this.seatData[1].activated = false;
    }




  }

  async navigate(data: any) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    let timeData; 
    let selectedTime;
    for (var i = 0; i < this.seat.length; i++) {
      // this.seat[i].active = false;
      if (this.seat[i].active == true) {

        this.seatSelected = this.seat[i].no;
      }
    }
    // for (var i = 0; i < this.dataTime.length; i++) {
    //   timeData = this.dataTime[i];
    //   if (this.timeSelected == this.dataTime[i].cssClass) {
    //     selectedTime = this.dataTime[i];
    //     this.dataTime[i].active = true;
    //   }
    // }
    console.log(this.dataTime);
    timeData = this.dataTime;
    let val = this.seatSelected;
    let movie = this.movie;
    await loading.present();

    

    setTimeout(() => {
      this.navCtrl.navigateForward(
        '/theater-seat-map',
        {
          queryParams: {
            data: val, movie, timeData
          }
        });

    }, 2000);
  
  }
}
