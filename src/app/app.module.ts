import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import { AppComponent } from './app.component';
import {httpFactory} from "./interceptors/http.factory";
import {AuthApiService} from "./api/auth-api.service";
import {BaseApiService} from "./api/base-api.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthApiService,
    BaseApiService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
