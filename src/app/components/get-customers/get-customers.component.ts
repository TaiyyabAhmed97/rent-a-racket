import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { empty } from 'rxjs/Observer';
@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {
  Customers;
  temp;
  CurrentDemoFiltered = {};
  displayedColumns = ['firstname', 'lastname', 'phonenumber', 'email'];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => { this.temp = data; console.log(this.temp); }, error => console.log(error), () => console.log("finsi"));
  }


  getCustomers() {
    this.Customers = new MatTableDataSource(this.temp);
    return this.Customers;

  }

  processNumber(num) {
    if (num.charAt(0) == "1") {
      num = num.substring(1, num.length);
    }
    let temp = "(" + num.substring(0, 3) + ")" + "-" + num.substring(3, 6) + "-" + num.substring(6, 11);
    return temp;
  }
}