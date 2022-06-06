import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-product-wishlist',
  templateUrl: './product-wishlist.component.html',
  styleUrls: ['./product-wishlist.component.scss'],
})
export class ProductWishlistComponent implements OnInit {
  wishListArr: Product[] = [];
  constructor(
    private spinner: NgxSpinnerService,
    public wishListService: WishListService,
    public cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.wishListArr = this.wishListService.getWishList();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getPrice(price: string) {
    let splitArr = price.split('.');
    return splitArr[0];
  }

  onRemoveItem(wishList: Product) {
    this.toastr.success('You have deleted item from the wish list');
    this.wishListService.removeWishList(wishList);
  }

  addToCart(wishList: Product) {
    this.toastr.success('You have moved item to the cart');
    this.wishListService.removeWishList(wishList);
    this.cartService.addItem(wishList);
  }
}
