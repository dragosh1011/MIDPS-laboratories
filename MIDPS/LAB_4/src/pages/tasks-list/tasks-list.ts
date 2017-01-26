import { Component } from '@angular/core';

import { ViewController, NavParams } from 'ionic-angular';

import { TasksService } from '../../services/tasks';


@Component({
  selector: 'tasks-list',
  templateUrl: 'tasks-list.html'
})
export class TasksList {
  tasks: any;
  title: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private taskService: TasksService) {
    this.title = this.navParams.get('state');
    if (!this.title) {
      this.title = 'All';
    }
    this.filterData()
  }

  private filterData () {
    this.tasks = [];
    for (let id in this.taskService.tasksList) {
      if (!this.taskService.tasksList.hasOwnProperty(id)) {
        continue;
      }
      let task = this.taskService.tasksList[id];
      if (task.status === this.title) {
        this.tasks.push(task)
      } else if (this.title === 'All' ){
        this.tasks.push(task)
      }
    }
    console.log(this.tasks)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  moveToToday (id): void {
    this.taskService.tasksList[id].status = 'Today';
    this.taskService.total.inventory--;
    this.taskService.total.today++;
    this.filterData();
  };

  startPomodoro (taskId): void {

  }
}
