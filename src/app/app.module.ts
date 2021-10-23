import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';
import { ViewTodoListComponent } from './view-todo-list/view-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    AddTodoItemComponent,
    ViewTodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
