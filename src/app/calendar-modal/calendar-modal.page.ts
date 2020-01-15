import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
  providers: [DatePipe],
})
export class CalendarModalPage implements OnInit {
  today: any ;
  currentDay : any ;
  data : any;
  day : any;
  previousSelected : any;

  constructor(public datePipe: DatePipe,
    private modalCtrl: ModalController, 
    private navParams: NavParams) {
    // console.log(navParams.get('day'));
      this.day = navParams.get('day');
  }
  
  week: any[] = 
  [{
    day: "M"
  },
  {
    day: "T"
  },
  {
    day: "W"
  },
  {
    day: "T"
  },
  {
    day: "F"
  },
  {
    day: "S"
  },
  {
    day: "S"
  }]

  thisWeek : any [] = 
  [{
    date : 13,
    active : false,
    currentDay :""
  },
    {
      date: 14,
      active: false,
      currentDay: "",
      today : false
    },
    {
      date: 15,
      active: false,
      currentDay: "",
      today: false
    },
    {
      date: 16,
      active: false,
      currentDay: "",
      today: false
    },
    {
      date: 17,
      active: false,
      currentDay: "",
      today: false
    },
    {
      date: 18,
      active: false,
      currentDay: "",
      today: false
    },
    {
      date: 19,
      active: false,
      currentDay: "",
      today: false
    }]
  nextWeek: any[] = 
  [{
    date: 20,
    active: false,
    current: false,
    currentDay: ""
  },
  {
    date: 21,
    active: false,
    current: false,
    currentDay: ""
  },
  {
    date: 22,
    active: false,
    current: false,
    currentDay: ""
  },
  {
    date: 23,
    active: false,
    today: false,
    currentDay: ""
  },
  {
    date: 24,
    active: false,
    current: false,
    currentDay: ""
  },
  {
    date: 25,
    active: false,
    current: false,
    currentDay: ""
  },
  {
    date: 26,
    active: false,
    current: false,
    currentDay: ""
  }]
    
  ngOnInit() {
   console.log(this.day);
    this.today = new Date().toString();
    var activeDate = this.datePipe.transform(this.today, 'd');
    if (localStorage.toggleClass == undefined || localStorage.toggleClass == "") {

      // this.data.date = "";
    } if (localStorage.toggleClass != undefined) {
      this.previousSelected = localStorage.getItem('toggleClass');
      console.log(this.previousSelected);
      // localStorage.removeItem('toggleClass');
    }
   for(var i = 0;i < this.thisWeek.length;i++)
   {
     if (this.day == this.thisWeek[i].date || this.previousSelected == this.thisWeek[i].date) {
       this.thisWeek[i].active = true;
     }
    else if (this.thisWeek[i].date == activeDate) {
     
       this.thisWeek[i].currentDay ="Today"; 
       this.thisWeek[i].active = true;
     }
     
   }
    for (var i = 0; i < this.nextWeek.length; i++) {
      if (this.day == this.nextWeek[i].date || this.previousSelected == this.nextWeek[i].date ) {
        this.nextWeek[i].active = true;
        
      }
    else if (this.nextWeek[i].date == activeDate) {
        console.log(activeDate);
        this.nextWeek[i].currentDay = "Today"; 
        this.nextWeek[i].current = true;
        console.log(this.nextWeek[i].current = true);
      }
    }

  
  }
 
  toggleClass(date) {
    console.log(this.thisWeek.length);
    for (var i = 0; i < this.thisWeek.length; i++) {
      this.thisWeek[i].active = false;
    }
    for (var i = 0; i < this.nextWeek.length; i++) {
      this.nextWeek[i].active = false;
    }
   
     date.active = true;
     this.data =  date;
    localStorage.setItem('toggleClass', this.data.date);
    this.modalCtrl.dismiss(this.data.date);
    console.log(this.data.date);
    
  }
  
}
