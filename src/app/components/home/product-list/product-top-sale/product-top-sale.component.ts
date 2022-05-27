import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-top-sale',
  templateUrl: './product-top-sale.component.html',
  styleUrls: ['./product-top-sale.component.scss'],
})
export class ProductTopSaleComponent implements OnInit {
  @Input() productsTopSale;
  constructor() {}

  ngOnInit(): void {}
}
