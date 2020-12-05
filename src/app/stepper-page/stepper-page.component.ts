import { Component, Input, OnInit } from '@angular/core';
import { SolutionOption } from '../model/solution-option';
import { Task } from '../model/task';
import { TaskNote } from '../model/task-note';
import { Location } from '@angular/common';
import { NoteService } from '../note.service';
import { SolutionOptionService } from '../solution-option.service';

@Component({
  selector: 'weddplan-stepper-page',
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.scss']
})
export class StepperPageComponent implements OnInit {

  constructor(private optionService: SolutionOptionService, private noteSevice: NoteService,
    private location: Location) {}

  @Input() task: Task;

  solutionOption: SolutionOption;

  taskNote: TaskNote;

  notes: TaskNote[];

  options: SolutionOption[];

  ngOnInit(): void {
    const id = this.task.id;
    this.optionService.getOptionsByTaskId(id).subscribe(data => {
      this.options = data;
    });
    this.noteSevice.getNotesByTaskId(id).subscribe(data => {
      this.notes = data;
    });
    this.solutionOption = new SolutionOption;
    this.taskNote = new TaskNote;    
    this.taskNote.task = this.task;
    this.solutionOption.task = this.task;
  }

  onSubmitOption(): void {
    this.optionService.save(this.solutionOption).subscribe(r => window.location.reload());
  }

  onSubmitNote(): void {
    this.noteSevice.save(this.taskNote).subscribe(r => window.location.reload());
  }

  deleteOption(id: string): void {
    this.optionService.delete(id)
      .subscribe(r => window.location.reload());
  }

  deleteNote(id: string): void {
    this.noteSevice.delete(id)
      .subscribe(r => window.location.reload());
  }

}
