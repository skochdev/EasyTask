import {Component, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  name = input.required<string>()
  userId = input.required<string>()
  tasks = dummyTasks


  get tasksAssignedToSelectedUser() {
    return this.tasks.filter((task) => task.userId === this.userId())
  }
}
