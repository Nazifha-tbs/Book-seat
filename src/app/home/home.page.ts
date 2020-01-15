import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router) {}
  @ViewChild('Slides',{static : false}) slides: IonSlides;
  imageContainer: any[] = [{
    img: "../../../assets/icon/slide1.svg"
  },{
    img: "../../../assets/img/boxingoffer.jpg"
  },
    {
      img: "../../../assets/img/christmas.png"
    }, {
      img: "../../../assets/img/blackfriday.png"
    },
    {
      img: "../../../assets/img/christmas1.jpg"
    },
    {
      img: "../../../assets/img/halloween.jpg"
    },{
      img: "../../../assets/img/boxingoffer2.jpg"
    }]
  navigate()
  {
    this.router.navigate(['/theater-list'])
  }
  ionViewDidLoad() {
    this.slides.startAutoplay();
  }
  slideChanged(){
    console.log("slide changed.");
    this.slides.startAutoplay();
  }
}
