import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'weddplan-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  doneTasksCount: any;
  higherLimit: any;

  percentage: number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getCountList().subscribe(data => {
      this.higherLimit = data[0];
      this.doneTasksCount = data[1];
      this.calculatePercentage();
    });
  }

  calculatePercentage(): void{
    this.percentage = (this.doneTasksCount / this.higherLimit)*100;
  }

}
