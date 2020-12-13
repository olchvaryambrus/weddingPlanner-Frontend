import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { EnrollmentService } from '../auth/enrollment.service';

@Component({
  selector: 'weddplan-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user = new User();

  msg = '';

  constructor(private registrationService: RegistrationService, private router: Router,
    private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }
/*
  registerUser() {
    this.registrationService.registerUserFromRemote(this.user).subscribe(
      data => this.router.navigate(['/login']),
      error => this.msg = error.error
    )
  }
*/
  registerUser() {
    console.log(this.user)
    this._enrollmentService.reg_enroll(this.user)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error van tes!', error)
      )
  }

}
