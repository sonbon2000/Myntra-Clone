import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public carouselImages = [
    '../../../.././../assets/images/carousel/men-1.jpg',
    '../../../.././../assets/images/carousel/men-2.jpg',
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplaySpeed: 1500,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 800,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
