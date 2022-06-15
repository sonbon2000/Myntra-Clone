import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsAll = [];
  productsBestSeller: Product[] = [];
  productsNewArrival: Product[] = [];
  productsTopSale: Product[] = [];
  viewMode: string = 'newArrival';
  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.productService.getFake().subscribe((data) => {
      this.productsAll = this.productService.getAllProducts();
      this.productsAll.sort(
        (a, b) => Date.parse(a.crawl_timestamp) - Date.parse(b.crawl_timestamp)
      );
      this.productsNewArrival = this.productsAll.slice(0, 8);
      this.productsAll.sort((a, b) => b.variant_price - a.variant_price);
      this.productsTopSale = this.productsAll.slice(0, 8);
      this.spinner.hide();
    });
  }

  changeViewMode(viewMode: string) {
    this.viewMode = viewMode;
  }
}
