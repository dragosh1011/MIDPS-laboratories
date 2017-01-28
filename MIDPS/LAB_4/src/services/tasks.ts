import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  public total: any;
  public tasksList: {};
  public countTodayTasks = 0;

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
    task.promodoros = 0;
    task.createdAt = Date.now();
    this.tasksList[task.id] = task
    this.total.inventory++;
  }

  createPomodoro(taskId): void {
    this.tasksList[taskId]++
  }
}
