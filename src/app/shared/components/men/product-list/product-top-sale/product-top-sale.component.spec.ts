import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopSaleComponent } from './product-top-sale.component';

describe('ProductTopSaleComponent', () => {
  let component: ProductTopSaleComponent;
  let fixture: ComponentFixture<ProductTopSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTopSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
