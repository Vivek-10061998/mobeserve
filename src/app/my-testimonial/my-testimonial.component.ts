import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-testimonial',
  templateUrl: './my-testimonial.component.html',
  styleUrls: ['./my-testimonial.component.css']
})
export class MyTestimonialComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() testimonials!: any[] 
  approvedTestimonials: any[] = [];
  rejectedTestimonials: any[] = [];

  searchTerm: string = '';
  testimonialSearchTerm: any;
 
  approveTestimonial(testimonial: any) {
    testimonial.status = 'approved';
    if (!this.approvedTestimonials.includes(testimonial)) {
      this.approvedTestimonials.push(testimonial);
    }
  }
  
  rejectTestimonial(testimonial: any) {
    testimonial.status = 'rejected';
    if (!this.rejectedTestimonials.includes(testimonial)) {
      this.rejectedTestimonials.push(testimonial);
    }
  }
}
