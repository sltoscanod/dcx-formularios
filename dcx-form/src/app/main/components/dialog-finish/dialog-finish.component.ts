import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-finish',
  templateUrl: './dialog-finish.component.html',
  styleUrls: ['./dialog-finish.component.css']
})
export class DialogFinishComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogFinishComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onClick(): void {

    this.dialogRef.close();

  }
}
