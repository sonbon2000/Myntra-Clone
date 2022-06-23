import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/models/product.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  cartArr: Product[] = [];

  constructor(
    public cartService: CartService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartArr = this.cartService.getCart();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getPrice(price: string) {
    let splitArr = price.split('.');
    return splitArr[0];
  }

  removeItem(prod: Product) {
    this.toastr.success('You have deleted your item from the cart');
    this.cartService.deleteItem(prod);
  }

  onCheckOut() {
    Swal.fire('Success', 'Process completed', 'success');
    this.cartService.getCartEmpty();
  }

  getTotalItem(cart) {
    return cart.inventory * cart.variant_price;
  }
}
