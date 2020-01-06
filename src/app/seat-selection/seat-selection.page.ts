import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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



  constructor(private router : Router,
   
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(data => {
      console.log('New data => ', data);
      this.name = data.data.name;
      this.city = data.data.city;
      this.distance = data.data.distance;

      this.dataTime = data.data.data;
      for (var i = 0; i < this.dataTime.length; i++) {
        this.time = this.dataTime[i].time;

      }


    })
  }
  
  ngOnInit() {

    // console.log(this.route.queryParams.subscribe(this.listData));
  }
  seat: any[] = [
    {

    no: 1,
    active: false
  },
  {
    no: 2,
    active: false
  },
  {
    no: 3,
    active: false
  },
  {
    no: 4,
    active: false
  },
  {
    no: 5,
    active: false
  },
  {
    no: 6,
    active: false
  },
  {
    no: 7,
    active: false
  },
  {
    no: 8,
    active: false
  },
  {
    no: 9,
    active: false
  },
  {
    no: 10,
    active: false
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
    
      number.active = !number.active;
    
    console.log(number);
    // console.log(this.seat.length);
    
    // this.seat[number] = this.renderer.addClass(this.el.nativeElement, 'active');
    // this.renderer.removeClass(this.el.nativeElement, 'numberBtn');
  //  this.seat[number] = this.renderer.addClass(this.el.nativeElement, 'active');
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

  navigate(){
    this.router.navigate(['/theater-seat-map'])
  }
}
