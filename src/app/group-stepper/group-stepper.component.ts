import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';
import { TaskGroup } from '../model/task.group';
import { Location } from '@angular/common';

@Component({
  selector: 'weddplan-group-stepper',
  templateUrl: './group-stepper.component.html',
  styleUrls: ['./group-stepper.component.scss']
})
export class GroupStepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  group: TaskGroup;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute,
    private groupService: GroupService, private location: Location) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getGroup();
  }

  getGroup(): void {
    const id: string = this.route.snapshot.params.id;
    this.groupService.getGroupById(id)
      .subscribe(group => this.group = group);
  }

  goBack(): void {
    this.location.back();
  }


}
