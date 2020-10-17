import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorChangeComponent } from './color-change/color-change.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ColorChangeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
