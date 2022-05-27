import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/services/mock.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsAll: any[] = [];
  productsBestSeller = [];
  productsNewArrival = [];
  productsTopSale = [];
  viewMode: string = 'bestSeller';
  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.productsAll = this.mockService.getAllProducts();
    this.productsAll.sort((a, b) => b.is_in_stock - a.is_in_stock);
    this.productsBestSeller = this.productsAll.slice(0, 8);
    this.productsAll.sort(
      (a, b) => Date.parse(a.crawl_timestamp) - Date.parse(b.crawl_timestamp)
    );
    this.productsNewArrival = this.productsAll.slice(0, 8);
    this.productsAll.sort((a, b) => b.variant_price - a.variant_price);
    this.productsTopSale = this.productsAll.slice(0, 8);
  }

  changeViewMode(viewMode: string) {
    this.viewMode = viewMode;
  }
}
