import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, LoadingController } from '@ionic/angular';
import { DataServiceService } from '../services/data-service.service';



@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {
  url : any;
  Movies : any [];
  movie : any;
  constructor(private loadingController: LoadingController,public navCtrl: NavController,private service : DataServiceService) { 
    this.service.getMoviesData().subscribe( dataResult => {
      this.movie = dataResult;
 
      this.Movies = [];
      this.url = service.url;
      for(var i = 0; i < this.movie.data.length; i++)
      {
        this.Movies.push({
          id: this.movie.data[i].id,
          movie: this.url  +this.movie.data[i].icon,
          name: this.movie.data[i].name,
          rate: this.movie.data[i].rate
        })
      }
    })
  }
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment  = 0;
 index: any;
  

  ngOnInit() {
    this.buttons[0].active = true;
    
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
    
 async navigate(i)
 {
   const loading = await this.loadingController.create({
     message: 'Please wait...',
     duration: 2000
   });
   var id = this.Movies[i].id;
   var name = this.Movies[i].name;

   var rate = this.Movies[i].rate;
 
   await loading.present();
   setTimeout(() => {
     this.navCtrl.navigateForward('movie-details', { queryParams: { data: name, rate, id } })
    
   }, 2000);

 }

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
    for (var i = 0; i < this.buttons.length; i++) {
      if(i == this.segment)
      this.selected(this.segment, this.buttons[i])
    }
   
  }  

  
}
