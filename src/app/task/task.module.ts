import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TaskListComponent,TaskDetailComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    IonicModule
  ]
})
export class TaskModule { }
