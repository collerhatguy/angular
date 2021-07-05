import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http"
import {Observable } from "rxjs";
import Task from "../Task";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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
  toggleReminder(task: Task): Observable<Task> {
    const url = `${this.ApiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }
  addNewTask(task: Task): Observable<Task> {
    const url = this.ApiUrl;
    return this.http.post<Task>(url, task, httpOptions)
  }
}
