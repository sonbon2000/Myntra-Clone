import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent implements OnInit {
  @Input('data') product;
  public images = [];
  public status: boolean;

  public responsiveOptions;

  constructor(
    public cartService: CartService,
    public wishListService: WishListService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.product.images.split('|').forEach((image) => {
      this.images.push(image.trim());
    });
    if (this.product.is_in_stock == 'In Stock') {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  onAddWishList(prod) {
    if (this.authService.isLoggedIn()) {
      this.wishListService.addWishList(prod);
    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }

  onAddProduct(prod) {
    if (this.authService.isLoggedIn()) {
      this.cartService.addItem(prod);
    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }
}
