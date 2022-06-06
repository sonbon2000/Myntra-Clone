import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss'],
})
export class SpecificationsComponent implements OnInit {
  @Input('data') product;
  public specifications = [];
  public images = [];
  public instructions = [];
  public wearing: string;

  constructor() {}

  ngOnInit(): void {
    this.wearing = this.product.size_fit;
    this.product.specifications.split('|').forEach((item) => {
      this.specifications.push(item.trim());
    });
    this.product.images.split('|').forEach((image) => {
      this.images.push(image.trim());
    });
    this.product.care_instructions.split('|').forEach((item) => {
      this.instructions.push(item.trim());
    });
  }
}
