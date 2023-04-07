import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestimonialComponent } from './my-testimonial.component';

describe('MyTestimonialComponent', () => {
  let component: MyTestimonialComponent;
  let fixture: ComponentFixture<MyTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
