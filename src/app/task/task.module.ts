import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { IonicModule } from '@ionic/angular';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClockIconPipe } from '../pipe/clock-icon.pipe';



@NgModule({
  declarations: [TaskListComponent, TaskDetailComponent, CreateTaskComponent, ClockIconPipe],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
