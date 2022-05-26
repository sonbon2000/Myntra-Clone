import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsByMen: any[] = [];
  productsBestSeller = [];
  
  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.productsByMen = this.mockService.getProductsByMen();
    this.productsByMen.sort((a, b) => b.variant_price - a.variant_price);
    this.productsBestSeller = this.productsByMen.slice(0, 8);
  }
}
