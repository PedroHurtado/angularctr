import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GetdataComponent } from './getdata/getdata.component';
import {HttpClientModule} from '@angular/common/http';
import { EmisorComponent } from './emisor/emisor.component';
import { ReceptorComponent } from './receptor/receptor.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component'
import {ReactiveFormsModule} from '@angular/forms';
import { InputComponent } from './input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    CalendarComponent,
    GetdataComponent,
    EmisorComponent,
    ReceptorComponent,
    ContentComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
