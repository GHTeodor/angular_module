import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxStarRatingModule} from 'ngx-star-rating';
import {ReactiveFormsModule} from '@angular/forms';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './components/movie/movie.component';
import {MovieGuard, MovieResolver, MovieService, YouTubeResolver, ImagesResolver} from './services';
import {YoutubeVideoComponent} from './components/youtube-video/youtube-video.component';
import {ImagesComponent} from './components/image/images.component';
import {StarComponent} from './components/star/star.component';


@NgModule({
  declarations: [
    MovieComponent,
    YoutubeVideoComponent,
    ImagesComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgxStarRatingModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    MovieResolver,
    YouTubeResolver,
    ImagesResolver,
    MovieGuard
  ],
})
export class MovieModule {
}
