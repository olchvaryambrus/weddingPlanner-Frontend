import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SolutionOption } from './model/solution-option';

@Injectable({
  providedIn: 'root'
})
export class SolutionOptionService {

  private optionUrl: string;

  constructor(private http: HttpClient) {
    this.optionUrl = 'http://localhost:8080/options';
   }

   getOptionsByTaskId(taskId: string): Observable<SolutionOption[]>{
    const url = `${this.optionUrl}/${taskId}`;
    return this.http.get<SolutionOption[]>(url).pipe(
      catchError(this.handleError<SolutionOption[]>(`getOptionsByTaskId taskId=${taskId}`))
    );
  }

   public save(option: SolutionOption) {
    const url = `${this.optionUrl}/create`;
    return this.http.post<string>(url, option);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
