import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPermitsComponent } from './all-permits.component';

describe('AllPermitsComponent', () => {
  let component: AllPermitsComponent;
  let fixture: ComponentFixture<AllPermitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPermitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
