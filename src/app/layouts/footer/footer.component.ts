import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public allGenders = new Set();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().forEach((product) => {
      this.allGenders.add(product.ideal_for);
    });
  }
}
