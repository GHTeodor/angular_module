import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {TodosRoutingModule} from './todos-routing.module';
import {TodosDataService, TodosResolver, TodoResolver} from './services';
import {TodosComponent} from './components/todos/todos.component';
import {TodoComponent} from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodosDataService,
    TodosResolver,
    TodoResolver
  ]
})
export class TodosModule {
}
