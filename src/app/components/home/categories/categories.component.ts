import { Component, OnInit } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';
import { format } from 'date-fns';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  config: CountdownConfig = {
    leftTime: 60 * 60 * 24 * 365 * (2050 - 1970),
    format: ': HH : mm : ss',
    formatDate: ({ date, formatStr }) => format(date, formatStr),
  };
  constructor() {}

  ngOnInit(): void {}
}
