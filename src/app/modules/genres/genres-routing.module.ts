import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GenresResolver} from './services';
import {GenresComponent} from './components/genres/genres.component';

const routes: Routes = [
  {
    path: '', component: GenresComponent, resolve: {genresData: GenresResolver}
    // canActivate: [GenresGuard],
    // canDeactivate: [GenresGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule {
}
