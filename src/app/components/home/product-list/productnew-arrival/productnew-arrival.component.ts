import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productnew-arrival',
  templateUrl: './productnew-arrival.component.html',
  styleUrls: ['./productnew-arrival.component.scss'],
})
export class ProductnewArrivalComponent implements OnInit {
  @Input() productsNewArrival;
  constructor(
    private authService: AuthService,
    private router: Router,
    public cartService: CartService,
    public wishListService: WishListService
  ) {}

  ngOnInit(): void {}

  onAddProduct(prod) {
    if (this.authService.isLoggedIn()) {
      Swal.fire('Success', 'You have added item to the cart', 'success');
      this.cartService.addItem(prod);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error');
      this.router.navigateByUrl('/sign-in');
    }
  }

  onAddWishList(prod) {
    if (this.authService.isLoggedIn()) {
      Swal.fire('Success', 'You have added item to the wishlist', 'success');
      this.wishListService.addWishList(prod);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error');
      this.router.navigateByUrl('/sign-in');
    }
  }
}
