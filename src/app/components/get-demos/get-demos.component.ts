import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { empty } from 'rxjs/Observer';
import { TooltipPosition } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GetDemosDialogComponent } from '../get-demos-dialog/get-demos-dialog.component';

@Component({
  selector: 'app-get-demos',
  templateUrl: './get-demos.component.html',
  styleUrls: ['./get-demos.component.css']
})
export class GetDemosComponent implements OnInit {
  CurrentDemos;
  temp;
  CurrentDemoFiltered = {};
  message: String;
  displayedColumns = ['name', 'number', 'rackets', 'checkedout', 'returndate', 'info'];

  constructor(private customerService: CustomerService,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.customerService.getCurrentDemos().subscribe(data => {
      this.temp = data; //console.log(this.temp);
    },
      error => //console.log(error),
        () => console.log("finsi"));
  }


  getDemos() {
    this.CurrentDemos = new MatTableDataSource(this.temp);
    //console.log(this.CurrentDemos);
    return this.CurrentDemos;

  }


  openDialog(name, datein, dateout, rackets, phonenum): void {
    this.CurrentDemoFiltered['phonenum'] = phonenum;
    let dialogRef = this.dialog.open(GetDemosDialogComponent, {
      width: '250px',
      data: { name: name, datein: datein, dateout: dateout, message: this.message, rackets: rackets, phonenum: phonenum }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.CurrentDemoFiltered['message'] = result;
      this.customerService.textCustomer(this.CurrentDemoFiltered).subscribe(data => console.log("here"));
      //console.log(this.CurrentDemoFiltered);
    });
  }

}



