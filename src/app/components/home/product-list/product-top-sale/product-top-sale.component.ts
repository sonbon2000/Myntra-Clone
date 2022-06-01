import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-product-top-sale',
  templateUrl: './product-top-sale.component.html',
  styleUrls: ['./product-top-sale.component.scss'],
})
export class ProductTopSaleComponent implements OnInit {
  @Input() productsTopSale;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onConfirm() {
    if (!this.authService.isLoggedIn()) {
      alert('Please sign in to buy the product');
      this.router.navigateByUrl('/sign-in');
    }
  }
}
