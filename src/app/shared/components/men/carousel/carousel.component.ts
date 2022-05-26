import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images = [
    '../../../.././../assets/images/men-1.jpg',
    '../../../.././../assets/images/men-2.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
