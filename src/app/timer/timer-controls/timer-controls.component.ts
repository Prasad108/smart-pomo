import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss'],
})
export class TimerControlsComponent {

  @Output() startClicked = new EventEmitter<void>();
  @Output() stopClicked = new EventEmitter<void>();
  @Output() resetClicked = new EventEmitter<void>();

  onStartClick() {
    this.startClicked.emit();
  }

  onStopClick() {
    this.stopClicked.emit();
  }

  onResetClick() {
    this.resetClicked.emit();
  }

}
