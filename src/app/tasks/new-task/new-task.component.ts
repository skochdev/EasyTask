import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private tasksService: TasksService) {
    //
  }

  close = output<void>();
  userId = input.required<string>();
  newTaskTitle = '';
  newTaskSummary = '';
  newTaskDueDate = '';

  onCancel() {
    this.close.emit();
  }

  onNewTaskSubmit() {
    this.tasksService.addTask(
      {
        title: this.newTaskTitle,
        summary: this.newTaskSummary,
        dueDate: this.newTaskDueDate,
      },
      this.userId()
    );

    this.close.emit();
  }
}
