import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  previouslyCreatedCustomer: Customer = new Customer();
  customerCreated = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.customer = new Customer();
    // this.previouslyCreatedCustomer = new Customer();
  }

  createCustomer() {
    console.log(this.customer);
    this.customerService.createCustomer(this.customer).subscribe(response => {
      this.customerCreated = true;
      this.customer = response as Customer;
      Object.assign(this.previouslyCreatedCustomer, this.customer);
      this.customer.firstname = "";
      this.customer.lastname = "";
      this.customer.PhoneNum = "";
      this.customer.email = "";
    }
    );
  }

  newRent() {
    this.customerService.startNewRent();
    this.customerService.customer = this.previouslyCreatedCustomer;
  }
}
