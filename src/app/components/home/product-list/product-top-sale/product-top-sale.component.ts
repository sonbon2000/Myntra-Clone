import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-top-sale',
  templateUrl: './product-top-sale.component.html',
  styleUrls: ['./product-top-sale.component.scss'],
})
export class ProductTopSaleComponent implements OnInit {
  @Input() productsTopSale;
  constructor(
    private router: Router,
    private authService: AuthService,
    public cartService: CartService,
    private wishListService: WishListService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  getPrice(price: string) {
    let splitArr = price.split('.');
    return splitArr[0];
  }

  onAddItem(prod) {
    if (this.authService.isLoggedIn()) {
      this.toastr.success('You have added item in the cart');
      this.cartService.addItem(prod);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error');
      this.router.navigateByUrl('/sign-in');
    }
  }

  onAddWishList(prod) {
    if (this.authService.isLoggedIn()) {
      this.toastr.success('You have added item in the wishlist');
      this.wishListService.addWishList(prod);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error');
      this.router.navigateByUrl('/sign-in');
    }
  }
}
