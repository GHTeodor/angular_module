import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesComponent} from './components/movies/movies.component';
import {MoviesGuard, MoviesResolver} from './services';

const routes: Routes = [
  {path: '', redirectTo: '1', pathMatch: 'full'},
  {
    path: ':page', component: MoviesComponent, resolve: {moviesData: MoviesResolver},
    // canActivate: [MoviesGuard],
    canDeactivate: [MoviesGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
