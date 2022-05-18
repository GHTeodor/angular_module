import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {TodosRoutingModule} from './todos-routing.module';
import {TodosDataService} from '../../services';
import {TodosComponent, TodoComponent} from '../../components';


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
