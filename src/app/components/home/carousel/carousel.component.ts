import { Component, OnInit } from '@angular/core';

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

  pauseOnHover = false;
  pauseOnFocus = false;

  constructor() {}

  ngOnInit(): void {}
}
