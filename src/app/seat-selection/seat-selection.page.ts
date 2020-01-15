import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CssSelector } from '@angular/compiler';

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


  today: any;
  day: any;
  mon: any;
  year : any; 
  selected : any;
  timeSelected : any;
  movie : any;

  constructor(private router : Router,
   
    private route: ActivatedRoute, public navCtrl: NavController) {
    this.route.queryParams.subscribe(data => {
      console.log('New data => ', data);
      this.name = data.data.name;
      this.city = data.data.city;
      this.distance = data.data.distance;
      this.timeSelected = data.timeSelected;
      // this.timeSelected.active = true;
      this.movie = data.movie;
     
      if (data.day == "") {
          this.mon = "";
          this.year = "";
          this.today = new Date().toString();
      }
      else{
        this.today = data.today;
        this.day = data.day;
        this.mon = data.mon;
        this.year = data.year;
      }
      

      this.dataTime = data.data.data;
      for (var i = 0; i < this.dataTime.length; i++) {
        this.time = this.dataTime[i].time;
        if (this.timeSelected == this.time) {
          console.log(this.time);
         
          
        }

      }


    })
  }
  
  ngOnInit() {
    this.year = new Date().getFullYear();
    this.seat[0].active = true;
    this.selected = this.seat[0].url;
    // console.log(this.route.queryParams.subscribe(this.listData));
  }

  seat: any[] = [
    {

    no: 1,
    active: false,
      url : "../../../assets/icon/1seat.svg"
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
  seats: any[] = [{
    type: "King",
    value: "$ 120.00",
    availability: "Filling fast",
    activated: false

  },
  {
    type: "Queen",
    value: "$ 100.00",
    availability: "Available",
    activated: false

  },
  {
    type: "Jack",
    value: "$ 80.00",
    availability: "Available",
    activated: false
  }]

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
      this.seats[i].activated = true;
      this.seats[1].activated = false;
      this.seats[2].activated = false;
      console.log(this.seats[i].activated);
    }
    else if (i == 1) {
      console.log(i);
      this.seats[i].activated = !this.seats[i].activated;
      this.seats[0].activated = false;
      this.seats[2].activated = false;
      console.log(this.seats[i].activated);
    }
    else if (i == 2) {
      console.log(i);
      this.seats[i].activated = !this.seats[i].activated;
      this.seats[0].activated = false;
      this.seats[1].activated = false;
      console.log(this.seats[i].activated);
    } else {
      this.seats[2].activated = !this.seats[i].activated;
      this.seats[0].activated = false;
      this.seats[1].activated = false;
    }




  }

  navigate(data : any){
    
    for (var i = 0; i < this.seat.length; i++) {
      // this.seat[i].active = false;
      if (this.seat[i].active == true ) {
        
         this.seatSelected = this.seat[i].no;
      }
    }

    
    var val = this.seatSelected;
    var movie = this.movie;
    console.log(movie);
    this.navCtrl.navigateForward(
      '/theater-seat-map',
      {
        queryParams: {
          data: val, movie
        }
      })
    // this.router.navigate(['/theater-seat-map'])
  }
}
