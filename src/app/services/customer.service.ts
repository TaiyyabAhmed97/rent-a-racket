import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
  customer: Customer;
  newRent = false;
  constructor(private http: HttpClient) { }

  createCustomer(Customer) {
    return this.http.post('api/', Customer);
  }

  searchForCustomer(PhoneNum) {
    return this.http.get('api/' + PhoneNum);
  }

  startNewRent() {

    this.newRent = true;

  }
}
