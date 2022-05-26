import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-best-sell',
  templateUrl: './product-best-sell.component.html',
  styleUrls: ['./product-best-sell.component.scss'],
})
export class ProductBestSellComponent implements OnInit {
  @Input() productsBestSeller;
  constructor() {}

  ngOnInit(): void {}
}
