import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { GroupStepperComponent } from './group-stepper/group-stepper.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { GroupListComponent } from './group-list/group-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateGroupDialogComponent } from './create-group-dialog/create-group-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { DeleteGroupDialogComponent } from './delete-group-dialog/delete-group-dialog.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupStepperComponent,
    GroupListComponent,
    CreateGroupDialogComponent,
    DeleteGroupDialogComponent,
    MainPageComponent,
    ProgressBarComponent
  ],
  entryComponents: [CreateGroupDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
