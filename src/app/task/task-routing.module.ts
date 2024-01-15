import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CreateTaskComponent } from './create-task/create-task.component';


const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule { }
