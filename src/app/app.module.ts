import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GetdataComponent } from './getdata/getdata.component';
import {HttpClientModule} from '@angular/common/http';
import { EmisorComponent } from './emisor/emisor.component';
import { ReceptorComponent } from './receptor/receptor.component'

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    CalendarComponent,
    GetdataComponent,
    EmisorComponent,
    ReceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
