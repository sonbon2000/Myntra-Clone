import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent implements OnInit, OnChanges {
  @Input('data') product;
  public images = [];
  public status: boolean;

  @ViewChild('addCartBtn') addCartBtn: ElementRef;

  constructor(
    public cartService: CartService,
    public wishListService: WishListService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnChanges() {
    if (this.product) {
      this.product.images.split('|').forEach((image) => {
        this.images.push(image.trim());
      });
      if (this.product.is_in_stock == 'In Stock') {
        this.status = true;
      } else {
        this.status = false;
      }
    }
  }

  ngOnInit(): void {}

  onAddWishList(prod) {
    if (this.authService.isLoggedIn()) {
      this.wishListService.addWishList(prod);
      if (this.wishListService.getWishList().includes(prod)) {
        console.log(this.addCartBtn);
      }
    } else {
      Swal.fire('Oops', 'You have to login first', 'error').then((results) => {
        if (results.isConfirmed) {
          this.router.navigate(['/sign-in']);
        }
      });
    }
  }

  onAddProduct(prod) {
    if (this.authService.isLoggedIn()) {
      this.cartService.addItem(prod);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error').then((results) => {
        if (results.isConfirmed) {
          this.router.navigate(['/sign-in']);
        }
      });
    }
  }
}
