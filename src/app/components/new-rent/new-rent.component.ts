import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.css']
})
export class NewRentComponent implements OnInit {
  make: string;
  model: string;
  rackets: Racket[] = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {

  }

  addAnotherRacket() {
    this.rackets.push(new Racket(this.make, this.model));
    this.make = "";
    this.model = "";
  }

  submitRent() {
    const customerId = this.customerService.customer._id;
    console.log(customerId);
    console.log(this.rackets);
    // TODO API Call
    // ON Success
    this.make = "";
    this.model = "";
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