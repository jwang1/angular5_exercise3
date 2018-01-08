import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

import {LogMessage} from '../shared/log-message.model';

@Component({
  selector: 'exercise3-log-message',
  templateUrl: './log-message.component.html',
  styleUrls: ['./log-message.component.css']
})
export class LogMessageComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  logMsg: LogMessage;

  @Output('childComponentDestroyed')
  emitDestroyedMsg: EventEmitter<string> = new EventEmitter<string>();

  logMsgCheckOnChanges = '';

  onDestroyInfo = '';

  constructor() {}

  ngOnInit() {
    // too late, when put here?
    // this.emitDestroyedMsg = new EventEmitter<string>();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    for (let obj in changes) {
      this.logMsgCheckOnChanges += obj + ': ' +  changes[obj].currentValue.toString();
    }
  }

  ngOnDestroy() {
    let msg = 'ngOnDestroy() is called @ ' +  new Date().toISOString();
    this.onDestroyInfo = msg;

    console.log(msg);

    this.emitDestroyedMsg.emit(msg);
  }


}
