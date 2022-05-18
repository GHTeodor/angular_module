import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {UsersRoutingModule} from './users-routing.module';
import {UsersDataService} from '../../services';
import {UsersComponent, UserComponent, UserDetailsComponent} from '../../components';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersDataService
  ]
})
export class UsersModule {
}
