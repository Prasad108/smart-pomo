import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-type',
  templateUrl: './timer-type.component.html',
  styleUrls: ['./timer-type.component.scss'],
})
export class TimerTypeComponent implements OnInit {

  @Output() timerTypeSelected = new EventEmitter<string>();

  selectedTimerType: string = 'pomodoro';

  ngOnInit() {
    this.emitTimerType();
  }

  selectPomodoro() {
    this.selectedTimerType = 'pomodoro';
    this.emitTimerType();
  }

  selectShortBreak() {
    this.selectedTimerType = 'shortbreak';
    this.emitTimerType();
  }

  selectLongBreak() {
    this.selectedTimerType = 'longbreak';
    this.emitTimerType();
  }

  private emitTimerType() {
    this.timerTypeSelected.emit(this.selectedTimerType);
  }

}
