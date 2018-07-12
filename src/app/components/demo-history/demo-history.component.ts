import { ICurrentDemo } from './../../models/currentdemo';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-history',
  templateUrl: './demo-history.component.html',
  styleUrls: ['./demo-history.component.css']
})
export class DemoHistoryComponent implements OnInit {
  temp: any;
  CurrentDemo: any;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var num = "5b2c036b30f1531054edcdeb";
    this.customerService.getCustHist(num).subscribe(data => { this.CurrentDemo = data; console.log(this.CurrentDemo); }, error => console.log(error), () => console.log("finsi"));
  }

}
