import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskGroup } from './model/task.group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupUrl: string;

  constructor(private http: HttpClient) {
    this.groupUrl = 'http://localhost:8080/groups';
   }

   public findAll(): Observable<TaskGroup[]> {
    const url = `${this.groupUrl}/list`;
    return this.http.get<TaskGroup[]>(url);
  }
}
