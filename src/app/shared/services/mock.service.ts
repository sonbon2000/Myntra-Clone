import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import products from '../../../assets/data/myntra-products';
import { Doc } from '../models/blog.model';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root',
})
export class MockService {
  blogsArr: Doc[] = [];
  constructor(private productService: ProductService) {}

  getAllProducts() {
    return products;
  }
}
