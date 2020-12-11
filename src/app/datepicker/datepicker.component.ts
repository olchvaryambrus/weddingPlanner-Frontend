import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Task } from '../model/task';

@Component({
  selector: 'weddplan-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  

  @Input() task: Task;

  minDate = new Date();

  defaultDate = new FormControl(new Date());


  constructor() { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {

    if(this.task.date){
      this.defaultDate = new FormControl(new Date(this.task.date));
    }
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    if(event.value){
      this.task.date = event.value.toString();
    }
  }
}
