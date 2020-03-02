import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DataServiceService } from '../services/data-service.service';
declare var google;

let infoWindow: any;
let currentInfoWindow;
let radiusVal;
let deviceWidth;
let equatorLength = 40075004;
let widthInPixels = deviceWidth;
let metersPerPixel = equatorLength / 256;
let zoomLevel;
@Component({
  selector: 'app-nearby-theater',
  templateUrl: './nearby-theater.page.html',
  styleUrls: ['./nearby-theater.page.scss'],
})
export class NearbyTheaterPage implements OnInit {


  markers: any;
  list: any[];
  listData: any;
  distance: any[] =
    [{
      min: 2,
      max: 5,
      value: "2 - 5 kms",
      active: false
    },
    {
      min: 3,
      max: 4,
      value: "3 - 4 kms",
      active: false
    },
    {
      min: 3,
      max: 6,
      value: "3 - 6 kms",
      active: false
    },
    {
      min: 4,
      max: 8,
      value: "4 - 8 kms",
      active: false
    },
    {
      min: 5,
      max: 12,
      value: "5 - 12 kms",
      active: false
    }]
  @ViewChild('map', { static: false }) mapElement;
  map: any;
  constructor(private ngZone: NgZone, private el: ElementRef, private platform: Platform, private geolocation: Geolocation, private service: DataServiceService) {
    this.platform.ready().then(() => {
      this.loadMap();
      console.log(zoomLevel);
      deviceWidth = platform.width();
      widthInPixels = deviceWidth;
    });


    this.service.getShowData().subscribe(dataResult => {
      this.listData = dataResult;
      this.list = [];
      for (let i = 0; i < this.listData.data.length; i++) {
        let x = Math.floor(this.listData.data[i].distance);
        for (let k = this.distance[0].min; k < this.distance[0].max + 1; k++) {
          if (k == x) {
            this.list.push({
              img: this.service.url + this.listData.data[i].img,
              name: this.listData.data[i].theaterName,
              city: this.listData.data[i].location,
              rating: this.listData.data[i].star
            });
          }

        }

      }
    })
  }

  /*-------------------- Load map ------------------------*/
  loadMap() {

    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      console.log(resp.coords);
      let mapOptions = {
        center: latLng,
        // center: { lat: -1.292066, lng: 36.821945 },
        zoom: zoomLevel,
        scrollwheel: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scaleControl: false,
        // draggable: false,
        mapTypeControl: false,
        navigationControl: false,
        streetViewControl: false,
        animatedZoom : true
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.nearbyPlace(latLng);
      // this.markerCreation(latLng);


    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  /*--------------------Find Nearby Place------------------------*/
//   markerCreation(latLng)
// {
//     var colorArray = ["#ff0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
//   var marker;
//   var angle = 0;
//   var icon = {
//     path: google.maps.SymbolPath.CIRCLE,
//     scale: 4,
//     fillColor: "#5edbb2", //<-- I want to change this after creation
//     fillOpacity: 1,
//     strokeColor: '#5edbb2',
//     strokeWeight: 1,
//     anchor: new google.maps.Point(0, 5),
//     rotation: 0 //<-- I want to change this after creation
//   };
//     var colorArray = ["#5edbb2", "#2EC492", "#5edbb2", "#2EC492", "#5edbb2", "#2EC492"];
//   var cnt = 0; 

  
//   var ptMarker = new google.maps.Marker({
//     position: latLng,
//     map: this.map,
//     icon: {
//       url: '../../../assets/icon/armchairpink.svg',
//       fillColor: '#E81667',
//       size: new google.maps.Size(7, 7),
//       anchor: new google.maps.Point(4, 4)
//     }
//   });
//   marker = new google.maps.Marker({
//     position: latLng,
//     icon: icon,
//     optimized : false
//   });
//   marker.setMap(this.map);
//   var circleMarker = new google.maps.Marker({
//     position: latLng ,
//     map: this.map,
//     icon: {
//       path: google.maps.SymbolPath.CIRCLE,
//       scale: 24,
//       strokeWeight: 2,
//       strokeColor: '#5edbb2',
//       fillColor: '#5edbb2',
//       fillOpacity: 0.001,
//       anchor: new google.maps.Point(0, 0)
//     }
//   });
//   setInterval(function () {
//     angle += 30;
//     cnt++;
//     icon.rotation = angle;
//     icon.fillColor = colorArray[cnt % colorArray.length]
//     marker.setIcon(icon);
//   }, 1000);

// }
  nearbyPlace(latLng) {
    // this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      // location: { lat: -1.292066, lng: 36.821945 },
      location: latLng,

      radius: radiusVal,
      types: ['movie_theater']
    }, (results, status) => {
      this.callback(results, status);
    });

  }

  callback(results, status) {
let markerStyle;
    let markerBack;
    if (status === google.maps.places.PlacesServiceStatus.OK) {

      for (let i = 0; i < results.length; i++) {
        // this.createMarker(results[i]);
        let placeLoc = results[i].geometry.location;
        let name = results[i].name;
        let rating = results[i].rating;
        let address = results[i].vicinity;
        let icon = {
          // path: google.maps.SymbolPath.CIRCLE,
          // strokeColor: '#5edbb2',
          // strokeWeight : 12,
          // fillColor: '#2EC492',
          // fillOpacity : 1,
          // scale: 15,
          // origin: new google.maps.Point(96, 0),
          url: '../../../assets/icon/armchairpink.svg', // custom background image (marker pin)
          scaledSize: new google.maps.Size(18, 18),
          
          anchor: new google.maps.Point(9, 37),
        };
       
    
     
       let iconStyle ={
        //  strokeColor: '#5edbb2',
        //  path: google.maps.SymbolPath.CIRCLE,
         url: '../../../assets/icon/pulse.gif',
        //  strokeWeight : 5,
        //  fillColor: "#2EC492",
        //  fillOpacity : 1,
      
        //  origin: new google.maps.Point(0, -29),
         scaledSize: new google.maps.Size(55,55),

       }
        markerStyle = new google.maps.Marker ({
          map: this.map,
          position: placeLoc,
          title: name,
          icon: iconStyle,
          rating: rating,
          address: address,
         
          // must use optimized false for CSS
          optimized: false
        })
        this.markers = new google.maps.Marker({
          map: this.map,
          position: placeLoc,
          title: name,
          icon: icon,   
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
  /*--------------------Find Nearby Place ENDS------------------------*/
  ngOnInit() {
    zoomLevel = 13;
    radiusVal = 10000;
    this.distance[0].active = true;

  }
  selected(val) {
    let min = val.min;
    let max = val.max;

    let bound = this.map.getBounds();
    console.log(bound);
    const px = 256;
    radiusVal = max * 1000 / 2;
    let meter = max * 1000/2;
    this.geolocation.getCurrentPosition().then((resp) => {
      let latitude = resp.coords.latitude;
    console.log(latitude);
      let zoom = Math.log2(156543.03392 / px * Math.cos(latitude * Math.PI / 180) * 700 / max);
     
      // let zoom = Math.log2(metersPerPixel * Math.cos(latitude * Math.PI / 180) * 256 / radiusVal);
      // console.log(zoom);
      zoomLevel = zoom;
      this.map.setZoom(zoomLevel);
      // this.loadMap();
  
      console.log(zoomLevel);
    });


    for (let i = 0; i < this.distance.length; i++) {
      this.distance[i].active = false;
    }
    this.list = [];

    for (let j = 0; j < this.listData.data.length; j++) {
      let x = Math.floor(this.listData.data[j].distance);
      for (let k = val.min; k < val.max + 1; k++) {
        if (k == x) {
          this.list.push({
            img: this.service.url + this.listData.data[j].img,
            name: this.listData.data[j].theaterName,
            city: this.listData.data[j].location,
            rating: this.listData.data[j].star
          })
        }
      }
    }
    val.active = true;
  }
  

}
  

  

 

