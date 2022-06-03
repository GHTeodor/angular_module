import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MovieComponent} from './components/movie/movie.component';
import {MovieGuard, MovieResolver, YouTubeResolver, ImagesResolver} from './services';

const routes: Routes = [
  {
    path: ':id', component: MovieComponent, resolve: {
      movieData: MovieResolver, videoData: YouTubeResolver, imageData: ImagesResolver
    },
    canActivate: [MovieGuard],
    canDeactivate: [MovieGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
