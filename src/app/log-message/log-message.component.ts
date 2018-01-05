import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LogMessage} from '../shared/log-message.model';

@Component({
  selector: 'exercise3-log-message',
  templateUrl: './log-message.component.html',
  styleUrls: ['./log-message.component.css']
})
export class LogMessageComponent implements OnInit, OnChanges {
  @Input()
  logMsg: LogMessage;

  logMsgCheckOnChanges = '';

  constructor() {}

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    for (let obj in changes) {
      this.logMsgCheckOnChanges += obj + ': ' +  changes[obj].currentValue.toString();
    }
  }
}
