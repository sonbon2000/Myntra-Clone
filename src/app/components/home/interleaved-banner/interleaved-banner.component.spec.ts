import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterleavedBannerComponent } from './interleaved-banner.component';

describe('InterleavedBannerComponent', () => {
  let component: InterleavedBannerComponent;
  let fixture: ComponentFixture<InterleavedBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterleavedBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterleavedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
