import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewArrivalComponent } from './product-new-arrival.component';

describe('ProductNewArrivalComponent', () => {
  let component: ProductNewArrivalComponent;
  let fixture: ComponentFixture<ProductNewArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNewArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
