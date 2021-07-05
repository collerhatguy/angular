import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http"
import {Observable } from "rxjs";
import Task from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private ApiUrl = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.ApiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.ApiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
