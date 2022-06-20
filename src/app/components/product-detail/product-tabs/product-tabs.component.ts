import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss'],
})
export class ProductTabsComponent implements OnInit {
  @Input('data') product;

  public viewMode: string = 'specifications';

  constructor() {}

  ngOnInit(): void {}

  changeViewMode(value: string) {
    this.viewMode = value;
  }
}
