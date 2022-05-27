import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productsByMen = [];
  menProductType = new Set();
  showDropDown: boolean = false;
  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.productsByMen = this.mockService.getProductsByMen();
    this.productsByMen.forEach((prod) => {
      if (prod.product_type) {
        this.menProductType.add(prod.product_type);
      }
    });
  }
}
