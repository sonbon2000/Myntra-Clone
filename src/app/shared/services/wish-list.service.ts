import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private wishList: any[] = [];
  constructor(private toastr: ToastrService) {
    let savedWish = localStorage.getItem('wish');
    if (savedWish) {
      this.wishList = JSON.parse(savedWish);
    }
  }

  getWishList() {
    return this.wishList;
  }

  addWishList(item) {
    // if (this.cartService.getCart().includes(item)) {
    //   this.toastr.warning('Item has existed in the Cart!', 'Warning', {
    //     timeOut: 3000,
    //   })
    // } else {
    //   if (!this.wishList.includes(item)) {
    //     this.wishList.push(item);
    //     this.toastr.success('Added item to the Wishlist!', 'Success', {
    //       timeOut: 3000,
    //     });
    //   } else {
    //     this.toastr.error('Item has existed in the Wishlist!', 'Error', {
    //       timeOut: 3000,
    //     });
    //   }
    // }

    let index = this.wishList.findIndex(
      (c) => c.product_id === item.product_id
    );
    if (index == -1) {
      this.wishList.push(item);
      this.toastr.success('Added item to the Wishlist!', 'Success', {
        timeOut: 3000,
      });
    } else {
      this.toastr.error('Item has existed in the Wishlist!', 'Error', {
        timeOut: 3000,
      });
    }

    localStorage.setItem('wish', JSON.stringify(this.wishList));
  }

  deleteItem(prod) {
    let index = this.wishList.findIndex(
      (c) => c.product_id === prod.product_id
    );
    this.wishList.splice(index, 1);

    this.toastr.success('Deleted item from the Wishlist!', 'Success', {
      timeOut: 3000,
    });
    localStorage.setItem('wish', JSON.stringify(this.wishList));
  }

  getWishListQuantity() {
    return this.wishList.length;
  }
}
