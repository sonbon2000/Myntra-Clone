import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product.model';
import { WishListService } from './wish-list.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  public wishListExisted: boolean;

  constructor(
    private toastr: ToastrService,
  ) {
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  getCart() {
    return this.cart;
  }

  getCartEmpty() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
    return this.cart;
  }

  addItem(item) {
    let index = this.cart.findIndex((c) => c.product_id === item.product_id);
    if (index == -1) {
      item.inventory = 1;
      this.toastr.success('Added item to the cart', 'Success', {
        timeOut: 3000,
      });
      this.cart.push(item);
    } else {
      this.cart[index].inventory++;
    }

    // if (this.wishListService.getWishList().includes(item)) {
    //   this.toastr.warning('Item is currently on the Wishlist!', 'Warning', {
    //     timeOut: 3000,
    //   });
    //   this.wishListExisted = true
    // } else {
    //   this.wishListExisted = false

    //   if (!this.cart.includes(item)) {
    //     this.cart.push(item);
    //     this.toastr.success('Added item to the Wishlist!', 'Success', {
    //       timeOut: 3000,
    //     });
    //   } else {
    //     this.toastr.error('Item has existed in the Wishlist!', 'Error', {
    //       timeOut: 3000,
    //     });
    //   }
    // }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeItem(prod) {
    let index = this.cart.findIndex((c) => c.product_id === prod.product_id);
    if (index !== -1) {
      this.cart[index].inventory--;
      if (this.cart[index].inventory == 0) {
        this.cart.splice(index, 1);
      }
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteItem(prod) {
    let index = this.cart.findIndex((c) => c.product_id === prod.product_id);
    this.cart[index].inventory == 0;
    this.cart.splice(index, 1);

    this.toastr.success('Deleted item from the Cart', 'Success', {
      timeOut: 3000,
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCartQuantity() {
    let result = this.cart.reduce((accu, p) => {
      return accu + p.inventory;
    }, 0);
    return result;
  }

  getItemQuantity(prod) {
    let index = this.cart.findIndex((c) => c.product_id === prod.product_id);
    if (index !== -1) {
      return this.cart[index].inventory;
    }
    return 0;
  }

  getCartTotalPrice() {
    return this.cart.reduce((accu, p) => {
      return accu + p.inventory * p.variant_price;
    }, 0);
  }
}
