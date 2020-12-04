import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TaskNote } from './model/task-note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteUrl: string;

  constructor(private http: HttpClient) {
    this.noteUrl = 'http://localhost:8080/notes';
   }

   getNotesByTaskId(taskId: string): Observable<TaskNote[]>{
    const url = `${this.noteUrl}/${taskId}`;
    return this.http.get<TaskNote[]>(url).pipe(
      catchError(this.handleError<TaskNote[]>(`getNotesByTaskId taskId=${taskId}`))
    );
  }

   public save(note: TaskNote) {
    const url = `${this.noteUrl}/create`;
    return this.http.post<string>(url, note);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
