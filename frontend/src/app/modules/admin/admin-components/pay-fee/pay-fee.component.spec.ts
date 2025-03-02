import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFeeComponent } from './pay-fee.component';

describe('PayFeeComponent', () => {
  let component: PayFeeComponent;
  let fixture: ComponentFixture<PayFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayFeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
