import { ICurrentDemo } from './../models/currentdemo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  customer: Customer;
  Demos: any;
  temp: any;
  newRent = false;
  constructor(private http: HttpClient) { }

  createCustomer(Customer) {
    return this.http.post('http://localhost:3000/', Customer);
  }

  searchForCustomer(PhoneNum) {
    return this.http.get('http://localhost:3000/' + PhoneNum);
  }

  searchForCustomerById(id) {
    return this.http.get('http://localhost:3000/c/' + id);
  }
  getCustomers() {
    return this.http.get('http://localhost:3000/all');
  }
  deleteRent(id) {
    return this.http.delete('http://localhost:3000/' + id)
  }
  getDemo(id) {
    return this.http.get('http://localhost:3000/rent' + id);
  }
  startNewRent(Customer) {
    return this.http.post('http://localhost:3000/rent', Customer);
  }
  getSpecificDemo(id): Observable<ICurrentDemo> {
    return this.http.get<ICurrentDemo>('http://localhost:3000/rent/modified/' + id);
  }
  getCurrentDemos(): Observable<ICurrentDemo[]> {
    return this.http.get<ICurrentDemo[]>('http://localhost:3000/rent/modified');
  }
  submitDemo(id, demo) {
    return this.http.put('http://localhost:3000/rent' + id, demo);
  }
  textCustomer(messageAndNum) {
    console.log("coolio");
    return this.http.post('http://localhost:3000/text', messageAndNum);
  }
}
