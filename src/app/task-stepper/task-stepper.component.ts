import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Task } from '../model/task';
import { TaskGroup } from '../model/task.group';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../group.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'weddplan-task-stepper',
  templateUrl: './task-stepper.component.html',
  styleUrls: ['./task-stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class TaskStepperComponent implements OnInit {

  formGroup: FormGroup;
  form: FormArray;
  RandomFormGroup: FormGroup;
  @ViewChild('stepper') stepper: any;
  steps = [{ Taskid: "", name: "", type: -1, group: new TaskGroup, completed: false }];
  allCompleted = false;
  procedureFinished:boolean = false;

  selected = -1;
  taskList: Task[];
  taskGroup: TaskGroup;
  name: string;

  constructor(private _formBuilder: FormBuilder, private groupService: GroupService,
    private route: ActivatedRoute, private taskService: TaskService, public router: Router) {}

  ngOnInit() {
    this.initGroupAndTaskList();
     this.RandomFormGroup = this._formBuilder.group({
       Ctrl: ['', Validators.required]
    });
     this.RandomFormGroup = this._formBuilder.group({
      taskName: ['', Validators.required]
    });
  }

  initGroupAndTaskList(): void {
    const id: string = this.route.snapshot.params.id;
    this.groupService.getGroupById(id)
      .subscribe(group => this.taskGroup = group);
    this.taskService.getTaskListByGroupId(id)
      .subscribe(list => {
        this.taskList = list;
        if (this.taskList.length > 0) {
          this.steps.pop();
          this.taskList.forEach(element => {
             this.steps.push({ Taskid: element.id, name: element.name, type: element.type, group: element.group, completed: true })
          });
      }
      });
  }

  addItem() {
    this.name = "";
    this.selected = -1;
    this.steps.push({ Taskid: "", name: "", type: -1, group: this.taskGroup, completed: false }); 
    this.stepper.selectedIndex = this.steps.length - 1;
    this.allCompleted = false;
  }

  changeTaskTypeSelectionOrName(event: any, index: number) {
    if (this.steps[index].name && this.steps[index].type >= 0){
      this.steps[index].group = this.taskGroup;
      this.steps[index].completed = true;
      this.allCompleted = true;
    }
    else{
      this.allCompleted = false;
    }
  }

  onRemoveAll() {
    this.steps = [];
    this.stepper.selectedIndex = this.steps.length;
    this.allCompleted = true;
  }

  removeStep(i: number){
    if(this.steps.length < i + 1){return;}
    if(i < this.taskList.length){
      this.taskService.delete(this.steps[i].Taskid).subscribe();
    }
    this.taskList.splice(i,1);
    this.steps.splice(i,1);
    this.stepper.selectedIndex = this.steps.length;
    this.checkCompleted();
  }

  checkCompleted(){
    this.allCompleted = this.steps.every(step => step.completed);
  }

  async handleDone(){
    this.procedureFinished = true;
    for (const { index, value } of this.steps.map((value, index) => ({ index, value }))) {
      if (index < this.taskList.length){
        if (this.taskList[index].name !== value.name || this.taskList[index].type != value.type){
          var DTO = { id: value.Taskid, name: value.name, type: value.type, group: value.group };
          const result = await this.taskService.updateTask(DTO).subscribe();
        }
      }
      else {
        var postDTO = { name: value.name, type: value.type, group: value.group };
        const response = await this.taskService.save(postDTO);
        console.log(response);
      }
    };
    this.router.navigate(['home']);
  }

  handleReset(){
    this.procedureFinished = false;
    this.steps = [];
    this.steps.push({ Taskid: "", name: "", type: -1, group: this.taskGroup, completed: false }); 
    this.allCompleted = false;
  }

}
