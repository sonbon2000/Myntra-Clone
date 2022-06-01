import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  clientCount: number = 0;
  totalCategoriesCount: number = 0;
  countryCount: number = 0;
  happyRateCount: number = 0;
  clientCountStop: any;
  totalCategoriesCountStop: any;
  countryCountStop: any;
  happyCountStop: any;
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.clientCountStop = setInterval(() => {
        this.clientCount++;
        if (this.clientCount == 102) {
          clearInterval(this.clientCountStop);
        }
      }, 25);
      this.totalCategoriesCountStop = setInterval(() => {
        this.totalCategoriesCount++;
        if (this.totalCategoriesCount == 30) {
          clearInterval(this.totalCategoriesCountStop);
        }
      }, 25);
      this.countryCountStop = setInterval(() => {
        this.countryCount++;
        if (this.countryCount == 102) {
          clearInterval(this.countryCountStop);
        }
      }, 25);

      this.happyCountStop = setInterval(() => {
        this.happyRateCount++;
        if (this.happyRateCount == 98) {
          clearInterval(this.happyCountStop);
        }
      }, 25);
    }, 2000);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
