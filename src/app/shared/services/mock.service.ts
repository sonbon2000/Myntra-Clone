import { Injectable } from '@angular/core';
import MYNTRA_PRODUCTS from 'src/assets/data/myntra-products';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  public allProducts: Product[] = MYNTRA_PRODUCTS;

  constructor() {}

  getAllProducts(): Product[] {
    return this.allProducts;
  }
}
