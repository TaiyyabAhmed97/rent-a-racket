import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AutosizeModule } from 'ngx-autosize';
import * as moment from 'moment';

@Component({
  selector: 'app-get-demos-dialog',
  templateUrl: './get-demos-dialog.component.html',
  styleUrls: ['./get-demos-dialog.component.css']
})
export class GetDemosDialogComponent implements OnInit {
  message: String;
  constructor(
    public dialogRef: MatDialogRef<GetDemosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    var datein = moment(this.data.datein);
    var dateout = moment(this.data.dateout);
    var diff = dateout.diff(datein);
    var diffinDays = dateout.diff(datein, 'days');
    var diffinMins = dateout.diff(datein, 'minutes');

    console.log(datein);
    console.log(dateout);
    console.log(diffinDays);
    console.log(diffinMins);
    this.data.message = "Hi " + this.data.name + ", this is an automated message from Strings Attached, reminding you that a " + this.data.rackets[0] + " you Demoed is due on " + dateout.format("MM-DD-YY");
  }
}
