import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsDataService} from '../../services';
import {CommentsComponent, CommentComponent, CommentDetailsComponent} from '../../components';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsDataService
  ]
})
export class CommentsModule {
}
