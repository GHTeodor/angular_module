import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule)},
  {path: 'posts', loadChildren: () => import('./modules').then(m => m.PostsModule)},
  {path: 'comments', loadChildren: () => import('./modules').then(m => m.CommentsModule)},
  {path: 'todos', loadChildren: () => import('./modules').then(m => m.TodosModule)},
  {path: 'cars', loadChildren: () => import('./modules').then(m => m.CarsModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
