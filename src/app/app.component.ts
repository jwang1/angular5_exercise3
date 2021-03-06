import {
  Component,
  ViewChild,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ElementRef
  // OnDestroy
} from '@angular/core';

import { LogMessage } from './shared/log-message.model';

@Component({
  selector: 'exercise3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {  // OnDestroy {
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

  afterViewInitInfo = '';

  afterViewCheckedInfo = '';

  onDestroyInfo = '';

  @ViewChild('input2')
  templateLocalVariableViaViewChild;

  valTemplateLocalVariableViaViewChild = '';

  valTemplateLocalVariableViaViewChild2 = '';

  @ViewChild('heading')
  templateLocalVarHeading: ElementRef;

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

    // the templateLocalVariable-heading not here
    console.log('check heading temp var: (should NOT in ngOnInit) ' + this.templateLocalVarHeading.nativeElement.textContent);
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
    // this.afterViewInitInfo = new Date().toUTCString();
    this.afterViewInitInfo = 'ngAfterViewInit() called';

    console.log('check heading temp var: (should be in ngAfterViewInit) ' + this.templateLocalVarHeading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    this.afterViewCheckedInfo = new Date().toISOString();
  }

  // It's NOT called when a log-message.component is destroyed from app.component
  // is that, such ngOnDestroy does NOT happen on app.component, but in log-message.component
  // *** see the following recordChildComponentOnDestroy(...) method records log-message.component's @Output('childComponentDestroyed')
  // ngOnDestroy() {
  //   this.onDestroyInfo = new Date().toISOString();
  // }

  destroyOneLogComponent() {
    this.logs.splice(0, 1);
  }

  recordChildComponentOnDestroy(event: string) {
    this.onDestroyInfo = event;
  }

}
