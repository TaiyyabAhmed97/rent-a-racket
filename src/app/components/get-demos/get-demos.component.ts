import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-get-demos',
  templateUrl: './get-demos.component.html',
  styleUrls: ['./get-demos.component.css']
})
export class GetDemosComponent implements OnInit {
  CurrentDemos;
  temp;
  CurrentDemoFiltered = {};
  displayedColumns = ['name', 'number', 'rackets', 'checkedout', 'returndate', 'info'];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.customerService.getCurrentDemos().subscribe(data => {
      this.temp = data; console.log(this.temp);
    },
      error => console.log(error),
      () => console.log("finsi"));
  }


  getDemos() {
    this.CurrentDemos = new MatTableDataSource(this.temp);
    console.log(this.CurrentDemos);
    return this.CurrentDemos;

  }

  showInfo() {

  }


}
