import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  
regSubmit(customer: Object){
  return this.http.post('/customers/signup', customer)
}   
}