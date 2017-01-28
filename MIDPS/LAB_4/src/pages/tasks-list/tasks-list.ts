import { Component } from '@angular/core';

import { ViewController, NavParams, ModalController } from 'ionic-angular';

import { TasksService } from '../../services/tasks';
import { Promodoro } from '../promodoro/promodoro';


@Component({
  selector: 'tasks-list',
  templateUrl: 'tasks-list.html'
})
export class TasksList {
  tasks: any;
  title: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private taskService: TasksService, public modalCtrl: ModalController,) {
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

  startPomodoro (task): void {
    let modal = this.modalCtrl.create(Promodoro, {task: task});
    modal.onDidDismiss(task => {
      this.taskService.tasksList[task.id].status = 'History'
      this.taskService.total.today--;
      this.taskService.total.history++;
      task.endedAt = Date.now();
      this.filterData()
    });

    modal.present();
  }
}
