import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { TaskGroup } from '../model/task.group';

@Component({
  selector: 'weddplan-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  groups: TaskGroup[];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.findAll().subscribe(data => {
      this.groups = data;
    });
  }

}
