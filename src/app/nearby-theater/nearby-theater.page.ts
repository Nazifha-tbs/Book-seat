import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearby-theater',
  templateUrl: './nearby-theater.page.html',
  styleUrls: ['./nearby-theater.page.scss'],
})
export class NearbyTheaterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
    value: "2 - 5 kms"
  },
    {
      value: "2 - 5 kms"
    },
    {
      value: "2 - 5 kms"
    },
    {
      value: "2 - 5 kms"
    },
    {
      value: "2 - 5 kms"
    },
    {
      value: "2 - 5 kms"
    }
]
}
