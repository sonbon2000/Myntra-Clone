import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
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
    public cartService: CartService
  ) {}

  ngOnInit(): void {}

  onAddItem(prod) {
    if (this.authService.isLoggedIn()) {
      Swal.fire('Success', 'You have added item to the cart', 'success');
      this.cartService.addItem(prod);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error');
      this.router.navigateByUrl('/sign-in');
    }
  }
}
