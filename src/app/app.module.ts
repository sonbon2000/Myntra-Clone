import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { ProductnewArrivalComponent } from './components/home/product-list/productnew-arrival/productnew-arrival.component';
import { ProductTopSaleComponent } from './components/home/product-list/product-top-sale/product-top-sale.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { InstagramComponent } from './components/home/instagram/instagram.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ProductListComponent,
    ProductnewArrivalComponent,
    ProductTopSaleComponent,
    CategoriesComponent,
    InstagramComponent,
    SummaryPipe,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    BlogDetailComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
