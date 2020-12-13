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
import { MatInputModule } from '@angular/material/input';
import { GroupListComponent } from './group-list/group-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateGroupDialogComponent } from './create-group-dialog/create-group-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { DeleteGroupDialogComponent } from './delete-group-dialog/delete-group-dialog.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StepperPageComponent } from './stepper-page/stepper-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaskStepperComponent } from './task-stepper/task-stepper.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TokenInterceptorService } from './auth/token-interceptor.service';
//import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    GroupStepperComponent,
    GroupListComponent,
    CreateGroupDialogComponent,
    DeleteGroupDialogComponent,
    MainPageComponent,
    ProgressBarComponent,
    NavbarComponent,
    StepperPageComponent,
    TaskStepperComponent,
    DatepickerComponent,
    GoogleMapComponent,
    AddressFormComponent,
    LoginComponent,
    RegistrationComponent
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
    MatProgressBarModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GoogleMapsModule
  ],
  // providers: [AuthService],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
