import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss'],
})
export class MenComponent implements OnInit {
  productsByMen: any[] = [];
  productsBestSeller = [];
  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.productsByMen = this.mockService.getProductsByMen();
    this.productsByMen.sort((a, b) => b.variant_price - a.variant_price);
    this.productsBestSeller = this.productsByMen.slice(0, 8);
  }
}
