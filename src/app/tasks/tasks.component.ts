import {Component, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {dummyTasks} from "./dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  name = input.required<string>()
  userId = input.required<string>()
  tasks = dummyTasks
  newTask = false


  get tasksAssignedToSelectedUser() {
    return this.tasks.filter((task) => task.userId === this.userId())
  }

  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  onAddNewTask() {
    this.newTask = true
  }
}
