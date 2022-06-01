import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrendComponent } from './new-trend.component';

describe('NewTrendComponent', () => {
  let component: NewTrendComponent;
  let fixture: ComponentFixture<NewTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
