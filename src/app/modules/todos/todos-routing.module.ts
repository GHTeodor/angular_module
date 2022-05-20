import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TodosResolver, TodoResolver} from './services';
import {TodosComponent} from './components/todos/todos.component';
import {TodoDetailsComponent} from './components/todo-details/todo-details.component';

const routes: Routes = [
  {
    path: '', component: TodosComponent, resolve: {todosData: TodosResolver},
    children: [
      {path: ':id', component: TodoDetailsComponent, resolve: {todoData: TodoResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
}
