import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../group.service';
import { TaskGroup } from '../model/task.group';
import { Location } from '@angular/common';
import { TaskNote } from '../model/task-note';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'weddplan-group-stepper',
  templateUrl: './group-stepper.component.html',
  styleUrls: ['./group-stepper.component.scss']
})
export class GroupStepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  group: TaskGroup = new TaskGroup;
  taskList: Task[];

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute, public router: Router,
    private groupService: GroupService, private location: Location, private taskService: TaskService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getTaskList();
  }

  getTaskList(): void {
    const id: string = this.route.snapshot.params.id;
    this.groupService.getGroupById(id)
      .subscribe(group => this.group = group);
    this.taskService.getTaskListByGroupId(id)
      .subscribe(data => this.taskList = data);
  }

  saveCheckBoxState(task: Task): void {
    task.group = this.group;
    this.taskService.updateTask(task)
      .subscribe();
    if (task.isDone === false && this.group.isDone === true){
      this.group.isDone = false;
      this.groupService.updateGroup(this.group)
      .subscribe();
    }
  }

  finishedGroup(task: Task): void {
    this.saveCheckBoxState(task);
    this.group.isDone = true;
    this.groupService.updateGroup(this.group)
      .subscribe(result => this.router.navigate(['home']));
  }
}
