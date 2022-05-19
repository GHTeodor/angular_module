import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {TodosRoutingModule} from './todos-routing.module';
import {TodosDataService} from './services/todos-data.service';
import {TodosComponent} from './components/todos/todos.component';
import {TodoComponent} from './components/todo/todo.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodosDataService
  ]
})
export class TodosModule {
}
