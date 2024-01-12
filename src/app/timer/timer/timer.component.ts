import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent  implements OnInit {

  taskDuration: number = 25 * 60; //1 * 60 25 minutes in seconds (adjust as needed)
  timeElapsed: number = 0; // initialize with zero
  timerInterval: any;
  timerCountDown: any ;
  audio: HTMLAudioElement;


  constructor(@Inject(DOCUMENT) private document: Document) {
    this.audio = new Audio('assets/sound/ping.mp3'); // Adjust the path as needed
  }

  ngOnInit(): void {
    this.formatTitle();
  }

  get timerPercentage(): number {
    return (this.timeElapsed / this.taskDuration) * 100;
  }


    // Function to convert seconds to 'minutes:seconds' format
    formatTime(seconds: number): string {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
  
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
  
      return `${formattedMinutes}:${formattedSeconds}`;
    }

  formatTitle = () : string => {
    this.timerCountDown=this.formatTime(this.taskDuration - this.timeElapsed);
    return this.timerCountDown
  }
  startTimer() {
    console.log('Timer started')
    if (!this.timerInterval && this.timeElapsed < this.taskDuration) {
      this.timerInterval = setInterval(() => {
        this.timeElapsed++;
        if (this.timeElapsed >= this.taskDuration) {
          this.stopTimer();
          this.playCompletionSound();
        }
        this.formatTitle();
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  resetTimer() {
    this.timeElapsed = 0;
    this.stopTimer();
    this.formatTitle();
  }

  selectTimerType(timerType: string) {
    switch (timerType) {
      case 'pomodoro':
        this.taskDuration = 25 * 60;
        break;
      case 'shortbreak':
        this.taskDuration = 5 * 60;
        break;
      case 'longbreak':
        this.taskDuration = 10 * 60;
        break;
      default:
        break;
    }
    this.resetTimer();
  }

  private playCompletionSound() {
    this.audio.play();
  }
  

}
