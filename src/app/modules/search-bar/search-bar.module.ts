import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchBarRoutingModule} from './search-bar-routing.module';
import {FindMoviesComponent} from './components/find-movies/find-movies.component';
import {SearchGuard, FindMoviesService} from './services';
import {FindMovieComponent} from './components/find-movie/find-movie.component';


@NgModule({
  declarations: [
    FindMoviesComponent,
    FindMovieComponent,
  ],
  imports: [
    CommonModule,
    SearchBarRoutingModule
  ],
  providers: [
    SearchGuard,
    FindMoviesService
  ],
})
export class SearchBarModule {
}
