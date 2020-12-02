import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupStepperComponent } from './group-stepper/group-stepper.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'group/:id', component: GroupStepperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
