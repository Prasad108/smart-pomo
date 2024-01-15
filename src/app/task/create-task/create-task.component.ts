import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      pomodoroCount: [1],
      priority: ['low', Validators.required],
      dueDate: [''],
      recurring: ['none'],
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      const newTask = new Task(
        this.taskForm.value.name,
        this.taskForm.value.pomodoroCount,
        this.taskForm.value.priority,
        this.taskForm.value.dueDate,
        this.taskForm.value.recurring
      );

      // Add the new task to the TaskService
      this.taskService.addTask(newTask);

      // Optionally, you can navigate to another page or reset the form
      this.taskForm.reset();
    }
  }

}
