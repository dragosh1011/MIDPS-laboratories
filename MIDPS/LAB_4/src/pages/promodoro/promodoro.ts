import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import { TimerComponent } from '../timer/timer';
import { ViewController, NavParams } from 'ionic-angular';
import { TasksService } from '../../services/tasks';


@Component({
  selector: 'promodoro',
  templateUrl: 'promodoro.html'
})
export class Promodoro {

  @ViewChild(TimerComponent) timer: TimerComponent;
  task: any;
  timerValue: number;
  message: string;
  workTime = 0.5 * 60;
  breakTime = 0.5 * 60;
  longBreakTime = 0.5 * 60;
  workMessage = 'Work on your task';
  breakMessage = 'Take a short brake';
  longBreakMessage = 'Take a long brake';
  pauseMessage = 'Do you want to continue this task?';
  isTask: boolean;
  constructor( public navParams: NavParams, public viewCtrl: ViewController, private taskService: TasksService) {
    this.task= this.navParams.get('task');
    this.timerValue = this.workTime;
    this.isTask = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 100);
  }

  dismiss() {
    this.viewCtrl.dismiss(this.task);
  }

  onTimerFinished() {
    if (this.isTask) {
      this.taskService.countTodayTasks++;
      this.isTask = false;
      this.task.promodoros++;
      if (this.taskService.countTodayTasks % 4 === 0) {
        this.message = this.longBreakMessage;
        this.timerValue = this.breakTime;
      } else {
        this.message = this.breakMessage;
        this.timerValue = this.longBreakTime;
      }
      this.timer.initTimer();
      this.timer.startTimer();
    } else {
      this.isTask = true;
      this.message = this.pauseMessage;
      this.timerValue = this.workTime;
      this.timer.initTimer()
    }
  }

  onTimerStarted() {
    if (this.isTask) {
      this.message = this.workMessage;
    }
  }
}
