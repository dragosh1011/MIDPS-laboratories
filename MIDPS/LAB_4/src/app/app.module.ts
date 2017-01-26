import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Promodoro } from '../pages/promodoro/promodoro';
import { TasksService } from '../services/tasks';
import { TasksList } from '../pages/tasks-list/tasks-list';
import { ListPage } from '../pages/list/list';
import { FeedbackPage } from '../pages/feedback/feedback';
import { NewTask } from '../pages/new-task/new-task';

@NgModule({
  declarations: [
    MyApp,
    //Promodoro,
    TasksList,
    ListPage,
    FeedbackPage,
    NewTask
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Promodoro,
    TasksList,
    ListPage,
    FeedbackPage,
    NewTask
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TasksService]
})
export class AppModule {}
