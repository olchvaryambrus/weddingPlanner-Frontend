import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupStepperComponent } from './group-stepper/group-stepper.component';

const routes: Routes = [
  { path: 'stepper', component: GroupStepperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
