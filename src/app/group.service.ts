import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TaskGroup } from './model/task.group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupUrl: string;

  constructor(private http: HttpClient) {
    this.groupUrl = '/api/groups';
   }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   public findAll(): Observable<TaskGroup[]> {
    const url = `${this.groupUrl}/list`;
    return this.http.get<TaskGroup[]>(url);
  }

  getGroupById(id: string): Observable<TaskGroup>{
    const url = `${this.groupUrl}/${id}`;
    return this.http.get<TaskGroup>(url).pipe(
      catchError(this.handleError<TaskGroup>(`getGroupById id=${id}`))
    );
  }

  public save(group: TaskGroup) {
    const url = `${this.groupUrl}/create`;
    return this.http.post<string>(url, group);
  }

  updateGroup(group: TaskGroup): Observable<any> {
    const url = `${this.groupUrl}/${group.id}`;
    return this.http.put(url, group, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateGroup'))
    );
  }

  public delete(id: string) {
    const url = `${this.groupUrl}/${id}`;
    return this.http.delete<TaskGroup>(url, this.httpOptions).pipe(
      catchError(this.handleError<TaskGroup>('deleteGroup'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
