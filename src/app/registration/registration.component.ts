import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
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

  constructor(private router: Router,
    private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.user)
    this._enrollmentService.reg_enroll(this.user)
      .subscribe(
        data => this.router.navigate(['/login']),
        error => this.msg = error.error
      )
  }

}
