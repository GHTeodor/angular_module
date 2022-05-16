import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {
  UsersComponent,
  UserComponent,
  UserDetailsComponent,
  PostsComponent,
  PostComponent,
  PostDetailsComponent,
  CommentsComponent,
  CommentComponent,
  CommentDetailsComponent
} from './components';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent},
    ]
  },
  {
    path: 'posts', component: PostsComponent,
    children: [
      {path: 'post-details/:id', component: PostDetailsComponent}
    ]
  },
  {
    path: 'comments', component: CommentsComponent,
    children: [
      {path: 'comment-details/:id', component: CommentDetailsComponent}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,

    PostsComponent,
    PostComponent,
    PostDetailsComponent,

    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
