import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormdemoComponent } from './formdemo/formdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FormdemoComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
