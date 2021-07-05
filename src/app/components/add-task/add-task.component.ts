import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Task from "../../Task";
import { UIService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  time!: string;
  text!: string;
  reminder: boolean = false;
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UIService ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  onSubmit() {
    if (!this.text) return alert("please add task");
    if (!this.time) return alert("please add task");

    const newTask: Task = {
      text: this.text,
      time: this.time,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = "";
    this.time = "";
    this.reminder = false;

  }
  ngOnInit(): void {
  }

}
