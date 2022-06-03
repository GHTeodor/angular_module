import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FindMoviesComponent} from './components/find-movies/find-movies.component';
import {SearchGuard} from './services';

const routes: Routes = [
  {
    path: '', component: FindMoviesComponent,
    canActivate: [SearchGuard],
    canDeactivate: [SearchGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBarRoutingModule {
}
