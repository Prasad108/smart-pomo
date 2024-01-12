import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'timer-controls', component: TimerControlsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerRoutingModule { }
