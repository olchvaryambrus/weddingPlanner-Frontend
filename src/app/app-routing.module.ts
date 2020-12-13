import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupStepperComponent } from './group-stepper/group-stepper.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { TaskStepperComponent } from './task-stepper/task-stepper.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'group/:id', component: GroupStepperComponent, },
  { path: 'group/:id/tasks/update', component: TaskStepperComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
