import {Component, ViewChild, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { LogMessage } from './shared/log-message.model';

@Component({
  selector: 'exercise3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'exercise3: Directives';

  id: number = 0;

  isDisplay = false;

  logs: LogMessage[] = [];

  childComponentVal = '';

  childComponentValLong = '';

  holdTemplateLocalVarVal = '';

  doCheckInfo = '';

  afterContentInitInfo = '';

  afterContentCheckedInfo = '';

  afterVieInitInfo = '';

  afterViewCheckedInfo = '';

  @ViewChild('input2')
  templateLocalVariableViaViewChild;

  valTemplateLocalVariableViaViewChild = '';

  valTemplateLocalVariableViaViewChild2 = '';

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

  logSomeInfo(): string {
    return 'values from parent component!!!!';
  }

  useTemplateLocalVariable(input: HTMLInputElement) {
    this.holdTemplateLocalVarVal = input.value;
  }

  checkInput() {
    this.valTemplateLocalVariableViaViewChild = this.templateLocalVariableViaViewChild.nativeElement.value;
  }

  ngOnInit() {
    this.valTemplateLocalVariableViaViewChild2 = this.templateLocalVariableViaViewChild.nativeElement.value;
  }

  ngDoCheck() {
    this.doCheckInfo = new Date().toString();
  }

  ngAfterContentInit() {
    this.afterContentInitInfo = new Date().toTimeString();
  }

  ngAfterContentChecked() {
    this.afterContentCheckedInfo = new Date().toTimeString();
  }

  ngAfterViewInit() {
    this.afterVieInitInfo = new Date().toUTCString();
  }

  ngAfterViewChecked() {
    this.afterViewCheckedInfo = new Date().toISOString();
  }

}
