import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBestSellComponent } from './product-best-sell.component';

describe('ProductBestSellComponent', () => {
  let component: ProductBestSellComponent;
  let fixture: ComponentFixture<ProductBestSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBestSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBestSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
