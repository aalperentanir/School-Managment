import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTeacherComponent } from './post-teacher.component';

describe('PostTeacherComponent', () => {
  let component: PostTeacherComponent;
  let fixture: ComponentFixture<PostTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
