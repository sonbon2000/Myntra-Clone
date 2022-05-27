import { Injectable } from '@angular/core';
import products from '../../../assets/data/myntra-products';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor(private productService: ProductService) {}

  getAllProducts() {
    return products;
  }
}
