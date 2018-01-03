import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { LogMessageComponent } from './log-message/log-message.component';
import { CheckOutputComponent } from './check-output/check-output.component';

@NgModule({
  declarations: [
    AppComponent,
    LogMessageComponent,
    CheckOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
