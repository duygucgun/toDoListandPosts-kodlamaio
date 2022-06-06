import {HttpClientModule} from "@angular/common/http"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { TodolistComponent } from './component/pages/todolist/todolist.component';
import { PostComponent } from './component/pages/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    TodolistComponent,
    PostComponent,
  
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
