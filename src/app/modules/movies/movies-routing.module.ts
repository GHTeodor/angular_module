import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesComponent} from './components/movies/movies.component';
import {MoviesResolver} from './services';

const routes: Routes = [
  {path: '', redirectTo: '1', pathMatch: 'full'},
  {
    path: ':page', component: MoviesComponent, resolve: {moviesData: MoviesResolver},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
