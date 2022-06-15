import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allProducts: Product[] = [];
  filterProducts: Product[] = [];
  page: number = 1;

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.allProducts = this.filterProducts =
      this.productService.getAllProducts();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
  getPrice(price: string) {
    let splitArr = price.split('.');
    return splitArr[0];
  }

  onSearchItem(value: string) {
    this.filterProducts = this.allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.trim().toLowerCase())
    );
  }

  onDelete(prod: Product) {
    this.toastr.success('You have deleted your item from the page');
    const index = this.filterProducts.indexOf(prod);
    this.filterProducts.splice(index, 1);
  }

  backToTop() {
    window.scroll({ top: 50, left: 0, behavior: 'smooth' });
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
