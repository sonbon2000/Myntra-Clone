import { Injectable } from '@angular/core';
import products from '../../../assets/data/myntra-products';
import { Doc } from '../models/blog.model';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root',
})
export class MockService {
  blogsArr: Doc[] = [];
  // setProducts: Product[]

  constructor(private productService: ProductService) {}

  getAllProducts() {
    return products;
  }

  getProductsByPage(x = 0, y = this.productService.limit) {
    return products.slice(x, y);
  }
  
  deleteProduct(index) {
    return products.splice(index, 1);
  }
}
