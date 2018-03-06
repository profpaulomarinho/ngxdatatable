import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ApiexemploService} from "./apiexemplo.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [ ApiexemploService],
  bootstrap: [AppComponent]
})
export class AppModule { }
