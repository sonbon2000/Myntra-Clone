import { AuthService } from 'src/app/shared/services/auth.service';
import { WishListService } from './../../shared/services/wish-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public relatedProducts: Product[] = [];
  public responsiveOptions;
  id;

  constructor(
    private mockService: MockService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    // let id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.product = this.mockService.getProductById(this.id);
    this.relatedProducts = this.mockService.getRelatedProducts(this.product);

    // Spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    window.scroll(0, 0);
  }
}
