import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnewArrivalComponent } from './productnew-arrival.component';

describe('ProductnewArrivalComponent', () => {
  let component: ProductnewArrivalComponent;
  let fixture: ComponentFixture<ProductnewArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductnewArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductnewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
