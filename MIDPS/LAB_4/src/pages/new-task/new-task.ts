import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';


@Component({
  selector: 'new-task',
  templateUrl: 'new-task.html'
})
export class NewTask {
  task: any;
  title: string;

  constructor(public viewCtrl: ViewController) {
    this.task = {};
    this.task.title = '';
  }

  create() {
    this.viewCtrl.dismiss(this.task);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
