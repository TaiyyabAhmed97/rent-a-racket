import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AutosizeModule } from 'ngx-autosize';
import * as moment from 'moment';
import { Message } from '../../models/message';

@Component({
  selector: 'app-get-demos-dialog',
  templateUrl: './get-demos-dialog.component.html',
  styleUrls: ['./get-demos-dialog.component.css']
})
export class GetDemosDialogComponent implements OnInit {
  message: Message = new Message();
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
    if (this.data.rackets.length < 2) {
      this.data.message = "Hi " + this.data.name + ", this is an automated message from Strings Attached, reminding you that a " + this.data.rackets[0] + " you Demoed is due on " + dateout.format("MM-DD-YY");
      this.message.message = this.data.message;
      this.message.phonenum = this.data.phonenum;
      //this.sendText();
    }
    else {
      var str = "";
      for (var i = 0; i < this.data.rackets.length; i++) {
        str += "a " + this.data.rackets[i] + ", ";
      }
      this.data.message = "Hi " + this.data.name + ", this is an automated message from Strings Attached, reminding you that " + str + " you Demoed are due on " + dateout.format("MM-DD-YY");
      //this.sendText();
      //this
    }

  }
  sendText() {
    //this.customerService.textCustomer(this.message);
    console.log('here')
  }
}
