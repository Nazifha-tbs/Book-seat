import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movieName: any;
  rating: any;
  votes: any;
  duration: any;
  category: any;
  total: any;
  writer: any;
  date: any;
  review: any;

  Crews: any[];
  cast: any;
  

  url: any;
  id: any;
  movie: any;
  constructor(private loadingController: LoadingController,private service: DataServiceService, private route: ActivatedRoute, private navCtrl: NavController) {
    this.service.getMoviesData().subscribe(dataResult => {
      this.movie = dataResult;
      this.url = service.url;

      for (var i = 0; i < this.movie.data.length; i++) {
        if (this.id == this.movie.data[i].id) {
          this.movieName = this.movie.data[i].name;
          this.rating = this.movie.data[i].rate;
          this.votes = this.movie.data[i].votes;
          this.duration = this.movie.data[i].duration;
          this.category = this.movie.data[i].category;
          for (var j = 0; j < this.movie.data[i].reviewData.length; j++) {
            this.total = this.movie.data[i].reviewData[j].total;
            this.writer = this.movie.data[i].reviewData[j].writer;
            this.date = this.movie.data[i].reviewData[j].date;
            this.review = this.movie.data[i].reviewData[j].review;
          }
          this.Crews = [];
          for (var k = 0; k < this.movie.data[i].castData.length; k++) {
            this.Crews.push({
              castImage: this.url + this.movie.data[i].castData[k].castImage,
              castName: this.movie.data[i].castData[k].castName
            })

          }
        }
      }
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      // this.movieName = data.data;
      this.id = data.id;

      // this.rating = data.rate;
    })


  }
  async navigate() {
    var movie = this.movieName;
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    setTimeout(() => {
      this.navCtrl.navigateForward(
        '/theater-list',
        {
          queryParams: {
            data: movie
          }
        });
    }, 2000);
  
    

  }
}
