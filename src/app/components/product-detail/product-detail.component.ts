import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public relatedProducts: Product[] = [];
  public responsiveOptions;
  id: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
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
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.productService.getFakeByID(this.id).subscribe((data) => {
      this.product = this.productService.getProductById(this.id);
      this.relatedProducts = this.productService.getRelatedProducts(
        this.product
      );
      this.spinner.hide();
    });

    window.scroll(0, 0);
  }
}
