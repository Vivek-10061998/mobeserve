import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-testimonial',
  templateUrl: './my-testimonial.component.html',
  styleUrls: ['./my-testimonial.component.css']
})
export class MyTestimonialComponent {
  @Input() testimonials!: any[] 
  approvedTestimonials: any[] = [];
  rejectedTestimonials: any[] = [];

  removeTestimonial(testimonial: any) {
    const index = this.testimonials.indexOf(testimonial);
    if (index !== -1) {
      if (testimonial.status === 'pending') {
        this.testimonials.splice(index, 1);
      } else if (testimonial.status === 'approved') {
        this.approvedTestimonials.splice(index, 1);
      } else if (testimonial.status === 'rejected') {
        this.rejectedTestimonials.splice(index, 1);
      }
    }
  }  
}
