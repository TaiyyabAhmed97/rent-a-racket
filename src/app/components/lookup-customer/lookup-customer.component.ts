import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookup-customer',
  templateUrl: './lookup-customer.component.html',
  styleUrls: ['./lookup-customer.component.css']
})
export class LookupCustomerComponent implements OnInit {
  PhoneNumber;
  customer: Customer = new Customer();
  previouslyCreatedCustomer: Customer = new Customer();
  customerFound = false;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  searchForCustomer() {
    this.customerService.searchForCustomer(this.PhoneNumber).subscribe(data => {
      this.customer = data[0] as Customer;
      if (this.customer != null) {
        this.customerFound = true;
      }
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
  newRent() {
    this.customerService.startNewRent(this.customer);
    this.customerService.customer = this.previouslyCreatedCustomer;
    this.router.navigate(['/new-rent', this.previouslyCreatedCustomer._id]);
  }

}