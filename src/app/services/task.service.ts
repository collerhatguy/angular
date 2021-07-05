import { Injectable } from '@angular/core';
import {Observable, of } from "rxjs";
import Task from "../Task";
import {tasks} from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<Task[]> {
    const newTasks = of(tasks)
    return newTasks;
  }
}
