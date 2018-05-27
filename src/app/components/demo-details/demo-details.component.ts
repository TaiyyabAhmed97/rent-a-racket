import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {
  CurrentDemo;
  temp;
  customerFound = false;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerService.getSpecificDemo(this.route.snapshot.params['id']).subscribe(data => {
      this.temp = data;
      this.customerFound = true;
      console.log(this.temp);
    },
      error => console.log(error),
      () => console.log("finish"));
  }

  getCust() {
    this.CurrentDemo = this.temp;
    console.log(this.CurrentDemo);
    return this.CurrentDemo;
  }

}
