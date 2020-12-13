import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../auth/enrollment.service';
import { User } from '../model/user';

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


  constructor(private router: Router,
    private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

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
      error => this.msg = 'Sikertelen bejelentkezés. Kérem adjon meg helyes email címet és jelszót!'
    )

}
}

