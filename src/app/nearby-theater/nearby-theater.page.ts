import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-nearby-theater',
  templateUrl: './nearby-theater.page.html',
  styleUrls: ['./nearby-theater.page.scss'],
})
export class NearbyTheaterPage implements OnInit {

  constructor() { }

  
  list : any [] =[{
    img: "../../../assets/img/theater1.png",
    name: "Arasan Cinemas A/ C 2K Dolby",
    city: "Coimbatore",
    rating: "5 star"
  },
    {
      img: "../../../assets/img/theater2.png",
      name: "Karpagam theatres - 4K",
      city: "Coimbatore",
      rating: "5 star"
    },
    {
      img: "../../../assets/img/theater3.png",
      name: "KG theatres - 4K",
      city: "Coimbatore",
      rating: "5 star"
    }, {
      img: "../../../assets/img/theater1.png",
      name: "Arasan Cinemas A/ C 2K Dolby",
      city: "Coimbatore",
      rating: "5 star"
    },
    {
      img: "../../../assets/img/theater2.png",
      name: "Karpagam theatres - 4K",
      city: "Coimbatore",
      rating: "5 star"
    },
    {
      img: "../../../assets/img/theater3.png",
      name: "KG theatres - 4K",
      city: "Coimbatore",
      rating: "5 star"
    },
    {
      img: "../../../assets/img/theater1.png",
      name: "Arasan Cinemas A/ C 2K Dolby",
      city: "Coimbatore",
      rating: "5 star"
    },
    {
      img: "../../../assets/img/theater2.png",
      name: "Karpagam theatres - 4K",
      city: "Coimbatore",
      rating: "5 star"
    },
    {
      img: "../../../assets/img/theater3.png",
      name: "KG theatres - 4K",
      city: "Coimbatore",
      rating: "5 star"
    }
]
  distance : any [] =[{
    value: "2 - 5 kms",
    active : false
  },
    {
      value: "3 - 4 kms",
      active: false
    },
    {
      value: "2 - 3 kms",
      active: false
    },
    {
      value: "5 - 8ms",
      active: false
    },
    {
      value: "4 - 6 kms",
      active: false
    },
    {
      value: "3 - 6 kms",
      active: false
    }
]
  ngOnInit() {
    this.distance[0].active = true;

  }
  selected(val){
   
    for(var i = 0;i < this.distance.length;i++)
    {
      this.distance[i].active = false;
    }
    val.active = true;
  }
}
