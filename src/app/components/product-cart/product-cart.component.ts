import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/shared/services/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  cartArr = [];
  constructor(
    public cartService: CartService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.cartArr = this.cartService.getCart();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  removeItem(prod) {
    Swal.fire('Success', 'You have deleted item from the cart', 'success');
    this.cartArr.splice(this.cartArr.indexOf(prod), 1);
  }

  onCheckOut() {
    Swal.fire('Success', 'Process completed', 'success');
    this.cartService.getCartEmpty();
  }

  getTotalItem(cart) {
    return cart.inventory * cart.variant_price;
  }
}
