import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-lookup-customer',
  templateUrl: './lookup-customer.component.html',
  styleUrls: ['./lookup-customer.component.css']
})
export class LookupCustomerComponent implements OnInit {
  PhoneNumber;
  customer;
  isValid = false;
  customerFound = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  searchForCustomer() {
    this.customerService.searchForCustomer(this.PhoneNumber).subscribe(data => {
      this.isValid = true;
      this.customerFound = true;
      this.customer = data[0];
      console.log(this.customer);
    }, (err) => {
      console.log(err);
    });
  }

}