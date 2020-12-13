import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private userUrl: string;
  
  constructor(private http: HttpClient) {
    this.userUrl = '/api/users'
  }

  public loginUserFromRemote(user: User): Observable<any> {
    const url = `${this.userUrl}/login`;  
    return this.http.post<any>(url, user);
  }

  public registerUserFromRemote(user: User): Observable<any> {
    const url = `${this.userUrl}/registration`;  
    return this.http.post<any>(url, user).pipe(
      catchError(this.handleError<any>('Registration'))
    );;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
