import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import products from '../../../assets/data/myntra-products';
@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return products.sort((a, b) => Number(a.product_id) - Number(b.product_id));
  }

  getProductById(id: string) {
    return products.find((item) => item.product_id == id);
  }

  getRelatedProducts(product) {
    return products.filter(
      (item) =>
        item.product_type == product.product_type &&
        item.product_id != product.product_id
    );
  }
}
