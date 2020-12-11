import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl: string;

  constructor(private http: HttpClient) {
    this.taskUrl = 'http://localhost:8080/tasks'
   }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCountAll(): Observable<any>{
    const url = `${this.taskUrl}/countAll`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<Task[]>(`getCountAll`))
    );
  }

  getCountByIsDone(): Observable<any>{
    const url = `${this.taskUrl}/countDone`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<Task[]>(`getCountByIsDone`))
    );
  }

  getCountList(): Observable<number[]>{
    const url = `${this.taskUrl}/countList`;
    return this.http.get<number[]>(url).pipe(
      catchError(this.handleError<number[]>(`getCountList`))
    );
  }

  getTaskListByGroupId(groupId: string): Observable<Task[]>{
    const url = `${this.taskUrl}/groupId/${groupId}`;
    return this.http.get<Task[]>(url).pipe(
      catchError(this.handleError<Task[]>(`getTasksByGroupId groupId=${groupId}`))
    );
  }

  public save(task: any) {
    const url = `${this.taskUrl}/create`;
    return this.http.post<any>(url, task);
  }

   updateTask(task: any): Observable<any> {
    const url = `${this.taskUrl}/${task.id}`;
    return this.http.put(url, task, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateWeddingTask'))
    );
  }

  public delete(id: string) {
    const url = `${this.taskUrl}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions).pipe(
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
