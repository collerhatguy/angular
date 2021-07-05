import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Task from "../../Task";
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();

  constructor() { }
  deleteTask(task: Task) {
    this.onDelete.emit(task)
  }
  ngOnInit(): void {
  }

}
