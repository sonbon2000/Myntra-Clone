import { Injectable } from '@angular/core';
import products from '../../../assets/data/myntra-products';
@Injectable({
  providedIn: 'root',
})
export class MockService {
  menProducts = products.filter((item) => item.ideal_for == 'Men');
  womenProducts = products.filter((item) => item.ideal_for == 'Women');
  unisexProducts = products.filter((item) => item.ideal_for == 'Unisex');
  boysProducts = products.filter((item) => item.ideal_for == 'Boys');
  girlsProducts = products.filter((item) => item.ideal_for == 'Girls');
  constructor() {}

  getProductsByMen() {
    return this.menProducts;
  }

  getProductByWomen() {
    return this.womenProducts;
  }

  getProductByUnisex() {
    return this.unisexProducts;
  }

  getProductsByBoys() {
    return this.boysProducts;
  }

  getProductByGirls() {
    return this.girlsProducts;
  }
}
