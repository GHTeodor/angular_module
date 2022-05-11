import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {
  UsersComponent,
  UserComponent,
  PostsComponent,
  PostComponent,
  CommentsComponent,
  CommentComponent
} from './components';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/:id', component: CommentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
