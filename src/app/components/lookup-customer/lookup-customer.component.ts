import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-lookup-customer',
  templateUrl: './lookup-customer.component.html',
  styleUrls: ['./lookup-customer.component.css']
})
export class LookupCustomerComponent implements OnInit {
  PhoneNumber;
  customer: Customer = new Customer();
  previouslyCreatedCustomer: Customer = new Customer();
  isValid = false;
  customerFound = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  searchForCustomer() {
    this.customerService.searchForCustomer(this.PhoneNumber).subscribe(data => {
      this.isValid = true;
      this.customerFound = true;
      this.customer = data[0] as Customer;
      Object.assign(this.previouslyCreatedCustomer, this.customer);
      this.customer.firstname = "";
      this.customer.lastname = "";
      this.customer.PhoneNum = "";
      this.customer.email = "";

      console.log(this.customer);
    }, (err) => {
      console.log(err);
    });

  }

}