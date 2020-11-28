import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskGroup } from '../model/task.group';

@Component({
  selector: 'weddplan-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.scss']
})
export class CreateGroupDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {    
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.data)
  }

}
