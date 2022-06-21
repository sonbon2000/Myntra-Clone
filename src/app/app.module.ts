import { ShopComponent } from './components/shop/shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule as CarouSlider } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { ProductTopSaleComponent } from './components/home/product-list/product-top-sale/product-top-sale.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { InstagramComponent } from './components/home/instagram/instagram.component';
import { InterleavedBannerComponent } from './components/home/interleaved-banner/interleaved-banner.component';
import { NewTrendComponent } from './components/home/new-trend/new-trend.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductWishlistComponent } from './components/product-wishlist/product-wishlist.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductTabsComponent } from './components/product-detail/product-tabs/product-tabs.component';
import { RelatedProductsComponent } from './components/product-detail/related-products/related-products.component';
import { ProductInformationComponent } from './components/product-detail/product-information/product-information.component';
import { AboutBrandComponent } from './components/product-detail/product-tabs/about-brand/about-brand.component';
import { AboutProductComponent } from './components/product-detail/product-tabs/about-product/about-product.component';
import { ReviewsComponent } from './components/product-detail/product-tabs/reviews/reviews.component';
import { SpecificationsComponent } from './components/product-detail/product-tabs/specifications/specifications.component';
import { ProductNewArrivalComponent } from './components/home/product-list/product-new-arrival/product-new-arrival.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ProductListComponent,
    ProductTopSaleComponent,
    CategoriesComponent,
    InstagramComponent,
    SummaryPipe,
    AboutComponent,
    HomeComponent,
    InterleavedBannerComponent,
    BlogComponent,
    ContactComponent,
    BlogDetailComponent,
    ShopComponent,
    SignInComponent,
    MyProfileComponent,
    NoAccessComponent,
    SignUpComponent,
    NewTrendComponent,
    ProductCartComponent,
    ProductWishlistComponent,
    ProductDetailComponent,
    ProductTabsComponent,
    RelatedProductsComponent,
    ProductInformationComponent,
    AboutBrandComponent,
    AboutProductComponent,
    ReviewsComponent,
    SpecificationsComponent,
    ProductNewArrivalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
    NgxPaginationModule,
    CarouselModule,
    CarouSlider,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
