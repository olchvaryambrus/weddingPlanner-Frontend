import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'weddplan-stepper-page',
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.scss']
})
export class StepperPageComponent implements OnInit {

  constructor() { }

  @Input() task: Task;

  ngOnInit(): void {
  }

}
