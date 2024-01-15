import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent  implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

}
