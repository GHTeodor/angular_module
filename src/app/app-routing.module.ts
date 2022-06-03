import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', loadChildren: () => import('./modules').then(m => m.MoviesModule)},
  {path: 'movie', loadChildren: () => import('./modules').then(m => m.MovieModule)},
  {path: 'genres', loadChildren: () => import('./modules').then(m => m.GenresModule)},
  {path: 'search', loadChildren: () => import('./modules').then(m => m.SearchBarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
