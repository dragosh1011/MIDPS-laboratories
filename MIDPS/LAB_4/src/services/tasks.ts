import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  public total: any;
  public tasksList: {};

  constructor () {
    this.total = {
      today: 0,
      inventory: 0,
      history: 0
    };

    this.tasksList = {};
  }
  create(task): void {
    task.id = Date.now();
    task.status = 'Inventory';
    task.pomodoros = 0;
    this.tasksList[task.id] = task
    this.total.inventory++;
  }

  createPomodoro(taskId): void {
    this.tasksList[taskId]++
  }
}
