import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../group.service';
import { TaskGroup } from '../model/task.group';
import { Location } from '@angular/common';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'weddplan-group-stepper',
  templateUrl: './group-stepper.component.html',
  styleUrls: ['./group-stepper.component.scss']
})
export class GroupStepperComponent implements OnInit {

  isLinear = false;

  group: TaskGroup = new TaskGroup;
  taskList: Task[];

  RandomFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute, public router: Router,
    private groupService: GroupService, private location: Location, private taskService: TaskService) { }

  ngOnInit() {
    this.getTaskListAndGroup();
    this.RandomFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  getTaskListAndGroup(): void {
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

  saveAfterTabChange(event: any) {
    var index = event.previouslySelectedIndex;
    this.saveCheckBoxState(this.taskList[index]);
  }

  finishedGroup(task: Task): void {
    this.saveCheckBoxState(task);
    this.group.isDone = true;
    this.groupService.updateGroup(this.group)
      .subscribe(result => this.router.navigate(['home']));
  }

  ///nem működik jól ha nulla pipa van
  ngOnDestroy(): void {
    for (let i = 0; i < this.taskList.length; i++){
      if(this.taskList[i].isDone === false){
        if(this.group.isDone){
          this.saveCheckBoxState(this.taskList[i]);
          this.group.isDone = false;
          this.groupService.updateGroup(this.group)
          return;
        }
        else {
          this.saveCheckBoxState(this.taskList[i-1]);
          return;
        }
      }
    }
   this.finishedGroup(this.taskList[this.taskList.length-1]);  
  }
}
