import { Component, OnInit } from '@angular/core';
import {Carousel} from './carousel/carousel.model';
import {CarouselComponent} from './carousel/carousel.component';

@Component({
  selector: 'locatinos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  carouselarray = [{id:1, titulo : "Caprice SS",  urlimg:"1.png" },
                  {id:2, titulo : "Fusion Titanium",  urlimg:"2.png" },
                  {id:3, titulo : "Hyundai Tucson GLS",  urlimg:"3.png"},
                  {id:4, titulo : "Hyundai Grandeur",  urlimg:"4.png"}
                ];

  images:string[] = ["1.png",
                      "2.png",
                      "3.png",
                      "4.png"];

  constructor() { }

  ngOnInit() {
  }

}
