import { Component, OnInit } from '@angular/core';
import { Mock } from 'protractor/built/driverProviders';
import { Product } from 'src/app/shared/models/product.model';
import { MockService } from 'src/app/shared/services/mock.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  allGenders = new Set();
  allProductTypes = new Set();
  allColors = new Set();
  allPrices = new Set();
  allBrands = new Set();

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.allProducts = this.mockService.getAllProducts();
    // console.log(this.allProducts);
    this.allProducts.forEach((product) => {
      this.allGenders.add(product.ideal_for);
      this.allProductTypes.add(product.product_type);
      this.allColors.add(product.dominant_color);
      this.allPrices.add(product.variant_price);
      this.allBrands.add(product.brand);
    });
  }
}
