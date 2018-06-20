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
    return this.http.post('https://3000-dot-4031203-dot-devshell.appspot.com', Customer);
  }

  searchForCustomer(PhoneNum) {
    return this.http.get('https://3000-dot-4031203-dot-devshell.appspot.com' + PhoneNum);
  }

  searchForCustomerById(id) {
    return this.http.get('https://3000-dot-4031203-dot-devshell.appspot.com/c/' + id);
  }
  getCustomers() {
    return this.http.get('https://3000-dot-4031203-dot-devshell.appspot.com/');
  }
  deleteRent(id) {
    return this.http.delete('https://3000-dot-4031203-dot-devshell.appspot.com/rent' + id)
  }
  getDemo(id) {
    return this.http.get('https://3000-dot-4031203-dot-devshell.appspot.com/rent' + id);
  }
  startNewRent(Customer) {
    return this.http.post('https://3000-dot-4031203-dot-devshell.appspot.com/rent', Customer);
  }
  getSpecificDemo(id): Observable<ICurrentDemo> {
    return this.http.get<ICurrentDemo>('https://3000-dot-4031203-dot-devshell.appspot.com/rent/modified/' + id);
  }
  getCurrentDemos(): Observable<ICurrentDemo[]> {
    return this.http.get<ICurrentDemo[]>('https://3000-dot-4031203-dot-devshell.appspot.com/rent/modified');
  }
  submitDemo(id, demo) {
    return this.http.put('https://3000-dot-4031203-dot-devshell.appspot.com/rent' + id, demo);
  }
}
