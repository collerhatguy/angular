import { Component, OnInit } from '@angular/core';
import { UIService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showAddTask: boolean = true;
  subscription!: Subscription;

  constructor(private UIservice: UIService) {
    this.subscription = this.UIservice.onToggle().subscribe((value) => this.showAddTask=value);
  }

  ngOnInit(): void {
  }
  toggleAddTask() {
    this.UIservice.toggleAddTask()
  }
}
