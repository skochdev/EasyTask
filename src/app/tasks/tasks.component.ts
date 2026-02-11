import { Component, inject, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  userId = input.required<string>();
  private tasksService = inject(TasksService);

  newTask = false;

  get tasksAssignedToSelectedUser() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onCreateNewTask() {
    this.newTask = true;
  }

  onCloseNewTask() {
    this.newTask = false;
  }
}
