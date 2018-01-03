import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exercise3-check-output',
  templateUrl: './check-output.component.html',
  styleUrls: ['./check-output.component.css']
})
export class CheckOutputComponent {
  @Output('onCheckOutputChange')
  public inputEmitter: EventEmitter<string> = new EventEmitter<string>();

  userInput: string = '';

  onInput() {
    this.inputEmitter.emit(this.userInput);
  }

}
