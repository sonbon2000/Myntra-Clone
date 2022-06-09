import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  constructor() {
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

  addItem(prod) {
    let index = this.cart.findIndex((c) => c.product_id === prod.product_id);
    if (index == -1) {
      prod.inventory = 1;
      this.cart.push(prod);
    } else {
      this.cart[index].inventory++;
    }

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
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCartQuantity() {
    return this.cart.reduce((accu, p) => {
      return accu + p.inventory;
    }, 0);
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
