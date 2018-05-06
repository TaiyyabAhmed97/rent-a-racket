import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.css']
})
export class NewRentComponent implements OnInit {
  make: string;
  model: string;
  date: any;
  rackets: Racket[] = [];
  RacketsArray = [];
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerDetail(this.route.snapshot.params['id']);

  }

  getCustomerDetail(id) {
    this.customerService.searchForCustomerById(id).subscribe(data => {
      this.customer = data as Customer;
      console.log(data);
    }, (err) => {
      console.log(err);
    }); ``
  }

  addAnotherRacket() {
    this.rackets.push(new Racket(this.make, this.model));
    this.RacketsArray.push(this.make + " " + this.model);
    this.make = "";
    this.model = "";
    console.log(this.rackets);
  }

  submitRent() {
    const customerId = this.customer._id;
    // console.log(customerId);
    //console.log(this.rackets);
    //console.log(this.date);
    var arr = [];

    console.log(this.RacketsArray);
    var date = new Date();
    const obj = {
      "CustomerId": customerId,
      "Rackets": this.RacketsArray,
      "CheckedOut": date,
      "ReturnDate": this.date
    }
    console.log(obj);
    this.customerService.startNewRent(obj).subscribe(response => { });
    // TODO API Call
    // ON Success
    this.make = ""
    this.model = ""
  }



}

export class Racket {
  public make: string;
  public model: string;
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}