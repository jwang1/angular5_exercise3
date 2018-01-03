import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exercise3-check-output',
  templateUrl: './check-output.component.html',
  styleUrls: ['./check-output.component.css']
})
export class CheckOutputComponent {
  @Output('onCheckOutputChange')
  public inputEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output('onButtonClickedEmitter')
  public btnClickEmitter: EventEmitter<{clickCtn: number, time: Date, info: string}> =
    new EventEmitter<{clickCtn: number, time: Date, info: string}>();

  userInput = '';
  nbrClicks = 0;

  onInput() {
    this.inputEmitter.emit(this.userInput);
  }

  emitMyEvent() {
    this.btnClickEmitter.emit({clickCtn: this.nbrClicks, time: new Date(), info: this.userInput});
  }
}
