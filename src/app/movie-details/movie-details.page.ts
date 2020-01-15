import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movieName : any;
rating : any;
  constructor(private route: ActivatedRoute,private navCtrl : NavController) {
    
   }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.movieName = data.data;

      this.rating = data.rate;
    })
  }
  navigate()
  {
  
    var movie = this.movieName;
    this.navCtrl.navigateForward(
      '/theater-list',
      {
        queryParams: {
          data: movie
        }
      })

  }
}
