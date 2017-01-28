import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { TasksService } from '../../services/tasks';

import { NewTask } from '../new-task/new-task';
import { TasksList } from '../tasks-list/tasks-list';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  total: any;
  estimates: Array<number>;

  constructor(public modalCtrl: ModalController, private taskService: TasksService) {
    this.total = taskService.total;
    this.estimates = [1,2,3,4];
  }

  newTaskModal() {
    let modal = this.modalCtrl.create(NewTask);
    modal.onDidDismiss(task => {
      if (task && task.title && task.title.length) {
        this.taskService.create(task)
      }
    });

    modal.present();
  }

  showToday() {
    let modal = this.modalCtrl.create(TasksList, {state: 'Today'});

    modal.present();
  }

  showInventory() {
    let modal = this.modalCtrl.create(TasksList, {state: 'Inventory'});

    modal.present();
  }

  showHistory() {
    let modal = this.modalCtrl.create(TasksList, {state: 'History'});

    modal.present();
  }
}
