import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieService, MoviesGuard, MoviesResolver} from './services';
import {PageComponent} from './components/page/page.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    MovieService,
    MoviesResolver,
    MoviesGuard
  ],
  exports: [
    PageComponent
  ]
})
export class MoviesModule {
}
