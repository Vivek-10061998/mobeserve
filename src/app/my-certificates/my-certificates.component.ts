import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent implements OnInit {
  certificates: any[] = [];
  testimonials: any[] = [];
  searchTerm: string = '';

  constructor(private certificationService: ApiServiceService) { }

  ngOnInit() {
    this.getCertifications();
  }
  getCertifications(): void {
    this.certificationService.getCertifications().subscribe(response => {
      console.log(response); // logging the response data
      this.certificates = response.data.certificates;
      this.testimonials = response.data.testimonials;
     
    })
  }
  
  get filteredTestimonials() {
    return this.testimonials.filter(testimonial => testimonial.user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
