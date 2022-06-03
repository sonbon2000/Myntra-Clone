import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public allGenders = new Set();

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.mockService.getAllProducts().forEach((product) => {
      this.allGenders.add(product.ideal_for);
    });
  }
}
