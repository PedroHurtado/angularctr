import { NgModule, isDevMode } from '@angular/core';
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
import { InputComponent } from './input/input.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NostandaloneComponent } from './pages/nostandalone/nostandalone.component';
import { ServiceWorkerModule } from '@angular/service-worker'

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
    InputComponent,        
    MenuComponent, LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
