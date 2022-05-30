import { Product } from './shared/models/product.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { ProductBestSellComponent } from './components/home/product-list/product-best-sell/product-best-sell.component';
import { ProductnewArrivalComponent } from './components/home/product-list/productnew-arrival/productnew-arrival.component';
import { ProductTopSaleComponent } from './components/home/product-list/product-top-sale/product-top-sale.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { InstagramComponent } from './components/home/instagram/instagram.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ProductListComponent,
    ProductBestSellComponent,
    ProductnewArrivalComponent,
    ProductTopSaleComponent,
    CategoriesComponent,
    InstagramComponent,
    SummaryPipe,
    AboutComponent,
    HomeComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
