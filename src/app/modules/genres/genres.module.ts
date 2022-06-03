import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {GenresRoutingModule} from './genres-routing.module';
import {GenresComponent} from './components/genres/genres.component';
import {GenreService, GenresGuard, GenresResolver} from './services';
import {MoviesByGenreComponent} from './components/movies-by-genre/movies-by-genre.component';
import {PageComponent} from './components/page/page.component';

@NgModule({
  declarations: [
    GenresComponent,
    MoviesByGenreComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    GenreService,
    GenresResolver,
    GenresGuard
  ]
})
export class GenresModule {
}
