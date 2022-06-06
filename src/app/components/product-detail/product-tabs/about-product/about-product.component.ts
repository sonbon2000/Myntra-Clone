import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss'],
})
export class AboutProductComponent implements OnInit {
  @Input('data') product;

  constructor() {}

  ngOnInit(): void {}
}
