import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../../services/customer.service';
import { DemoDetailDialogComponent } from '../demo-detail-dialog/demo-detail-dialog.component';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {
  CurrentDemo;
  temp;
  customerFound = false;
  message: String;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.customerService.getSpecificDemo(this.route.snapshot.params['id']).subscribe(data => {
      this.temp = data;
      this.customerFound = true;
      console.log(this.temp);
    },
      error => console.log(error),
      () => console.log("finish"));
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DemoDetailDialogComponent, {
      width: '250px',
      data: { name: this.CurrentDemo.firstname, message: this.message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.message = result;
      console.log(result);
    });
  }

  getCust() {
    this.CurrentDemo = this.temp;
    console.log(this.CurrentDemo);
    return this.CurrentDemo;
  }

  sendText() {

  }

  deleteRent() {

  }

}
