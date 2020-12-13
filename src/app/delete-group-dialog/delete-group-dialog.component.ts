import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'weddplan-delete-group-dialog',
  templateUrl: './delete-group-dialog.component.html',
  styleUrls: ['./delete-group-dialog.component.scss']
})
export class DeleteGroupDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.dialogRef.close(true);
  }

}
