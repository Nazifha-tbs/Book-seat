import { Component, ViewChild, OnInit, ElementRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSlides, LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { DataServiceService } from '../services/data-service.service';

declare var google;
let infoWindow: any;

var currentInfoWindow;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  latLng: any;
  markers: any;
  loginData: any;
  fullname: any;
  profileImg: any;
  message: any;
  categoryData: any;
  url: any = this.service.url;
  category: any[];
  moviesData: any;
  movies: any[];
  events: any[];
  event: any;
  plays: any[];
  play: any;
 
  @ViewChild('map', { static: false }) mapElement;
  map: any;

  @ViewChild('Slides', { static: false }) slides: IonSlides;
  imageContainer: any[] = [{
    img: "../../../assets/icon/slide1.svg"
  }, {
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
  }, {
    img: "../../../assets/img/boxingoffer2.jpg"
  }]
  ngOnInit() {
    
  }


  ionViewDidEnter() {
    this.slides.startAutoplay();
    
  }

 
  constructor(private loadingController: LoadingController,private ngZone: NgZone,private geolocation: Geolocation,
    private el: ElementRef, private router: Router, private service: DataServiceService) {
    this.loadMap();

    this.service.getDataLogin().subscribe(result => {
      this.loginData = result;
      this.fullname = this.loginData.data.fullname;
      this.profileImg = this.loginData.data.profile_url;
    }
    );
    this.service.getCategory().subscribe(categories => {

      this.categoryData = categories;
      this.category = [];
      for (var i = 0; i < this.categoryData.data.length; i++) {
        this.category.push({
          categoryName: this.categoryData.data[i].name,
          categoryImg: this.url + this.categoryData.data[i].icon
        });
      }
    });

    this.service.getMoviesData().subscribe(movie => {
      this.moviesData = movie;
      this.movies = [];

      for (var i = 0; i < this.moviesData.data.length; i++) {

        this.movies.push({
          movieName: this.moviesData.data[i].name,

          movieImg: this.url + this.moviesData.data[i].icon,
          rate: this.moviesData.data[i].rate
        });
      }
    });
  
    this.service.getEventData().subscribe(eventData => {
      this.event = eventData;

      this.events = [];

      for (var i = 0; i < this.event.data.length; i++) {

        this.events.push({
          eventName: this.event.data[i].name,
          eventImg: this.url + this.event.data[i].image,
          type: this.event.data[i].type
        });
      }
    });

    this.service.getPlayData().subscribe(playData => {
      this.play = playData;

      this.plays = [];

      for (var i = 0; i < this.play.data.length; i++) {

        this.plays.push({
          name: this.play.data[i].name,
          image: this.url + this.play.data[i].image,
          type: this.play.data[i].type
        });
      }
    });
  }


  async goToNext() {
  
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });
    await loading.present();
    setTimeout(() => {
      this.router.navigate(['/movies-list']);
    }, 2000);
    }
 
  async navigate() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    setTimeout(()=>{
      this.router.navigate(['/nearby-theater']);
    },2000);
   
  }
  ionViewDidLoad() {
    
    this.slides.startAutoplay();
  }
  slideChanged() {

    this.slides.startAutoplay();
  }
  loadMap() {

    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        // center: { lat: -1.292066, lng: 36.821945 },
        zoom: 12,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scaleControl: false,
        // draggable: false,
        mapTypeControl: false,
        navigationControl: false,
        streetViewControl: false,

      };
      
     
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.nearbyPlace(latLng);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

   
  }

  /*--------------------Find Nearby Place------------------------*/


  nearbyPlace(latLng) {
    // this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      // location: { lat: -1.292066, lng: 36.821945 },
      location: latLng,
      radius: 10000,
      types: ['movie_theater']
    }, (results, status) => {
      this.callback(results, status);
    });

  }

  callback(results, status) {
    console.log(status);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        // this.createMarker(results[i]);
        var placeLoc = results[i].geometry.location;
        var name = results[i].name;
        var rating = results[i].rating;
        var address = results[i].vicinity;
        var image = {
          url: '../../../assets/icon/armchairpink.svg', // custom background image (marker pin)
          scaledSize: new google.maps.Size(15, 15)
        };
        this.markers = new google.maps.Marker({
          map: this.map,
          position: placeLoc,
          title: name,
          icon: image,
          rating: rating,
          address: address,
          // must use optimized false for CSS
          optimized: false,

        });



        infoWindow = new google.maps.InfoWindow();
        if (rating == undefined || rating == "") {
          this.bindInfoWindow(this.markers, this.map, infoWindow, "<b> Name : </b>" +
            this.markers.title + "<br>" + "<b> Address : </b>" + this.markers.address);

        } else if (address == undefined || address == "") {
          this.bindInfoWindow(this.markers, this.map, infoWindow, "<b> Name : </b>" +
            this.markers.title + "<br>" + "<b> Rating : </b>" + this.markers.rating);
        }
        else {

          this.bindInfoWindow(this.markers, this.map, infoWindow, "<b> Name : </b>" + this.markers.title + "<br>" + "<b> Rating : </b>" + this.markers.rating + "<br>" + "<b> Address : </b>" + this.markers.address);
        }

        // close info window when map is clicked
        google.maps.event.addListener(this.map, 'click', function (event) {
          if (currentInfoWindow) {
            currentInfoWindow.close();
          }
        });
      }
    }
  }
  bindInfoWindow(marker, map, infoWindows, name) {

    google.maps.event.addListener(marker, 'click', () => {

      this.ngZone.run(() => {
        //close all other infowindows
        if (currentInfoWindow && currentInfoWindow != infoWindows) {
          currentInfoWindow.close();
        }

        currentInfoWindow = infoWindows;

        infoWindows.setContent(name);
        infoWindows.open(map, marker);
      });
    });
  }
}