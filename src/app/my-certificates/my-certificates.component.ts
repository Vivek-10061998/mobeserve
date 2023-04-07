import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent implements OnInit {
  certificates: any[] = [];
  testimonials: any[] = [];
  currentIndex = 0;

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
  
}
