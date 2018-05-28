import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-demo-detail-dialog',
  templateUrl: './demo-detail-dialog.component.html',
  styleUrls: ['./demo-detail-dialog.component.css']
})
export class DemoDetailDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DemoDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
