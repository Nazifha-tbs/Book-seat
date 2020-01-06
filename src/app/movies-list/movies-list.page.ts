import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  constructor() { }
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment  = 0;
 index: any;
  

  ngOnInit() {
    
  }
  buttons : any [] = [{
    name: "Now showing",
    active: false
  },
{
  name: "Coming soon",
  active: false
},
{
  name: "Exclusive",
  active: false
}]
    Movies : any[] =[{
      movie : "../../../assets/img/images.png",
      name: "Charlie's Angels",
      rate : "84%"

    }, {
        movie: "../../../assets/img/images1.png",
        name: "Jumanji",
        rate: "98%"

      }, {
        movie: "../../../assets/img/images2.png",
        name: "Bad boy",
        rate: "84%"

      },
      {
        movie: "../../../assets/img/images3.png",
        name: "Spies in disguise",
        rate: "98%"

      }, {
        movie: "../../../assets/img/images4.png",
        name: "Dolittle",
        rate: "84%"

      }, {
        movie: "../../../assets/img/images5.png",
        name: "The King's Man",
        rate: "98%"

      }
    ]
 

  selected(index, category){
    console.log(category);
      for(var i = 0;i < this.buttons.length;i++)
      {
        this.buttons[i].active = false;
      }
      category.active = true;
    console.log(category.active);
      this.segment  = index;
      this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }  
}
