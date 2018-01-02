import {Component, Input, OnInit} from '@angular/core';
import {LogMessage} from '../shared/log-message.model';

@Component({
  selector: 'exercise3-log-message',
  templateUrl: './log-message.component.html',
  styleUrls: ['./log-message.component.css']
})
export class LogMessageComponent implements OnInit {
  @Input()
  logMsg: LogMessage;

  constructor() {}

  ngOnInit() {

  }
}
