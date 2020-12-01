import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { CreateGroupDialogComponent } from '../create-group-dialog/create-group-dialog.component';
import { DeleteGroupDialogComponent } from '../delete-group-dialog/delete-group-dialog.component';
import { GroupService } from '../group.service';
import { TaskGroup } from '../model/task.group';

@Component({
  selector: 'weddplan-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  name: any;

  groups: TaskGroup[];

  constructor(private groupService: GroupService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.groupService.findAll().subscribe(data => {
      this.groups = data;
    });
  }

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, group: TaskGroup) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'group': group };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      //width: '250px'
      data: {name: this.name}
      //data: {group: this.newGroup}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.groupService.save(result).subscribe(r => window.location.reload());
      }      
    });
  }

  openDeleteDialog(group: TaskGroup): void {
    const dialogRef = this.dialog.open(DeleteGroupDialogComponent, {
      data: {name: group.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.groupService.delete(group.id).subscribe(r => window.location.reload());
      }      
    });
  }

}
