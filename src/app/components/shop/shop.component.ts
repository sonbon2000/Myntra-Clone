import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/models/product.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { MockService } from 'src/app/shared/services/mock.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search') searchInput: ElementRef;
  public allProducts: Product[] = [];
  public filteredProducts: Product[] = [];
  public total_pages: number;
  public paginationLength: number;
  public currentPage: number = 1;
  public limit: number;
  public allGenders = new Set();
  public allProductTypes = new Set();
  public allColors = new Set();
  public allPrices = new Set();
  public allBrands = new Set();

  constructor(
    private mockService: MockService,
    private productService: ProductService,
    public cartService: CartService,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private wishListService: WishListService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    function backToTop() {
      window.scroll({ top: 50, left: 0, behavior: 'smooth' });
    }
    backToTop();
    this.limit = this.productService.limit;
    this.filteredProducts = this.allProducts =
      this.mockService.getAllProducts();
    this.paginationLength = this.filteredProducts.length;
    this.total_pages = Math.ceil(this.paginationLength / this.limit);

    this.allProducts.forEach((product) => {
      this.allGenders.add(product.ideal_for);
      this.allProductTypes.add(product.product_type);
      this.allColors.add(product.dominant_color);
      this.allPrices.add(product.variant_price);
      this.allBrands.add(product.brand);
    });

    // Spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  searchProducts(value: string) {
    this.filteredProducts = this.allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.trim().toLowerCase())
    );
    this.paginationLength = this.filteredProducts.length;
    this.total_pages = Math.ceil(this.paginationLength / this.limit);
    this.currentPage = 1;
  }

  getProductByCategory(category, option) {
    if (category == 'variant_price') {
      let range = option.target.innerText;
      if (!range.includes('-')) {
        this.filteredProducts = this.allProducts.filter(
          (item) => item[category] >= Number(range.replace('+', ''))
        );
      } else {
        let arrayRage = range.replaceAll('₹', '').split('-');
        this.filteredProducts = this.allProducts.filter(
          (item) =>
            item[category] >= Number(arrayRage[0]) &&
            item[category] < Number(arrayRage[1])
        );
      }
    } else {
      this.filteredProducts = this.allProducts.filter(
        (item) => item[category] == option
      );
    }
    this.paginationLength = this.filteredProducts.length;
    this.total_pages = Math.ceil(this.paginationLength / this.limit);
    this.currentPage = 1;
    this.backToTop();
  }

  sortProducts(event) {
    if (event.target.value == 'low-to-high') {
      this.filteredProducts.sort(
        (a, b) => Number(a.variant_price) - Number(b.variant_price)
      );
    } else {
      this.filteredProducts.sort(
        (a, b) => Number(b.variant_price) - Number(a.variant_price)
      );
    }
    this.currentPage = 1;

    // Spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  backToTop() {
    this.searchInput.nativeElement.value = '';
    window.scroll({ top: 300, left: 0, behavior: 'smooth' });

    // Spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  onAddWishList(product: Product) {
    if (this.authService.isLoggedIn()) {
      this.toastr.success('You have added item in the wishlist');
      this.wishListService.addWishList(product);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error');
      this.router.navigateByUrl('/sign-in');
    }
  }

  onAddProduct(product: Product) {
    if (this.authService.isLoggedIn()) {
      this.toastr.success('You have added item in the cart');
      this.cartService.addItem(product);
    } else {
      Swal.fire('Oops', 'You have to login first', 'error');
      this.router.navigateByUrl('/sign-in');
    }
  }
}
