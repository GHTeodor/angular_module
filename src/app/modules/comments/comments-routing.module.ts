import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentDetailsComponent, CommentsComponent} from '../../components';

const routes: Routes = [
  {
    path: '', component: CommentsComponent, children: [
      {path: ':id', component: CommentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
