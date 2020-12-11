import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStepperComponent } from './task-stepper.component';

describe('TaskStepperComponent', () => {
  let component: TaskStepperComponent;
  let fixture: ComponentFixture<TaskStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
