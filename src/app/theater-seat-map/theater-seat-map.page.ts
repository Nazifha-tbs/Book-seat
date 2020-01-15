import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theater-seat-map',
  templateUrl: './theater-seat-map.page.html',
  styleUrls: ['./theater-seat-map.page.scss'],
})
export class TheaterSeatMapPage implements OnInit {
  no: any;
  type : any;
  rowName : any;
  buttonValue : any;
  finalValue : any;
  curr: any = " $ "
  currency: any = "Pay $ ";
  public counter = 0;
  movie : any;
  constructor(private route: ActivatedRoute, private modalCtrl: ModalController) { 

  }

  ngOnInit() {
    if (this.counter == 0) {
      this.finalValue = "Select Seat";
    }
    this.route.queryParams.subscribe(data => {
      this.no = data.data;
      console.log(data);
      this.movie = data.movie;
    })
  }
  // selected(event)
  // {
  //   if (event.el.classList.cssClass('availableSeat')) {

  //   }
  //   event.el.classList.remove("availableSeat");
  //   event.el.classList.add("active");


  // }
  seats: any[] = [
    {
      value: "80.0",
      type: "JACK",
      cssClass: 'seatDivA',

      data1: [
        {
          row: "A",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'blankBtn'

          }
            ,
          {
            cssClass: 'blankBtn'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        },
        {
          row: "B",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'blankBtn'

          }
            ,
          {
            cssClass: 'blankBtn'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        },
        {
          row: "C",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'blankBtn'

          }
            ,
          {
            cssClass: 'blankBtn'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        },
        {
          row: "D",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'blankBtn'

          }
            ,
          {
            cssClass: 'blankBtn'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        },
        {
          row: "E",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        },

      ]

    },


    {
      value: "100.0",
      type: " QUEEN",
      cssClass: 'seatDivB',

      data1: [
        {
          row: "F",

          data:
            [
              {
                cssClass: 'availableSeat'
              },
              {
                cssClass: 'seatBtn'
              },
              {
                cssClass: 'seatBtn'

              }
              ,
              {
                cssClass: 'availableSeat'

              },
              {
                cssClass: 'blankBtn'

              }
              ,
              {
                cssClass: 'blankBtn'

              },
              {
                cssClass: 'availableSeat'
              },
              {
                cssClass: 'seatBtn'
              },
              {
                cssClass: 'availableSeat'

              }
              ,
              {
                cssClass: 'seatBtn'

              },
              {
                cssClass: 'seatBtn'

              }
            ]
        },
        {
          row: "G",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'blankBtn'

          }
            ,
          {
            cssClass: 'blankBtn'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        },
        {
          row: "H",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        }



      ]

    },
    {
    
      value: "120.0",
      type: "KING",
      cssClass: 'seatDivC',

      data1: [
        {
          row: "I",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'blankBtn'

          }
            ,
          {
            cssClass: 'blankBtn'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        },
        {
          row: "J",

          data: [{
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'seatBtn'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'availableSeat'

          },
          {
            cssClass: 'availableSeat'
          },
          {
            cssClass: 'seatBtn'
          },
          {
            cssClass: 'availableSeat'

          }
            ,
          {
            cssClass: 'seatBtn'

          },
          {
            cssClass: 'seatBtn'

          }
          ]
        }




      ]

    }]
 
  selected(i, j, k) {
    
    
    
    
    if (this.seats[k].data1[j].data[i].cssClass == 'availableSeat') {
      this.type = this.seats[k].value;
      this.rowName = this.seats[k].data1[j].row;
      this.buttonValue = i+1;
      if (this.counter == this.no)
        
        return false
      this.seats[k].data1[j].data[i].cssClass = 'active';
      this.counter++;
      
    }
    else if (this.seats[k].data1[j].data[i].cssClass == 'active') {
      this.seats[k].data1[j].data[i].cssClass = 'availableSeat';
      this.counter--;
      
    }
    
    
    this.finalValue = this.currency + this.type * this.counter;
    if (this.counter == 0) {
      this.finalValue = "Select Seat";
    }

  }
  
  // Show modal
  async openModel() {
if (this.counter == this.no) {

  const modal = await this.modalCtrl.create({
    component: PaymentModalPage,
    cssClass: 'payment-modal-css'



  });

  return await modal.present();
}
  }
}
