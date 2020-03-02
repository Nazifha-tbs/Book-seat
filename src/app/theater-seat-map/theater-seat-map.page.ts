import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
import { ActivatedRoute } from '@angular/router';
let jack: number = 0;
let queen: number = 0;
let king: number = 0;
let kingVal: number = 0;
let queenVal: number = 0;
let jackVal: number = 0;
let total: number = 0.0;
@Component({
  selector: 'app-theater-seat-map',
  templateUrl: './theater-seat-map.page.html',
  styleUrls: ['./theater-seat-map.page.scss'],
})
export class TheaterSeatMapPage implements OnInit {
  no: any;
  type: any = 0;
  rowName: any;
  buttonValue: any;
  finalValue: any;
  curr: any = " $ "
  currency: any = "Pay $ ";
  public counter = 0;
  movie: any;
  timeData : any;
  time : any;
  constructor(private route: ActivatedRoute, private modalCtrl: ModalController) {
    this.finalValue = "Select Seat";
    jack = 0;
    queen = 0;
    king = 0;
    kingVal = 0;
    queenVal = 0;
    jackVal = 0;
  }

  ngOnInit() {
    if (this.counter == 0) {
      this.finalValue = "Select Seat";
      jack = 0;
      queen = 0;
      king = 0;
    }
    this.route.queryParams.subscribe(data => {
      this.no = data.data;
      this.movie = data.movie;
      this.timeData = data.timeData;
      console.log(this.timeData);
      for(var i = 0; i < this.timeData.length; i++)
      {
        this.time = this.timeData[i].time;
      }

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
            cssClass: 'availableSeat'

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
      type: "QUEEN",
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
      if (this.seats[k].type == "JACK") {

        if (this.counter == this.no) {
          return false
        } else {
          jack++;
          jackVal = this.seats[k].value * jack;
          console.log("jack count : " + jack);
        }
      }
      if (this.seats[k].type == "QUEEN") {

        if (this.counter == this.no) {
          return false
        } else {
          queen++;
          queenVal = this.seats[k].value * queen;
          console.log("queen count : " + queen);
        }
        
      } if (this.seats[k].type == "KING") {

        
        if (this.counter == this.no) {
         return false
        } else {
          king++;
          kingVal = this.seats[k].value * king;
          console.log("king count : " + king);
        }


      }
      this.rowName = this.seats[k].data1[j].row;
      this.buttonValue = i + 1;
      if (this.counter == this.no)

        return false
      this.seats[k].data1[j].data[i].cssClass = 'active';
      this.counter++;

    }
    else if (this.seats[k].data1[j].data[i].cssClass == 'active') {
      this.seats[k].data1[j].data[i].cssClass = 'availableSeat';
      this.counter--;
      if (this.seats[k].type == "JACK") {
        jack--;
        jackVal = jackVal - this.seats[k].value;
        console.log("jack count : " + jack);
      }
      if (this.seats[k].type == "QUEEN") {
        queen--;
        queenVal = queenVal - this.seats[k].value;
        console.log("queen count : " + queen);
      } if (this.seats[k].type == "KING") {
        king--;
        kingVal = kingVal - this.seats[k].value;
        console.log("king count : " + king);
      }

    }

    console.log("total :" + jackVal + queenVal + kingVal);
    total = jackVal + queenVal + kingVal;
    this.finalValue = this.currency + total;
    if (this.counter == 0) {
      this.finalValue = "Select Seat";
      jack=0;
      king=0;
      queen=0;
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
