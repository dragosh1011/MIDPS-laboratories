import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  email: string;
  message: string;
  private apiUrl = 'http://localhost:3003/feedback'
  constructor(private http: Http) {

  }

  submitMessage() {
    console.log(this.email, this.message)

    const observable = this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    console.log(observable)
  }
}
