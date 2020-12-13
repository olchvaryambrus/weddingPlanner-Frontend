import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { EnrollmentService } from '../auth/enrollment.service';
import { User } from '../model/user';
import { RegistrationService } from '../registration.service';

const httpOptions = { headers: new HttpHeaders({'Authorization': ''}) };

@Component({
  selector: 'weddplan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();

  msg = '';

  token: string | null;


  constructor(private registrationService: RegistrationService, private router: Router,
    private _enrollmentService: EnrollmentService) { }

ngOnInit(): void {
}

/*
loginUser() {
  this.registrationService.loginUserFromRemote(this.user).subscribe(
    data => {
      console.log("sikeres login");
      this.router.navigate(['/home']);
  },
    error => {
      console.error("sikertelen");
      this.msg = 'Sikertelen bejelentkezés. Kérem adjon meg helyes email címet és jelszót!';
    }
  );
}
*/


loginUser() {
  console.log(this.user)
  this._enrollmentService.log_enroll(this.user)
    .subscribe(
      data => {
        console.log('Success!', data);
        httpOptions.headers = httpOptions.headers.set("Authorization", data.jwt);
        this.token = httpOptions.headers.get("Authorization");
        localStorage.setItem('token',data.jwt);
        this.router.navigate(['/home']);
      },
      error => console.error('Error!', error)
    )

}
}

/*
constructor(private authService: AuthService) { }
  ngOnInit(): void { }

  userLogin() {
    this.authService.userLogin(this.user)
      .subscribe(
        (value) => {
          if (value) {
            alert('success');
          } else {
            alert('failed');
          }
        },
        (error) => {
          alert('failed error');
        }
      );
  }
*/


