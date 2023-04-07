import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://devwebapi.edgelearning.co.in/api/interview/certification';

  constructor(private http: HttpClient) { }
  getCertifications(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
