import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs";
import Task from "../../Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((response)=> (this.tasks = response));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(()=> (this.tasks = this.tasks.filter(task2=> task2.id !== task.id)));
  }
}
