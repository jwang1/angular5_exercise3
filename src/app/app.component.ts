import { Component } from '@angular/core';
import { LogMessage } from './shared/log-message.model';

@Component({
  selector: 'exercise3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise3: Directives';

  id: number = 0;

  isDisplay = false;

  logs: LogMessage[] = [];

  childComponentVal = '';

  childComponentValLong = '';

  onToggle() {
    this.id++;
    this.isDisplay = !this.isDisplay;
    this.logs.push(new LogMessage(this.id, new Date().toString()));
  }

  callback(checkOutputChildComponentInput: string) {
    this.childComponentVal = checkOutputChildComponentInput;
  }

  checkChildComponentBtnClick($event: { clickCtn: number; time: Date; info: string }) {
    this.childComponentValLong = 'clicked : ' + $event.clickCtn + '; information: ' + $event.info + '; time: ' + $event.time;
  }
}
