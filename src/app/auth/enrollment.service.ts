import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {
  log_url = '/api/authenticate';
  reg_url = '/api/users/registration';
  constructor(private _http: HttpClient) { }

  reg_enroll(user: User){
    var username = user.userName;
    var email = user.emailId;
    var password = user.password;
    return this._http.post<any>(this.reg_url, { username, email, password });
  }

  log_enroll(user: User){
    var username = user.userName;
    var password = user.password;
    return this._http.post<any>(this.log_url, { username, password })
  }

}