import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';
import { TimerComponent } from './timer/timer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TimerTypeComponent } from './timer-type/timer-type.component';



@NgModule({
  declarations: [TimerComponent, TimerControlsComponent, TimerTypeComponent],
  imports: [
    CommonModule,
    TimerRoutingModule,
    NgCircleProgressModule.forRoot()
  ]
})
export class TimerModule { }
