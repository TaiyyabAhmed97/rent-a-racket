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
  Racket: string;
  date: any;
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
    this.RacketsArray.push(this.Racket);
    this.Racket = "";
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
    this.Racket = "";
    this.router.navigate(['/get-demos']);
  }
}