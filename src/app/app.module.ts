import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenComponent } from './shared/components/men/men.component';
import { CarouselComponent } from './shared/components/men/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './shared/components/men/product-list/product-list.component';
import { ProductBestSellComponent } from './shared/components/men/product-list/product-best-sell/product-best-sell.component';
import { ProductnewArrivalComponent } from './shared/components/men/product-list/productnew-arrival/productnew-arrival.component';
import { ProductTopSaleComponent } from './shared/components/men/product-list/product-top-sale/product-top-sale.component';
import { CategoriesComponent } from './shared/components/men/categories/categories.component';
import { InstagramComponent } from './shared/components/men/instagram/instagram.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { AboutComponent } from './shared/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenComponent,
    CarouselComponent,
    ProductListComponent,
    ProductBestSellComponent,
    ProductnewArrivalComponent,
    ProductTopSaleComponent,
    CategoriesComponent,
    InstagramComponent,
    SummaryPipe,
    AboutComponent,
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
