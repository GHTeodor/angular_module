import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsDataService} from '../../services';
import {PostsComponent, PostComponent, PostDetailsComponent} from '../../components';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsDataService
  ]
})
export class PostsModule {
}
