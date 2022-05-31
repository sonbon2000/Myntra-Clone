import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
  clientCount: number = 0;
  totalCategoriesCount: number = 0;
  countryCount: number = 0;
  happyRateCount: number = 0;

  clientCountStop: any = setInterval(() => {
    this.clientCount++;
    if (this.clientCount == 102) {
      clearInterval(this.clientCountStop);
    }
  }, 20);
  totalCategoriesCountStop: any = setInterval(() => {
    this.totalCategoriesCount++;
    if (this.totalCategoriesCount == 30) {
      clearInterval(this.totalCategoriesCountStop);
    }
  }, 20);
  countryCountStop: any = setInterval(() => {
    this.countryCount++;
    if (this.countryCount == 102) {
      clearInterval(this.countryCountStop);
    }
  }, 20);
  happyCountStop: any = setInterval(() => {
    this.happyRateCount++;
    if (this.happyRateCount == 98) {
      clearInterval(this.happyCountStop);
    }
  }, 20);

}
