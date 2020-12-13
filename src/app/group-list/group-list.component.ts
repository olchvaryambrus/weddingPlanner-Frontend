import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  
  cols : number;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }


  constructor(private groupService: GroupService, public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }

  ngOnInit(): void {
    this.groupService.findAll().subscribe(data => {
      this.groups = data;
    });
  }

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
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.groupService.save(result).subscribe(r => this.ngOnInit());
      }      
    });
  }

  openDeleteDialog(group: TaskGroup): void {
    const dialogRef = this.dialog.open(DeleteGroupDialogComponent, {
      data: {name: group.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.groupService.delete(group.id).subscribe(r => this.ngOnInit());
      }      
    });
  }

  openRenameDialog(group: TaskGroup): void {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      data: {name: group.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        group.name = result.name;
        this.groupService.updateGroup(group).subscribe();
      }      
    });
  }
}
