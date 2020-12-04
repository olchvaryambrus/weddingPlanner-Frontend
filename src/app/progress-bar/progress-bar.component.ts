import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'weddplan-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  doneTasksCount: number;
  higherLimit: number;

  percentage: number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getCountByIsDone().subscribe(data => {
      this.doneTasksCount = data;
    });
    this.taskService.getCountAll().subscribe(data => {
      this.higherLimit = data
    });
    this.calculatePercentage();
  }

  calculatePercentage(): void{
    var vmi1 = this.higherLimit/100;
    var vmi2 = this.higherLimit%100;
    var vmi3 = vmi1 + vmi2;
    this.percentage = vmi3*this.doneTasksCount;
  }

}
