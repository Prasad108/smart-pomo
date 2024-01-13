import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.initSampleTasks();
  }


  getTasks(): Task[] {
    return this.tasks;
  }

  private initSampleTasks() {
    this.tasks.push(
      new Task(
        'Task 1',
        'Description for Task 1',
        'high',
        new Date('2022-08-15'),
        'in progress',
        ['work', 'urgent'],
        60,
        ['Checklist item 1', 'Checklist item 2'],
        ['/attachments/file1.pdf', 'https://example.com/image.jpg'],
        [new Date('2022-08-10T08:00:00')],
        ['John Doe', 'Jane Doe'],
        {
          frequency: 'daily',
          interval: 1,
        }
      )
    );

    this.tasks.push(
      new Task(
        'Task 2',
        'Description for Task 2',
        'medium',
        new Date('2022-08-20'),
        'not started',
        ['personal'],
        30,
        ['Checklist item 1', 'Checklist item 2', 'Checklist item 3'],
        [],
        [new Date('2022-08-18T10:00:00')],
        ['Alice Smith'],
        {
          frequency: 'weekly',
          interval: 2,
        }
      )
    );

    this.tasks.push(
      new Task(
        'Task 3',
        'Description for Task 3',
        'low',
        new Date('2022-08-25'),
        'completed',
        ['health', 'exercise'],
        45,
        [],
        ['/attachments/photo.jpg'],
        [],
        [],
        {
          frequency: 'monthly',
          interval: 1,
        }
      )
    );

    // Add more tasks as needed
  }
}
