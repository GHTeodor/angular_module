import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GenresResolver} from './services';
import {GenresComponent} from './components/genres/genres.component';

const routes: Routes = [
  {path: '', component: GenresComponent, resolve: {genresData: GenresResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule {
}
