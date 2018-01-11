import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'exercise3-check-output',
  templateUrl: './check-output.component.html',
  styleUrls: ['./check-output.component.css']
})
export class CheckOutputComponent implements AfterContentInit {
  @ContentChild('paragraph')
  paragrph: ElementRef;

  @Input('fromParent')
  public parentInput: string;

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

  ngAfterContentInit() {
    console.log('contentchild only available in ngAfterContentInit, not in the earlier phase of ngOnInit ... ' + this.paragrph.nativeElement.textContent);
  }

  emitMyEvent() {
    this.btnClickEmitter.emit({clickCtn: this.nbrClicks++, time: new Date(), info: this.userInput});
  }
}
