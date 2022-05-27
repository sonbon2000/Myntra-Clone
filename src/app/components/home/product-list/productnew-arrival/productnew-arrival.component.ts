import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productnew-arrival',
  templateUrl: './productnew-arrival.component.html',
  styleUrls: ['./productnew-arrival.component.scss'],
})
export class ProductnewArrivalComponent implements OnInit {
  @Input() productsBestSeller;
  @Input() productsNewArrival;
  constructor() {}

  ngOnInit(): void {}
}
