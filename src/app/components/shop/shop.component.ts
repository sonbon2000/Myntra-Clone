import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  public products: Product[] = [];
  public filteredProducts: Product[] = [];
  @ViewChild('search') searchInput: ElementRef;

  public total_pages = [];
  public currentPage: number = 1;
  public limit: number;

  public allGenders = new Set();
  public allProductTypes = new Set();
  public allColors = new Set();
  public allPrices = new Set();
  public allBrands = new Set();

  constructor(
    private mockService: MockService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let allProducts = this.mockService.getAllProducts();
    this.limit = this.productService.limit;
    this.filteredProducts = this.products = this.mockService.getProductsByPage(
      0,
      this.limit
    );
    this.total_pages = new Array(
      Math.ceil(allProducts.length / this.limit)
    )
      .fill(undefined)
      .map((item, index) => index + 1);
    allProducts.forEach((product) => {
      this.allGenders.add(product.ideal_for);
      this.allProductTypes.add(product.product_type);
      this.allColors.add(product.dominant_color);
      this.allPrices.add(product.variant_price);
      this.allBrands.add(product.brand);
    });
    // console.log(this.allColors);
  }

  goToPage(page) {
    this.filteredProducts = this.products = this.mockService.getProductsByPage(
      0 + this.limit * (page - 1),
      this.limit + this.limit * (page - 1)
    );
    this.searchInput.nativeElement.value = ''
    this.currentPage = page;
    // console.log(this.currentPage);
  }

  searchProducts(value) {
    this.filteredProducts = this.products.filter((item) =>
      item.title.toLowerCase().includes(value.trim().toLowerCase())
    );
  }

  
}
