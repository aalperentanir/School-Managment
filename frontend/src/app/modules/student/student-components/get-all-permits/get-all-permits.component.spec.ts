import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPermitsComponent } from './get-all-permits.component';

describe('GetAllPermitsComponent', () => {
  let component: GetAllPermitsComponent;
  let fixture: ComponentFixture<GetAllPermitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllPermitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
