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
  
  constructor(public datePipe: DatePipe,private modalCtrl: ModalController, private navParams: NavParams) { }
  
  week: any[] = [{
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

  thisWeek : any [] = [{
    date : 29,
    active : false,
    currentDay :""
  },
    {
      date: 30,
      active: false,
      currentDay: ""
    },
    {
      date: 31,
      active: false,
      currentDay: ""
    },
    {
      date: 1,
      active: false,
      currentDay: ""
    },
    {
      date: 2,
      active: false,
      currentDay: ""
    },
    {
      date: 3,
      active: false,
      currentDay: ""
    },
    {
      date: 4,
      active: false,
      currentDay: ""
    }]
  nextWeek: any[] = 
  [{
    date: 5,
    active: false
  },
  {
    date: 6,
    active: false
  },
  {
    date: 7,
    active: false
  },
  {
    date: 8,
    active: false
  },
  {
    date: 9,
    active: false
  },
  {
    date: 10,
    active: false
  },
  {
    date: 11,
    active: false
  }]
    
  ngOnInit() {
    this.today = new Date().toString();
    var activeDate = this.datePipe.transform(this.today, 'd');
   for(var i = 0;i < this.thisWeek.length;i++)
   {
     if (this.thisWeek[i].date == activeDate) {
     
       this.thisWeek[i].currentDay ="Today"; 
       this.thisWeek[i].active = true;
     }
     
   }
    for (var i = 0; i < this.nextWeek.length; i++) {
      if (this.nextWeek[i].date == activeDate) {
        this.nextWeek[i].active = true;
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

    console.log(date.active);
    
  }
  
}
