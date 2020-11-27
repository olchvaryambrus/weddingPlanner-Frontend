import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStepperComponent } from './group-stepper.component';

describe('GroupStepperComponent', () => {
  let component: GroupStepperComponent;
  let fixture: ComponentFixture<GroupStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
