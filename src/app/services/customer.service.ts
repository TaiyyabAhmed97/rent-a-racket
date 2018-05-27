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
    return this.http.post('api/', Customer);
  }

  searchForCustomer(PhoneNum) {
    return this.http.get('api/' + PhoneNum);
  }

  searchForCustomerById(id) {
    return this.http.get('api/c/' + id);
  }
  getCustomers() {
    return this.http.get('api/');
  }

  startNewRent(Customer) {
    return this.http.post('api/rent', Customer);
  }
  getSpecificDemo(id): Observable<ICurrentDemo> {
    return this.http.get<ICurrentDemo>('api/rent/modified/' + id);
  }
  getCurrentDemos(): Observable<ICurrentDemo[]> {
    return this.http.get<ICurrentDemo[]>('api/rent/modified');
  }
}
