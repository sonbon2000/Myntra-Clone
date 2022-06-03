import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-wishlist',
  templateUrl: './product-wishlist.component.html',
  styleUrls: ['./product-wishlist.component.scss'],
})
export class ProductWishlistComponent implements OnInit {
  wishListArr = [];
  constructor(
    private spinner: NgxSpinnerService,
    private wishListService: WishListService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.wishListArr = this.wishListService.getWishList();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  onRemoveItem(wishList) {
    Swal.fire('Success', 'You have deleted item from the wishlist', 'success');
    this.wishListArr.splice(this.wishListArr.indexOf(wishList), 1);
  }

  addToCart(wishList) {
    Swal.fire('Success', 'You have add item to the cart', 'success');
    this.cartService.addItem(wishList);
    this.wishListArr.splice(this.wishListArr.indexOf(wishList), 1);
  }
}
