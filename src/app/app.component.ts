import { Component } from '@angular/core';

@Component({
  selector: 'exercise3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise3: Directives';

  isDisplay = false;

  logs: string[] = [];

  onToggle() {
    this.isDisplay = !this.isDisplay;
    this.logs.push(new Date().toString());
  }
}
