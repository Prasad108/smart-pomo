import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  addTask(newTask: Task) {
    console.log('new task added :'+newTask)
    this.tasks.push(newTask);
  }
  private tasks: Task[] = [];

  constructor() {
    this.initSampleTasks();
  }


  getTasks(): Task[] {
    return this.tasks;
  }

  private initSampleTasks() {
    this.tasks = [
        new Task('Complete Project', 1, 'high', new Date(2024, 0, 15), 'none'),
        new Task('Read Book', 2, 'medium', new Date(2024, 0, 20), 'daily'),
        new Task('Exercise', 1, 'low', new Date(2024, 0, 22), 'weekly'),
        new Task('Learn Angular', 2, 'medium', new Date(2024, 0, 25), 'none'),
        new Task('Write Blog Post', 2, 'high', new Date(2024, 0, 30), 'monthly'),
      ];
  }
}
